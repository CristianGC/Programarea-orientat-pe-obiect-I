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
        __Title;
        __The_minus_button;
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


        constructor(ID)
        {
        
            if (this.Checking_if_we_can_start_creating_dynamic_elements(ID))
            {
                this.Start_creating_dynamic_elements(ID);
            }
            else
            {
                this.Display_the_message_Read_the_documentation();
            }
        }

        Checking_if_we_can_start_creating_dynamic_elements(ID)
        {
            if (ID == null)
            {
                this.Display_the_message_ID_not_found();
                return false;
            }
            else
            {
                if (this.Check_if_there_is_such_an_ID(ID)) 
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }

        Check_if_there_is_such_an_ID(ID)
        {
            if(document.getElementById(ID))
            {
                return true;
            }
            else
            {
                this.Display_the_message_ID_is_incorrect();
                return false;
            }
        }

        Display_the_message_ID_not_found()
        {
            this.Display_Message_Alert_and_Console('Deci ID-ul nu a fost găsit.');
        }

        Display_the_message_ID_is_incorrect()
        {
            this.Display_Message_Alert_and_Console('ID-ul introdus este incorect.');
        }

        Display_the_message_Read_the_documentation()
        {
            this.Display_Message_Alert_and_Console('Citiți documentația.');
        }

        Start_creating_dynamic_elements(ID)
        {
            this.Display_Message_Alert_and_Console('Am început să creez elemente dinamic.');

            this.__Calculator = document.getElementById(ID);
        }

        Display_Message_Alert_and_Console(__Message)
        {
            alert( __Message );
            console.log( __Message );
        }
    }


    
    new Calculator();

    new Calculator('ID_INCORECT');

    new Calculator('Calculator');

    class Displaying_messages_from_the_computer
    {

    }



    alert('DOM gata!');
    console.log('DOM gata!');

});

