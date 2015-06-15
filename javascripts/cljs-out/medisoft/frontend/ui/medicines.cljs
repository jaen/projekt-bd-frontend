(ns medisoft.frontend.ui.medicines
   ; (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent]
            [re-com.core :as rc-core]
    ;[cljs.core.async :as async :refer [<! >!]]
            [cljs.core.match :refer-macros [match]]
            [cuerdas.core :as str]

            [medisoft.frontend.api :as api]
            [medisoft.frontend.ui.utils :as ui-utils]

            [medisoft.frontend.logic :as logic]

            [medisoft.frontend.log :as log]
            [medisoft.frontend.validations :as validations]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.history :as history]))

(defn medicine-list-component []
  (let [medicines (reagent/atom [])]
    (api/list-medicines {} (fn [result] (match result
                                              [:success response] (do
                                                                    (reset! medicines response)
                                                                    (log/debug "received response" response))
                                              [:error   _] :nothing)))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-success {:href (routes/app-path-for :medicines/create)} "New medicine"]]]
            (if (> (count @medicines) 0)
              [:table.table.table-hover [:thead [:th "GTIN"]
                                                [:th "Approved"]
                                                [:th "Name"]
                                                [:th "Producer"]
                                                [:th "Type"]
                                                [:th "Wrapping"]
                                                [:th "Dose"]
                                                [:th {:style {:width "200px"}} "Actions"]]
                                    (doall (for [medicine @medicines]
                                             ^{:key (ui-utils/key-for medicine)}
                                             [:tr [:td (:gtin medicine)]
                                                  [:td (if (:approved medicine) "approved" "not approved")]
                                                  [:td (:name medicine)]
                                                  [:td (:producer-name medicine)]
                                                  [:td (:type medicine)]
                                                  [:td (:wrapping medicine)]
                                                  [:td (:dose medicine)]
                                                  [:td [:a.btn.btn-primary {:href (routes/app-path-for :medicines/show :id (:id medicine))} "Show"]
                                                       [:a.btn.btn-primary {:href (routes/app-path-for :medicines/edit :id (:id medicine))} "Edit"]]]))]
              [:div "No medicines to display."])])))

(defn medicine-show-component []
  (let [medicine-id (:id @logic/current-params)
        medicine    (reagent/atom {})]
    (api/get-medicine {:id medicine-id} (fn [result] (match result
                                              [:success response] (do
                                                                    (reset! medicine response)
                                                                    (log/debug "received response" response))
                                              [:error   response] (log/debug "received response" response))))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-primary {:href (if-let [medicine-id (:id @medicine)]
                                                                         (routes/app-path-for :medicines/edit :id medicine-id))}
                                                                "Edit medicine"]]]
            [:div [:h2 (:name @medicine) " " [:small (:gtin @medicine)]]
                  [:hr]
                  [:div.row [:div.col-lg-3 [:b "Is Approved"] [:br]
                                           (if (:approved @medicine) "approved" "not approved")]
                            [:div.col-lg-3 [:b "Producer"] [:br]
                                           (:producer-name @medicine)]]
                  [:br]
                  [:div.row [:div.col-lg-3 [:b "Type"] [:br]
                                           (:type @medicine)]
                            [:div.col-lg-3 [:b "Wrapping"] [:br]
                                           (:wrapping @medicine)]
                            [:div.col-lg-3 [:b "Dose"] [:br]
                                           (:dose @medicine)]]]])))

(defn medicine-form-fields-component [medicine errors {:keys [on-submit submit-button-text] :as opts}]
  (let [form-input (ui-utils/make-form-field-maker medicine errors)]
    [:form
     [:div.row
      [:div.col-lg-5 [form-input :name]]
      [:div.col-lg-4 [form-input :gtin]]]
     [:div.row
      [:div.col-lg-2 [form-input :approved {:type :checkbox}]]]
     [:hr]
     [:div.row
      [:div.col-lg-9 [form-input :producer-name]]]
     [:div.row
      [:div.col-lg-3 [form-input :type {:on-change #(swap! medicine assoc :type %)
                                        :type :select
                                        :choices [{:id "ZAWIESINA" :label "ZAWIESINA"}
                                                  {:id "INJ." :label "INJ."}
                                                  {:id "ZIOŁA" :label "ZIOŁA"}]}]]
      [:div.col-lg-3 [form-input :wrapping]]
      [:div.col-lg-3 [form-input :dose]]]
     [:a.btn.btn-success {:on-click on-submit} submit-button-text]]))

(def empty-medicine
  {:approved false
   :dose ""
   :gtin ""
   :name ""
   :producer-name ""
   :type ""
   :wrapping ""
   })

(defn medicine-create-form-component []
  (let [medicine (reagent/atom empty-medicine)
        errors  (reagent/atom {})
        on-submit (fn [e]
                    (api/create-medicine @medicine
                                        (fn [result]
                                          (match result
                                                 [:success ({:id id} :as response)] (do
                                                                                      ;(reset! patient response)
                                                                                      (log/debug "received response" response)
                                                                                      (history/navigate-to! (routes/app-path-for :medicines/show :id id)))
                                                 [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                           ;(reset! patient response)
                                                                                                           (log/error "received response" response)
                                                                                                           (reset! errors errors')))))
                    (.preventDefault e))]
    (fn []
      [:div "patient create form"
       [medicine-form-fields-component medicine errors {:on-submit on-submit :submit-button-text "Create"}]])))

(defn medicine-edit-form-component []
  (let [medicine-id (:id @logic/current-params)
        medicine (reagent/atom {})
        errors  (reagent/atom {})
        on-submit (fn [e] (api/update-medicine @medicine
                                              (fn [result]
                                                (match result
                                                       [:success ({:id id} :as response)] (do
                                                                                            ;(reset! patient response)
                                                                                            (log/debug "received response" response)
                                                                                            (history/navigate-to! (routes/app-path-for :medicines/show :id id)))
                                                       [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                                 ;(reset! patient response)
                                                                                                                 (log/error "received response" response)
                                                                                                                 (reset! errors errors')))))
                    (.preventDefault e))]
    (api/get-medicine {:id medicine-id}
                     (fn [result]
                       (match result
                              [:success ({:id id} :as response)] (do
                                                                   (log/debug "received response" response)
                                                                   (reset! medicine (dissoc response :class :medical-visits :prescription)))
                              [:error   {:response ({:errors errors'} :as response)}] (log/error "received response" response))))
    (fn []
      [:div "patient edit form"
       [medicine-form-fields-component medicine errors {:on-submit on-submit :submit-button-text "Edit"}]])))