(ns medisoft.frontend.api.devices
  (:refer-clojure :exclude [list get update])
  (:require [medisoft.frontend.api.core :as core]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.log :as log]
            [medisoft.frontend.schemas :as schemas]))

;;

(defn list [_ callback]
  (core/api-call :get
                 (routes/server-path-for :api.devices/list)
                 {:schema      {;:request  schemas/VisitListQuery
                                :response schemas/DeviceListResponse}
                  :response-fn callback}))

(defn get [{:keys [id]} callback]
  (core/api-call :get
                 (routes/server-path-for :api.devices/show :id id)
                 {:params      {:id id}
                  :schema      {:response schemas/DeviceShowResponse}
                  :response-fn callback}))

(defn create [{:as params} callback]
  (core/api-call :post
                 (routes/server-path-for :api.devices/create)
                 {:params      params
                  :schema      {:request  schemas/DeviceCreateRequest
                                :response schemas/DeviceCreateResponse}
                  :response-fn callback}))

(defn update [{:keys [id] :as params} callback]
  (core/api-call :put
                 (routes/server-path-for :api.devices/update :id id)
                 {:params      (dissoc params :id)
                  :schema      {:request  schemas/DeviceUpdateRequest
                                :response schemas/DeviceUpdateResponse}
                  :response-fn callback}))
