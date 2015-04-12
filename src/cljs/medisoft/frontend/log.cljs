(ns medisoft.frontend.log
  (:require
    [cljs-time.core :as time]
    [cljs-time.format :as time-format]))

(defn info [& args]
  (let [preamble "" #_(str (time-format/unparse (time-format/formatters :date-time) (time/now)) ":")]
    (.apply (aget js/console "log") js/console (into-array (cons preamble args)))))