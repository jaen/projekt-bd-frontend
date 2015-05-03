(ns medisoft.frontend.core
  (:require [reagent.core :as reagent]
            [devtools.core :as devtools]
            [medisoft.frontend.ui.application :as ui-application]
            [medisoft.frontend.history :as history]

            [medisoft.frontend.log :as log]))

(defn install-devtools []
  (devtools/install!))

(defn mount-root []
  (reagent/render-component [ui-application/application-component] (.-body js/document)))

(defonce old-handler (atom nil))

(defn setup-error-handler []
  (when-not @old-handler (reset! old-handler (.-onerror js/window)))
  (let [on-error-handler (fn [error-msg url line column error]
                           (log/error "Error: " error-msg "\n" url ":" line ":" column "\n" error)
                           false)]
    (set! (.-onerror js/window) on-error-handler)))

(defn init! []
  (install-devtools)
  (setup-error-handler)
  (mount-root)
  (history/setup-history! (.-body js/document)))

#_(let [flat-button (.-RaisedButton js/MaterialUI)
          text-field  (.-TextField js/MaterialUI)]
      (rum/mount (text-field #js{"hintText" "Some Hint" "floatingLabelText" "Some Floating Label"})
                 #_(flat-button #js{"label" "Secondary" "secondary" true} nil)#_(label 5 "abc") (.-body js/document)))
