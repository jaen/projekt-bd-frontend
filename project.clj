(defproject projekt-bd-frontend "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}

  :dependencies [[org.clojure/clojure "1.7.0"]
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
                 ])
