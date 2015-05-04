(ns medisoft.frontend.routes
  (:require [bidi.bidi :as bidi]))

;; client side routing

(def app-routes ["/" [[""         :home/dashboard]
                      ["job-titles" [[""                  :job-titles/list]
                                     ["/create"           :job-titles/create]
                                     [["/" :id] [[""      :job-titles/show]
                                                 ["/edit" :job-titles/edit]]]]]
                      ["employees" [[""                  :employees/list]
                                    ["/create"           :employees/create]
                                    [["/" :id] [[""      :employees/show]
                                                ["/edit" :employees/edit]]]]]
                      ["patients" [[""                  :patients/list]
                                   ["/create"           :patients/create]
                                   [["/" :id] [[""      :patients/show]
                                               ["/edit" :patients/edit]]]]]]])

(defn app-path-for [& args]
  (apply bidi/path-for app-routes args))

;; server side routing

(def base-address "//localhost:8080/mediApp")

(def server-routes ["/" [["api/" [["login"  :api.authentication/log-in]
                                  ["logout" :api.authentication/log-out]

                                  ["job-titles/"  [[[:id] :api.job-titles/show]
                                                   [[:id] :api.job-titles/update]
                                                   [""    :api.job-titles/list]
                                                   [""    :api.job-titles/create]
                                                   #_["delete"      :api.patients/delete]]]

                                  ["employees/"  [[[:id] :api.employees/show]
                                                  [[:id] :api.employees/update]
                                                  [""    :api.employees/list]
                                                  [""    :api.employees/create]
                                                  #_["delete"      :api.patients/delete]]]

                                  ["patients/"  [[[:id] :api.patients/show]
                                                 [[:id] :api.patients/update]
                                                 [""    :api.patients/list]
                                                 [""    :api.patients/create]
                                                 #_["delete"      :api.patients/delete]]]]]]])

(defn server-path-for [& args]
  (let [path (apply bidi/path-for server-routes args)]
    (str base-address path)))
