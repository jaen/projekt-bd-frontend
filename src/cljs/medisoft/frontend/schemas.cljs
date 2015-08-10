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

(def LoginValidateRequest
  {:username schema/Str
   :password schema/Str})

(def LoginValidateResponse
  {(schema/optional-key :username) [schema/Str]
   (schema/optional-key :password) [schema/Str]})

;; common schemas

(def EntityId
  schema/Int)

(def EntityReference
  {(schema/optional-key :class) schema/Str
   :id    EntityId})

(def RelativeReference
  {:ref schema/Str
   :class schema/Str})

(defn make-entity [schema]
  (merge EntityReference schema)
  #_(schema/either
    {(schema/optional-key :class) schema/Str
     :_ref   schema/Str}
    EntityReference
    (merge EntityReference schema)))

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

;; job title schemas

(def JobTitle
  (merge EntityReference
         {:name schema/Str}))

(def JobTitleListResponse
  [JobTitle])

(def JobTitleShowResponse
  JobTitle)

(def JobTitleCreateRequest
  {:name schema/Str})

(def JobTitleCreateResponse
  (schema/either JobTitle
                 (errors-response JobTitleCreateRequest)))

(def JobTitleUpdateRequest
  {:name schema/Str})

(def JobTitleUpdateResponse
  JobTitleCreateResponse)

;; employee schemas

(declare Visit)

(def Employee
  (make-entity
    (merge PersonalInformation
         {:is-doctor           schema/Bool
          :device-reservations [EntityReference]
          :room-reservations   [EntityReference]
          :job-title           EntityReference
          :medical-visits      [(schema/either (schema/recursive #'Visit) EntityReference RelativeReference)]
          :prescriptions       [EntityReference]
          :schedules           [EntityReference]
          :specializations     [EntityReference]
          :users               [EntityReference]})))

(def EmployeeListResponse
  [Employee])

(def EmployeeShowResponse
  Employee)

(def EmployeeCreateRequest
  (merge PersonalInformation
         {:is-doctor schema/Bool
          (schema/optional-key :job-title) EntityReference
          (schema/optional-key :user)      EntityReference
          (schema/optional-key :specialization) EntityReference}))

(def EmployeeCreateResponse
 (schema/either Employee
                (errors-response EmployeeCreateRequest)))

(def EmployeeUpdateRequest
  (merge ; EntityReference
    EmployeeCreateRequest))

(def EmployeeUpdateResponse
  EmployeeCreateResponse)

;; patient schemas

(def Patient
  (make-entity
    (merge PersonalInformation
           {:medical-visits  [(schema/either (schema/recursive #'Visit) EntityReference RelativeReference)]
           (schema/optional-key :prescription) [EntityReference]})))

(def PatientListQuery
  {(schema/optional-key :firstname)   schema/Str
   (schema/optional-key :surname)     schema/Str
   (schema/optional-key :personal-id) schema/Str})

(def PatientListResponse
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

;; medicine schemas

(def MedicineAttributes
  {:approved schema/Bool
   :dose schema/Str
   :gtin schema/Str
   :name schema/Str
   :producer-name schema/Str
   :type schema/Str
   :wrapping schema/Str})

(def Medicine
  (merge EntityReference
         MedicineAttributes))

(def MedicineListResponse
  [Medicine])

(def MedicineShowResponse
  Medicine)

(def MedicineCreateRequest
  MedicineAttributes)

(def MedicineCreateResponse
  (schema/either Medicine
                 (errors-response MedicineCreateRequest)))

(def MedicineUpdateRequest
  MedicineCreateRequest)

(def MedicineUpdateResponse
  MedicineCreateResponse)

;; visit schemas

(def VisitAttributes
  {:date        DateTime
   :description schema/Str
   :employee     (schema/either (schema/recursive #'Employee) EntityReference RelativeReference)
   :patient      (schema/either (schema/recursive #'Patient) EntityReference RelativeReference)
   (schema/optional-key :icd10) (schema/maybe [schema/Str])})

(def VisitAdditionalAttributes
  {})

(def Visit
  (merge EntityReference
         VisitAttributes))

(def VisitListResponse
  [(merge Visit VisitAdditionalAttributes)])

(def VisitShowResponse
  (merge Visit VisitAdditionalAttributes))

(def VisitCreateRequest
  VisitAttributes)

(def VisitCreateResponse
  (schema/either Visit
                 (errors-response VisitCreateRequest)))

(def VisitUpdateRequest
  (merge VisitAttributes VisitAdditionalAttributes))

(def VisitUpdateResponse
  (schema/either (merge Visit VisitAdditionalAttributes)
                 (errors-response VisitUpdateRequest)))

;; Room schemas

(declare Device)

(def RoomAttributes
  {:number      schema/Str
   (schema/optional-key :devices) [(schema/either (schema/recursive #'Device) EntityReference RelativeReference)]})

(def RoomAdditionalAttributes
  {})

(def Room
  (merge EntityReference
         RoomAttributes))

(def RoomListResponse
  [(merge Room RoomAdditionalAttributes)])

(def RoomShowResponse
  (merge Room RoomAdditionalAttributes))

(def RoomCreateRequest
  RoomAttributes)

(def RoomCreateResponse
  (schema/either (merge Room RoomAdditionalAttributes)
                 (errors-response RoomCreateRequest)))

(def RoomUpdateRequest
  RoomAttributes)

(def RoomUpdateResponse
  (schema/either (merge Room RoomAdditionalAttributes)
                 (errors-response RoomUpdateRequest)))

;; Device schemas

(def DeviceAttributes
  {:producer      schema/Str
   :serial        schema/Str
   :purchase-date DateTime
   :warranty-date DateTime
   :room          (schema/either (schema/recursive #'Room) EntityReference RelativeReference)})

;(def RoomAdditionalAttributes
;  {:devices [EntityReference]})

(def Device
  (merge EntityReference
         DeviceAttributes))

(def DeviceListResponse
  [(merge Device {})])

(def DeviceShowResponse
  (merge Device {}))

(def DeviceCreateRequest
  (merge (dissoc DeviceAttributes :room) {(schema/optional-key :room) EntityReference}))

(def DeviceCreateResponse
  (schema/either (merge Device {})
                 (errors-response DeviceCreateRequest)))

(def DeviceUpdateRequest
  DeviceAttributes)

(def DeviceUpdateResponse
  (schema/either (merge Device {})
                 (errors-response DeviceUpdateRequest)))