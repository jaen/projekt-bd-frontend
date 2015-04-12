(ns medisoft.backend.assets
  (:require [optimus.assets :as assets]
            [optimus.optimizations :as optimizations]
            [optimus.prime :as optimus]
            [optimus.strategies :as strategies]
            [ring.middleware.content-type :as content-type]
            [ring.middleware.not-modified :as not-modified]
            [taoensso.timbre :as timbre]
            [clojure.pprint :refer (pprint)]
            [optimus-sass.core]))

(defn- make-assets-configuration [config]
  (fn []
    (let [resource-map (map (fn [[resource-name assets]]
                        (if (= resource-name :assets)
                          (assets/load-assets "public" assets)
                          (assets/load-bundle "public" resource-name assets))) config)]
      (apply concat resource-map))))

(defn make-config-for-env []
  {"application.css" ["/assets/stylesheets/application.scss"]
   "material-ui.js"  ["/assets/javascripts/material-ui.js"]
   "application.js"  ["/assets/javascripts/application-development.js"]
   :assets           [#"/assets/javascripts/cljs-out/development/.+\.(js|cljs|js\.map)"]}
  #_{"application.css"   [#"/assets/stylesheets/.+\.css"]
                          "application.scss"  [#"/assets/sass/.+\.scss"]
                          "application.js"    [;"/assets/javascripts/bowser.js"
                                               "/assets/javascripts/resize-sensor.js"
                                               "/assets/javascripts/application-development.js"]
                          :assets             [#"/assets/javascripts/cljs-out/development/.+\.(js|cljs|js\.map)"
                                               #"/assets/fonts/.+"
                                               #"/assets/images/.+"]})

(defn optimise-without-js [assets options]
  (-> assets
      ; (optimizations/minify-js-assets options)
      (optimizations/minify-css-assets options)
      (optimizations/inline-css-imports)
      (optimizations/concatenate-bundles)
      (optimizations/add-cache-busted-expires-headers)
      (optimizations/add-last-modified-headers)))

(defn create-assets-middleware []
  (let [environment          :development
        optimus-asset-config (make-assets-configuration (make-config-for-env))]
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
          :staging optimise-without-js
          :production optimizations/all)
        (condp = environment
          :development strategies/serve-live-assets
          :staging strategies/serve-frozen-assets
          :production strategies/serve-frozen-assets)
        :cache-live-assets 5000
        :uglify-js {:mangle-names false}))))
