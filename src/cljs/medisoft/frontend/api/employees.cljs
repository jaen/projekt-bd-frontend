(ns medisoft.frontend.api.employees
  (:refer-clojure :exclude [list get update])
  (:require [medisoft.frontend.api.core :as core]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.log :as log]
            [medisoft.frontend.schemas :as schemas]))

;;

(defn list [_ callback]
  (core/api-call :get
                 (routes/server-path-for :api.employees/list)
                 {:params      {}
                  :schema      {:response schemas/EmployeeListResponse}
                  :response-fn callback}))

(defn get [{:keys [id]} callback]
  (core/api-call :get
                 (routes/server-path-for :api.employees/show :id id)
                 {:params      {:id id}
                  :schema      {:response schemas/EmployeeShowResponse}
                  :response-fn callback}))

(defn create [{:as params} callback]
  (core/api-call :post
                 (routes/server-path-for :api.employees/create)
                 {:params      params
                  :schema      {:request  schemas/EmployeeCreateRequest
                                :response schemas/EmployeeCreateResponse}
                  :response-fn callback}))

(defn update [{:keys [id] :as params} callback]
  (core/api-call :put
                 (routes/server-path-for :api.employees/update :id id)
                 {:params      (dissoc params :id)
                  :schema      {:request  schemas/EmployeeUpdateRequest
                                :response schemas/EmployeeUpdateResponse}
                  :response-fn callback}))
