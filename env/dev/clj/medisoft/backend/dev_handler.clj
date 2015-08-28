(ns dev-handler
    (:import  [java.net URLDecoder])
    (:require [clojure.java.io :as io]
      [clojure.string :as s]
      [ring.util.response :as response :refer [file-response resource-response]]
      [ring.middleware
       [file :refer [wrap-file file-request]]
       [resource :refer [wrap-resource resource-request]]
       [content-type :refer [wrap-content-type]]
       [not-modified :refer [wrap-not-modified]]
       [reload :refer [wrap-reload]]]
      [pandeiro.boot-http.util :as u]
      [boot.util :refer [warn]]
      [taoensso.timbre :as log]))

;;
;; Directory serving
;;
(def index-files #{"index.html" "index.htm"})

(defn index-file-exists? [files]
      (first (filter #(index-files (s/lower-case (.getName %))) files)))

(defn path-diff [root-path path]
      (s/replace path (re-pattern (str "^" root-path)) ""))

(defn filepath-from-uri [root-path uri]
      (str root-path (URLDecoder/decode uri "UTF-8")))

(defn list-item [root-path]
      (fn [file]
          (format "<li><a href=\"%s\">%s</a></li>"
                  (path-diff root-path (.getPath file))
                  (.getName file))))

(defn index-for [dir]
      (let [root-path (or (.getPath (io/file dir)) "")]
           (fn [{:keys [uri] :as req}]
               (let [directory (io/file (filepath-from-uri root-path uri))]
                    (when (.isDirectory directory)
                          (let [files (sort (.listFiles directory))]
                               {:status  200
                                :headers {"Content-Type" "text/html"}
                                :body    (if-let [index-file (index-file-exists? files)]
                                                 (slurp index-file)
                                                 (format (str "<!doctype html><meta charset=\"utf-8\">"
                                                              "<body><h1>Directory listing</h1><hr>"
                                                              "<ul>%s</ul></body>")
                                                         (apply str (map (list-item root-path) files))))}))))))

(defn wrap-index [handler dir]
      (fn [req]
          (or ((index-for dir) req)
              (handler req))))

;;
;; Handlers
;;
(defn- not-found [_] ; ring.util.response version has no Content-Type
       {:status  404
        :headers {"Content-Type" "text/plain; charset=utf-8"}
        :body    "Not found"})

(defn- maybe-create-dir! [dir]
       (let [dir-file (io/file dir)]
            (when-not (.exists dir-file)
                      (warn "Directory '%s' was not found. Creating it..." dir)
                      (.mkdirs dir-file))))

(defn dir-handler [{:keys [dir resource-root default-to]
                    :or {resource-root ""}}]
      (when dir
            (maybe-create-dir! dir)
            (let [handler
                  (fn [request]
                      (or (file-request request dir {:index-files? false})
                          (resource-request request resource-root)
                          (if default-to
                            (let [response (some-> (file-response default-to {:root dir})
                                                   (response/content-type "text/html"))]
                                 response)
                            not-found)))]
                 handler)))

(def handler (dir-handler {:dir "target/public" :default-to "index.html"}))