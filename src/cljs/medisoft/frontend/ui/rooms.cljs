(ns medisoft.frontend.ui.rooms
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

(defn room-list-component []
  (let [rooms (reagent/atom [])]
    (api/list-rooms {} (fn [result] (match result
                                                  [:success response] (do
                                                                        (reset! rooms response)
                                                                        (log/debug "received response" response))
                                                  [:error   _] :nothing)))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-success {:href (routes/app-path-for :rooms/create)} (l18n/t :rooms/new-room)]]]
       (if (> (count @rooms) 0)
         [:table.table.table-hover [:thead [:th (l18n/t :rooms/number)]
                                    [:th {:style {:width "200px"}} (l18n/t :common/actions)]]
          (log/debug "rooms" @rooms)
          (doall (for [room @rooms]
                   ^{:key (ui-utils/key-for room)}
                   [:tr [:td (:number room)]
                    [:td [:a.btn.btn-primary {:href (routes/app-path-for :rooms/show :id (:id room))} (l18n/t :common/show)]
                     [:a.btn.btn-primary {:href (routes/app-path-for :rooms/edit :id (:id room))} (l18n/t :common/edit)]]]))]
         [:div (l18n/t :rooms/no-roms)])])))

(defn room-show-component []
  (let [room-id (:id @logic/current-params)
        room    (reagent/atom {})]
    (api/get-room {:id room-id} (fn [result] (match result
                                                            [:success response] (do
                                                                                  (reset! room response)
                                                                                  (log/debug "received response" response))
                                                            [:error   response] (log/debug "received response" response))))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-primary {:href (if-let [room-id (:id @room)]
                                                                         (routes/app-path-for :rooms/edit :id room-id))}
                                             (l18n/t :rooms/edit-room)]]]
       [:div [:h2 "Pokój " (:number @room)]
        [:hr]
        [:div.row
         [:div.col-lg-12 [:b (l18n/t :rooms/devices)] [:br]
          [:table.table.table-hover [:thead [:th (l18n/t :devices/serial)]
                                     [:th (l18n/t :devices/producer)]
                                     [:th {:style {:width "200px"}} (l18n/t :common/actions)]]
            (doall (for [device (:devices @room)]
                   ^{:key (ui-utils/key-for device)}
                   [:tr [:td (:serial device)]
                        [:td (:producer device)]
                    [:td [:a.btn.btn-primary {:href (routes/app-path-for :devices/show :id (:id device))} (l18n/t :common/show)]
                         #_[:a.btn.btn-primary {:href (routes/app-path-for :rooms/edit :id (:id room))} (l18n/t :common/edit)]]]))]]]]])))

(def empty-room
  {:number ""})

(defn room-form-fields-component [room errors {:keys [on-submit submit-button-text] :as opts}]
  (let [form-input (ui-utils/make-form-field-maker room errors {:l18n-scopes [:rooms]})]
    [:form
     [:div.row
      [:div.col-lg-5 [form-input :number]]]
     [:a.btn.btn-success {:on-click on-submit} submit-button-text]]))

(defn room-create-form-component []
  (let [room (reagent/atom empty-room)
        errors  (reagent/atom {})
        on-submit (fn [e]
                    (api/create-room @room
                                            (fn [result]
                                              (match result
                                                     [:success ({:id id} :as response)] (do
                                                                                          ;(reset! patient response)
                                                                                          (log/debug "received response" response)
                                                                                          (history/navigate-to! (routes/app-path-for :rooms/show :id id)))
                                                     [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                               ;(reset! patient response)
                                                                                                               (log/error "received response" response)
                                                                                                               (reset! errors errors')))))
                    (.preventDefault e))]
    (fn []
      (log/debug "room" @room)
      [:div
       [:h2 (l18n/t :rooms/create-room)]
       [room-form-fields-component room errors {:on-submit on-submit :submit-button-text (l18n/t :rooms/create-room)}]])))

(defn room-edit-form-component []
  (let [room-id (:id @logic/current-params)
        room (reagent/atom {})
        errors  (reagent/atom {})
        on-submit (fn [e] (api/update-room @room
                                               (fn [result]
                                                 (match result
                                                        [:success ({:id id} :as response)] (do
                                                                                             ;(reset! patient response)
                                                                                             (log/debug "received response" response)
                                                                                             (history/navigate-to! (routes/app-path-for :rooms/show :id id)))
                                                        [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                                  ;(reset! patient response)
                                                                                                                  (log/error "received response" response)
                                                                                                                  (reset! errors errors')))))
                    (.preventDefault e))]
    (api/get-room {:id room-id}
                      (fn [result]
                        (match result
                               [:success ({:id id} :as response)] (do
                                                                    (log/debug "received response" response)
                                                                    (reset! room (dissoc response :class :devices)))
                               [:error   {:response ({:errors errors'} :as response)}] (log/error "received response" response))))
    (fn []
      [:div
       [:h2 (l18n/t :rooms/edit-room)]
       [room-form-fields-component room errors {:on-submit on-submit :submit-button-text (l18n/t :rooms/edit-room)}]])))