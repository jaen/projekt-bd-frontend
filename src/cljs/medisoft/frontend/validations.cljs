(ns medisoft.frontend.validations
  (:require [bouncer.core :as bouncer]
            [bouncer.validators :as validators]
            [medisoft.frontend.log :as log]
            [medisoft.frontend.l18n :as l18n]))

(defn message-fn [{:keys [path value metadata] :as m}]
  (log/debug "formatting error message:" m)
  (let [key     (l18n/t (keyword "common" (name (last path))))
        message (l18n/t (:validator metadata) key)]
    message))

(defn validate [data & validations]
  (let [[errors _] (apply bouncer/validate message-fn data validations)]
    errors))

(defn valid? [errors]
  (empty? errors))

(defn login-form [data]
  (validate data
            :login    validators/required
            :password validators/required))
