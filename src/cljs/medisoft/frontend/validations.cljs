(ns medisoft.frontend.validations
  (:require [bouncer.core :as bouncer]
            [bouncer.validators :as validators]))

(defn validate [data & validations]
  (let [[errors _] (apply bouncer/validate data validations)]
    errors))

(defn valid? [errors]
  (empty? errors))

(defn login-form [data]
  (validate data
            :login    validators/required
            :password validators/required))
