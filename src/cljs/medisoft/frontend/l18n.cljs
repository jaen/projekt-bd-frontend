(ns medisoft.frontend.l18n
  (:require [taoensso.tower :as tower :include-macros true]))

(def ^:private translation-config
  {:fallback-locale :pl
   ;; Inlined (macro) dict => this ns needs rebuild for dict changes to reflect.
   ;; (dictionary .clj file can be placed in project's `/resources` dir):
   :compiled-dictionary (tower/dict-compile* "locales/dictionary.clj")})

(def ^:private t' (tower/make-t translation-config))

(defn t [& args]
  (apply t' :pl args))