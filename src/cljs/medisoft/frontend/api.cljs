(ns medisoft.frontend.api
  (:require [medisoft.frontend.api.core :as core]
            [medisoft.frontend.api.patients :as patients]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.log :as log]
            [medisoft.frontend.schemas :as schemas]))

;;

(def api-token core/api-token)
(def logged-in? core/logged-in?)
(def set-api-token! core/set-api-token!)

;; login API

(defn log-in [{:keys [login password]} callback]
  (core/api-call :post
                (routes/server-path-for :api.authentication/log-in)
                {:params          {:username login :password password} ; :date (time/now)}
                 :schema          {:request  schemas/LoginRequest
                                   :response schemas/LoginResponse}
                 :response-fn     callback}))

;; patients API

(def list-patients patients/list)
(def get-patient patients/get)
(def create-patient patients/create)
(def update-patient patients/update)

;; employees