document.addEventListener("DOMContentLoaded", () => 
{
    console.log('index.js Start');

    /*
        Decizia de a face totul dinamic.
        Sau parțial.
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

    class Calculator
    {
        /*
            0 Crearea tuturor elementelor dinamic.
            1 Titlu.
            2 Butonul minus.
            3 Butonul maxim.
            4 Butonul exit.
            5 Afișăm ce sa scris și rezultatul. În format șir.
            7 Butonul CE
            7 Butonul C
            7 Butonul Scoateți elementul de la capătul liniei..
            6 Butonul %
            7 Butonul /
            7 Butonul *
            7 Butonul -
            7 Butonul +
            7 Butonul =
            7 Butoanele 0 1 2 3 4 5 6 7 8 9.
            7 Butonul ,
            7 Butonul pentru a schimba numărul în pozitiv sau negativ.
            7 Butonul pentru a schimba numărul în pozitiv sau negativ.

        */

        Calculator;

        constructor(ID)
        {
        
            if (this.Checking_if_we_can_start_creating_dynamic_elements(ID))
            {
                
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
            alert('Deci ID-ul nu a fost găsit.');
            console.log('Deci ID-ul nu a fost găsit.');
        }

        Display_the_message_ID_is_incorrect()
        {
            alert('ID-ul introdus este incorect.');
            console.log('ID-ul introdus este incorect.');
        }

        Display_the_message_Read_the_documentation()
        {
            alert('Citiți documentația.');
            console.log('Citiți documentația.');
        }

        Start_creating_dynamic_elements()
        {
            
        }
    }

    new Calculator();
    new Calculator('ID_INCORECT');


    alert('DOM gata!');
    console.log('DOM gata!');

});

