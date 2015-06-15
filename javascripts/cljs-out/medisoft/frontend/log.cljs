(ns medisoft.frontend.log
  (:require
    [cljs-time.core :as time]
    [cljs-time.format :as time-format]))

(defn- get-preamble []
  "" #_(str (time-format/unparse (time-format/formatters :date-time) (time/now)) ":"))

(defn trace [& args]
  (let [preamble (get-preamble)]
    (.apply (aget js/console "trace") js/console (into-array (cons preamble args)))))

(defn debug [& args]
  (let [preamble (get-preamble)]
    (.apply (aget js/console "debug") js/console (into-array (cons preamble args)))))

(defn info [& args]
  (let [preamble (get-preamble)]
    (.apply (aget js/console "log") js/console (into-array (cons preamble args)))))

(defn warn [& args]
  (let [preamble (get-preamble)]
    (.apply (aget js/console "warn") js/console (into-array (cons preamble args)))))

(defn error [& args]
  (let [preamble (get-preamble)]
    (.apply (aget js/console "error") js/console (into-array (cons preamble args)))))