(ns medisoft.frontend.ui.application
  ; (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent]
            [re-com.core :as rc-core]
    ;[cljs.core.async :as async :refer [<! >!]]
            [cljs.core.match :refer-macros [match]]
            [cuerdas.core :as str]

            [medisoft.frontend.api :as api]
            [medisoft.frontend.ui.utils :as ui-utils]

            [medisoft.frontend.log :as log]
            [medisoft.frontend.validations :as validations]
            [medisoft.frontend.routes :as routes]))

(defonce current-page   (reagent/atom :home/dashboard))
(defonce current-params (reagent/atom {}))

(defn set-current-page! [page & [params]]
  (reset! current-page page)
  (reset! current-params (or params {})))

(defonce show-login-dialog? (reagent/atom false))

; INFO: can't do it the nice way due to Bootstrap styling : X
(defn dropdown-menu-component []
  (let [dropdown-open?        (reagent/atom false)
        component-blur-closer (atom nil)]
    (reagent/create-class
      {:display-name        "dropdown-menu"
       :component-did-mount (fn [component] (.addEventListener js/document "click"
                                                               (reset! component-blur-closer
                                                                       (ui-utils/make-component-blur-notifier (reagent/dom-node component)
                                                                                                              #(reset! dropdown-open? false)))))
       :component-will-unmount (fn [_] (.removeEventListener js/document "click" @component-blur-closer))
       :reagent-render  (fn []
                          [:li.dropdown {:class    (when @dropdown-open? "open")}
                           [:a.dropdown-toggle {:href "#"
                                                :on-click (fn [e] (swap! dropdown-open? not)
                                                            (.preventDefault e))}
                            "Menu" [:span.caret]]
                           [:ul.dropdown-menu
                            [:li [:a {:href "#"
                                      :on-click (fn [e] (api/set-api-token! nil)
                                                  (.preventDefault e))}
                                  "Log out"]]]])})))

;(defn dropdown-menu-component []
;  (let [dropdown-open? (reagent/atom false)]
;    (fn []
;    [ui-utils/detect-outside-click-component {:callback #(reset! dropdown-open? false)}
;     [:li.dropdown {:class    (when @dropdown-open? "open")}
;      [:a.dropdown-toggle {:href "#"
;                           :on-click (fn [e] (swap! dropdown-open? not)
;                                       (.preventDefault e))}
;       "Menu" [:span.caret]]
;      [:ul.dropdown-menu
;       [:li [:a {:href "#"
;                 :on-click (fn [e] (api/set-api-token! nil)
;                             (.preventDefault e))}
;             "Log out"]]]]])))

(defn user-component []
  (if @api/logged-in?
    [:ul.nav.navbar-nav.navbar-right
     [:li.navbar-text "Logged in"]
     [dropdown-menu-component]]
    [:a.btn.btn-info.navbar-btn.navbar-right {:on-click (fn [e] (reset! show-login-dialog? true) (.preventDefault e))} "Log in"]))

(defn header-component []
  [:nav.navbar.navbar-inverse.navbar-fixed-top
   [:div.container
    [:div.navbard-header
     [:a.navbar-brand {:href (routes/app-path-for :home/dashboard)} "MediApp"]]
    [:div.navbar-collapse.collapse
     [user-component]
     [:ul.nav.navbar-nav.navbar-right
      (if @api/logged-in?
        [:li [:a {:href (routes/app-path-for :patients/list)} "Patients"]])]]]])

(defn nav-component []
  [rc-core/box :size "150px" :child "Nav"])

(defn content-component []
  [rc-core/box :child "Content"])

(defn dashboard-component []
  [rc-core/h-box :size "1"
   :children [[nav-component]
              [content-component]]])

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
                                             [:tr [:td (:firstname patient)]
                                                  [:td (:surname patient)]
                                                  [:td (:personal-id patient)]
                                                  [:td (address-for-patient patient)]
                                                  [:td [:a.btn.btn-primary {:href (routes/app-path-for :patients/show :id (:id patient))} "Show"]
                                                       [:a.btn.btn-primary {:href (routes/app-path-for :patients/edit :id (:id patient))} "Edit"]]]))]
              [:div "No patients to display."])])))

(defn patient-show-component []
  #_[:div "welp"]
  (let [patient-id (:id @current-params)
        patient    (reagent/atom {})]
    (api/get-patient {:id patient-id} (fn [result] (match result
                                              [:success response] (do
                                                                    (reset! patient response)
                                                                    (log/debug "received response" response))
                                              [:error   _] :nothing)))
    (fn []
      [:div [:div.clearfix [:div.pull-right [:a.btn.btn-primary {:href (if-let [patient-id (:id @patient)]
                                                                         (routes/app-path-for :patients/edit :id patient-id))}
                                                                "Edit patient"]]]
            [:div [:h2 (:firstname @patient) " " (:surname @patient)]
                  [:hr]
                  [:div.row [:div.col-lg-3 [:b "Personal ID"] [:br]
                                           (:personal-id @patient)]
                            [:div.col-lg-3 [:b "Address"] [:br]
                                           (address-for-patient @patient)]]]])))

(defn labelize [str]
  (str/titleize (str/humanize (name str))))

;(defn make-form-field-maker [atom]
;  (let [] ;atom atom]
;    (fn [name' opts]
;      ; (log/debug "welp:" atom name' (get @atom name'))
;      [:div.form-group
;        [:label (labelize name')]
;        [:input.form-control {:name name'
;                              :value (or (get @atom name') "")
;                              :on-change #(swap! atom assoc name' (.. % -target -value))}]])))

(defn make-form-field-maker [data errors]
  (let [] ;atom atom]
    (fn [name' opts]
      ; (log/debug "welp:" atom name' (get @atom name'))
      [rc-core/v-box :class    "form-group"
       :children [[:label #_{:for "login-form-login"} (labelize name')]
                  [rc-core/input-text :model (or (get @data name') "")
                   :on-change   #(swap! data assoc name' %)
                   ;:placeholder "Enter login"
                   :class       "form-control"
                   :width "100%"
                   :status      (when (get @errors name') :error)
                   ;:attr        {:id "login-form-login"}
                   ]
                  (when (name' @errors) [rc-core/label :label (str/join ", " (name' @errors))
                                          :style {:padding-top "10px"}
                                          :class "text-danger"])]])))

(defn patient-create-form-component []
  (let [patient (reagent/atom {})
        errors  (reagent/atom {})
        on-submit (fn [e] (api/create-patient @patient (fn [result] (match result
                                                                                [:success ({:id id} :as response)] (do
                                                                                                      ;(reset! patient response)
                                                                                                      (log/debug "received response" response)
                                                                                                      (set! (.-location js/window) (routes/app-path-for :patients/show :id id)))
                                                                                [:error   ({:errors errors'} :as response)] (do
                                                                                               ;(reset! patient response)
                                                                                               (log/error "received response" response)
                                                                                               (reset! errors errors')))))
                          (.preventDefault e))
        form-input (make-form-field-maker patient errors)]
    (fn []
      [:div "patient create form"
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
            [:a.btn.btn-danger {:on-click on-submit} "BREAK STUFF!"]])))

(defn patient-edit-form-component []
  [:div "patient edit form"])

(defn main-component []
  [:div.container {:style {:flex "1 1 0px" :padding "70px 0px 20px 0px"}}
   (match @current-page
          :home/dashboard  [dashboard-component]
          :patients/list   [patient-list-component]
          :patients/show   [patient-show-component]
          :patients/create [patient-create-form-component]
          :patients/edit   [patient-edit-form-component])])

(defn footer-component []
  [:footer
   [:div.container
    [:p.text-muted "Footer"]]]
  #_[rc-core/h-box :children ["Footer"]])

(defn login-fields-component [form-data & [{:keys [errors] :as options}]]
  (log/debug "options:" options)
  [rc-core/v-box :padding "10px"
   :children [[:h2 "Please log in"]
              [rc-core/v-box :class    "form-group"
               :children [[:label {:for "login-form-login"} "Login"]
                          [rc-core/input-text :model (:login @form-data)
                           :on-change   #(swap! form-data assoc :login %)
                           :placeholder "Enter login"
                           :class       "form-control"
                           :status      (when (:login @errors) :error)
                           :attr        {:id "login-form-login"}]
                          (when (:login @errors) [rc-core/label :label (str/join ", " (:login @errors))
                                                  :style {:padding-top "10px"}
                                                  :class "text-danger"])]]

              [rc-core/v-box :class    "form-group"
               :children [[:label {:for "login-form-password"} "Password"]
                          [rc-core/input-text :model (:password @form-data)
                           :on-change   #(swap! form-data assoc :password %)
                           :placeholder "Enter password"
                           :class       "form-control"
                           :status      (when (:password @errors) :error)
                           :attr        {:id "login-form-password" :type :password}]
                          (when (:password @errors) [rc-core/label :label (str/join ", " (:password @errors))
                                                     :style {:padding-top "10px"}
                                                     :class "text-danger"])]]

              [rc-core/line :style {:margin "0 0 15px"}]

              [rc-core/h-box :class    "actions"
               :gap      "12px"
               :children [[rc-core/button :label "Log in"
                           :style {:flex "1"}
                           :class "btn-primary"
                           :on-click (:on-submit options)]
                          [rc-core/button :label "Cancel"
                           :class "btn-danger"
                           :on-click (:on-cancel options)]]]]])

(defn login-component []
  (let [form-data        (reagent/atom {:login "" :password ""})
        form-errors      (reagent/atom {})
        form-processing? (reagent/atom false)
        on-cancel        #(reset! show-login-dialog? false)
        on-submit        (fn []
                           (log/debug "form values" @form-data)
                           (let [validation-errors (validations/login-form @form-data)]
                             (reset! form-errors validation-errors)
                             (when-not validation-errors
                               (reset! form-processing? true)
                               (api/log-in @form-data
                                           (fn [result]
                                             (match result
                                                    [:success response] (do
                                                                          (reset! form-processing? false)
                                                                          (reset! show-login-dialog? false)
                                                                          (api/set-api-token! (:access-token response))
                                                                          #_(reset! logged-in? true))
                                                    [:error   {:errors errors}] (do
                                                                                  (reset! form-errors errors)
                                                                                  (reset! form-processing? false))))))))]
    [ui-utils/loading-component form-processing? [login-fields-component form-data {:errors form-errors
                                                                                    :on-cancel on-cancel
                                                                                    :on-submit on-submit}]]))

(defn dialogs-component []
  [:div.dialog-holder (when @show-login-dialog? [rc-core/modal-panel :child [login-component]])])

(defn application-component []
  [rc-core/v-box :min-height "100%"
   :children [[header-component]
              [main-component]
              [footer-component]
              [dialogs-component]]])