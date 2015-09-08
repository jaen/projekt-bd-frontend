(ns medisoft.frontend.ui.dashboard
  (:require [re-com.core :as rc-core]))

(defn nav-component []
  [rc-core/box :size "150px" :child "Nav"])

(defn content-component []
  [rc-core/box :child "Content"])

(defn dashboard-component []
  [rc-core/v-box :size "1"
   :children [[rc-core/h-box :size "1"
               :children [[:div "Dashboard"]] #_[[nav-component]
                          [content-component]]]]])