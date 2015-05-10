(ns ^:figwheel-no-load medisoft.frontend.main
  (:require [medisoft.frontend.core :as core]
            [figwheel.client :as figwheel :include-macros true]
            [weasel.repl :as weasel]))

(def env :development)

(enable-console-print!)

(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback core/mount-root)

(weasel/connect "ws://localhost:9001" :verbose true)

(core/init!)
