(ns medisoft.frontend.ui.devices
  ; (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent]
            [reagent.ratom :as ratom :include-macros true]
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
            [medisoft.frontend.l18n :as l18n]
            [cljs-time.core :as time]
            [cljs-time.format :as time-format]))

;(let [room-id (get-in device [:room :id])
;      room (reagent/atom {})]
;  (log/error "room id" room-id)
;  (api/get-room {:id room-id}
;                (fn [result]
;                  (match result
;                         [:success ({:id id} :as response)] (do
;                                                              (log/debug "received response" response)
;                                                              (reset! room (dissoc response :class :devices)))
;                         [:error   {:response ({:errors errors'} :as response)}] (log/error "received response" response))))

(defn device-list-component []
  (let [devices (reagent/atom [])]
    (api/list-devices {} (fn [result] (match result
                                           [:success response] (do
                                                                 (reset! devices response)
                                                                 (log/debug "received response" response))
                                           [:error   _] :nothing)))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-success {:href (routes/app-path-for :devices/create)} (l18n/t :devices/new-device)]]]
       (if (> (count @devices) 0)
         [:table.table.table-hover
           [:thead
             [:th "Serial"]
             [:th "Producer"]
             [:th "Room"]
             [:th "Purchase Date"]
             [:th "Warranty Date"]
             [:th {:style {:width "200px"}} "Actions"]]
           (log/debug "devices" @devices)
           (doall (for [device @devices]
                    ^{:key (ui-utils/key-for device)}
                    [:tr
                      [:td (:serial device)]
                      [:td (:producer device)]
                      [:td (let [room (:room device)]
                             [:a {:href (routes/app-path-for :rooms/show :id (:id room))}
                              (:number room)])]
                      [:td (ui-utils/date->str (:purchase-date device))]
                      [:td (ui-utils/date->str (:warranty-date device))]
                      [:td
                        [:a.btn.btn-primary {:href (routes/app-path-for :devices/show :id (:id device))} (l18n/t :common/show)]
                        [:a.btn.btn-primary {:href (routes/app-path-for :devices/edit :id (:id device))} (l18n/t :common/edit)]]]))]
         [:div "No devices to display."])])))

(defn device-show-component []
  (let [device-id (:id @logic/current-params)
        device    (reagent/atom {})]
    (api/get-device {:id device-id} (fn [result] (match result
                                                    [:success response] (do
                                                                          (reset! device response)
                                                                          (log/debug "received response" response))
                                                    [:error   response] (log/debug "received response" response))))
    (fn []
      [:div
       [:div.clearfix [:div.pull-right [:a.btn.btn-primary {:href (if-let [device-id (:id @device)]
                                                                    (routes/app-path-for :devices/edit :id device-id))}
                                        "Edit device"]]]
       [:div
         [:div.row
           [:div.col-lg-4 [:b "Producer"] [:br] (:producer @device)]
           [:div.col-lg-4 [:b "Producer"] [:br] (:producer @device)]]
         [:br]
         [:div.row
           [:div.col-lg-4 [:b "Purchase date"] [:br] (ui-utils/date->str (:purchase-date @device))]
           [:div.col-lg-4 [:b "Warranty date"] [:br] (ui-utils/date->str (:warranty-date @device))]]
         [:br]
         [:div.row
          [:div.col-lg-4 [:b "Room"] [:br] (when-let [room (:room @device)]
                                             [:a {:href (routes/app-path-for :rooms/show :id (:id room))}
                                              (:number room)])]]]])))

(defn device-form-fields-component [device errors {:keys [on-submit submit-button-text] :as opts}]
  (let [form-input (ui-utils/make-form-field-maker device errors)
        rooms (reagent.core/atom [])
        purchase-date (ratom/reaction (:purchase-date @device))
        warranty-date (ratom/reaction (:warranty-date @device))]
    (api/list-rooms {} (fn [result] (match result
                                                  [:success response] (do
                                                                        (reset! rooms response)
                                                                        (log/debug "received response" response))
                                                  [:error   _] :nothing)))
    [:form
      [:div.row
        [:div.col-lg-5 [form-input :producer]]
        [:div.col-lg-5 [form-input :serial]]]

      [:div.row
        [:div.col-lg-5 [form-input :purchase-date {:type :date
                                          :model purchase-date
                                          :on-change (fn [new-date]
                                                       (log/debug "purchase date changed" new-date)
                                                       (swap! device (fn [old]
                                                                            (log/debug "old:" old)
                                                                            (let [old-date (:purchase-date old)
                                                                                  int-time (ui-utils/datetime->int old-date)
                                                                                  new-date (ui-utils/update-datetime-time new-date int-time)]
                                                                              (log/debug "new:" new-date)
                                                                              (assoc old :purchase-date new-date)))))}]]
        [:div.col-lg-5 [form-input :warranty-date {:type :date
                                          :model warranty-date
                                          :on-change (fn [new-date]
                                                       (log/debug "warranty date changed" new-date)
                                                       (swap! device (fn [old]
                                                                            (log/debug "old:" old)
                                                                            (let [old-date (:warranty-date old)
                                                                                  int-time (ui-utils/datetime->int old-date)
                                                                                  new-date (ui-utils/update-datetime-time new-date int-time)]
                                                                              (log/debug "new:" new-date)
                                                                              (assoc old :warranty-date new-date)))))}]]]
      [:div.row
        [:div.col-lg-5 [form-input :room {:model (ratom/reaction (get-in @device [:room :id]))
                                              :on-change #(swap! device update-in [:room] assoc :id %)
                                              :label-fn (fn [room]
                                                          [:div (:number room)])
                                              :selected-label-fn (fn [room]
                                                                   (:number room))
                                              :type :select
                                              :choices rooms}]]]

      [:a.btn.btn-success {:on-click on-submit} submit-button-text]]))

(def empty-device
  {:purchase-date        (time/today-at 12 00)
   :warranty-date        (time/today-at 12 00)
   :serial ""
   :producer ""})


(defn device-create-form-component []
  (let [device (reagent/atom empty-device)
        errors  (reagent/atom {})
        on-submit (fn [e]
                    (api/create-device @device
                                            (fn [result]
                                              (match result
                                                     [:success ({:id id} :as response)] (do
                                                                                          ;(reset! patient response)
                                                                                          (log/debug "received response" response)
                                                                                          (history/navigate-to! (routes/app-path-for :devices/show :id id)))
                                                     [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                               ;(reset! patient response)
                                                                                                               (log/error "received response" response)
                                                                                                               (reset! errors errors')))))
                    (.preventDefault e))]
    (fn []
      (log/debug "device" @device)
      (log/debug "device purchase date" (ui-utils/date->str (:purchase-date @device)))
      (log/debug "device warranty date" (ui-utils/date->str (:warranty-date @device)))
      [:div "device create form"
       [device-form-fields-component device errors {:on-submit on-submit :submit-button-text "Create"}]])))

(defn device-edit-form-component []
  (let [device-id (:id @logic/current-params)
        device (reagent/atom empty-device) ; (reagent/atom {})
        errors  (reagent/atom {})
        on-submit (fn [e] (api/update-device @device
                                           (fn [result]
                                             (match result
                                                    [:success ({:id id} :as response)] (do
                                                                                         ;(reset! patient response)
                                                                                         (log/debug "received response" response)
                                                                                         (history/navigate-to! (routes/app-path-for :devices/show :id id)))
                                                    [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                              ;(reset! patient response)
                                                                                                              (log/error "received response" response)
                                                                                                              (reset! errors errors')))))
                    (.preventDefault e))]
    (api/get-device {:id device-id}
                  (fn [result]
                    (match result
                           [:success ({:id id} :as response)] (do
                                                                (log/debug "received response" response)
                                                                (reset! device (dissoc response :class)))
                           [:error   {:response ({:errors errors'} :as response)}] (log/error "received response" response))))
    (fn []
      (log/debug "device" @device)
      (log/debug "device purchase date" (ui-utils/date->str (:purchase-date @device)))
      (log/debug "device warranty date" (ui-utils/date->str (:warranty-date @device)))
      [:div "device edit form"
       [device-form-fields-component device errors {:on-submit on-submit :submit-button-text "Edit"}]])))
