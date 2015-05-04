(ns medisoft.frontend.ui.utils
  (:require [reagent.core :as reagent]
            [medisoft.frontend.utils :as utils]
            [cuerdas.core :as str]
            [re-com.core :as rc-core]
            [medisoft.frontend.ui.dropdown :as dropdown]
            [medisoft.frontend.log :as log]))

(defn- node-has-parent-pred? [node pred]
  (loop [node (.-parentNode node)]
    (if (not= node js/document)
      (or (pred node)
          (recur (.-parentNode node)))
      false)))

(defn node-has-parent? [node parent-or-pred]
  (cond
    (fn? parent-or-pred) (node-has-parent-pred? node parent-or-pred)
    :else                (node-has-parent-pred? node #(= % parent-or-pred))))

(def css-transition-group (reagent/adapt-react-class (aget js/React "addons" "CSSTransitionGroup")))

(defn loading-component [is-loading? component]
  (let [is-loading? (utils/realised is-loading?)]
    [:div.loading-wrapper
     [:div.loading-element-wrapper {:class (when is-loading? "loading-active")} component]
     [css-transition-group {:transitionName "loading-indicator-transition"}
      (when is-loading? [:div.loading-indicator-wrapper [:div.loading-indicator]])]]))

(defn make-component-blur-notifier [node callback]
  (fn [e]
    (when-not (node-has-parent? (.-target e) node)
      (callback))))

(defn detect-outside-click-component [options & contents]
  (let [component-blur-notifier (atom nil)
        callback                (or (:callback options) #())]
    (reagent/create-class
      {:component-did-mount (fn [component] (.addEventListener js/document "click"
                                                               (reset! component-blur-notifier
                                                                       (make-component-blur-notifier (reagent/dom-node component)
                                                                                                     callback))))
       :component-will-unmount (fn [_] (.removeEventListener js/document "click" @component-blur-notifier))
       :reagent-render         (fn [_ & contents]
                                 (vec (cons :span contents)))})))

(defn labelize [str]
  (str/titleize (str/humanize (name str))))

(defmulti form-field-component (fn [_ opts] (:type opts)))

(defmethod form-field-component :input [name' {:keys [data errors] :as opts}]
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
                                     :class "text-danger"])]])

(defmethod form-field-component :select [name' {:keys [data errors choices model on-change] :as opts}]
  [rc-core/v-box :class    "form-group"
   :children [[:label #_{:for "login-form-login"} (labelize name')]
              [dropdown/single-dropdown :choices choices
                                        :model   (or model (get @data name') "")
                                        :class   (str/join " " [(when (get @errors name') "has-error")])
                                        :label-fn (fn [choice] (:name choice))
                                        :width "100%"
                                        :filter-box? true
                                        :on-change (or on-change #(swap! data assoc name' %))]
              (when (name' @errors) [rc-core/label :label (str/join ", " (name' @errors))
                                                   :style {:padding-top "10px"}
                                                   :class "text-danger"])]])

(defmethod form-field-component :checkbox [name' {:keys [data errors] :as opts}]
  (log/debug "checkbox data" opts)
  [rc-core/v-box :class    "form-group"
                 :children [[:label #_{:for "login-form-login"} (labelize name')]
                            [rc-core/checkbox  :model (or (get @data name') false)
                                               :on-change #(do (log/debug "SWAPPING!" %) (swap! data assoc name' %))]]])

(defn make-form-field-maker [data errors]
  (let [default-opts {:type :input}] ;atom atom]
    (fn [name' opts]
      (form-field-component name' (merge default-opts opts {:data data :errors errors}))
      )))

(defn key-for [entity]
  (let [class (str/dasherize (last (str/split (:class entity) ".")))
        id    (:id entity)]
    (str class ":" id)))