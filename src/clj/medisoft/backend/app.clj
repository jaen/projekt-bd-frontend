(ns medisoft.backend.app
  (:require [ronda.routing :as routing]
            [ronda.routing.bidi :as bidi]
            [clojure.pprint :refer (pprint)]
            [hiccup.core :as hiccup]
            [optimus.link :as assets-link]
            [ring.middleware.format :as format]

            [medisoft.backend.assets :as assets]))

(def api-routes
  {"/authentication" {"/sign-in"  {:post   :api.authentication/sign-in}
                       "/sign-out" {:delete :api.authentication/sign-out}}})

(println (.routes (bidi/descriptor ["" {"/api"    api-routes
                          "/assets" {#".*" :app/assets}}])))

(def routes
  (->
    (bidi/descriptor ["" {"/api"    api-routes
                          ;"/assets" {#".*" :app/assets}
                          #".*"     :app/home}])
    (routing/enable-middlewares
      ;:app/assets [:assets]
      :app/home   [:assets]
      :api.authentication/sign-in  [:restful-format]
      :api.authentication/sign-out [:restful-format])))

(defn not-found-handler [request]
  {:status 404, :body "not found."})

(defn- dummy-auth [{:keys [login password]}]
  (Thread/sleep 2000)
  (if (and (= login    "test")
           (= password "testtest"))
    {:status 200 :body {:token (str (java.util.UUID/randomUUID))} }
    {:status 401 :body {:errors (merge {} (when (not= login "test")
                                            {:login ["wrong login"]})
                                          (when (not= password "testtest")
                                            {:password ["wrong password"]}))}}))

(defn sign-in-handler [request]
  (dummy-auth (select-keys (:params request) [:login :password])))

(defn sign-out-handler [request]
  {:status 200, :body "sign out"})

; (defn assets-handler [request]
;   {:status 404, :body "asset not found."})

(defn home-handler [request]
    (let [body (hiccup/html
                 [:html
                  [:head
                   [:meta {:charset "UTF-8"}]
                   [:link {:href "http://fonts.googleapis.com/css?family=Roboto:400,300,500" :rel "stylesheet" :type "text/css"}]
                   (map (fn [url] [:link {:rel "stylesheet" :type "text/css" :href url}])
                     (assets-link/bundle-paths request ["application.css"]))]
                  [:body#application.home-page "hellow"]             ; tmp class for it to look nice
                  (map (fn [url] [:script {:type "text/javascript" :src url}])
                    (cons (str "/assets/javascripts/cljs-out/development/goog/base.js")
                      (assets-link/bundle-paths request ["application.js" "material-ui.js"])))
                  #_[:script {:type "text/javascript"} "goog.require('filemporium.client.core');"]])]
      {:status 200 :headers {"Content-Type" "text/html"} :body body}))

(def handlers
  {:api.authentication/sign-in  sign-in-handler
   :api.authentication/sign-out sign-out-handler
   ; :app/assets                  assets-handler
   :app/home                    home-handler})

(defn make-app []
  (-> not-found-handler
      (routing/wrap-endpoints handlers)
      (routing/routed-middleware :assets (assets/create-assets-middleware))
      (routing/routed-middleware :restful-format format/wrap-restful-format :formats [:json-kw])
      (routing/wrap-routing routes)))

; (bidi.bidi/match-route ["" [["/api" [["/authentication" [["/sign-in"  {:post   :api.authentication/sign-in}]
;                                                          ["/sign-out" {:delete :api.authentication/sign-out}]]]]]
;                              ["/assets" [["/a" (fn [_] {:status 200 :body "Test"})]
;                                          [#".*" :app/assets]]]]]
;                         "/assets/ase")
