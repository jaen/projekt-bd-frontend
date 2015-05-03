(ns medisoft.frontend.logic
  ; (:require-macros [cljs.core.async.macros :refer [go go-loop]])
  (:require [reagent.core :as reagent]
            [medisoft.frontend.log :as log]))

(defonce current-page   (reagent/atom :home/dashboard))
(defonce current-params (reagent/atom {}))

(defn set-current-page! [page & [params]]
  (log/debug "setting page:"   (reset! current-page page))
  (log/debug "setting params:" (reset! current-params (or params {}))))
