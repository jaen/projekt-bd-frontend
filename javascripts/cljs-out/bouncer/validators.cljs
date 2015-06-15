(ns bouncer.validators
  "This namespace contains all built-in validators as well as
          macros for defining new validators and validator sets"
  {:author "Leonardo Borges"}
                                          
         (:require [cljs-time.format :as f])
         (:require-macros [bouncer.validators :refer [defvalidator]]))

;; ## Customization support
;;
;; The following functions and macros support creating custom validators

                      
                                                                                         
                                     

                                                         

                                                                            
                                                             

                                                                              
                                                

                                                                              
                            

                                                                                   

                                                                                             
                    

       


                        
                  
                           

                       
                                


                                                                                             
                
 
                                                           
                  
                                                         
                                                                 
                                               
                                                          
                                                                  
                                                
                              
                                                                   
                              
                                          
                                            
                                                           

;; ## Built-in validators

(defvalidator required
  "Validates value is present.

  If the value is a string, it makes sure it's not empty, otherwise it checks for nils.

  For use with validation functions such as `validate` or `valid?`
"
  {:default-message-format "%s must be present"}
  [value]
  (if (string? value)
    (not (empty? value))
    (not (nil? value))))

(defvalidator number
  "Validates maybe-a-number is a valid number.

  For use with validation functions such as `validate` or `valid?`"
  {:default-message-format "%s must be a number" :optional true}
  [maybe-a-number]
  (number? maybe-a-number))


(defvalidator positive
  "Validates number is a number and is greater than zero.

  For use with validation functions such as `validate` or `valid?`"
  {:default-message-format "%s must be a positive number" :optional true}
  [number]
  (> number 0))


(defvalidator member
  "Validates value is a member of coll.

  For use with validation functions such as `validate` or `valid?`"
  {:default-message-format "%s must be one of the values in the list"}
  [value coll]
  (some #{value} coll))

(defvalidator custom
  "Validates pred is true for the given value.

  For use with validation functions such as `validate` or `valid?`"
  [value pred]
  (println "Warning: bouncer.validators/custom is deprecated and will be removed. Use plain functions instead.")
  (pred value))

(defvalidator every
  "Validates pred is true for every item in coll.

  For use with validation functions such as `validate` or `valid?`"
  {:default-message-format "All items in %s must satisfy the predicate"}
  [coll pred]
  (every? pred coll))

(defvalidator matches
  "Validates value satisfies the given regex pattern.

   For use with validation functions such as `validate` or `valid?`"
  {:default-message-format "%s must satisfy the given pattern" :optional true}
  [value re]
  ((complement empty?) (re-seq re value)))

(defvalidator email
  "Validates value is an email address.

  It implements a simple check to verify there's only a '@' and
  at least one point after the '@'

  For use with validation functions such as `validate` or `valid?`"
  {:default-message-format "%s must be a valid email address"}
  [value]
  (and (required value) (matches value #"^[^@]+@[^@\\.]+[\\.].+")))

(defvalidator datetime
  "Validates value is a date(time). 

  Optionally, takes a formatter argument which may be either an existing clj-time formatter, or a string representing a custom datetime formatter.

  For use with validation functions such as `validate` or `valid?`"
  {:default-message-format "%s must be a valid date"}
  [value & [opt & _]]
  (let [formatter (if (string? opt) (f/formatter opt) opt)]
    (try
      (if formatter (f/parse formatter value) (f/parse value))
                                                    
             (catch js/Error e false))))


;;;;;;;;;;;; This file autogenerated from src/bouncer/validators.cljx
