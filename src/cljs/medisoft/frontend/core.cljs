(ns medisoft.frontend.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core   :as reagent]
            [re-com.core    :as rc-core]
            [cljs.core.async :as async :refer [<! >!]]
            [devtools.core :as devtools]
            [cljs.core.match :refer-macros [match]]
            [ajax.core :as ajax]
            [cuerdas.core :as str]

            [medisoft.frontend.log :as log]
            [medisoft.frontend.validations :as validations]))

(defn install-devtools []
  (devtools/install!))

(defonce logged-in? (reagent/atom false))
(defonce show-login-dialog? (reagent/atom false))

; (.addEventListener js/document "onclick" (fn [e] (reset! dropdown-open? false)))

(defn derefable?
  "true if obj is an instance of clojure.lang.IDeref"
  [obj]
  (satisfies? IDeref obj))

(defn realised [val & args]
  (cond (derefable? val) @val
        (fn? val)        (apply val args)
        :else            val))

(def css-transition-group (reagent/adapt-react-class (aget js/React "addons" "CSSTransitionGroup")))

(defn loading-component [is-loading? component]
  (let [is-loading? (realised is-loading?)]
    [:div.loading-wrapper
     [:div.loading-element-wrapper {:class (when is-loading? "loading-active")} component]
     [css-transition-group {:transitionName "loading-indicator-transition"}
      (when is-loading? [:div.loading-indicator-wrapper [:div.loading-indicator]])]]))

(defn node-has-parent? [node parent]
  (loop [node (.-parentNode node)]
    (if node
      (if (= node parent)
          true
          (recur (.-parentNode node)))
      false)))

(defn make-component-blur-closer [node open-atom]
  (fn [e]
    (when-not (node-has-parent? (.-target e) node)
      (reset! open-atom false))))

(defn dropdown-menu []
  (let [dropdown-open?        (reagent/atom false)
        component-blur-closer (atom nil)]
    (reagent/create-class
      {:display-name        "dropdown-menu"
       :component-did-mount (fn [component] (.addEventListener js/document "click"
                                                               (reset! component-blur-closer
                                                                       (make-component-blur-closer (reagent/dom-node component)
                                                                                                   dropdown-open?))))
       :component-will-unmount (fn [_] (.removeEventListener js/document "click" @component-blur-closer))
       :reagent-render  (fn []
                          [:li.dropdown {:class    (when @dropdown-open? "open")}
                           [:a.dropdown-toggle {:href "#"
                                                :on-click (fn [e] (swap! dropdown-open? not)
                                                                  (.preventDefault e))}
                                               "Menu" [:span.caret]]
                           [:ul.dropdown-menu
                            [:li [:a {:href "#"
                                      :on-click (fn [e] (reset! logged-in? false)
                                                        (.preventDefault e))}
                                  "Log out"]]]])})))

(defn user-component []
  (if @logged-in?
    [:ul.nav.navbar-nav.navbar-right
      [:li.navbar-text "Logged in"]
      [dropdown-menu]]
    [:a.btn.btn-info.navbar-btn.navbar-right {:on-click (fn [e] (reset! show-login-dialog? true) (.preventDefault e))} "Log in"]))

(defn header-component []
  [:nav.navbar.navbar-inverse.navbar-fixed-top
    [:div.container
      [:div.navbard-header
        [:a.navbar-brand "MediApp"]]
      [:div.navbar-collapse.collapse
        [user-component]
        [:ul.nav.navbar-nav.navbar-right
          [:li [:a "Some Link"]]]]]])

(defn nav-component []
  [rc-core/box :size "150px" :child "Nav"])

(defn content-component []
  [rc-core/box :child "Content"])

(defn main-component []
  [rc-core/h-box :size "1"
                 :style {:padding "70px 20px 20px 20px"}
                 :children [[nav-component]
                            [content-component]]])

(defn footer-component []
  [:footer
    [:div.container
      [:p.text-muted "Footer"]]]
  #_[rc-core/h-box :children ["Footer"]])

(defn login-fields-component [form-data & [{:keys [errors] :as options}]]
  (log/info "options:" options)
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

(defn submit-login-form [data callback]
  (ajax/POST "/api/authentication/sign-in"
             {:params data
              :handler         (fn [response]
                                 (log/info "success:" response)
                                 (callback [:success response]))
              :error-handler   (fn [response]
                                 (log/info "error:" response)
                                 (callback [:error (:response response)]))
              :format          :json
              :response-format :json
              :keywords?       true}))

(defn login-component []
  (let [form-data        (reagent/atom {:login "" :password ""})
        form-errors      (reagent/atom {})
        form-processing? (reagent/atom false)
        on-cancel        #(reset! show-login-dialog? false)
        on-submit        (fn []
                           (log/info "form values" @form-data)
                           (let [validation-errors (validations/login-form @form-data)]
                             (reset! form-errors validation-errors)
                             (when-not validation-errors
                               (reset! form-processing? true)
                               (submit-login-form @form-data
                                                  (fn [result]
                                                    (match result
                                                           [:success response] (do
                                                                                 (reset! form-processing? false)
                                                                                 (reset! show-login-dialog? false)
                                                                                 (reset! logged-in? true))
                                                           [:error   {:errors errors}] (do
                                                                                         (reset! form-errors errors)
                                                                                         (reset! form-processing? false))))))))]
    [loading-component form-processing? [login-fields-component form-data {:errors form-errors
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

(defn mount-root []
  (reagent/render-component [application-component] (.-body js/document)))

(defn init! []
  (install-devtools)
  (mount-root))

#_(let [flat-button (.-RaisedButton js/MaterialUI)
          text-field  (.-TextField js/MaterialUI)]
      (rum/mount (text-field #js{"hintText" "Some Hint" "floatingLabelText" "Some Floating Label"})
                 #_(flat-button #js{"label" "Secondary" "secondary" true} nil)#_(label 5 "abc") (.-body js/document)))
