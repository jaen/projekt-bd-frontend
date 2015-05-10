(ns medisoft.backend.assets
  (:require [optimus.assets :as assets]
            [optimus.optimizations :as optimizations]
            [optimus.prime :as optimus]
            [optimus.strategies :as strategies]
            [ring.middleware.content-type :as content-type]
            [ring.middleware.not-modified :as not-modified]
            [taoensso.timbre :as timbre]
            [environ.core :as env]
            [clojure.pprint :refer (pprint)]))

(defn- make-assets-configuration [config]
  (fn []
    (let [resource-map (map (fn [[resource-name assets]]
                        (if (= resource-name :assets)
                          (assets/load-assets "public" assets)
                          (assets/load-bundle "public" resource-name assets))) config)]
      (apply concat resource-map))))

(defn make-config-for-env [env]
  (condp = env
    :development {"application.css" ["/assets/stylesheets/application.css"]
                  "application.js"  ["/assets/javascripts/application/development.js"]
                  :assets           ["/assets/stylesheets/application.css.map"
                                     #"/assets/sass/.+\.scss"
                                     #"/assets/javascripts/application/out/development/.+\.(js|cljs|js\.map)"]}
    :staging     {"application.css" ["/assets/stylesheets/application.css"]
                  "application.js"  ["/assets/javascripts/application/staging.js"]}))

(defn optimise-without-js [assets options]
  (-> assets
      ; (optimizations/minify-js-assets options)
      (optimizations/minify-css-assets options)
      (optimizations/inline-css-imports)
      (optimizations/concatenate-bundles)
      (optimizations/add-cache-busted-expires-headers)
      (optimizations/add-last-modified-headers)))

(defn create-assets-middleware []
  (let [environment          (or (keyword (env/env :env))
                                 :development)
        optimus-asset-config (make-assets-configuration (make-config-for-env environment))]
    (timbre/info "asset-config: " optimus-asset-config)

    (comp
      #(content-type/wrap-content-type % {:mime-types {"map" "application/json"
                                                       "cljs" "text/clojurescript"}})
      not-modified/wrap-not-modified
      #(optimus/wrap
        %
        optimus-asset-config
        (condp = environment
          :development optimizations/none
          :staging     optimise-without-js
          :production  optimizations/all)
        (condp = environment
          :development strategies/serve-live-assets
          :staging     strategies/serve-frozen-assets
          :production  strategies/serve-frozen-assets)
        {:cache-live-assets 5000
         :uglify-js {:mangle-names false}}))))
