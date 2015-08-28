(ns medisoft.frontend.routes
  (:require [bidi.bidi :as bidi]
            [medisoft.frontend.main]))

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
                                               ["/edit" :patients/edit]]]]]
                      ["medicines" [[""                  :medicines/list]
                                    ["/create"           :medicines/create]
                                    [["/" :id] [[""      :medicines/show]
                                                ["/edit" :medicines/edit]]]]]
                      ["appointments" [[""                  :appointments/list]
                                 ["/create"           :appointments/create]
                                 [["/" :id] [[""      :appointments/show]
                                             ["/edit" :appointments/edit]]]]]
                      ["rooms" [[""                  :rooms/list]
                                       ["/create"           :rooms/create]
                                       [["/" :id] [[""      :rooms/show]
                                                   ["/edit" :rooms/edit]]]]]
                      ["devices" [[""                  :devices/list]
                                       ["/create"           :devices/create]
                                       [["/" :id] [[""      :devices/show]
                                                   ["/edit" :devices/edit]]]]]]])

(defn app-path-for [& args]
  (apply bidi/path-for app-routes args))

;; server side routing

;; TODO: this should not need exlicit path, that's dumb
(def base-address (condp = medisoft.frontend.main/env
                    :development "//localhost:8080"
                    :staging     "//46.101.191.238:8080"))

(def server-routes ["/" [["explicit/login" :api.authentication/validate-log-in]
                         ["api/" [["login"  :api.authentication/log-in]
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
                                                 #_["delete"      :api.patients/delete]]]

                                  ["medicines/"  [[[:id] :api.medicines/show]
                                                  [[:id] :api.medicines/update]
                                                  [""    :api.medicines/list]
                                                  [""    :api.medicines/create]
                                                  #_["delete"      :api.patients/delete]]]
                                  ["medical-visits/"  [[[:id] :api.appointments/show]
                                                       [[:id] :api.appointments/update]
                                                       [""    :api.appointments/list]
                                                       ["filter"    :api.appointments/list-filtered]
                                                       [""    :api.appointments/create]
                                                       #_["delete"      :api.patients/delete]]]
                                  ["rooms/" [[[:id] :api.rooms/show]
                                             [[:id] :api.rooms/update]
                                             ["" :api.rooms/list]
                                             ["" :api.rooms/create]]]
                                  ["room-reservations/" [[[:id] :api.room-reservations/show]
                                                         [[:id] :api.room-reservations/update]
                                                         [[:id] :api.room-reservations/delete]
                                                         ["" :api.room-reservations/list]
                                                         ["" :api.room-reservations/create]]]
                                  ["devices/" [[[:id] :api.devices/show]
                                               [[:id] :api.devices/update]
                                               ["" :api.devices/list]
                                               ["" :api.devices/create]]]
                                  ["device-reservations/" [[[:id] :api.device-reservations/show]
                                                           [[:id] :api.device-reservations/update]
                                                           [[:id] :api.device-reservations/delete]
                                                           ["" :api.device-reservations/list]
                                                           ["" :api.device-reservations/create]]]]]]])

(defn server-path-for [& args]
  (let [path (apply bidi/path-for server-routes args)]
    (str base-address path)))

