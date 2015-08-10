(ns medisoft.frontend.utils
  (:require [cljs-time.format :as time-format]
            [cljs-time.core :as time]
            [cuerdas.core :as str]))

(defn string->keyword [s]
  (if (string? s) (keyword s) s))

(def time-formatter
  (time-format/formatter "yyyy-MM-dd'T'HH:mm:ss.SSS")
  #_(time-format/formatters :date-time))

(defn string->clj-time [str]
  (when-not (str/blank? str)
    (time-format/parse time-formatter str)))

(defn clj-time->string [time]
  (time-format/unparse time-formatter time))

(defn derefable?
  "true if obj is an instance of clojure.lang.IDeref"
  [obj]
  (satisfies? IDeref obj))

(defn realised [val & args]
  (cond (derefable? val) @val
        (fn? val)        (apply val args)
        :else            val))

(def slice
  (let [native-slice (.. js/Array -prototype -slice)]
    (fn [obj] (.call native-slice obj))))
