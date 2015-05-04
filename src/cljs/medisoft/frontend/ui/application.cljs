(ns medisoft.frontend.ui.application
  ; (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent]
            [re-com.core :as rc-core]
    ;[cljs.core.async :as async :refer [<! >!]]
            [cljs.core.match :refer-macros [match]]
            [cuerdas.core :as str]

            [medisoft.frontend.api :as api]
            [medisoft.frontend.ui.utils :as ui-utils]
            [medisoft.frontend.ui.dashboard :as dashboard]
            [medisoft.frontend.ui.job-titles :as job-titles]
            [medisoft.frontend.ui.employees :as employees]

            [medisoft.frontend.log :as log]
            [medisoft.frontend.validations :as validations]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.ui.patients :as patients]
            [medisoft.frontend.logic :as logic]))

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
      (when @api/logged-in?
        [:ul.nav.navbar-nav.navbar-right
          [:li [:a {:href (routes/app-path-for :job-titles/list)} "Job Titles"]]
          [:li [:a {:href (routes/app-path-for :employees/list)} "Employees"]]
          [:li [:a {:href (routes/app-path-for :patients/list)} "Patients"]]])]]])

(defn main-component []
  [:div.container {:style {:flex "1 1 0px" :padding "70px 0px 20px 0px"}}
   (if @api/logged-in?
     (match @logic/current-page
            :home/dashboard  [dashboard/dashboard-component]

            :job-titles/list   [job-titles/job-title-list-component]
            :job-titles/show   [job-titles/job-title-show-component]
            :job-titles/create [job-titles/job-title-create-form-component]
            :job-titles/edit   [job-titles/job-title-edit-form-component]

            :employees/list   [employees/employee-list-component]
            :employees/show   [employees/employee-show-component]
            :employees/create [employees/employee-create-form-component]
            :employees/edit   [employees/employee-edit-form-component]

            :patients/list   [patients/patient-list-component]
            :patients/show   [patients/patient-show-component]
            :patients/create [patients/patient-create-form-component]
            :patients/edit   [patients/patient-edit-form-component])
     [dashboard/dashboard-component])])

(defn footer-component []
  [:footer
   [:div.container
    [:p.text-muted "Footer"]]]
  #_[rc-core/h-box :children ["Footer"]])

(defn login-fields-component [form-data & [{:keys [errors] :as options}]]
  (log/debug "options:" options)
  (let [form-input (ui-utils/make-form-field-maker form-data errors)]
    [rc-core/v-box :padding "10px"
                   :children [[:h2 "Please log in"]
                              [form-input :login]
                              [form-input :password]

                              [rc-core/line :style {:margin "0 0 15px"}]

                              [rc-core/h-box :class    "actions"
                                             :gap      "12px"
                                             :children [[rc-core/button :label "Log in"
                                                                        :style {:flex "1"}
                                                                        :class "btn-primary"
                                                                        :on-click (:on-submit options)]
                                                        [rc-core/button :label "Cancel"
                                                                        :class "btn-danger"
                                                                        :on-click (:on-cancel options)]]]]]))

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