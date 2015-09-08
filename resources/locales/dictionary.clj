{:en {}
 :pl {:common {:do-log-in! "zaloguj się"
               :logged-in! "zalogowany"
               :cancel!    "anuluj"
               :password!  "hasło"
               :login!     "login"
               :menu       "menu"
               :log-out!   "wyloguj się"
               :do-log-out!   "wyloguj się"
               :show!      "wyświetl"
               :edit!      "edytuj"
               :footer-text! "stopka"
               :remove "usuń"
               :create "utwórz"
               :actions "akcje"}
      :header {:job-titles   "nazwy pozycji"
               :employees    "pracownicy"
               :patients     "pacjenci"
               :medicines    "leki"
               :appointments "wizyty"
               :rooms        "pokoje"
               :devices      "urządzenia"}
      :login-form {:header "proszę, zaloguj się"}
      :appointments {:new-appointment! "nowa wizyta"
                     :date "data"
                     :employee "pracownik"
                     :patient "pacjent"
                     :icd10 "ICD10"
                     :description "opis"
                     :actions "akcje"

                     :no-appointments "brak wizyt do wyświetlenia"

                     :create-appointment "utwórz nową wizytę"
                     :edit-appointment "edytuj wizytę"

                     :prescriptions "recepty"
                     :prescription "recepta"
                     :add-a-prescription "dodaj receptę"

                     :date-taken "zajęty"
                     :date-free "wolny"
                     :date-yours "wybrany"
                     }
      :prescriptions {
                      }
      :medicines {:new-medicine "nowy lek"

                  :no-medicines "brak leków do wyświetlenia"

                  :gtin "GTIN"
                  :approved "zatwierdzony"
                  :name "nazwa"
                  :producer "producent"
                  :type "typ"
                  :wrapping "opakowanie"
                  :dose "dawka"
                  :producer-name "producent"

                  :is-approved "zatwierdzony"
                  :is-not-approved "nie zatwierdzony"

                  :create-medicine "utwórz nowy lek"
                  :edit-medicine "edytuj lek"
                  }
      :devices {:new-device "nowe urządzenie"
                :serial "numer seryjny"
                :producer "producent"
                :room "pokój"
                :purchase-date "data nabycia"
                :warranty-date "data gwarancji"

                :no-devices "brak urządzeń do wyświetlenia"

                :create-device "utwórz nowe urządzenie"
                :edit-device "edytuj urządzenie"}
      :personal-information {:firstname "imię"
                             :surname "nazwisko"
                             :personal-id "PESEL"
                             :address "adres"
                             :street-name "ulica"
                             :flat-number "mieszkania"
                             :house-number "numer"
                             :zip-code "kod pocztowy"
                             :city "miasto"
                             :country "kraj"}
      :employees {:new-employee "nowy pracownik"
                  :no-employees "brak pracowników do wyświetlenia"

                  :create-employee "utwórz nowego pracownika"
                  :edit-employee "edytuj pracownika"

                  :appointments "wizyty"
                  :is-doctor "doktor"
                  :job-title "pozycja"


                  }
      :patients {:new-patient "nowy pacjent"
                 :no-patients "brak pacjentów do wyświetlenia"

                 :no-appointments "brak wizyt"

                 :create-patient "utwórz nowego pacjenta"
                 :edit-patient "edytuj pacjenta"
                 }
      :job-titles {:new-job-title "nowa nazwa pozycji"
                   :no-job-titles "brak nazw pozycji do wyświetlenia"

                   :name "nazwa pozycji"

                   :create-job-title "utwórz nową nazwę pozycji"
                   :edit-job-title "edytuj nazwę pozycji"

                   }
      :rooms {:new-room! "nowy pokój"
              :no-rooms "brak pokojów do wyświetlenia"

              :number "numer"

              :create-room "utwórz nowy pokój"
              :edit-room "edytuj pokój"}
      :bouncer {:validators {:required "pole %s musi być podane"}}}}