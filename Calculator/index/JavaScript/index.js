document.addEventListener("DOMContentLoaded", () =>
{
    console.log('index.js Start');

    /*
        Decizia de a face totul dinamic.
        Sau parțial.

        După un timp, mi-am dat seama că vreau să fac o clasă specială doar pentru trimiterea de mesaje.
    */

    class User
    {
        constructor(name)
        {
            this.name = name;
        }
    }

    let Voce = 
    {
        Salut()
        {
            console.log( 'Salut ma numesc: ' + this.name );
        }
    }

    Object.assign(User.prototype, Voce);

    new User('Cristian').Salut();

//------------------------------------------------------------------------------------------------------------------

    class Calculator
    {
        /*
            0 Crearea tuturor elementelor dinamic.
            1 Titlu.
            2 Butonul minus.
            3 Butonul maxim.
            4 Butonul exit.
            5 Afișăm ce sa scris și rezultatul. În format șir.
            6 Butonul CE
            7 Butonul C
            8 Butonul Scoateți elementul de la capătul liniei..
            9 Butonul %
            10 Butonul /
            11 Butonul *
            12 Butonul -
            13 Butonul +
            14 Butonul =
            15 Butoanele 0 1 2 3 4 5 6 7 8 9.
            16 Butonul ,
            17 Butonul pentru a schimba numărul în pozitiv sau negativ.
            18 Butonul pentru a schimba numărul în pozitiv sau negativ.

        */

        /*
            Deci, trebuie să fac diferențierea între variabilele metodei.
            Am pus două sublinieri în fața variabilei.
            Așa fac diferențierea între variabilele metodei.
        */
        __Calculator;

        // Structura pentru crearea obiectelor primitive.
        __HTML_object =
        {
            _HTML_object: null
        };

        __HTML_class =
        {
            _HTML_class: null
        };

        // Masivul pentru structuri.
        __Title__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object: {} },
            { _HTML_tags: 'h1' },
            { _HTML_class: ['Class h1 Start', 'Class h2 Stop'] }
        ]

        // Obiectul de bază.
        __Title = this.#Configuring_primitive_objects(this.__Title__Primitive_objects_array_of_structure_for_object);

        // Masivul pentru structuri.
        __The_minus_button__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['Class input start', 'Class  input stop'] }
        ]
 
        // Obiectul de bază.
        __The_minus_button = this.#Configuring_primitive_objects(this.__The_minus_button__Primitive_objects_array_of_structure_for_object);
        
        __Maximum_button;
        __Exit_button;
        __We_display_what_was_written_and_the_result;
        __Button_CE;
        __Button_C;
        __Button_Remove_the_item_from_the_end_of_the_line;

        /*
            Aceste butoane sunt încă în curs de traducere.
        */                    
        __Butonul_Percent // %
        __Butonul_Divided // /
        __Butonul_Multiplication; // *
        __Butonul_Decreasing; // -
        __Butonul_Assembly; // +
        __Butonul_Final_product; // =

        
        constructor(_ID)
        {
        
            if (this.#Checking_if_we_can_start_creating_dynamic_elements(_ID))
            {
                this.#Start_creating_dynamic_elements(_ID);
            }
            else
            {
                this.#Display_the_message_Read_the_documentation();
            }
        }

        #Checking_if_we_can_start_creating_dynamic_elements(_ID)
        {
            if (_ID == null)
            {
                this.#Display_the_message_ID_not_found();
                return false;
            }
            else
            {
                if (this.#Check_if_there_is_such_an_ID(_ID)) 
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        #Check_if_there_is_such_an_ID(_ID)
        {
            if(document.getElementById(_ID))
            {
                return true;
            }
            else
            {
                this.#Display_the_message_ID_is_incorrect();
                return false;
            }
        }

        #Display_the_message_ID_not_found()
        {
            this.#Display_Message_Alert_and_Console('Deci ID-ul nu a fost găsit.');
        }

        #Display_the_message_ID_is_incorrect()
        {
            this.#Display_Message_Alert_and_Console('ID-ul introdus este incorect.');
        }

        #Display_the_message_Read_the_documentation()
        {
            this.#Display_Message_Alert_and_Console('Citiți documentația.');
        }

        #Display_Message_Alert_and_Console(_Message)
        {
            alert( _Message );
            console.log( _Message );
        }

        #Start_creating_dynamic_elements(_ID)
        {
            this.#Display_Message_Alert_and_Console('Am început să creez elemente dinamic.');

            this.__Calculator = document.getElementById(_ID);

            // Creează dinamic un obiect html.
            this.#Creating_html_objects(this.__Title);

            // Creează dinamic un obiect html.
            this.#Creating_html_objects(this.__The_minus_button);

            console.log(this.__Title);
            console.log(this.__The_minus_button);


        }

        // În această funcție, volum aduna toate structurile, pentru crearea obiectelor primitive.
        #Configuring_primitive_objects(_Massive_structure)
        {
            let Primitive_objects = {};

            _Massive_structure.forEach(element =>
            {
                Object.assign(Primitive_objects, element);
            });

            return Primitive_objects;
        }

        // Am commit CristianGC xa xa
        #Creating_html_objects(_Saving_the_object)
        {
            _Saving_the_object._HTML_object = this.#Create_an_html_object_and_return_the_result(_Saving_the_object._HTML_tags);
        }
        
        #Create_an_html_object_and_return_the_result(_Html_objects_Type)
        {
            return document.createElement(_Html_objects_Type);
        }

        #Add_classes_for_the_html_object(_Saving_the_object)
        {
            _Saving_the_object._HTML_class.forEach(element =>
            {
                _Saving_the_object._HTML_object.classList.add(element);
            });
        }
          
    }


    
    //new Calculator();

    //new Calculator('ID_INCORECT');

    new Calculator('Calculator');

    class Displaying_messages_from_the_computer
    {

    }



    alert('DOM gata!');
    console.log('DOM gata!');

});

