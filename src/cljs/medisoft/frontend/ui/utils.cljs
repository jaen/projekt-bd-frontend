(ns medisoft.frontend.ui.utils
  (:require [reagent.core :as reagent]
            [medisoft.frontend.utils :as utils]
            [cuerdas.core :as str]
            [re-com.core :as rc-core]
            [medisoft.frontend.ui.dropdown :as dropdown]
            [medisoft.frontend.ui.input-time :as input-time]
            [medisoft.frontend.ui.datepicker :as datepicker]
            [medisoft.frontend.log :as log]
            [cljs-time.core :as time]
            [cljs-time.format :as time-format]
            [reagent.ratom :as ratom]
            ;[medisoft.frontend.ui.utils :as ui-utils]
            [reagent.ratom :as ratom :include-macros true]))

(defn date->str [date]
  (if date
    (time-format/unparse (time-format/formatter "yyyy-MM-dd") date)
    ""))

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

(defn labelize [str-arr]
  (str/titleize (str/humanize (str/join " " (map name str-arr)))))

(defmulti form-field-component (fn [_ opts] (:type opts)))

(defmethod form-field-component :input [name' {:keys [data errors] :as opts}]
  [rc-core/v-box :class    "form-group"
   :children [[:label #_{:for "login-form-login"} (or (:label opts) (labelize name'))]
              [rc-core/input-text :model (or (get-in @data name') "")
                                  :on-change   #(swap! data assoc name' %)
                                  ;:placeholder "Enter login"
                                  :class       "form-control"
                                  :width "100%"
                                  :status      (when (get-in @errors name') :error)
                                  ;:attr        {:id "login-form-login"}
                                  ]
              (when (get-in @errors name') [rc-core/label :label (str/join ", " (name' @errors))
                                     :style {:padding-top "10px"}
                                     :class "text-danger"])]])

(defmethod form-field-component :password [name' {:keys [data errors] :as opts}]
  [rc-core/v-box :class    "form-group"
   :children [[:label #_{:for "login-form-login"} (or (:label opts) (labelize name'))]
              [rc-core/input-text :model (or (get-in @data name') "")
                                  :on-change   #(swap! data assoc name' %)
                                  ;:placeholder "Enter login"
                                  :class       "form-control"
                                  :width "100%"
                                  :status      (when (get-in @errors name') :error)
                                  :attr        {:type :password}]
              (when (get-in @errors name') [rc-core/label :label (str/join ", " (name' @errors))
                                     :style {:padding-top "10px"}
                                     :class "text-danger"])]])

(defmethod form-field-component :select [name' {:keys [data errors choices model on-change label-fn selected-label-fn] :as opts}]
  [rc-core/v-box :class    "form-group"
   :children [[:label #_{:for "login-form-login"} (or (:label opts) (labelize name'))]
              [dropdown/single-dropdown :choices choices
                                        :model   (or model (get-in @data name') "")
                                        :class   (str/join " " [(when (get-in @errors name') "has-error")])
                                        :label-fn (or label-fn #(:label %)) ; (fn [choice] (:name choice))
                                        :selected-label-fn selected-label-fn
                                        :width "100%"
                                        :filter-box? true
                                        :on-change (or on-change #(swap! data assoc name' %))]
              (when (get-in @errors name') [rc-core/label :label (str/join ", " (name' @errors))
                                                   :style {:padding-top "10px"}
                                                   :class "text-danger"])]])

(defmethod form-field-component :date [name' {:keys [data errors model on-change disabled-dates marked-dates] :as opts}]
  [rc-core/v-box :class    "form-group"
   :children [[:label #_{:for "login-form-login"} (or (:label opts) (labelize name'))]
              [datepicker/datepicker-dropdown
               :model   (or model (get-in @data name') (atom (time/now)))
               :class   (str/join " " [(when (get-in @errors name') "has-error")])
               :disabled-dates (or disabled-dates (atom []))
               :marked-dates (or marked-dates (atom []))
               ;:style {:width "100%"}
               :on-change (or on-change #(swap! data assoc name' %))]
              (when (get-in @errors name') [rc-core/label :label (str/join ", " (name' @errors))
                                     :style {:padding-top "10px"}
                                     :class "text-danger"])]])

(defmethod form-field-component :time [name' {:keys [data errors model on-change] :as opts}]
  [rc-core/v-box :class    "form-group"
   :children [[:label #_{:for "login-form-login"} (or (:label opts) (labelize name'))]
              [input-time/input-time
               :model   (or model (get-in @data name') "1337")
               :class   (str/join " " [(when (get-in @errors name') "has-error")])
               :show-icon? true
               ;:style {:width "100%"}
               :on-change (or on-change #(swap! data assoc name' %))]
              (when (get-in @errors name') [rc-core/label :label (str/join ", " (name' @errors))
                                     :style {:padding-top "10px"}
                                     :class "text-danger"])]])

(declare datetime->int)
(declare update-datetime-time)

(defmethod form-field-component :date-time [name' {:keys [data errors model on-change disabled-dates marked-dates] :as opts}]
  (let [date-model (ratom/reaction (or (utils/realised model) (get @data name') (atom (time/now))))
        time-model (ratom/reaction (or (datetime->int (utils/realised model)) (get @data name') "1337"))
        on-change-fn (or on-change #(swap! data assoc name' %))]
  [rc-core/v-box :class    "form-group"
   :children [[:label #_{:for "login-form-login"} (or (:label opts) (labelize name'))]
              [rc-core/h-box
               :gap "10px"
               :children [
                          [input-time/input-time
                           :model   time-model
                           :class   (str/join " " [(when (get-in @errors name') "has-error")])
                           :show-icon? true
                           ;:style {:width "100%"}
                           :on-change (fn [new-time]
                                        (let [old-date @date-model]
                                          ; (log/debug "old:" old)
                                          (let [new-date (update-datetime-time old-date new-time)]
                                            (log/debug "new:" new-date)
                                            (on-change-fn new-date))))
                           #_(or on-change #(swap! data assoc name' %))]
                          [datepicker/datepicker-dropdown
                           :model   date-model
                           :class   (str/join " " [(when (get-in @errors name') "has-error")])
                           :disabled-dates (or disabled-dates (atom []))
                           :marked-dates (or marked-dates (atom []))
                           ;:style {:width "100%"}
                           :on-change (fn [new-date]
                                        (let [old-date @date-model]
                                        ; (log/debug "old:" old)
                                        (let [int-time (datetime->int old-date)
                                              new-date (update-datetime-time new-date int-time)]
                                          (log/debug "new:" new-date)
                                          (on-change-fn new-date))))

                           #_(or on-change #(swap! data assoc name' %))]
                          ]]
              (when (get-in @errors name') [rc-core/label :label (str/join ", " (name' @errors))
                                     :style {:padding-top "10px"}
                                     :class "text-danger"])]]))


;(defmethod form-field-component :date-time [name' {:keys [data errors choices model on-change label-fn] :as opts}]
;  [rc-core/v-box :class    "form-group"
;   :children [[:label #_{:for "login-form-login"} (or (:label opts) (labelize name'))]
;              [dropdown/single-dropdown :choices choices
;               :model   (or model (get @data name') "")
;               :class   (str/join " " [(when (get @errors name') "has-error")])
;               :label-fn (or label-fn #(:label %)) ; (fn [choice] (:name choice))
;               :width "100%"
;               :filter-box? true
;               :on-change (or on-change #(swap! data assoc name' %))]
;              (when (name' @errors) [rc-core/label :label (str/join ", " (name' @errors))
;                                     :style {:padding-top "10px"}
;                                     :class "text-danger"])]])

(defmethod form-field-component :checkbox [name' {:keys [data errors] :as opts}]
  (log/debug "checkbox data" opts)
  [rc-core/v-box :class    "form-group"
                 :children [[:label #_{:for "login-form-login"} (or (:label data) (labelize name'))]
                            [rc-core/checkbox  :model (or (get @data name') false)
                                               :on-change #(do (log/debug "SWAPPING!" %) (swap! data assoc name' %))]]])

(defn make-form-field-maker [data errors]
  (let [default-opts {:type :input}] ;atom atom]
    (fn [name' opts]
      (let [new-name (mapv keyword (flatten [name']))]
        (form-field-component new-name (merge default-opts opts {:data data :errors errors}))))))

(defn key-for [entity]
  (let [class (str/dasherize (last (str/split (:class entity) ".")))
        id    (:id entity)]
    (str class ":" id)))

(defn datetime->int [date-time]
  (if date-time
    (let [hour   (.getHours date-time) ; TODO: fix timezones
          minute (.getMinutes date-time)]
      (log/debug "time conversion:" hour minute)
      (+ (* hour 100) minute))
    0))

(defn int->hour-min-pair [int]
  (when int
    (let [hour (quot int 100)
          min  (mod int 100)]
      [hour min])))

(defn update-datetime-time [date-time int-time]
  (when date-time
    (let [[hour min] (int->hour-min-pair int-time)]
      (doto date-time
        (.setHours hour)
        (.setMinutes min)
        (.setSeconds 0)))
    date-time))

(defn address-for [patient]
  [:span (:street-name patient) " " (:house-number patient) "/" (:flat-number patient) [:br]
   (:zip-code patient) " " (:city patient) ", " (:country patient)])