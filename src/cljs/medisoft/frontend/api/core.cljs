(ns medisoft.frontend.api.core
  (:require [cuerdas.core :as str]
            [clojure.walk :as walk]
            [schema.core :as schema :include-macros true]
            [schema.coerce :as schema-coerce]
            [schema.utils :as schema-utils]
            [cljs.core.match :refer-macros [match]]
            [ajax.core :as ajax]
            [hodgepodge.core :as hodgepodge]
            [cljs.pprint :as pprint]

            [medisoft.frontend.log :as log]
            [medisoft.frontend.utils :as utils]
            [medisoft.frontend.routes :as routes]
            [cljs-time.core :as time]
            [medisoft.frontend.schemas :as schemas]
            [reagent.core :as reagent]
            [reagent.ratom :as reagent-ratom]
            [cljs-time.format :as time-format]))

(def token-storage-key :medisoft-token-key)

(defonce api-token (reagent/atom (get hodgepodge/local-storage token-storage-key)))
(defonce logged-in? (reagent-ratom/make-reaction (fn [] @api-token) :auto-run true))

(defn set-api-token! [token]
  (assoc! hodgepodge/local-storage token-storage-key (reset! api-token token)))

;(defn transform-keys [map fn]
;  (clojure.walk/))
;
;(defn dasherize-keys)
;
;(defn underscorise-keys)

(defn string->date-time [string]
  ; (log/debug "converting string to date:" string)

  (utils/string->clj-time string))

(defn custom-json-coercions [schema]
  (let [coercion ({schemas/DateTime string->date-time
                   schema/Keyword   utils/string->keyword
                   schema/Bool      schema-coerce/string->boolean
                   schema/Uuid      schema-coerce/string->uuid} schema)]
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
        transform-fn  (fn [[k v]]
          (cond
            (some #(instance? % v) [goog.date.Date goog.date.DateTime goog.date.UtcDateTime])
              [(transform-key k) (utils/clj-time->string v)]
            (keyword? k)
              [(transform-key k) v]
            :else
              [k v]))]
    (walk/postwalk (fn [x] (if (map? x)
                             (into {} (map transform-fn x))
                             x))
                   map')))

(defn api-response->map [response]
  (let [transform-key #(keyword (str/dasherize %))
        transform-fn  (fn [[k v]] (cond
                                    (string? k)
                                      [(transform-key k) v]
                                    :else
                                      [k v]))]
    (walk/postwalk (fn [x] (if (map? x)
                             (into {} (map transform-fn x))
                             x))
                   response)))

(def ^:private response-cache (atom {}))

(defn should-cache? [uri method params]
  (or (= method :get)
      (and (= method :post) (str/contains? uri "/filter"))))

(defn cache! [uri method params response]
  ;(log/warn "PUTTING IN CACHE" uri method params)
  (when (should-cache? uri method params)
    (log/warn "CACHING" uri method)
    (swap! response-cache assoc [uri method params] response)))

(defn cache-get [uri method params]
  ;(log/debug "CURRENT CACHE" @response-cache)
  (if-let [cached (get @response-cache [uri method params])]
    (do
      (log/warn "CACHE HIT" uri method)
      cached)
    (do
      (log/error "CACHE MISS" uri method))))

(defn wrap-handler [handler & [response-schema method uri params]]
  (let [coercer (when response-schema (schema-coerce/coercer response-schema response-coercer))]
    (fn [response]
      (if coercer
        ;(.requestAnimationFrame js/window (fn []
        (let [;_(log/error "BEFORE COERCE" (time/now))
              coerced-response (coercer (let [a (cond
                                                  (vector? response) (mapv api-response->map response) ; TODO: think of something more general maybe?
                                                  :else              (api-response->map response))]
                                          ;(log/warn "got this after transform:" a)
                                          a))]
          ;(log/error "AFTER COERCE" (time/now))
          (if-not (schema-utils/error? coerced-response)
            (do
              ;(log/debug (str "SUCCESS - " method " " uri) coerced-response)
              (cache! uri method params coerced-response)
              (handler [:success coerced-response]))
            (log/error "RESPONSE VALIDATION FAILED" (schema.utils/error-val coerced-response))))
        (do
          ;(log/debug (str "SUCCESS - " method " " uri) response)
          (cache! uri method params response)
          (handler [:success response]))))))

;(defn wrap-error-handler [handler]
;  (fn [response] (handler response)))

;:handler         (fn [response]
;                   (log/debug "success:" response)
;                   (callback [:success response]))
;:error-handler   (fn [response]
;                   (log/debug "error:" response)
;                   (callback [:error (:response response)]))

(defn wrap-error-handler [handler & [response-schema method uri]]
  (let [coercer (when response-schema (schema-coerce/coercer response-schema response-coercer))]
    (fn [response]
      (if coercer
        (let [coerced-response (coercer (let [response (:response response)
                                              a (cond
                                                  (vector? response) (mapv api-response->map response) ; TODO: think of something more general maybe?
                                                  :else              (api-response->map response))]
                                          ;(log/warn "got this after transform:" a)
                                          a))]
          (if-not (schema-utils/error? coerced-response)
            (do
              ;(log/error (str "ERROR - " method " " uri) (merge response {:response coerced-response}))
              (handler [:error (merge response {:response coerced-response})]))
            (log/error "RESPONSE VALIDATION FAILED" (schema.utils/error-val coerced-response))))
        (do
          ;(log/error (str "ERROR - " method " " uri) response)
          (handler (handler [:error response])))))))

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
        auth-headers                (when-let [token @api-token]
                                      {:headers {"X-Auth-Token" token}})
        response-fn                 (or (:response-fn opts) #())
        ; method-str                  (str/upper (name method))
        original-params             (or (:params opts) {})
        wrapped-handler             (wrap-handler response-fn response-schema method uri original-params)
        wrapped-error-handler       (wrap-error-handler response-fn response-schema method uri)
        handlers                    (into {} (filter second {:handler wrapped-handler :error-handler wrapped-error-handler}))
        format                      {:format :json ;(ajax/transit-request-format {:handlers transit-utils/transit-write-handlers})
                                     :response-format :json
                                     :keywords? false} ;(ajax/detect-response-format {:response-format my-default-formats})}

        ;params                      {:params (map->api-request original-params)}
        api-opts                    (merge (merge-with merge (dissoc opts :schema) auth-headers)
                                           handlers format)]
    ;(log/debug (str "sending request - " method " " uri) api-opts)
    ;(when-not request-schema
    ;  (log/warn "no request schema for" method uri))
    ;(when-not response-schema
    ;  (log/warn "no response schema for" method uri))
    (when request-schema
      (when-let [errors (schema/check request-schema original-params)]
        (log/error "REQUEST VALIDATION FAILED" errors)))
    ;(log/debug "params:" original-params)
    (let [transformed-params (map->api-request original-params)
          api-opts           (merge api-opts {:params transformed-params})]
      ;(log/debug "coerced api-opts:" api-opts)
      (when-let [cached (cache-get uri method original-params)]
        (response-fn [:success cached]))
      (match method
             :get  (ajax/GET  uri api-opts)
             :post (ajax/POST uri api-opts)
             :put  (ajax/PUT uri api-opts)))))
