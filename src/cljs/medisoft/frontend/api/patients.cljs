(ns medisoft.frontend.api.patients
  (:require [medisoft.frontend.api.core :as core]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.log :as log]
            [medisoft.frontend.schemas :as schemas]))

;;

(defn list [_ callback]
  (core/api-call :get
            (routes/server-path-for :api.patients/list)
            {:params          {}
             :schema          {:request  schemas/PatientListQuery
                               :response schemas/PatientsListResponse}
             :response-fn     callback}))

(defn get [{:keys [id]} callback]
  (core/api-call :get
            (routes/server-path-for :api.patients/show :id id)
            {:params          {:id id}
             :schema          {:response schemas/PatientShowResponse}
             :response-fn     callback}))

(defn create [{:as params} callback]
  (core/api-call :post
            (routes/server-path-for :api.patients/create)
            {:params          params
             :schema          {:request  schemas/PatientCreateRequest
                               :response schemas/PatientCreateResponse}
             :response-fn     callback}))

(defn update [{:keys [id] :as params} callback]
  (core/api-call :put
            (routes/server-path-for :api.patients/update :id id)
            {:params          (dissoc params :id)
             :schema          {:request  schemas/PatientUpdateRequest
                               :response schemas/PatientUpdateResponse}
             :response-fn     callback}))
