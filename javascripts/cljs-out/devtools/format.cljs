(ns devtools.format)

(def max-print-level 3)
(def max-header-elements 5)
(def more-marker "…")
(def max-number-body-items 100)
(def body-items-more-label "more…")
(def string-prefix-limit 20)
(def string-postfix-limit 20)
(def string-abbreviation-marker " … ")
(def new-line-string-replacer "↵")
(def line-index-separator ":")
(def dq "\"")
(def surrogate-key "$$this-is-cljs-devtools-surrogate")
(def standard-ol-style "list-style-type:none; padding-left:0px; margin-top:0px; margin-bottom:0px; margin-left:12px")
(def standard-ol-no-margin-style "list-style-type:none; padding-left:0px; margin-top:0px; margin-bottom:0px; margin-left:0px")
(def standard-li-style "margin-left:12px")
(def standard-li-no-margin-style "margin-left:0px")
(def spacer " ")
(def span "span")
(def ol "ol")
(def li "li")
(def cljs-style "background-color:#efe")
(def index-style "color:#881391")
(def nil-style "color:#808080")
(def nil-label "nil")
(def keyword-style "color:#881391")
(def integer-style "color:#1C00CF")
(def float-style "color:#1C88CF")
(def string-style "color:#C41A16")
(def symbol-style "color:#000000")
(def fn-style "color:#090")
(def bool-style "color:#099")

; IRC #clojurescript @ freenode.net on 2015-01-27:
; [13:40:09] darwin_: Hi, what is the best way to test if I'm handled ClojureScript data value or plain javascript object?
; [14:04:34] dnolen: there is a very low level thing you can check
; [14:04:36] dnolen: https://github.com/clojure/clojurescript/blob/c2550c4fdc94178a7957497e2bfde54e5600c457/src/clj/cljs/core.clj#L901
; [14:05:00] dnolen: this property is unlikely to change - still it's probably not something anything anyone should use w/o a really good reason
(defn cljs-value? [value]
  (try
    (exists? (aget value "constructor" "cljs$lang$type"))
    (catch js/Object _
      false)))

(defn surrogate? [value]
  (and
    (not (nil? value))
    (exists? (aget value surrogate-key))))

(defn template [tag style & children]
  (let [js-array #js [tag (if (empty? style) #js {} #js {"style" style})]]
    (doseq [child children]
      (if (coll? child)
        (.apply (aget js-array "push") js-array (into-array child)) ; convenience helper to splat cljs collections
        (.push js-array child)))
    js-array))

(defn reference [object & children]
  (let [js-array #js ["object" #js {"object" object}]]
    (doseq [child children]
      (.push js-array child))
    js-array))

(defn surrogate
  ([object header] (surrogate object header true))
  ([object header has-body] (surrogate object header has-body nil))
  ([object header has-body body-template]
   (js-obj
     surrogate-key true
     "target" object
     "header" (template span cljs-style header)
     "hasBody" has-body
     "bodyTemplate" body-template)))

(defn index-template [value]
  (template span index-style value line-index-separator))

(defn number-template [value]
  (if (integer? value)
    (template span integer-style value)
    (template span float-style value)))

(defn abbreviate-long-string [string]
  (str
    (apply str (take string-prefix-limit string))
    string-abbreviation-marker
    (apply str (take-last string-postfix-limit string))))

(defn string-template [source-string]
  (let [re-nl (js/RegExp. "\n" "g")
        inline-string (.replace source-string re-nl new-line-string-replacer)
        max-inline-string-size (+ string-prefix-limit string-postfix-limit)]
    (if (<= (count inline-string) max-inline-string-size)
      (template span string-style (str dq inline-string dq))
      (let [abbreviated-string-template (template span string-style (str dq (abbreviate-long-string inline-string) dq))
            string-with-nl-markers (.replace source-string re-nl (str new-line-string-replacer "\n"))
            body-template (template ol standard-ol-style
                            (template li standard-li-style
                              (template span string-style (str dq string-with-nl-markers dq))))]
        (reference (surrogate source-string abbreviated-string-template true body-template))))))

(defn bool? [value]
  (or (true? value) (false? value)))

(defn atomic-template [value]
  (cond
    (nil? value) (template span nil-style nil-label)
    (bool? value) (template span bool-style value)
    (string? value) (string-template value)
    (number? value) (number-template value)
    (keyword? value) (template span keyword-style (str value))
    (symbol? value) (template span symbol-style (str value))
    (fn? value) (template span fn-style (reference value))))

(defn abbreviated? [template]
  (some #(= more-marker %) template))

(deftype TemplateWriter [t]
  Object
  (merge [_ a] (.apply (.-push t) t a))
  IWriter
  (-write [_ o] (.push t o))
  (-flush [_] nil))

(defn wrap-group-in-reference-if-needed [group obj]
  (if (abbreviated? group)
    #js [(reference (surrogate obj (.concat (template span "") group)))]
    group))

; default printer implementation can do this:
;   :else (write-all writer "#<" (str obj) ">")
; we want to wrap stringified obj in a reference for further inspection
(defn detect-else-case-and-patch-it [group obj]
  (if (and (= (count group) 3) (= (aget group 0) "#<") (= (str obj) (aget group 1)) (= (aget group 2) ">"))
    (aset group 1 (reference obj))))

(defn alt-printer-impl [obj writer opts]
  (if-let [tmpl (atomic-template obj)]
    (-write writer tmpl)
    (let [inner-tmpl #js []
          inner-writer (TemplateWriter. inner-tmpl)
          default-impl (:fallback-impl opts)
          ; we want to limit print-level, at max-print-level level use maximal abbreviation e.g. [...] or {...}
          inner-opts (if (= *print-level* 1) (assoc opts :print-length 0) opts)]
      (default-impl obj inner-writer inner-opts)
      (detect-else-case-and-patch-it inner-tmpl obj)        ; an ugly special case
      (.merge writer (wrap-group-in-reference-if-needed inner-tmpl obj) obj))))

(defn managed-pr-str [value style print-level]
  (let [tmpl (template span style)
        writer (TemplateWriter. tmpl)]
    (binding [*print-level* print-level]                    ; when printing do at most print-level deep recursion
      (pr-seq-writer [value] writer {:alt-impl     alt-printer-impl
                                     :print-length max-header-elements
                                     :more-marker  more-marker}))
    tmpl))

(defn build-header [value]
  (managed-pr-str value cljs-style (inc max-print-level)))

(defn standard-body-template
  ([lines margin?] (let [ol-style (if margin? standard-ol-style standard-ol-no-margin-style)
                         li-style (if margin? standard-li-style standard-li-no-margin-style)]
                     (template ol ol-style (map #(template li li-style %) lines))))
  ([lines] (standard-body-template lines true)))

(defn body-line-template [index value]
  [(index-template index) spacer (managed-pr-str value (if cljs-value? cljs-style "") 3)])

(defn prepare-body-lines [data starting-index]
  (loop [work data
         index starting-index
         lines []]
    (if (empty? work)
      lines
      (recur (rest work) (inc index) (conj lines (body-line-template index (first work)))))))

(defn body-lines-templates [value starting-index]
  (let [seq (seq value)
        chunk (take max-number-body-items seq)
        rest (drop max-number-body-items seq)
        lines (prepare-body-lines chunk starting-index)
        continue? (not (empty? (take 1 rest)))]
    (if-not continue?
      lines
      (let [surrogate-object (surrogate rest body-items-more-label)]
        (aset surrogate-object "startingIndex" (+ starting-index max-number-body-items))
        (conj lines (reference surrogate-object))))))

(defn build-body [value starting-index]
  (standard-body-template (body-lines-templates value starting-index) (zero? starting-index)))

(defn build-surrogate-body [value]
  (if-let [body-template (aget value "bodyTemplate")]
    body-template
    (let [target (aget value "target")]
      (if (seqable? target)
        (let [starting-index (or (aget value "startingIndex") 0)]
          (build-body target starting-index))
        (template ol standard-ol-style (template li standard-li-style (reference target)))))))

;;;;;;;;; PROTOCOL SUPPORT

(defprotocol IDevtoolsFormat
  (-header [value])
  (-has-body [value])
  (-body [value]))

;;;;;;;;; RAW API

(defn want-value? [value]
  (or (cljs-value? value)
    (surrogate? value)))

(defn header [value]
  (cond
    (surrogate? value) (aget value "header")
    (satisfies? IDevtoolsFormat value) (-header value)
    :else (build-header value)))

(defn has-body [value]
  ; note: body is emulated using surrogate references
  (cond
    (surrogate? value) (aget value "hasBody")
    (satisfies? IDevtoolsFormat value) (-has-body value)
    :else false))

(defn body [value]
  (cond
    (surrogate? value) (build-surrogate-body value)
    (satisfies? IDevtoolsFormat value) (-body value)))

;;;;;;;;; API CALLS

(defn header-api-call [value]
  (if (want-value? value)
    (header value)))

(defn has-body-api-call [value]
  (if (want-value? value)
    (has-body value)
    false))

(defn body-api-call [value]
  (if (want-value? value)
    (body value)))