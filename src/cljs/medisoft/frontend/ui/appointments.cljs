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
            [cljs-time.format :as time-format]
            [medisoft.frontend.utils :as utils]))

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
              [:table.table.table-hover [:thead [:th (l18n/t :appointments/date)]
                                                [:th (l18n/t :appointments/employee)]
                                                [:th (l18n/t :appointments/patient)]
                                                ;[:th "Description"]
                                                [:th (l18n/t :appointments/icd10)]
                                                [:th {:style {:width "200px"}} (l18n/t :common/actions)]]
               ;(log/debug "appointments" @appointments)
                                    (doall (for [appointment @appointments]
                                             ^{:key (ui-utils/key-for appointment)}
                                             [:tr [:td (ui-utils/datetime->str (:date appointment))]
                                                  [:td
                                                   (let [employee (:employee appointment)]
                                                     [:a {:href (routes/app-path-for :employees/show :id (:id employee))}
                                                       (person->str employee)])]
                                                  [:td
                                                    (let [patient (:patient appointment)]
                                                      [:a {:href (routes/app-path-for :patients/show :id (:id patient))}
                                                         (person->str patient)])]
                                                  ;[:td (:description appointment "")]
                                                  [:td (str/join ", " (:icd10 appointment))]
                                                  [:td [:a.btn.btn-primary {:href (routes/app-path-for :appointments/show :id (:id appointment))} (l18n/t :common/show)]
                                                       [:a.btn.btn-primary {:href (routes/app-path-for :appointments/edit :id (:id appointment))} (l18n/t :common/edit)]]]))]
              [:div (l18n/t :appointments/no-appointments)])])))

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
                                             (l18n/t :appointments/edit-appointment)]]]
            [:div [:div.row [:div.col-lg-3 [:b (l18n/t :appointments/date)] [:br]
                                           (ui-utils/datetime->str (:date @appointment))]
                            [:div.col-lg-3 [:b (l18n/t :appointments/employee)] [:br]
                                           (when-let [employee (:employee @appointment)]
                                             [:a {:href (routes/app-path-for :employees/show :id (:id employee))}
                                                 (person->str employee)])]
                            [:div.col-lg-3 [:b (l18n/t :appointments/patient)] [:br]
                                           (when-let [patient (:patient @appointment)]
                                             [:a {:href (routes/app-path-for :patients/show :id (:id patient))}
                                                 (person->str patient)])]]
                  [:div.row
                            [:div.col-lg-3 [:b (l18n/t :appointments/icd10)] [:br]
                                           (str/join ", " (:icd10 @appointment))]]
                  [:hr]
                  [:div.row
                            [:div.col-lg-12 [:b (l18n/t :appointments/description)] [:br]
                                           (:description @appointment)]]
                  [:hr]
                  (let [prescriptions (:prescriptions @appointment)]
                    (when (not-empty prescriptions)
                      [:div.row
                        [:div.col-lg-12 [:b (l18n/t :appointments/prescriptions)] [:br][:br]
                          (doall (for [prescription prescriptions]
                                   ^{:key (str "prescription-" (:id prescription))}
                                   [:div.row
                                     [:div.col-lg-12
                                      [:div.panel.panel-default
                                       [:div.panel-heading (l18n/t :appointments/prescription)]
                                       [:div.panel-body
                                       [:table.table.table-hover [:thead [:th (l18n/t :medicines/gtin)]
                                                                  [:th (l18n/t :medicines/approved)]
                                                                  [:th (l18n/t :medicines/name)]
                                                                  [:th (l18n/t :medicines/producer-name)]
                                                                  [:th (l18n/t :medicines/type)]
                                                                  [:th (l18n/t :medicines/wrapping)]
                                                                  [:th (l18n/t :medicines/dose)]
                                                                  #_[:th {:style {:width "200px"}} "Actions"]]
                                         [:tbody
                                           (doall (for [medicine (:medicines prescription)]
                                                    ^{:key (str "prescription-" (:id prescription) "-medicine-" (:id medicine))}
                                              [:tr
                                               [:td (:gtin medicine)]
                                               [:td (if (:approved medicine) (l18n/t :medicines/is-approved) (l18n/t :medicines/is-not-approved))]
                                               [:td (:name medicine)]
                                               [:td (:producer-name medicine)]
                                               [:td (:type medicine)]
                                               [:td (:wrapping medicine)]
                                               [:td (:dose medicine)]]))]]]]]]))]]))]])))



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

(defn time-key [time]
  (str (time/hour time) "-" (time/minute time)))

(def empty-prescription
  {:medicines []
   :is-chronic-disease false})

(defn vec-remove
  "remove elem in coll"
  [coll pos]
  (vec (concat (subvec coll 0 pos) (subvec coll (inc pos)))))

(defn appointment-form-fields-component [appointment errors {:keys [on-submit submit-button-text] :as opts}]
  (let [cnt-atom (atom 0)
        form-input (ui-utils/make-form-field-maker appointment errors {:l18n-scopes [:appointments]})
        patients (reagent.core/atom [])
        employees (reagent.core/atom [])
        appointment-date (ratom/reaction (or (:date @appointment) (time/now)))
        appointments (reagent/atom [])
        appointments-for-day (ratom/reaction (let [day (:date @appointment)]
                                               (filter (fn [appointment] (utils/same-day? day (:date appointment))) @appointments)))
        medicines (reagent/atom [])
        update-appointments-fn (fn []
                                 (if-let [employee-id (get-in @appointment [:employee :id])]
                                   (api/list-appointments {:filter {:eq {:employee.id employee-id}}}
                                                          (fn [result] (match result
                                                                                     [:success response] (do
                                                                                                           (reset! appointments response)
                                                                                                           (log/debug "received response" response))
                                                                                     [:error   _] :nothing)))))]
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
    (api/list-medicines {} (fn [result] (match result
                                               [:success response] (do
                                                                     (reset! medicines response)
                                                                     (log/debug "received response" response))
                                               [:error   response] (log/debug "received response" response))))
    (fn [appointment errors {:keys [on-submit submit-button-text] :as opts}]
      ; (log/debug "DERP" @appointments)
      ; (log/debug "HERP" @appointments-for-day)
      ; (log/debug "DATE" (:date @appointment))
    [:form
     [:div.row
      [:div.col-lg-5 [form-input :employee {:model (ratom/reaction (get-in @appointment [:employee :id]))
                                            :on-change #(do
                                                         (swap! appointment update-in [:employee] assoc :id %)
                                                         (update-appointments-fn))
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
      [:div.col-lg-5 [form-input :date {:type :date ; :date-time
                                        :model appointment-date
                                        :marked-dates (ratom/reaction (map :date @appointments))
                                        #_(ratom/reaction (map :date (filter #(if-let [employee-id (get-in @appointment [:employee :id])]
                                          (= (get-in % [:employee :id])
                                              employee-id)
                                          true) @appointments)))
                                        :on-change (fn [new-date]
                                                     ; update appointments for date here
                                                     (swap! appointment assoc :date new-date))}]]
      [:div.col-lg-12
        #_[:label "Booked appointments"]
       (let [appointments-by-date (into {} (map (fn [appointment] [(time-key (:date appointment)) appointment]) @appointments-for-day))
             appointments (take 24 (iterate #(time/plus % (time/minutes 30)) (time/plus (time/at-midnight @appointment-date)
                                                                                        (time/hours 6))))]
         (log/debug "BY DATE" appointments-by-date)
         #_(log/debug "TEST" (time-key (time/plus (time/at-midnight @appointment-date)
                                                                          (time/hours 14)) ))
         #_(log/debug "TEST" (get appointments-by-date (time-key (time/plus (time/at-midnight @appointment-date)
                                         (time/hours 14)) )))

         [:table.table.table-appointments
          [:thead (concat [^{:key "dummy"} [:th ""]] (doall (for [window appointments]
                                       ^{:key (str "window-header-" (time-key window))}
                                       [:th.text-center (time-format/unparse (time-format/formatter "HH:mm") window)])))]
          [:tbody [:tr (concat [^{:key "dummy"} [:th ""]] (doall (for [window appointments
                                                :let [key (time-key window)
                                                      ;_ (log/debug "KEY" key)
                                                      ]]
                                         (if (= (time-key window) (time-key @appointment-date))
                                           ^{:key (str "window-appointment-" (time-key window))}
                                           [:td.text-center.text-success.chosen (l18n/t :appointments/date-yours)]

                                           (if-let [appointment (get appointments-by-date key)]
                                             ^{:key (str "window-appointment-" (time-key window))}
                                             [:td.text-center.text-danger.taken (l18n/t :appointments/date-taken)]

                                             ^{:key (str "window-appointment-" (time-key window))}
                                             [:td.text-muted.text-center.free
                                               [:a {:on-click (fn [e]
                                                                appointment-date
                                                                ; (log/debug "TAKE MEE")

                                                                ;(update-datetime-time old-date (datetime->int window))
                                                                (swap! appointment assoc :date window)
                                                                (.preventDefault e))}
                                                (l18n/t :appointments/date-free)]])))))]]]

         #_[:table.table
          [:thead [:th {:style {:width 200}} "time"] [:th "patient"]]
          [:tbody
           (log/debug "WELP" (vec appointments))
           (doall (for [window appointments :let [key (time-key window)
                                                  _ (log/debug "KEY" key)
                                                  appointment (get appointments-by-date key)]]
                  ^{:key (str "window-" window)}
                  [:tr [:td (str (time-format/unparse (time-format/formatter "HH:mm") window)
                                 " - "
                                 (time-format/unparse (time-format/formatter "HH:mm") (time/plus window (time/minutes 30))))]
                       [:td (:id appointment)]]))]])
        #_(doall (for [appointment @appointments-for-day]
                 ^{:key (ui-utils/key-for appointment)}
                 [:div.appointment (str appointment)]))]]
     [:div.row
      [:div.col-lg-5 [form-input :description {:type :text-area}]]]
     [:div.row
       [:div.col-lg-12 [:b (l18n/t :appointments/prescriptions)] [:br]
        (concat
          (doall
                 (for [[idx prescription] (map vector (range) (:prescriptions @appointment))]
                   ^{:key (str "prescription-appointment-" idx)}
                   [:div.panel.panel-default
                     [:div.panel-heading (l18n/t :appointments/prescription) [:div.pull-right.close [:a {:on-click (fn [e]
                                                                                                (swap! appointment update-in [:prescriptions] vec-remove idx)
                                                                                                (.preventDefault e)) } "X"]]]
                     [:div.panel-body
                      [:table.table.table-hover [:thead [:th (l18n/t :medicines/gtin)]
                                                 [:th (l18n/t :medicines/approved)]
                                                 [:th (l18n/t :medicines/name)]
                                                 [:th (l18n/t :medicines/producer-name)]
                                                 [:th (l18n/t :medicines/type)]
                                                 [:th (l18n/t :medicines/wrapping)]
                                                 [:th (l18n/t :medicines/dose)]
                                                 [:th {:style {:width "200px"}} (l18n/t :common/actions)]]
                       [:tbody
                        (doall
                          (for [[idx' {medicine-id :id}] (map vector (range) (:medicines prescription))]
                            (let [medicine (first (filter #(= medicine-id (:id %)) @medicines))]
                            ^{:key (str "prescription-appointment-" idx "-medicine-" idx')}
                                 [:tr
                                  [:td (:gtin medicine)]
                                  [:td (if (:approved medicine) (l18n/t :medicines/is-approved) (l18n/t :medicines/is-not-approved))]
                                  [:td (:name medicine)]
                                  [:td (:producer-name medicine)]
                                  [:td (:type medicine)]
                                  [:td (:wrapping medicine)]
                                  [:td (:dose medicine)]
                                  [:td [:a.btn.btn-primary.btn-danger {:on-click (fn [e]
                                                                                 (swap! appointment update-in [:prescriptions idx :medicines] vec-remove idx')
                                                                                 (.preventDefault e)) }
                                        (l18n/t :common/remove)]]])))]]
                      #_[:div "Addd shit"]
                      (let [model (reagent/atom {})]
                      [form-input (str "prescription-appointment-" idx "-add-medicine")
                        {:model model
                                            :on-change (fn [medicine-id]
                                                         ;(log/error "WELP" medicine-id)
                                                         (when medicine-id
                                                           (swap! appointment update-in [:prescriptions idx :medicines] conj {:id medicine-id})
                                                           (reset! model {})
                                                           (log/warn "MODEL" model)))
                                            :label-fn (fn [medicine]
                                                        [:div.clearfix
                                                         [:div [:i.pull-right (:gtin medicine)]
                                                               [:b (:name medicine)] " "
                                                               [:span (:producer-name medicine)]]
                                                         [:div
                                                         ;[:td (if (:approved medicine) "approved" "not approved")]

                                                           [:span (:type medicine)] " "
                                                           [:span (:wrapping medicine)] " "
                                                           [:span (:dose medicine)]]
                                                         ]
                                                        #_[:div.clearfix [:span (str (:firstname patient) " " (:surname patient))]
                                                         [:span.pull-right.text-muted.text-right (ui-utils/address-for patient)]])
                                            :selected-label-fn (fn [medicine] "" #_(:name medicine))
                                            :label "dodaj lek"
                                            :type :select
                                            :choices medicines}])
                      ]])))
          [:div
            [:a.btn.btn-primary.btn-info {:on-click (fn [e]
                                                      (swap! appointment update-in [:prescriptions] (comp vec conj) empty-prescription)
                                                      (.preventDefault e)) } (l18n/t :appointments/add-a-prescription)]]]]
     [:a.btn.btn-success {:on-click on-submit} submit-button-text]])))

(def empty-appointment
  {:date        (time/today-at 12 00)
   :description ""
   :prescriptions []})

(defn appointment-create-form-component []
  (let [appointment (reagent/atom empty-appointment)
        errors  (reagent/atom {})
        on-submit (fn [e]
                    ;(log/warn "APPOINTMENT" @appointment)
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
      [:div
       [:h1 (l18n/t :appointments/create-appointment)]
       [appointment-form-fields-component appointment errors {:on-submit on-submit :submit-button-text (l18n/t :common/create)}]])))

(defn censor-appointment [appointment]
  ;(log/error "APPOINTMENT IS" appointment)
  (let [censored (merge  (dissoc appointment :icd10) {:prescriptions (mapv (fn [prescription]
                                            (update (select-keys prescription [:id :is-chronic-disease :medicines])
                                                    :medicines (fn [medicines]
                                                                              (mapv #(select-keys % [:id])
                                                                                   medicines))))
                                           (:prescriptions appointment))})]
    ;(log/error "CENSORED APPOINTMENT IS" censored)
    censored))

(defn appointment-edit-form-component []
  (let [appointment-id (:id @logic/current-params)
        appointment (reagent/atom {})
        errors  (reagent/atom {})
        on-submit (fn [e] (api/update-appointment (censor-appointment @appointment)
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
      [:div
       [:h1 (l18n/t :appointments/edit-appointment)]
       [appointment-form-fields-component appointment errors {:on-submit on-submit :submit-button-text (l18n/t :common/edit)}]])))