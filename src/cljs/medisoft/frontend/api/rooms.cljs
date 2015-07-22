(ns medisoft.frontend.api.rooms
  (:refer-clojure :exclude [list get update])
  (:require [medisoft.frontend.api.core :as core]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.log :as log]
            [medisoft.frontend.schemas :as schemas]))

;;

(defn list [_ callback]
  (core/api-call :get
                 (routes/server-path-for :api.rooms/list)
                 {:schema      {;:request  schemas/VisitListQuery
                                :response schemas/RoomListResponse}
                  :response-fn callback}))

(defn get [{:keys [id]} callback]
  (core/api-call :get
                 (routes/server-path-for :api.rooms/show :id id)
                 {:params      {:id id}
                  :schema      {:response schemas/RoomShowResponse}
                  :response-fn callback}))

(defn create [{:as params} callback]
  (core/api-call :post
                 (routes/server-path-for :api.rooms/create)
                 {:params      params
                  :schema      {:request  schemas/RoomCreateRequest
                                :response schemas/RoomCreateResponse}
                  :response-fn callback}))

(defn update [{:keys [id] :as params} callback]
  (core/api-call :put
                 (routes/server-path-for :api.rooms/update :id id)
                 {:params      (dissoc params :id)
                  :schema      {:request  schemas/RoomUpdateRequest
                                :response schemas/RoomUpdateResponse}
                  :response-fn callback}))
