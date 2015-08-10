(set-env!
  :source-paths #{"src/cljs"}
  :resource-paths #{"resources"}
  :dependencies '[[weasel "0.7.0"]
                  [com.cemerick/austin "0.1.7-SNAPSHOT"]
                  [com.cemerick/piggieback "0.2.1"]
                  [org.clojure/tools.nrepl "0.2.10" :exclusions [org.clojure/clojure]]

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
         '[pandeiro.boot-http    :refer [serve]])

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
   :source-paths #(conj % "env/dev/cljs" "env/dev/clj"))
  (comp
    (from-lein)
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

(deftask build []
  (set-env!
   :source-paths #(conj % "env/dev/cljs" "env/dev/clj")
   :target-path  "build")
  (comp
    (from-lein)
    (cljs :optimizations :advanced
          :compiler-options {;:unified true
                             :main "medisoft.client.main"
                             :asset-path "assets/javascripts/cljs-out"
                             :output-dir "cljs-out"})
    (notify)))