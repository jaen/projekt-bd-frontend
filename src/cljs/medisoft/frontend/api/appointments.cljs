(ns medisoft.frontend.api.appointments
  (:refer-clojure :exclude [list get update])
  (:require [medisoft.frontend.api.core :as core]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.log :as log]
            [medisoft.frontend.schemas :as schemas]))

;;

(defn list [_ callback]
  (core/api-call :get
                 (routes/server-path-for :api.appointments/list)
                 {:schema      {;:request  schemas/VisitListQuery
                                :response schemas/VisitListResponse}
                  :response-fn callback}))

(defn get [{:keys [id]} callback]
  (core/api-call :get
                 (routes/server-path-for :api.appointments/show :id id)
                 {:params      {:id id}
                  :schema      {:response schemas/VisitShowResponse}
                  :response-fn callback}))

(defn create [{:as params} callback]
  (core/api-call :post
                 (routes/server-path-for :api.appointments/create)
                 {:params      params
                  :schema      {:request  schemas/VisitCreateRequest
                                :response schemas/VisitCreateResponse}
                  :response-fn callback}))

(defn update [{:keys [id] :as params} callback]
  (core/api-call :put
                 (routes/server-path-for :api.appointments/update :id id)
                 {:params      (dissoc params :id)
                  :schema      {:request  schemas/VisitUpdateRequest
                                :response schemas/VisitUpdateResponse}
                  :response-fn callback}))
