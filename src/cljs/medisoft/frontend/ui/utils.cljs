(ns medisoft.frontend.ui.utils
  (:require [reagent.core :as reagent]
            [medisoft.frontend.utils :as utils]))

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