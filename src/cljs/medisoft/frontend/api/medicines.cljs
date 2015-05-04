(ns medisoft.frontend.api.medicines
  (:refer-clojure :exclude [list get update])
  (:require [medisoft.frontend.api.core :as core]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.log :as log]
            [medisoft.frontend.schemas :as schemas]))

;;

(defn list [_ callback]
  (core/api-call :get
            (routes/server-path-for :api.medicines/list)
            {:schema      {:response schemas/MedicineListResponse}
             :response-fn callback}))

(defn get [{:keys [id]} callback]
  (core/api-call :get
            (routes/server-path-for :api.medicines/show :id id)
            {:params      {:id id}
             :schema      {:response schemas/MedicineShowResponse}
             :response-fn callback}))

(defn create [{:as params} callback]
  (core/api-call :post
            (routes/server-path-for :api.medicines/create)
            {:params      params
             :schema      {:request  schemas/MedicineCreateRequest
                           :response schemas/MedicineCreateResponse}
             :response-fn callback}))

(defn update [{:keys [id] :as params} callback]
  (core/api-call :put
            (routes/server-path-for :api.medicines/update :id id)
            {:params      (dissoc params :id)
             :schema      {:request  schemas/MedicineUpdateRequest
                           :response schemas/MedicineUpdateResponse}
             :response-fn callback}))
