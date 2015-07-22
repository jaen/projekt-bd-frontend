(ns medisoft.frontend.api
  (:require [medisoft.frontend.api.core :as core]
            [medisoft.frontend.api.job-titles :as job-titles]
            [medisoft.frontend.api.employees :as employees]
            [medisoft.frontend.api.patients :as patients]
            [medisoft.frontend.api.medicines :as medicines]
            [medisoft.frontend.api.appointments :as appointments]
            [medisoft.frontend.api.rooms :as rooms]
            [medisoft.frontend.api.devices :as devices]

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

(defn validate-log-in [{:keys [login password]} callback]
  (core/api-call :post
                 (routes/server-path-for :api.authentication/validate-log-in)
                 {:params          {:username login :password password} ; :date (time/now)}
                  :schema          {:request  schemas/LoginValidateRequest
                                    :response schemas/LoginValidateResponse}
                  :response-fn     callback}))

;; job titles API

(def list-job-titles  job-titles/list)
(def get-job-title    job-titles/get)
(def create-job-title job-titles/create)
(def update-job-title job-titles/update)


;; employees API

(def list-employees  employees/list)
(def get-employee    employees/get)
(def create-employee employees/create)
(def update-employee employees/update)


;; patients API

(def list-patients  patients/list)
(def get-patient    patients/get)
(def create-patient patients/create)
(def update-patient patients/update)


;; medicines API

(def list-medicines  medicines/list)
(def get-medicine    medicines/get)
(def create-medicine medicines/create)
(def update-medicine medicines/update)

;; appointments API

(def list-appointments  appointments/list)
(def get-appointment    appointments/get)
(def create-appointment appointments/create)
(def update-appointment appointments/update)

;; rooms API

(def list-rooms  rooms/list)
(def get-room    rooms/get)
(def create-room rooms/create)
(def update-room rooms/update)

;; devices API

(def list-devices  devices/list)
(def get-device    devices/get)
(def create-device devices/create)
(def update-device devices/update)


