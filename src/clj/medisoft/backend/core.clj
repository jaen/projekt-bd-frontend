(ns medisoft.backend.core
  (:require [immutant.web :as immutant]

            [medisoft.backend.app :as app]))

(def default-port 3000)
(def default-host "0.0.0.0")

(defonce server (atom nil))

(def app (app/make-app))

(defn start! []
  (reset! server
    (immutant/run-dmc #'app
      {:port default-port
       :host default-host
       :path "/"})))

(defn stop! []
  (immutant/stop @server)
  (reset! server nil))
