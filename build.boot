(set-env!
  :source-paths #{"src/cljs" "env/dev/clj/medisoft/backend"} ; WELP fix that
  :resource-paths #{"resources"}
  :dependencies '[[org.clojure/clojure "1.7.0"]
                  [org.clojure/clojurescript "0.0-3308"]
                  [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                  [org.clojure/core.match "0.3.0-alpha4"]

                  [bidi "1.20.1"] ; :exclusions [org.clojure/clojurescript]]

                  ;react
                  [reagent "0.5.0" :exclusions [cljsjs/react]]
                  [reagent-forms "0.5.0"]
                  [re-com "0.5.3"]
                  ;[rum "0.2.6" :exclusions [cljsjs/react]]
                  [cljsjs/react-with-addons "0.13.3-0"]
                  [binaryage/devtools "0.3.0"]
                  [cljs-ajax "0.3.9"]
                  [org.clojars.leanpixel/cljs-uuid-utils "1.0.0-SNAPSHOT"]
                  ;[com.palletops/leaven "0.3.0"]
                  ;[com.palletops/bakery-weasel "0.3.0"]
                  [prismatic/schema "0.4.2"]
                  [cddr/integrity "0.3.1-SNAPSHOT"]
                  [cats "0.4.0"]
                  ;[funcool/promesa "0.1.0"]
                  [com.andrewmcveigh/cljs-time "0.3.10" :exclusions [com.cemerick/austin]]
                  [funcool/cuerdas "0.5.0"]
                  [hodgepodge "0.1.3"]
                  [im.chit/ribol "0.4.0"]
                  [com.taoensso/tower "3.1.0-beta3"]

                  [bouncer "0.3.3" :exclusions [org.clojure/clojure com.cemerick/piggieback]] ;validations

                  [com.cognitect/transit-cljs "0.8.220"] ; they say it does JSON, let's see

                  ; [datascript "0.10.0"] ; datascript yay

                  [weasel "0.7.0"]
                  [com.cemerick/austin "0.1.7-SNAPSHOT"]
                  [com.cemerick/piggieback "0.2.1"]
                  [org.clojure/tools.nrepl "0.2.10" :exclusions [org.clojure/clojure]]

                  [ring "1.4.0"]
                  [ring/ring-headers "0.1.1"]
                  [ring/ring-anti-forgery "1.0.0"]
                  [ring/ring-devel "1.4.0"]
                  [ring/ring-core "1.4.0"]

                  ;; boot deps
                  [adzerk/boot-cljs      "0.0-3308-0" :scope "test"]
                  [adzerk/boot-cljs-repl "0.1.10-SNAPSHOT" :scope "test"]
                  [adzerk/boot-reload    "0.3.1"      :scope "test"]
                  [pandeiro/boot-http    "0.6.3-SNAPSHOT" :scope "test"]
                  [jeluard/boot-notify   "0.2.0" :scope "test"]
                  [com.joshuadavey/boot-middleman "0.0.4" :scope "test"]])

(require '[adzerk.boot-cljs      :refer [cljs]]
         '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl repl-env]]
         '[jeluard.boot-notify :refer [notify]]
         '[adzerk.boot-reload    :refer [reload]]
         '[pandeiro.boot-http    :refer [serve]]
         '[dev-handler])

(deftask from-lein []
  (let [lein-proj (let [l (-> "project.clj" slurp read-string)]
                    (merge (->> l (drop 3) (partition 2) (map vec) (into {}))
                           {:project (second l)
                            :version (nth l 2)}))]
    (set-env!
     :source-paths   (set (concat (or (:source-paths lein-proj) (get-env :source-paths) #{"src"}) (get-env :source-paths)))
     :resource-paths (set (concat (or (:resource-paths lein-proj) (get-env :resource-paths) #{}) (get-env :resource-paths)))
     :dependencies   (vec (concat (:dependencies lein-proj)
                                  (get-env :dependencies)
                                  '[[adzerk/bootlaces "0.1.11" :scope "test"]])))

    (require '[adzerk.bootlaces :refer [bootlaces! build-jar push-release]])

    ((resolve 'bootlaces!) (:version lein-proj))

    (task-options!
     pom  {:project     (symbol (:project lein-proj))
           :version     (:version lein-proj)
           :description (:description lein-proj)
           :url         (:url lein-proj)
           :scm         {:url "https://github.com/martinklepsch/boot-gzip"}
           :license     {"EPL" "http://www.eclipse.org/legal/epl-v10.html"}})
    identity))

(deftask dev []
  (set-env!
   :source-paths #(conj % "env/dev/cljs")) ; "env/dev/clj"))
  (comp
    #_(from-lein)
    (serve :handler 'dev-handler/handler)
    (watch)
    (reload :on-jsload 'medisoft.frontend.core/mount-root!)
    (cljs-repl)
    (cljs :source-map true
          :optimizations :none
          :compiler-options {;:unified true
                             :main "medisoft.client.main"
                             :asset-path "/assets/javascripts/cljs-out"
                             :output-dir "cljs-out"})
    (notify)))

(deftask build []
  (set-env!
   :source-paths #(conj % "env/dev/cljs" "env/dev/clj")
   :target-path  "build")
  (comp
    ; (from-lein)
    (cljs :optimizations :advanced
          :compiler-options {;:unified true
                             :main "medisoft.client.main"
                             :asset-path "/assets/javascripts/cljs-out"
                             :output-dir "cljs-out"})
    (notify)))