(ns medisoft.frontend.utils
  (:require [cljs-time.format :as time-format]
            [cljs-time.core :as time]))

(defn string->keyword [s]
  (if (string? s) (keyword s) s))

(def time-formatter (time-format/formatters :rfc822))

(defn str->clj-time [str]
  (time-format/parse time-formatter str))

(defn clj-time->str [time]
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
