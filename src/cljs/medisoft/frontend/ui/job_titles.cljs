(ns medisoft.frontend.ui.job-titles
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
            [medisoft.frontend.history :as history]
            [medisoft.frontend.l18n :as l18n]))

(defn address-for-patient [patient]
  [:span (:street-name patient) " " (:house-number patient) "/" (:flat-number patient) [:br]
   (:zip-code patient) " " (:city patient) ", " (:country patient)])

(defn job-title-list-component []
  (let [job-title (reagent/atom [])]
    (api/list-job-titles {} (fn [result] (match result
                                              [:success response] (do
                                                                    (reset! job-title response)
                                                                    (log/debug "received response" response))
                                              [:error   _] :nothing)))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-success {:href (routes/app-path-for :job-titles/create)} (l18n/t :job-titles/new-job-title)]]]
       (if (> (count @job-title) 0)
         [:table.table.table-hover [:thead [:th (l18n/t :job-titles/name)]
                                           [:th {:style {:width "200px"}} (l18n/t :common/actions)]]
          (doall (for [job-title @job-title]
                   ^{:key (ui-utils/key-for job-title)}
                    [:tr
                      [:td (:name job-title)]
                      [:td [:a.btn.btn-primary {:href (routes/app-path-for :job-titles/show :id (:id job-title))} (l18n/t :common/show)]
                           [:a.btn.btn-primary {:href (routes/app-path-for :job-titles/edit :id (:id job-title))} (l18n/t :common/edit)]]]))]
         [:div (l18n/t :job-titles/no-job-titles)])])))

(defn job-title-show-component []
  (let [job-title-id (:id @logic/current-params)
        job-title    (reagent/atom {})]
    (api/get-job-title {:id job-title-id} (fn [result] (match result
                                                          [:success response] (do
                                                                                (reset! job-title response)
                                                                                (log/debug "received response" response))
                                                          [:error   response] (log/debug "received response" response))))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-primary {:href (if-let [job-title-id (:id @job-title)]
                                                                         (routes/app-path-for :job-titles/edit :id job-title-id))}
                                             (l18n/t :job-titles/edit-job-title)]]]
       [:div [:h2 (:name @job-title)]]])))

(defn job-title-form-fields-component [job-title errors {:keys [on-submit submit-button-text] :as opts}]
  (let [form-input (ui-utils/make-form-field-maker job-title errors {:l18n-scopes [:job-titles]})]
    [:form
     [:div.row
      [:div.col-lg-4 [form-input :name]]]
     [:a.btn.btn-success {:on-click on-submit} submit-button-text]]))

(defn job-title-create-form-component []
  (let [job-title (reagent/atom {})
        errors  (reagent/atom {})
        on-submit (fn [e]
                    (api/create-job-title @job-title
                                        (fn [result]
                                          (match result
                                                 [:success ({:id id} :as response)] (do
                                                                                      ;(reset! patient response)
                                                                                      (log/debug "received response" response)
                                                                                      (history/navigate-to! (routes/app-path-for :job-titles/show :id id)))
                                                 [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                           ;(reset! patient response)
                                                                                                           (log/error "received response" response)
                                                                                                           (reset! errors errors')))))
                    (.preventDefault e))]
    (fn []
      [:div
       [:h2 (l18n/t :job-titles/new-job-title)]
       [job-title-form-fields-component job-title errors {:on-submit on-submit :submit-button-text (l18n/t :job-titles/new-job-title)}]])))

(defn job-title-edit-form-component []
  (let [job-title-id (:id @logic/current-params)
        job-title (reagent/atom {})
        errors  (reagent/atom {})
        on-submit (fn [e] (api/update-job-title @job-title
                                              (fn [result]
                                                (match result
                                                       [:success ({:id id} :as response)] (do
                                                                                            ;(reset! patient response)
                                                                                            (log/debug "received response" response)
                                                                                            (history/navigate-to! (routes/app-path-for :job-titles/show :id id)))
                                                       [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                                 ;(reset! patient response)
                                                                                                                 (log/error "received response" response)
                                                                                                                 (reset! errors errors')))))
                    (.preventDefault e))]
    (api/get-job-title {:id job-title-id}
                     (fn [result]
                       (match result
                              [:success ({:id id} :as response)] (do
                                                                   (log/debug "received response" response)
                                                                   (reset! job-title (dissoc response :class)))
                              [:error   {:response ({:errors errors'} :as response)}] (log/error "received response" response))))
    (fn []
      [:div
       [:h2 (l18n/t :job-titles/edit-job-title)]
       [job-title-form-fields-component job-title errors {:on-submit on-submit :submit-button-text (l18n/t :job-titles/edit-job-title)}]])))
