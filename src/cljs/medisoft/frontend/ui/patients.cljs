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
            [medisoft.frontend.history :as history]))

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
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-success {:href (routes/app-path-for :patients/create)} "New patient"]]]
            (if (> (count @patients) 0)
              [:table.table.table-hover [:thead [:th "First name"]
                                                [:th "Surname"]
                                                [:th "Personal ID"]
                                                [:th "Address"]
                                                [:th {:style {:width "200px"}} "Actions"]]
                                    (doall (for [patient @patients]
                                             ^{:key (ui-utils/key-for patient)}
                                             [:tr [:td (:firstname patient)]
                                                  [:td (:surname patient)]
                                                  [:td (:personal-id patient)]
                                                  [:td (address-for-patient patient)]
                                                  [:td [:a.btn.btn-primary {:href (routes/app-path-for :patients/show :id (:id patient))} "Show"]
                                                       [:a.btn.btn-primary {:href (routes/app-path-for :patients/edit :id (:id patient))} "Edit"]]]))]
              [:div "No patients to display."])])))

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
                                                                "Edit patient"]]]
            [:div [:h2 (:firstname @patient) " " (:surname @patient)]
                  [:hr]
                  [:div.row [:div.col-lg-3 [:b "Personal ID"] [:br]
                                           (:personal-id @patient)]
                            [:div.col-lg-3 [:b "Address"] [:br]
                                           (address-for-patient @patient)]]
                  [:h2 "Wizyty"]
                  [:hr]
                  (if-let [appointments (seq (:medical-visits @patient))]
                    [:div.row [:div.col-lg-12
                                  [:table.table.table-hover
                                         [:thead
                                            [:th "Data"]
                                            [:th "Lekarz"]]
                                          [:tbody
                                           (doall (for [appointment appointments]
                                                      ;(log/error "DERP" appointment)
                                                      ^{:key (ui-utils/key-for appointment)}
                                                      [:tr
                                                         [:td [:a {:href (routes/app-path-for :appointments/show :id (:id appointment))}
                                                               (ui-utils/date->str (:date appointment))]]
                                                         [:td [:a {:href (routes/app-path-for :employees/show :id (get-in appointment [:employee :id]))}
                                                               (person->str (:employee appointment))]]]))]]]]
                    [:div.row [:div.col-lg-12.text-muted "Brak wizyt"]])]])))

(defn patient-form-fields-component [patient errors {:keys [on-submit submit-button-text] :as opts}]
  (let [form-input (ui-utils/make-form-field-maker patient errors)]
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
      [:div "patient create form"
       [patient-form-fields-component patient errors {:on-submit on-submit :submit-button-text "Create"}]])))

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
      [:div "patient edit form"
       [patient-form-fields-component patient errors {:on-submit on-submit :submit-button-text "Edit"}]])))
