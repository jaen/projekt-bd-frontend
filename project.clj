(defproject projekt-bd-frontend "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :source-paths ["src/clj" "src/cljs" "target/generated/clj" "target/generated/cljx"]

  :min-lein-version "2.5.1"

  :dependencies [[org.clojure/clojure "1.7.0-beta1"]
                 [org.clojure/clojurescript "0.0-3196"]
                 ;[org.clojure/clojurescript "0.0-3126"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.clojure/core.match "0.3.0-alpha4"]

                  ; mock client
                  ; [http-kit "2.1.19"]
                  [org.immutant/web "2.0.0-beta2"]
                  [ronda/routing "0.2.5"]
                  [bidi "1.18.9"]
                  [ronda/routing-bidi "0.1.1"]
                  [ronda/routing-schema "0.1.2"]
                  [optimus "0.17.1"]
                  [cheshire "5.4.0"]
                  [metosin/ring-middleware-format "0.6.0"]
                  [com.taoensso/timbre "3.4.0"]
                  [ring "1.3.2"]
                  [ring/ring-headers "0.1.1"]
                  [ring/ring-anti-forgery "1.0.0"]
                  [ring/ring-devel "1.3.2"]
                  [ring/ring-core "1.3.2"]
                  [hiccup "1.0.5"]
                  ;[optimus-sass "0.0.3"]

                  ;react
                  [reagent "0.5.0" :exclusions [cljsjs/react]]
                  [reagent-forms "0.5.0"]
                  [re-com "0.4.0"]
                  [rum "0.2.6" :exclusions [cljsjs/react]]
                  [cljsjs/react-with-addons "0.13.1-0"]
                  [binaryage/devtools "0.1.2"]
                  [cljs-ajax "0.3.9"]
                  [org.clojars.leanpixel/cljs-uuid-utils "1.0.0-SNAPSHOT"]
                  [com.palletops/leaven "0.3.0"]
                  [com.palletops/bakery-weasel "0.3.0"]
                  [prismatic/schema "0.4.0"]
                  [cats "0.4.0"]
                  [funcool/promesa "0.1.0"]
                  [com.andrewmcveigh/cljs-time "0.3.3"]
                  [cuerdas "0.3.0"]
                  [hodgepodge "0.1.3"]

                  [bouncer "0.3.2-SNAPSHOT" :exclusions [org.clojure/clojure]] ;validations

                  [com.cognitect/transit-cljs "0.8.202"] ; they say it does JSON, let's see

                  [datascript "0.10.0"] ; datascript yay

                  ]
  :plugins [[lein-cljsbuild "1.0.4"]]

  :cljsbuild {:builds {:dev {:source-paths ["src/cljs" "target/generated/cljs"]
                             :compiler {:output-to     "resources/public/assets/javascripts/application-development.js"
                                        :output-dir    "resources/public/assets/javascripts/cljs-out/development"
                                        :asset-path    "/assets/javascripts/cljs-out/development"
                                        :externs       ["externs/material-ui-externs.js"]
                                        :optimizations :none
                                        :pretty-print  true
                                        :source-map    true}}}}

  :profiles {:dev {:dependencies [[ring-mock "0.1.5"]
                                  [ring/ring-devel "1.3.2"]
                                  [leiningen "2.5.1"]
                                  [figwheel "0.2.5"]
                                  [lein-figwheel "0.2.5"]
                                  [weasel "0.6.0"]
                                  [com.cemerick/austin "0.1.7-SNAPSHOT"]
                                  [com.cemerick/piggieback "0.2.0"]
                                  [org.clojure/tools.nrepl "0.2.10"]
                                  [pjstadig/humane-test-output "0.7.0"]
                                  [com.keminglabs/cljx "0.6.0"]]

                   :source-paths ["env/dev/clj"]

                   :plugins [[lein-figwheel "0.2.5"]
                             [com.keminglabs/cljx "0.6.0" :exclusions [org.clojure/clojure]]
                             [com.cemerick/clojurescript.test "0.3.2"]]

                   :injections [(require 'pjstadig.humane-test-output)
                                (pjstadig.humane-test-output/activate!)]

                   :repl-options {:init-ns medisoft.backend.dev
                                  :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl
                                                     cljx.repl-middleware/wrap-cljx]}

                   :figwheel {:http-server-root "public"
                              :server-port 3449
                              :nrepl-port 7888
                              :css-dirs ["resources/public/assets/stylesheets"]
                              ;:ring-handler projekt-bb-frontend.handler/app
                            }

                   :env {:dev? true}

                   :prep-tasks [["cljx" "once"]  "javac" "compile"]

                   :cljx {:builds [{:source-paths ["src/cljx"]
                                    :output-path "target/generated/clj"
                                    :rules :clj}
                                   {:source-paths ["src/cljx"]
                                    :output-path "target/generated/cljs"
                                    :rules :cljs}]}

                   :cljsbuild {:builds {:dev {:source-paths ["env/dev/cljs"]
                                              :compiler {:main "medisoft.frontend.dev"
                                                         :source-map true}}
                                        :test {:source-paths ["src/cljs"  "target/generated/cljs" "test/cljs"]
                                               :compiler {:output-to "target/test.js"
                                                          :optimizations :whitespace
                                                          :pretty-print true
                                                          :preamble ["react/react.js"]}}}
                               :test-commands {"unit" ["phantomjs" :runner
                                                       "test/vendor/es5-shim.js"
                                                       "test/vendor/es5-sham.js"
                                                       "test/vendor/console-polyfill.js"
                                                       "target/test.js"]}}}

             :uberjar {:hooks [cljx.hooks leiningen.cljsbuild #_minify-assets.plugin/hooks]
                       :env {:production true}
                       :aot :all
                       :omit-source true
                       :cljsbuild {:jar true
                                   :builds {:app
                                             {:source-paths ["env/prod/cljs"]
                                              :compiler
                                              {:optimizations :advanced
                                               :pretty-print false}}}}}})
