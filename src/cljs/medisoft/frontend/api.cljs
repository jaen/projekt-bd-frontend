(ns medisoft.frontend.api
  (:require [cuerdas.core :as str]
            [clojure.walk :as walk]
            [schema.core :as schema :include-macros true]
            [schema.coerce :as schema-coerce]
            [schema.utils :as schema-utils]
            [clojure.walk :as walk]
            [cljs.core.match :refer-macros [match]]
            [ajax.core :as ajax]

            [medisoft.frontend.log :as log]
            [medisoft.frontend.utils :as utils]
            [medisoft.frontend.routes :as routes]
            [cljs-time.core :as time]
            [medisoft.frontend.schemas :as schemas]
            [reagent.core :as reagent]
            [reagent.ratom :as reagent-ratom]))

(defonce api-token (reagent/atom nil))
(defonce logged-in? (reagent-ratom/make-reaction (fn [] @api-token) :auto-run true))

(defn set-api-token! [token]
  (reset! api-token token))

;(defn transform-keys [map fn]
;  (clojure.walk/))
;
;(defn dasherize-keys)
;
;(defn underscorise-keys)

(defn custom-json-coercions [schema]
  (let [coercion ({schema/Keyword utils/string->keyword
                   schema/Bool    schema-coerce/string->boolean
                   schema/Uuid    schema-coerce/string->uuid} schema)]
    coercion))

; (def request-coercer coerce/json-coercion-matcher)
(defn response-coercer [schema]
  ;(log/debug "schema is:" schema)
  (or ;(when (instance? cljs.core.PersistentArrayMap schema) (make-map-coercer schema))
    ;(when (instance? schema/MapEntry schema) (make-map-entry-coercer schema))
    (custom-json-coercions schema)
    (schema-coerce/keyword-enum-matcher schema)
    (schema-coerce/set-matcher schema)))

;(defn custom-json-request-coercions [schema]
;  (let [coercion ({DateTime clj-time->str} schema)]
;    coercion))
;
;(defn request-coercer [schema]
;  (log/debug "schema is:" schema)
;  (or (custom-json-request-coercions schema)))

(def ^:private exceptions
  {:access-token "access_token"})

(defn map->api-request [map']
  (let [transform-key #(or (get exceptions %)
                           (str/camelize (name %)))
        transform-fn  (fn [[k v]] (if (keyword? k)
                                    [(transform-key k) v]
                                    [k v]))]
    (walk/postwalk (fn [x] (if (map? x)
                             (into {} (map transform-fn x))
                             x))
                   map')))

(defn api-response->map [response]
  (let [transform-key #(keyword (str/dasherize %))
        transform-fn  (fn [[k v]] (if (string? k)
                                    [(transform-key k) v]
                                    [k v]))]
    (walk/postwalk (fn [x] (if (map? x)
                             (into {} (map transform-fn x))
                             x))
                   response)))

(defn wrap-handler [handler & [response-schema]]
  (let [coercer (when response-schema (schema-coerce/coercer response-schema response-coercer))]
    (fn [response]
      (if coercer
        (let [coerced-response (coercer (let [a (cond
                                          (vector? response) (mapv api-response->map response) ; TODO: think of something more general maybe?
                                          :else              (api-response->map response))]
                                          (log/warn "got this after transform:" a)
                                          a))]
          (if-not (schema-utils/error? coerced-response)
            (handler coerced-response)
            (throw (schema.utils/error-val coerced-response)) #_(ex/raise :response-validation-failed coerced-response)))
        (handler response)))))

;(defn wrap-error-handler [handler]
;  (fn [response] (handler response)))

(defn wrap-error-handler [handler & [response-schema]]
  (let [coercer (when response-schema (schema-coerce/coercer response-schema response-coercer))]
    (fn [response]
      (if coercer
        (let [coerced-response (coercer (let [response (:response response)
                                              a (cond
                                                  (vector? response) (mapv api-response->map response) ; TODO: think of something more general maybe?
                                                  :else              (api-response->map response))]
                                          (log/warn "got this after transform:" a)
                                          a))]
          (if-not (schema-utils/error? coerced-response)
            (handler (merge response {:response coerced-response}))
            (throw (schema.utils/error-val coerced-response)) #_(ex/raise :response-validation-failed coerced-response)))
        (handler response)))))

;(def my-default-formats
;  [ajax/json-response-format
;   ajax/edn-response-format
;   #(ajax/transit-response-format {:handlers transit-utils/transit-read-handlers})
;   ["text/plain" ajax/raw-response-format]
;   ["text/html" ajax/raw-response-format]
;   ajax/raw-response-format])

(defn api-call [method uri opts]
  (let [{request-schema :request
         response-schema :response} (:schema opts)
        auth-headers                (when-let [token @api-token] {:headers {"X-Auth-Token" token}})
        wrapped-handler             (when-let [handler (:handler opts)]       (wrap-handler handler response-schema))
        wrapped-error-handler       (when-let [handler (:error-handler opts)] (wrap-error-handler handler response-schema))
        handlers                    (into {} (filter second {:handler wrapped-handler :error-handler wrapped-error-handler}))
        format                      {:format :json ;(ajax/transit-request-format {:handlers transit-utils/transit-write-handlers})
                                     :response-format :json
                                     :keywords? false} ;(ajax/detect-response-format {:response-format my-default-formats})}
        original-params             (:params opts)
        ;params                      {:params (map->api-request original-params)}
        api-opts                    (merge (merge-with merge (dissoc opts :schema) auth-headers)
                                           handlers format)]
    (when-not request-schema
      (log/warn "no request schema for" method uri))
    (when-not response-schema
      (log/warn "no response schema for" method uri))
    (when request-schema
      (schema/validate request-schema original-params))
    (log/debug "params:" original-params)
    (let [transformed-params (map->api-request original-params)
          api-opts           (merge api-opts {:params transformed-params})]
      (log/debug "coerced api-opts:" api-opts)
      (match method
             :get  (ajax/GET  uri api-opts)
             :post (ajax/POST uri api-opts)))))

;; login API

(defn log-in [{:keys [login password]} callback]
  (api-call :post
                (routes/server-path-for :api.authentication/log-in)
                {:params          {:username login :password password} ; :date (time/now)}
                 :schema          {:request  schemas/LoginRequest
                                   :response schemas/LoginResponse}
                 :handler         (fn [response]
                                    (log/debug "success:" response)
                                    (callback [:success response]))
                 :error-handler   (fn [response]
                                    (log/debug "error:" response)
                                    (callback [:error (:response response)]))
                 :format          :json
                 :response-format :json
                 :keywords?       true}))

;; patients API

(defn list-patients [_ callback]
  (api-call :get
            (routes/server-path-for :api.patients/list)
            {:params          {}
             :schema          {:response schemas/PatientsListResponse}
             :handler         (fn [response]
                                (log/debug "success:" response)
                                (callback [:success response]))
             :error-handler   (fn [response]
                                (log/debug "error:" response)
                                (callback [:error (:response response)]))
             :format          :json
             :response-format :json
             :keywords?       true}))

(defn get-patient [{:keys [id]} callback]
  (api-call :get
            (routes/server-path-for :api.patients/show :id id)
            {:params          {:id id}
             :schema          {:response schemas/PatientShowResponse}
             :handler         (fn [response]
                                (log/debug "success:" response)
                                (callback [:success response]))
             :error-handler   (fn [response]
                                (log/debug "error:" response)
                                (callback [:error (:response response)]))
             :format          :json
             :response-format :json
             :keywords?       true}))

(defn create-patient [{:keys [id] :as params} callback]
  (api-call :post
            (routes/server-path-for :api.patients/create :id id)
            {:params          params ; {:id id}
             :schema          {;:request
                               :response schemas/PatientCreateResponse}
             :handler         (fn [response]
                                (log/debug "success:" response)
                                (callback [:success response]))
             :error-handler   (fn [response]
                                (log/debug "error:" response)
                                (callback [:error (:response response)]))
             :format          :json
             :response-format :json
             :keywords?       true}))