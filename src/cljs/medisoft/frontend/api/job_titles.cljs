(ns medisoft.frontend.api.job-titles
  (:require [medisoft.frontend.api.core :as core]
            [medisoft.frontend.routes :as routes]
            [medisoft.frontend.log :as log]
            [medisoft.frontend.schemas :as schemas]))

;;

(defn list [_ callback]
  (core/api-call :get
            (routes/server-path-for :api.job-titles/list)
            {:params          {}
             :schema          {;:request  schemas/JobTitleListQuery
                               :response schemas/JobTitleListResponse}
             :response-fn     callback}))

(defn get [{:keys [id]} callback]
  (core/api-call :get
            (routes/server-path-for :api.job-titles/show :id id)
            {:params          {:id id}
             :schema          {:response schemas/JobTitleShowResponse}
             :response-fn     callback}))

(defn create [{:as params} callback]
  (core/api-call :post
            (routes/server-path-for :api.job-titles/create)
            {:params          params
             :schema          {:request  schemas/JobTitleCreateRequest
                               :response schemas/JobTitleCreateResponse}
             :response-fn     callback}))

(defn update [{:keys [id] :as params} callback]
  (core/api-call :put
            (routes/server-path-for :api.job-titles/update :id id)
            {:params          (dissoc params :id)
             :schema          {:request  schemas/JobTitleUpdateRequest
                               :response schemas/JobTitleUpdateResponse}
             :response-fn     callback}))
