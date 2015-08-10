(ns medisoft.frontend.ui.appointments
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

(defn person->str [employee]
  (str (:firstname employee) " " (:surname employee)))

(defn appointment-list-component []
  (let [appointments (reagent/atom [])]
    (api/list-appointments {} (fn [result] (match result
                                              [:success response] (do
                                                                    (reset! appointments response)
                                                                    (log/debug "received response" response))
                                              [:error   _] :nothing)))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-success {:href (routes/app-path-for :appointments/create)} (l18n/t :appointments/new-appointment)]]]
            (if (> (count @appointments) 0)
              [:table.table.table-hover [:thead [:th "Date"]
                                                [:th "Employee"]
                                                [:th "Patient"]
                                                ;[:th "Description"]
                                                [:th "ICD10"]
                                                [:th {:style {:width "200px"}} "Actions"]]
               ;(log/debug "appointments" @appointments)
                                    (doall (for [appointment @appointments]
                                             ^{:key (ui-utils/key-for appointment)}
                                             [:tr [:td (ui-utils/date->str (:date appointment))]
                                                  [:td (person->str (:employee appointment))]
                                                  [:td (person->str  (:patient appointment))]
                                                  ;[:td (:description appointment "")]
                                                  [:td (str/join ", " (:icd10 appointment))]
                                                  [:td [:a.btn.btn-primary {:href (routes/app-path-for :appointments/show :id (:id appointment))} (l18n/t :common/show)]
                                                       [:a.btn.btn-primary {:href (routes/app-path-for :appointments/edit :id (:id appointment))} (l18n/t :common/edit)]]]))]
              [:div "No appointments to display."])])))

(defn appointment-show-component []
  (let [appointment-id (:id @logic/current-params)
        appointment    (reagent/atom {})]
    (api/get-appointment {:id appointment-id} (fn [result] (match result
                                              [:success response] (do
                                                                    (reset! appointment response)
                                                                    (log/debug "received response" response))
                                              [:error   response] (log/debug "received response" response))))
    (fn []
      (log/debug "lel" @appointment)
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-primary {:href (if-let [appointment-id (:id @appointment)]
                                                                         (routes/app-path-for :appointments/edit :id appointment-id))}
                                                                "Edit appointment"]]]
            [:div [:div.row [:div.col-lg-3 [:b "Date"] [:br]
                                           (ui-utils/date->str (:date @appointment))]
                            [:div.col-lg-3 [:b "Employee"] [:br]
                                           (person->str (:employee @appointment))]
                            [:div.col-lg-3 [:b "Patient"] [:br]
                                           (person->str (:patient @appointment))]]
                  [:div.row
                            [:div.col-lg-3 [:b "ICD10"] [:br]
                                           (str/join ", " (:icd10 @appointment))]]
                  [:hr]
                  [:div.row
                            [:div.col-lg-12 [:b "Description"] [:br]
                                           (:description @appointment)]]]])))



;(defn appointment-form-fields-component [appointment errors {:keys [on-submit submit-button-text] :as opts}]
;  (let [form-input (ui-utils/make-form-field-maker appointment errors)
;        patients (reagent.core/atom [])
;        employees (reagent.core/atom [])]
;    (api/list-patients {} (fn [result] (match result
;                                                [:success response] (do
;                                                                      (reset! patients response)
;                                                                      (log/debug "received response" response))
;                                                [:error   response] (log/debug "received response" response))))
;    (api/list-employees {} (fn [result] (match result
;                                              [:success response] (do
;                                                                    (reset! employees response)
;                                                                    (log/debug "received response" response))
;                                              [:error   response] (log/debug "received response" response))))
;    [:form
;     [:div.row
;      [:div.col-lg-5 [form-input :employee {:model (ratom/reaction (get-in @appointment [:employee :id]))
;                                            :on-change #(swap! appointment update-in [:employee] assoc :id %)
;                                            :label-fn (fn [employee]
;                                                        [:div.clearfix [:span (str (:firstname employee) " " (:surname employee))]
;                                                                       [:span.pull-right.text-muted.text-right (address-for employee)]])
;                                            :selected-label-fn (fn [employee]
;                                                                 (str (:firstname employee) " " (:surname employee)))
;                                        :type :select
;                                        :choices employees}]]
;      [:div.col-lg-5 [form-input :patient {:model (ratom/reaction (get-in @appointment [:patient :id]))
;                                           :on-change #(swap! appointment update-in [:patient] assoc :id %)
;                                           :label-fn (fn [patient]
;                                                       [:div.clearfix [:span (str (:firstname patient) " " (:surname patient))]
;                                                                      [:span.pull-right.text-muted.text-right (address-for patient)]])
;                                           :selected-label-fn (fn [patient]
;                                                                (str (:firstname patient) " " (:surname patient)))
;                                        :type :select
;                                        :choices patients}]]]
;     [:div.row
;      [:div.col-lg-5 [form-input :date {:type :date
;                                        :model (ratom/reaction (:date @appointment))
;                                        :on-change (fn [new-date]
;                                                     (log/debug "date changed" new-date)
;                                                     (swap! appointment (fn [old]
;                                                                          (log/debug "old:" old)
;                                                                          (let [old-date (:date old)
;                                                                                int-time (datetime->int old-date)
;                                                                                new-date (update-datetime-time new-date int-time)]
;                                                                            (log/debug "new:" new-date)
;                                                                            (assoc old :date new-date)))))}]]
;      [:div.col-lg-5 [form-input :date {:type :time
;                                        :model (ratom/reaction (datetime->int (:date @appointment)))
;                                        :on-change (fn [int-time]
;                                                     (log/debug "time changed" int-time)
;                                                     (swap! appointment (fn [old]
;                                                                          (log/debug "old:" old)
;                                                                          (let [old-date (:date old)
;                                                                                new-date (update-datetime-time old-date int-time)]
;                                                                            (log/debug "new:" new-date)
;                                                                            (assoc old :date new-date)))))}]]]
;     [:div.row
;      [:div.col-lg-5 [form-input :description #_{:type :textarea}]]]
;     [:a.btn.btn-success {:on-click on-submit} submit-button-text]]))

(defn appointment-form-fields-component [appointment errors {:keys [on-submit submit-button-text] :as opts}]
  (let [form-input (ui-utils/make-form-field-maker appointment errors)
        patients (reagent.core/atom [])
        employees (reagent.core/atom [])
        appointment-date (ratom/reaction (:date @appointment))
        appointments (reagent/atom [])]
    (api/list-appointments {} (fn [result] (match result
                                                  [:success response] (do
                                                                        (reset! appointments response)
                                                                        (log/debug "received response" response))
                                                  [:error   _] :nothing)))
    (api/list-patients {} (fn [result] (match result
                                              [:success response] (do
                                                                    (reset! patients response)
                                                                    (log/debug "received response" response))
                                              [:error   response] (log/debug "received response" response))))
    (api/list-employees {} (fn [result] (match result
                                               [:success response] (do
                                                                     (reset! employees response)
                                                                     (log/debug "received response" response))
                                               [:error   response] (log/debug "received response" response))))
    ;(log/debug "DERP" @appointment)
    ;(log/debug "DERP" (:date @appointment))
    [:form
     [:div.row
      [:div.col-lg-5 [form-input :employee {:model (ratom/reaction (get-in @appointment [:employee :id]))
                                            :on-change #(swap! appointment update-in [:employee] assoc :id %)
                                            :label-fn (fn [employee]
                                                        [:div.clearfix [:span (str (:firstname employee) " " (:surname employee))]
                                                         [:span.pull-right.text-muted.text-right (ui-utils/address-for employee)]])
                                            :selected-label-fn (fn [employee]
                                                                 (str (:firstname employee) " " (:surname employee)))
                                            :type :select
                                            :choices employees}]]
      [:div.col-lg-5 [form-input :patient {:model (ratom/reaction (get-in @appointment [:patient :id]))
                                           :on-change #(swap! appointment update-in [:patient] assoc :id %)
                                           :label-fn (fn [patient]
                                                       [:div.clearfix [:span (str (:firstname patient) " " (:surname patient))]
                                                        [:span.pull-right.text-muted.text-right (ui-utils/address-for patient)]])
                                           :selected-label-fn (fn [patient]
                                                                (str (:firstname patient) " " (:surname patient)))
                                           :type :select
                                           :choices patients}]]]
     [:div.row
      [:div.col-lg-5 [form-input :date {:type :date
                                        :model appointment-date
                                        :disabled-dates (ratom/reaction (map :date (filter #(if-let [employee-id (get-in @appointment [:employee :id])]
                                          (= (get-in % [:employee :id])
                                              employee-id)
                                          true) @appointments)))
                                        :on-change (fn [new-date]
                                                     ;(log/debug "date changed" new-date)
                                                     (swap! appointment (fn [old]
                                                                          ;(log/debug "old:" old)
                                                                          (let [old-date (:date old)
                                                                                int-time (ui-utils/datetime->int old-date)
                                                                                new-date (ui-utils/update-datetime-time new-date int-time)]
                                                                            ;(log/debug "new:" new-date)
                                                                            (assoc old :date new-date)))))}]]]
     [:div.row
      [:div.col-lg-5 [form-input :description #_{:type :textarea}]]]
     [:a.btn.btn-success {:on-click on-submit} submit-button-text]]))

(def empty-appointment
  {:date        (time/today-at 12 00)
   :description ""})

(defn appointment-create-form-component []
  (let [appointment (reagent/atom empty-appointment)
        errors  (reagent/atom {})
        on-submit (fn [e]
                    (api/create-appointment @appointment
                                        (fn [result]
                                          (match result
                                                 [:success ({:id id} :as response)] (do
                                                                                      ;(reset! patient response)
                                                                                      (log/debug "received response" response)
                                                                                      (history/navigate-to! (routes/app-path-for :appointments/show :id id)))
                                                 [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                           ;(reset! patient response)
                                                                                                           (log/error "received response" response)
                                                                                                           (reset! errors errors')))))
                    (.preventDefault e))]
    (fn []
      ;(log/debug "appointment" @appointment)
      ;(log/debug "appointment date" (time-format/unparse (time-format/formatters :rfc822) (:date @appointment)))
      [:div "appointment create form"
       [appointment-form-fields-component appointment errors {:on-submit on-submit :submit-button-text "Create"}]])))

(defn appointment-edit-form-component []
  (let [appointment-id (:id @logic/current-params)
        appointment (reagent/atom {})
        errors  (reagent/atom {})
        on-submit (fn [e] (api/update-appointment @appointment
                                              (fn [result]
                                                (match result
                                                       [:success ({:id id} :as response)] (do
                                                                                            ;(reset! patient response)
                                                                                            ;(log/debug "received response" response)
                                                                                            (history/navigate-to! (routes/app-path-for :appointments/show :id id)))
                                                       [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                                 ;(reset! patient response)
                                                                                                                 (log/error "received response" response)
                                                                                                                 (reset! errors errors')))))
                    (.preventDefault e))]
    (api/get-appointment {:id appointment-id}
                     (fn [result]
                       (match result
                              [:success ({:id id} :as response)] (do
                                                                   ;(log/debug "received response" response)
                                                                   (reset! appointment (merge (dissoc response :class :employee :patient)
                                                                                              {:employee (select-keys (:employee response) [:id])}
                                                                           {:patient (select-keys (:patient response) [:id])})))
                              [:error   {:response ({:errors errors'} :as response)}] (log/error "received response" response))))
    (fn []
      [:div "patient edit form"
       [appointment-form-fields-component appointment errors {:on-submit on-submit :submit-button-text "Edit"}]])))