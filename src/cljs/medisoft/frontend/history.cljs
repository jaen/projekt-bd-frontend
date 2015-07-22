(ns medisoft.frontend.history
  (:require [cuerdas.core :as string]
            [goog.events :as events]
            [goog.history.Html5History :as html5-history]
            [goog.window :as window]
            [medisoft.frontend.log :as log]
            [medisoft.frontend.routes :as routes]
    ;[medisoft.frontend.ui.application :as ui-main]
            [bidi.bidi :as bidi]
            [cuerdas.core :as str]
            [medisoft.frontend.logic :as logic]
            [medisoft.frontend.api :as api])
  (:import [goog.history Html5History]
           [goog.events EventType Event BrowserEvent]
           [goog History]))

(def handlers
  {:home/dashboard  (fn []       (logic/set-current-page! :home/dashboard))

   :job-titles/list   (fn []       (logic/set-current-page! :job-titles/list))
   :job-titles/show   (fn [params] (logic/set-current-page! :job-titles/show params))
   :job-titles/edit   (fn [params] (logic/set-current-page! :job-titles/edit params))
   :job-titles/create (fn [params] (logic/set-current-page! :job-titles/create params))

   :employees/list   (fn []       (logic/set-current-page! :employees/list))
   :employees/show   (fn [params] (logic/set-current-page! :employees/show params))
   :employees/edit   (fn [params] (logic/set-current-page! :employees/edit params))
   :employees/create (fn [params] (logic/set-current-page! :employees/create params))

   :patients/list   (fn []       (logic/set-current-page! :patients/list))
   :patients/show   (fn [params] (logic/set-current-page! :patients/show params))
   :patients/edit   (fn [params] (logic/set-current-page! :patients/edit params))
   :patients/create (fn [params] (logic/set-current-page! :patients/create params))

   :medicines/list   (fn []       (logic/set-current-page! :medicines/list))
   :medicines/show   (fn [params] (logic/set-current-page! :medicines/show params))
   :medicines/edit   (fn [params] (logic/set-current-page! :medicines/edit params))
   :medicines/create (fn [params] (logic/set-current-page! :medicines/create params))

   :appointments/list   (fn []       (logic/set-current-page! :appointments/list))
   :appointments/show   (fn [params] (logic/set-current-page! :appointments/show params))
   :appointments/edit   (fn [params] (logic/set-current-page! :appointments/edit params))
   :appointments/create (fn [params] (logic/set-current-page! :appointments/create params))

   :rooms/list   (fn []       (logic/set-current-page! :rooms/list))
   :rooms/show   (fn [params] (logic/set-current-page! :rooms/show params))
   :rooms/edit   (fn [params] (logic/set-current-page! :rooms/edit params))
   :rooms/create (fn [params] (logic/set-current-page! :rooms/create params))

   :devices/list   (fn []       (logic/set-current-page! :devices/list))
   :devices/show   (fn [params] (logic/set-current-page! :devices/show params))
   :devices/edit   (fn [params] (logic/set-current-page! :devices/edit params))
   :devices/create (fn [params] (logic/set-current-page! :devices/create params))
   })

;;

(def history-impl (atom nil))

(defn navigate-to! [url]
  (let [url (str/replace-first url #"^/" "")]
    (log/debug "settting url to:" url)
    (.setToken @history-impl url)))

(defn- match-bidi-route [path]
  (let [route (bidi/match-route routes/app-routes path)]
    route))

(defn handle-dispatch [e]
  (log/debug "navigation event: " e)
  (let [token      (str "/" (.-token e))
        bidi-route (match-bidi-route token)
        handler    (get handlers (:handler bidi-route))]
    (if (and (not @api/logged-in?)
             (not= token "/"))
      (do
        (log/debug "user not logged in, returning to home")
        (navigate-to! (routes/app-path-for :home/dashboard)))
      (do
        (log/debug "navigated to route: " bidi-route)
        (handler (:route-params bidi-route))))))

;; see this.transformer_ at http://goo.gl/ZHLdwa
(def ^{:doc "Custom token transformer that preserves hashes"}
  token-transformer
  (let [transformer (js/Object.)]
    (set! (.-retrieveToken transformer)
          (fn [path-prefix location]
            (str (subs (.-pathname location) (count path-prefix))
                 (when-let [query (.-search location)]
                   query)
                 (when-let [hash (second (string/split (.-href location) #"#"))]
                   (str "#" hash)))))

    (set! (.-createUrl transformer)
          (fn [token path-prefix location]
            (str path-prefix token)))

    transformer))

(defn set-current-token!
  "Lets us keep track of the history state, so that we don't dispatch twice on the same URL"
  [history-imp & [token]]
  (set! (.-_current_token history-imp) (or token (.getToken history-imp))))

(defn setup-dispatcher! [history-imp]
  (events/listen history-imp goog.history.EventType.NAVIGATE
                 (fn [e]
                   (set-current-token! history-imp)
                   (handle-dispatch e))))

(defn bootstrap-dispatcher!
  "We need lots of control over when we start listening to navigation events because
   we may want to ignore the first event if the server sends an error status code (e.g. 401)
   This function lets us ignore the first event that history-imp fires when we enable it. We'll
   manually dispatch if there is no error code from the server."
  [history-imp]
  (events/listenOnce history-imp goog.history.EventType.NAVIGATE (fn [e]
                                                                   (set-current-token! history-imp)
                                                                   (handle-dispatch e) ; TODO: check how it related to docstring
                                                                   (setup-dispatcher! history-imp))))

(defn disable-erroneous-popstate!
  "Stops the browser's popstate from triggering NAVIGATION events unless the url has really
   changed. Fixes duplicate dispatch in Safari and the build machines."
  [history-imp]
  ;; get this history instance's version of window, might make for easier testing later
  (let [window (.-window_ history-imp)]
    (events/removeAll window goog.events.EventType.POPSTATE)
    (events/listen window goog.events.EventType.POPSTATE
                   #(if (= (.getToken history-imp)
                           (.-_current_token history-imp))
                     (log/debug "Ignoring duplicate dispatch event to" (.getToken history-imp))
                     (.onHistoryEvent_ history-imp)))))

(defn route-fragment
  "Returns the route fragment if this is a route that we've don't dispatch
  on fragments for."
  [path]
  (when (str/contains? path "#")
    (last (str/split path #"#")))
  #_(-> path
      sec/locate-route
      :params
      :_fragment))

(defn path-matches?
  "True if the two tokens are the same except for the fragment"
  [token-a token-b]
  (= (first (string/split token-a #"#"))
     (first (string/split token-b #"#"))))

(defn new-window-click? [event]
  (or (.isButton event goog.events.BrowserEvent.MouseButton.MIDDLE)
      (and (.-platformModifierKey event)
           (.isButton event goog.events.BrowserEvent.MouseButton.LEFT))))

(defn setup-link-dispatcher! [history-imp top-level-node]
  (let [dom-helper (goog.dom.DomHelper.)]
    (events/listen top-level-node "click"
                   #(let [-target (.. % -target)
                          target (if (= (.-tagName -target) "A")
                                   -target
                                   (.getAncestorByTagNameAndClass dom-helper -target "A"))
                          location (when target (str (.-pathname target) (.-search target) (.-hash target)))
                          new-token (when (seq location) (subs location 1))]
                     (when (and (seq location)
                                (not (let [value (str/strip (.. target -attributes -href -value))] ;; INFO: to not navigate on empty hrefs
                                       (or (str/blank? value)
                                           (= "#" value))))
                                (= (.. js/window -location -hostname)
                                   (.-hostname target))
                                (not (or (new-window-click? %) (= (.-target target) "_blank"))))
                       (.stopPropagation %)
                       (.preventDefault %)
                       (if (and (route-fragment location)
                                (path-matches? (.getToken history-imp) new-token))

                         (do (log/debug "scrolling to hash for" location)
                             ;; don't break the back button
                             (.replaceToken history-imp new-token))

                         (do (log/debug "navigating to" location)
                             (.setToken history-imp new-token))))))))

(defn new-history-impl [top-level-node]
  ;; need a history element, or goog will overwrite the entire dom
  (let [dom-helper (goog.dom.DomHelper.)
        node (.createDom dom-helper "input" #js {:class "history hide"})]
    (.append dom-helper node))
  (doto (goog.history.Html5History. js/window token-transformer)
    (.setUseFragment false)
    (.setPathPrefix "/")
    (bootstrap-dispatcher!)
    (set-current-token!) ; Stop Safari from double-dispatching
    (disable-erroneous-popstate!) ; Stop Safari from double-dispatching
    (setup-link-dispatcher! top-level-node)
    ; (.setEnabled true) ; This will fire a navigate event with the current token
    ))

(defn setup-history! [top-level-node]
  (let [history (new-history-impl top-level-node)]
    (reset! history-impl history)
    (.setEnabled history true) ))