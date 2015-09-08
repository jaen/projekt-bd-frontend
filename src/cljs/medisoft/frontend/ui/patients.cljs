(ns medisoft.frontend.ui.patients
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
            [cljs-time.core :as time]
            [medisoft.frontend.validations :as validations]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.history :as history]
            [medisoft.frontend.l18n :as l18n]))

(defn person->str [employee]
  (str (:firstname employee) " " (:surname employee)))

(defn address-for-patient [patient]
  [:span (:street-name patient) " " (:house-number patient) "/" (:flat-number patient) [:br]
         (:zip-code patient) " " (:city patient) ", " (:country patient)])

(defn patient-list-component []
  (let [patients (reagent/atom [])]
    (api/list-patients {} (fn [result] (match result
                                              [:success response] (do
                                                                    (reset! patients response)
                                                                    (log/debug "received response" response))
                                              [:error   _] :nothing)))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-success {:href (routes/app-path-for :patients/create)} (l18n/t :patients/new-patient)]]]
            (if (> (count @patients) 0)
              [:table.table.table-hover [:thead [:th (l18n/t :personal-information/firstname)]
                                         [:th (l18n/t :personal-information/surname)]
                                         [:th (l18n/t :personal-information/personal-id)]
                                         [:th (l18n/t :personal-information/address)]
                                         [:th {:style {:width "200px"}} (l18n/t :common/actions)]]
                                    (doall (for [patient @patients]
                                             ^{:key (ui-utils/key-for patient)}
                                             [:tr [:td (:firstname patient)]
                                                  [:td (:surname patient)]
                                                  [:td (:personal-id patient)]
                                                  [:td (address-for-patient patient)]
                                                  [:td [:a.btn.btn-primary {:href (routes/app-path-for :patients/show :id (:id patient))} (l18n/t :common/show)]
                                                       [:a.btn.btn-primary {:href (routes/app-path-for :patients/edit :id (:id patient))} (l18n/t :common/edit)]]]))]
              [:div (l18n/t :patients/no-patients)])])))

(defn patient-show-component []
  (let [patient-id (:id @logic/current-params)
        patient    (reagent/atom {})]
    (api/get-patient {:id patient-id} (fn [result] (match result
                                              [:success response] (do
                                                                    (reset! patient response)
                                                                    (log/debug "received response" response))
                                              [:error   response] (log/debug "received response" response))))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-primary {:href (if-let [patient-id (:id @patient)]
                                                                         (routes/app-path-for :patients/edit :id patient-id))}
                                             (l18n/t :patients/edit-patient)]]]
            [:div [:h2 (:firstname @patient) " " (:surname @patient)]
                  [:hr]
                  [:div.row [:div.col-lg-3 [:b (l18n/t :personal-information/personal-id)] [:br]
                                           (:personal-id @patient)]
                            [:div.col-lg-3 [:b (l18n/t :personal-information/address)] [:br]
                                           (address-for-patient @patient)]]
                  [:h2 (l18n/t :patients/appointments)]
                  [:hr]
                  (if-let [appointments (seq (:medical-visits @patient))]
                    [:div.row [:div.col-lg-12
                                  [:table.table.table-hover
                                         [:thead
                                            [:th (l18n/t :appointments/date)]
                                            [:th (l18n/t :appointments/employee)]]
                                          [:tbody
                                           (doall (for [appointment appointments]
                                                      ;(log/error "DERP" appointment)
                                                      ^{:key (ui-utils/key-for appointment)}
                                                      [:tr
                                                         [:td [:a {:href (routes/app-path-for :appointments/show :id (:id appointment))}
                                                               (ui-utils/date->str (:date appointment))]]
                                                         [:td [:a {:href (routes/app-path-for :employees/show :id (get-in appointment [:employee :id]))}
                                                               (person->str (:employee appointment))]]]))]]]]
                    [:div.row [:div.col-lg-12.text-muted (l18n/t :patients/no-appointments)]])]])))

(defn patient-form-fields-component [patient errors {:keys [on-submit submit-button-text] :as opts}]
  (let [form-input (ui-utils/make-form-field-maker patient errors {:l18n-scopes [:patients :personal-information]})]
    [:form
     [:div.row
      [:div.col-lg-4 [form-input :firstname]]
      [:div.col-lg-4 [form-input :surname]]]
     [:div.row
      [:div.col-lg-2 [form-input :personal-id]]]
     [:hr]
     [:div.row
      [:div.col-lg-6 [form-input :street-name]]
      [:div.col-lg-1 [form-input :flat-number]]
      [:div.col-lg-1 [form-input :house-number]]]
     [:div.row
      [:div.col-lg-1 [form-input :zip-code]]
      [:div.col-lg-4 [form-input :city]]
      [:div.col-lg-3 [form-input :country]]]
     [:a.btn.btn-success {:on-click on-submit} submit-button-text]]))

(def empty-patient
  {:firstname      ""
   :surname        ""
   :personal-id    ""
   :street-name    ""
   :flat-number    ""
   :house-number   ""
   :zip-code       ""
   :city           ""
   :country        ""
   })

(defn patient-create-form-component []
  (let [patient (reagent/atom empty-patient)
        errors  (reagent/atom {})
        on-submit (fn [e]
                    (api/create-patient @patient
                                        (fn [result]
                                          (match result
                                                 [:success ({:id id} :as response)] (do
                                                                                      ;(reset! patient response)
                                                                                      (log/debug "received response" response)
                                                                                      (history/navigate-to! (routes/app-path-for :patients/show :id id)))
                                                 [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                               ;(reset! patient response)
                                                                                               (log/error "received response" response)
                                                                                               (reset! errors errors')))))
                          (.preventDefault e))]
    (fn []
      [:div
       [:h1 (l18n/t :patients/create-patient)]
       [patient-form-fields-component patient errors {:on-submit on-submit :submit-button-text (l18n/t :patients/create-patient)}]])))

(defn patient-edit-form-component []
  (let [patient-id (:id @logic/current-params)
        patient (reagent/atom {})
        errors  (reagent/atom {})
        on-submit (fn [e] (api/update-patient @patient
                                              (fn [result]
                                                (match result
                                                       [:success ({:id id} :as response)] (do
                                                                                            ;(reset! patient response)
                                                                                            (log/debug "received response" response)
                                                                                            (history/navigate-to! (routes/app-path-for :patients/show :id id)))
                                                       [:error   {:response ({:errors errors'} :as response)}] (do
                                                                                                     ;(reset! patient response)
                                                                                                     (log/error "received response" response)
                                                                                                     (reset! errors errors')))))
                    (.preventDefault e))]
    (api/get-patient {:id patient-id}
                     (fn [result]
                       (match result
                              [:success ({:id id} :as response)] (do
                                                                   (log/debug "received response" response)
                                                                   (reset! patient (dissoc response :class :medical-visits :prescription)))
                              [:error   {:response ({:errors errors'} :as response)}] (log/error "received response" response))))
    (fn []
      [:div
       [:h2 (l18n/t :patients/edit-patient)]
       [patient-form-fields-component patient errors {:on-submit on-submit :submit-button-text (l18n/t :patients/edit-patient)}]])))
