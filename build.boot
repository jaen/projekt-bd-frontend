(set-env!
  :source-paths #{"src/cljs"}
  :resource-paths #{"resources"}
  :dependencies '[[org.clojure/clojure "1.7.0-beta2"]
                  [org.clojure/clojurescript "0.0-3269"]
                  [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                  [org.clojure/core.match "0.3.0-alpha4"]

                  [bidi "1.19.0"] ; :exclusions [org.clojure/clojurescript]]

                  ;react
                  [reagent "0.5.0" :exclusions [cljsjs/react]]
                  [reagent-forms "0.5.0"]
                  [re-com "0.5.3"]
                  ;[rum "0.2.6" :exclusions [cljsjs/react]]
                  [cljsjs/react-with-addons "0.13.1-0"]
                  [binaryage/devtools "0.2.1"]
                  [cljs-ajax "0.3.9"]
                  [org.clojars.leanpixel/cljs-uuid-utils "1.0.0-SNAPSHOT"]
                  ;[com.palletops/leaven "0.3.0"]
                  ;[com.palletops/bakery-weasel "0.3.0"]
                  [prismatic/schema "0.4.2"]
                  [cats "0.4.0"]
                  ;[funcool/promesa "0.1.0"]
                  [com.andrewmcveigh/cljs-time "0.3.3" :exclusions [com.cemerick/austin]]
                  [cuerdas "0.3.0"]
                  [hodgepodge "0.1.3"]
                  [im.chit/ribol "0.4.0"]
                  [com.taoensso/tower "3.1.0-beta3"]

                  [bouncer "0.3.2-SNAPSHOT" :exclusions [org.clojure/clojure com.cemerick/piggieback]] ;validations

                  [com.cognitect/transit-cljs "0.8.202"] ; they say it does JSON, let's see

                  ; [datascript "0.10.0"] ; datascript yay

                  ;; boot deps
                  [adzerk/boot-cljs "0.0-3269-2" :scope "test"]
                  [adzerk/boot-cljs-repl "0.1.10-SNAPSHOT" :scope "test"]
                  [adzerk/boot-reload "0.2.6" :scope "test"]
                  [pandeiro/boot-http "0.6.3-SNAPSHOT" :scope "test"]
                  [jeluard/boot-notify "0.1.2" :scope "test"]
                  ])

(require '[adzerk.boot-cljs      :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl repl-env]]
         '[jeluard.boot-notify :refer [notify]]
         '[adzerk.boot-reload    :refer [reload]]
         '[pandeiro.boot-http    :refer [serve]])

(deftask dev []
  (set-env!
   :source-paths #(conj % "env/dev/cljs"))
  (comp
    (serve :dir "target/public")
    (watch)
    (reload :on-jsload 'medisoft.frontend.core/mount-root!)
    (cljs-repl)
    (cljs :source-map true
          :optimizations :none
          :compiler-options {;:unified true
                             :main "medisoft.client.main"
                             :asset-path "assets/javascripts/cljs-out"
                             :output-dir "cljs-out"})
    (notify)))