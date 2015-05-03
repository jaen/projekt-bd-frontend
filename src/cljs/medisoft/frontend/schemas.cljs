(ns medisoft.frontend.schemas
  (:require [schema.core :as schema :include-macros true]

            [medisoft.frontend.log :as log]))

(defn wrap-optional-key [key]
  (if (instance? schema/OptionalKey key)
    key
    (schema/optional-key key)))

(defn make-all-keys-optional [schema]
  (into {} (map (fn [[k v]] [(wrap-optional-key k) v]) schema)))

(defn errors-response [schema]
  {(schema/optional-key :valid) schema/Bool
   :errors                      (into {} (map (fn [[k _]] [(wrap-optional-key k) [schema/Str]]) schema))})

(def DateTime (schema/pred (fn [val]
                             (some #(instance? % val)
                                   [goog.date.Date goog.date.DateTime goog.date.UtcDateTime]))
                           'date-time?))

(def LoginRequest
  {:username schema/Str
   :password schema/Str
   ;:date DateTime
   })

(def LoginResponse
  {:username schema/Str
   :roles [schema/Str]
   :access-token schema/Str})

;; common schemas

(def EntityReference
  {(schema/optional-key :class) schema/Str
   :id    schema/Int})

(def PersonalId
  schema/Str)

(def ZipCode
  schema/Str)

(def PersonalInformation
  {:firstname           schema/Str
   :surname             schema/Str
   :personal-id         PersonalId
   :street-name         schema/Str
   :flat-number         schema/Str ;Int
   :house-number        schema/Str ;Int
   :zip-code            ZipCode
   :city                schema/Str
   :country             schema/Str})

;; patients schemas

(def Employee
  (merge EntityReference
         PersonalInformation
         {:is-doctor           schema/Bool
          :device-reservations [EntityReference]
          :job-title           [EntityReference]
          :medical-visits      [EntityReference]
          :prescription #_s       [EntityReference]
          :schedules           [EntityReference]
          :specializations     [EntityReference]
          :users               [EntityReference]}))

(def EmployeesListResponse
  [Employee])

;; patient schemas

(def Patient
  (merge EntityReference
         PersonalInformation
         {:medical-visits      [EntityReference]
          :prescription #_s       [EntityReference]}))

(def PatientListQuery
  {(schema/optional-key :firstname)   schema/Str
   (schema/optional-key :surname)     schema/Str
   (schema/optional-key :personal-id) schema/Str})

(def PatientsListResponse
  [Patient])

(def PatientShowResponse
  Patient)

(def PatientCreateRequest
  PersonalInformation)

(def PatientCreateResponse
  (schema/either Patient
                 (errors-response PatientCreateRequest)))

(def PatientUpdateRequest
  (merge ; EntityReference
         PersonalInformation))

(def PatientUpdateResponse
  PatientCreateResponse)
