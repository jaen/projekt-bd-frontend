(ns medisoft.frontend.ui.employees
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
            [cljs-time.core :as time]
            [medisoft.frontend.ui.datepicker :as datepicker]
            [medisoft.frontend.utils :as utils]
            [cljs-time.format :as time-format]))

(defn address-for-employee [patient]
  [:span (:street-name patient) " " (:house-number patient) "/" (:flat-number patient) [:br]
   (:zip-code patient) " " (:city patient) ", " (:country patient)])

(defn employee-list-component []
  (let [employee (reagent/atom [])]
    (api/list-employees {} (fn [result] (match result
                                              [:success response] (do
                                                                    (reset! employee response)
                                                                    (log/debug "received response" response))
                                              [:error   _] :nothing)))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-success {:href (routes/app-path-for :employees/create)} "New employee"]]]
       (if (> (count @employee) 0)
         [:table.table.table-hover [:thead [:th "First name"]
                                    [:th "Surname"]
                                    [:th "Personal ID"]
                                    [:th "Address"]
                                    [:th {:style {:width "200px"}} "Actions"]]
          (doall (for [employee @employee]
                   ^{:key (ui-utils/key-for employee)}
                   [:tr [:td (:firstname employee)]
                    [:td (:surname employee)]
                    [:td (:personal-id employee)]
                    [:td (address-for-employee employee)]
                    [:td [:a.btn.btn-primary {:href (routes/app-path-for :employees/show :id (:id employee))} "Show"]
                     [:a.btn.btn-primary {:href (routes/app-path-for :employees/edit :id (:id employee))} "Edit"]]]))]
         [:div "No employees to display."])])))

(defn time-key [time]
  (str (time/hour time) "-" (time/minute time)))

(defn person->str [employee]
  (str (:firstname employee) " " (:surname employee)))

(defn employee-show-component []
  (let [employee-id (:id @logic/current-params)
        employee    (reagent/atom {})
        appointments (reagent/atom {})
        appointment-date (reagent/atom (time/now))
        marked-dates (ratom/reaction (map :date @appointments))
        appointments-for-day (ratom/reaction
                               (log/error "DAY CHANGED" @appointment-date) ;; FIXME: this deref is needed for this to work
                               (filter (fn [appointment] (utils/same-day? @appointment-date (:date appointment))) @appointments))]
    (api/get-employee {:id employee-id} (fn [result] (match result
                                                          [:success response] (do
                                                                                (reset! employee response)
                                                                                (log/debug "received response" response))
                                                          [:error   response] (log/debug "received response" response))))
    (api/list-appointments {:filter {:eq {:employee.id employee-id}}}
                           (fn [result] (match result
                                               [:success response] (do
                                                                     (reset! appointments response)
                                                                     (log/debug "received response" response))
                                               [:error   _] :nothing)))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-primary {:href (if-let [patient-id (:id @employee)]
                                                                         (routes/app-path-for :employees/edit :id patient-id))}
                                             "Edit employee"]]]
       [:div [:h2 (:firstname @employee) " " (:surname @employee)]
        [:hr]
        [:div.row [:div.col-lg-3 [:b "Personal ID"] [:br]
                   (:personal-id @employee)]
         [:div.col-lg-3 [:b "Address"] [:br]
          (address-for-employee @employee)]]]
       [:div [:h2 "Wizyty"]
        [:hr]
        [:div.row
          [:div.col-lg-2
           [datepicker/datepicker
            :model   appointment-date
            :marked-dates marked-dates
            ;:style {:width "100%"}
            :on-change (fn [new-date]
                         (let [old-date @appointment-date]
                           ; (log/debug "old:" old)
                           (let [int-time (ui-utils/datetime->int old-date)
                                 new-date (ui-utils/update-datetime-time new-date int-time)]
                             (log/debug "new:" new-date)
                             (reset! appointment-date new-date)
                             (log/error "APP DATE:" @appointment-date)
                             )))

            #_(or on-change #(swap! data assoc name' %))]]
          [:div.col-lg-10
           (let [appointments-by-date (into {} (map (fn [appointment] [(time-key (:date appointment)) appointment]) @appointments-for-day))
                 appointments (take 24 (iterate #(time/plus % (time/minutes 30)) (time/plus (time/at-midnight @appointment-date)
                                                                                            (time/hours 6))))]
             ;(log/debug "BY DATE" appointments-by-date)
             #_(log/debug "TEST" (time-key (time/plus (time/at-midnight @appointment-date)
                                                      (time/hours 14)) ))
             #_(log/debug "TEST" (get appointments-by-date (time-key (time/plus (time/at-midnight @appointment-date)
                                                                                (time/hours 14)) )))
             [:table.table.table-appointments.table-striped.table-hover
               [:tbody
                (doall (for [window appointments
                             :let [appointment (get appointments-by-date (time-key window))]]
                         ^{:key (str "window-header-" (time-key window))}
                         [:tr
                           [:td.text-center {:style {:font-weight "bold" :width "180px"}}
                            (if appointment
                              [:a {:href (routes/app-path-for :appointments/show :id (:id appointment))}
                                (time-format/unparse (time-format/formatter "HH:mm") window)]
                              (time-format/unparse (time-format/formatter "HH:mm") window))]
                           [:td (when-let [patient (:patient appointment)]
                                      [:a {:href (routes/app-path-for :patients/show :id (:id patient))}
                                       (person->str patient)])]
                           #_[:td "show"]]))]])]]]])))

(defn employee-form-fields-component [employee errors {:keys [on-submit submit-button-text] :as opts}]
  (let [job-titles (reagent.core/atom [])
        form-input (ui-utils/make-form-field-maker employee errors)]
    (api/list-job-titles {} (fn [result] (match result
                                                            [:success response] (do
                                                                                  (reset! job-titles response)
                                                                                  (log/debug "received response" response))
                                                            [:error   response] (log/debug "received response" response))))
    (fn []
      (log/debug "welp:" @employee)
      [:form
       [:div.row
        [:div.col-lg-4 [form-input :firstname]]
        [:div.col-lg-4 [form-input :surname]]]
       [:div.row
        [:div.col-lg-2 [form-input :personal-id]]
        [:div.col-lg-4 [form-input :job-title {:model (ratom/reaction (get-in @employee [:job-title :id]))
                                               :on-change #(swap! employee update-in [:job-title] assoc :id %)
                                               :label-fn #(:name %)
                                               :type :select
                                               :choices job-titles}]]
        [:div.col-lg-2 [form-input :is-doctor {:type :checkbox}]]]
       [:hr]
       [:div.row
        [:div.col-lg-6 [form-input :street-name]]
        [:div.col-lg-1 [form-input :flat-number]]
        [:div.col-lg-1 [form-input :house-number]]]
       [:div.row
        [:div.col-lg-1 [form-input :zip-code]]
        [:div.col-lg-4 [form-input :city]]
        [:div.col-lg-3 [form-input :country]]]
       [:a.btn.btn-success {:on-click on-submit} submit-button-text]])))

(def empty-employee
  {:firstname      ""
   :surname        ""
   :personal-id    ""
   :street-name    ""
   :flat-number    ""
   :house-number   ""
   :zip-code       ""
   :city           ""
   :country        ""
   :is-doctor      false
   ;:job-title      {:id nil}
   ;:user           {:id nil}
   ;:specialization {:id nil}
   })

(def current-user (atom {:id 23}))

(defn employee-create-form-component []
  (let [employee (reagent/atom empty-employee)
        errors  (reagent/atom {})
        on-submit (fn [e]
                    (api/create-employee (merge @employee {:user @current-user})
                                        (fn [result]
                                          (match result
                                                 [:success ({:id id} :as response)] (do
                                                                                      ;(reset! patient response)
                                                                                      (log/debug "received response" response)
                                                                                      (history/navigate-to! (routes/app-path-for :employees/show :id id)))
                                                 [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                           ;(reset! patient response)
                                                                                                           (log/error "received response" response)
                                                                                                           (reset! errors errors')))))
                    (.preventDefault e))]
    (fn []
      [:div "patient create form"
       [employee-form-fields-component employee errors {:on-submit on-submit :submit-button-text "Create"}]])))

(defn employee-edit-form-component []
  (let [employee-id (:id @logic/current-params)
        employee (reagent/atom {})
        errors  (reagent/atom {})
        on-submit (fn [e] (api/update-employee (merge @employee {:user @current-user}) ; HACK: this possibly changes the user
                                              (fn [result]
                                                (match result
                                                       [:success ({:id id} :as response)] (do
                                                                                            ;(reset! patient response)
                                                                                            (log/debug "received response" response)
                                                                                            (history/navigate-to! (routes/app-path-for :employees/show :id id)))
                                                       [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                                 ;(reset! patient response)
                                                                                                                 (log/error "received response" response)
                                                                                                                 (reset! errors errors')))))
                    (.preventDefault e))]
    (api/get-employee {:id employee-id}
                     (fn [result]
                       (match result
                              [:success ({:id id} :as response)] (do
                                                                   (log/debug "received response" response)
                                                                   (reset! employee (dissoc response :class :medical-visits :prescriptions :specializations
                                                                                                     :device-reservations :room-reservations :schedules :users)))
                              [:error   {:response ({:errors errors'} :as response)}] (log/error "received response" response))))
    (fn []
      [:div "patient edit form"
       [employee-form-fields-component employee errors {:on-submit on-submit :submit-button-text "Edit"}]])))
