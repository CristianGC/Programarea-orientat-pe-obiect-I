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

        // Obiectul de bază.
        __Title 
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Title__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Title' },
            { _HTML_object: {} },
            { _HTML_tags: 'h1' },
            { _HTML_class: ['__Title'] }
        ]

        // Obiectul de bază.
        __The_minus_button;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __The_minus_button__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__The_minus_button' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__The_minus_button'] }
        ]
         
        // Obiectul de bază.
        __Maximum_button;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Maximum_button__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Maximum_button' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Maximum_button'] }
        ]
 
        // Obiectul de bază.
        __Exit_button;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Exit_button__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Exit_button' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Exit_button'] }
        ]
 
        // Obiectul de bază.
        __We_display_what_was_written_and_the_result;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __We_display_what_was_written_and_the_result__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__We_display_what_was_written_and_the_result' },
            { _HTML_object: {} },
            { _HTML_tags: 'span' },
            { _HTML_class: ['__We_display_what_was_written_and_the_result'] }
        ]
 
        // Obiectul de bază.
        __Button_CE;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Button_CE__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Button_CE' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Button_CE'] }
        ]
 
        // Obiectul de bază.
        __Button_C;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Button_C__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Button_C' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Button_C'] }
        ]
 
        // Obiectul de bază.
        __Button_Remove_the_item_from_the_end_of_the_line;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Button_Remove_the_item_from_the_end_of_the_line__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Button_Remove_the_item_from_the_end_of_the_line' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Button_Remove_the_item_from_the_end_of_the_line'] }
        ]

        /*
            Aceste butoane sunt încă în curs de traducere.
        */   

        // Obiectul de bază. 
        // %
        __Butonul_Percent;    
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Butonul_Percent__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Butonul_Percent' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Butonul_Percent'] }
        ]
 
        // Obiectul de bază. 
        // /
        __Butonul_Divided;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Butonul_Divided__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Butonul_Divided' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Butonul_Divided'] }
        ]
 
        // Obiectul de bază. 
        // *
        __Butonul_Multiplication;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Butonul_Multiplication__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Butonul_Multiplication' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Butonul_Multiplication'] }
        ]
 
        // Obiectul de bază. 
        // -
        __Butonul_Decreasing;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Butonul_Decreasing__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Butonul_Decreasing' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Butonul_Decreasing'] }
        ]
 
        // Obiectul de bază. 
        // +
        __Butonul_Assembly;
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Butonul_Assembly__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Butonul_Assembly' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Butonul_Assembly'] }
        ]
 
        // Obiectul de bază. 
        // =
        __Butonul_Final_product;         
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Butonul_Final_product__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Butonul_Final_product' },
            { _HTML_object: {} },
            { _HTML_tags: 'input' },
            { _HTML_class: ['__Butonul_Final_product'] }
        ]

        __Computer_item_table =
        [
            this.__Title,
            this.__The_minus_button,
            this.__Maximum_button,
            this.__Exit_button,
            this.__We_display_what_was_written_and_the_result,
            this.__Butonul_Percent,
            this.__Button_CE,
            this.__Button_C,
            this.__Button_Remove_the_item_from_the_end_of_the_line,
            this.__Butonul_Divided,
            this.__Butonul_Multiplication,
            this.__Butonul_Decreasing,
            this.__Butonul_Assembly,
            this.__Butonul_Final_product
        ]

        __Computer_item_table__Primitive_objects_array_of_structure_for_object =
        [
            this.__Title__Primitive_objects_array_of_structure_for_object,
            this.__The_minus_button__Primitive_objects_array_of_structure_for_object,
            this.__Maximum_button__Primitive_objects_array_of_structure_for_object,
            this.__Exit_button__Primitive_objects_array_of_structure_for_object,
            this.__We_display_what_was_written_and_the_result__Primitive_objects_array_of_structure_for_object,
            this.__Butonul_Percent__Primitive_objects_array_of_structure_for_object,
            this.__Button_CE__Primitive_objects_array_of_structure_for_object,
            this.__Button_C__Primitive_objects_array_of_structure_for_object,
            this.__Button_Remove_the_item_from_the_end_of_the_line__Primitive_objects_array_of_structure_for_object,
            this.__Butonul_Divided__Primitive_objects_array_of_structure_for_object,
            this.__Butonul_Multiplication__Primitive_objects_array_of_structure_for_object,
            this.__Butonul_Decreasing__Primitive_objects_array_of_structure_for_object,
            this.__Butonul_Assembly__Primitive_objects_array_of_structure_for_object,
            this.__Butonul_Final_product__Primitive_objects_array_of_structure_for_object
        ]

        // Obiectul de bază. 
        // Secțiunea 1 calculator
        __Section_1_computer;         
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Section_1_computer__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Section_1_computer' },
            { _HTML_object: {} },
            { _HTML_tags: 'section' },
            { _HTML_class: ['__Section_1_computer'] }
        ]

        // Obiectul de bază. 
        // Secțiunea 2 calculator
        __Section_2_computer;         
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Section_2_computer__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Section_2_computer' },
            { _HTML_object: {} },
            { _HTML_tags: 'section' },
            { _HTML_class: ['__Section_2_computer'] }
        ]

        // Obiectul de bază. 
        // Secțiunea 3 calculator
        __Section_3_computer;         
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Section_3_computer__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Section_3_computer' },
            { _HTML_object: {} },
            { _HTML_tags: 'section' },
            { _HTML_class: ['__Section_3_computer'] }
        ]

        // Obiectul de bază. 
        // Secțiunea 3 calculator
        __Section_3_computer;         
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Section_3_computer__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Section_3_computer' },
            { _HTML_object: {} },
            { _HTML_tags: 'section' },
            { _HTML_class: ['__Section_3_computer'] }
        ]

        // Obiectul de bază. 
        // Secțiunea 4 calculator
        __Section_4_computer;         
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Section_4_computer__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Section_4_computer' },
            { _HTML_object: {} },
            { _HTML_tags: 'section' },
            { _HTML_class: ['__Section_4_computer'] }
        ]

        // Obiectul de bază. 
        // Secțiunea 5 calculator
        __Section_5_computer;         
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Section_5_computer__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Section_5_computer' },
            { _HTML_object: {} },
            { _HTML_tags: 'section' },
            { _HTML_class: ['__Section_5_computer'] }
        ]

        // Obiectul de bază. 
        // Secțiunea 6 calculator
        __Section_6_computer;         
        //-----------------------------------------------
        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Section_6_computer__Primitive_objects_array_of_structure_for_object =
        [
            { _HTML_object_Name: '__Section_6_computer' },
            { _HTML_object: {} },
            { _HTML_tags: 'section' },
            { _HTML_class: ['__Section_6_computer'] }
        ]

        // Este tabelul de secțiuni.
        __Table_of_sections_computer =
        [
            this.__Section_1_computer,
            this.__Section_2_computer,
            this.__Section_3_computer,
            this.__Section_4_computer,
            this.__Section_5_computer,
            this.__Section_6_computer
        ]

        // Este tabelul secțiunilor cu parametrii primiți pentru obiectele HTML
        __Table_of_sections__Primitive_objects_array_of_structure_for_object =
        [
            this.__Section_1_computer__Primitive_objects_array_of_structure_for_object,
            this.__Section_2_computer__Primitive_objects_array_of_structure_for_object,
            this.__Section_3_computer__Primitive_objects_array_of_structure_for_object,
            this.__Section_4_computer__Primitive_objects_array_of_structure_for_object,
            this.__Section_5_computer__Primitive_objects_array_of_structure_for_object,
            this.__Section_6_computer__Primitive_objects_array_of_structure_for_object
        ]

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

            this.#Configuring_All_primitive_objects();

            this.#Start_creating_all_html_objects();

            this.#Add_the_computer_item_to_all_selections();

        }

        // În această funcție, volum aduna toate structurile, pentru crearea obiectelor primitive.
        #Configuring_primitive_objects(_Massive_structure)
        {
            let Primitive_objects = {};

            _Massive_structure.forEach(element =>
            {
                Object.assign(Primitive_objects, element);
            });

            console.log('Configuring Primitive Objects Finis. NAME: ' + Primitive_objects._HTML_object_Name);

            return Primitive_objects;
        }

        #Configuring_All_primitive_objects()
        {
            // Configurarea Computer item.
            this.#Configure_all_Computer_item__of_primitive_objects(this.__Computer_item_table, this.__Computer_item_table__Primitive_objects_array_of_structure_for_object);

            // Configurarea secțiunilor.
            this.#Configure_all_sections_of_primitive_objects(this.__Table_of_sections_computer, this.__Table_of_sections__Primitive_objects_array_of_structure_for_object);

        }

        #Configure_all_Computer_item__of_primitive_objects(_Table_with_Computer_item, _Table_with_Computer_item_creation_parameters)
        {
            let Index = 0;
            _Table_with_Computer_item.forEach(element =>
            {
                _Table_with_Computer_item[Index] = element = this.#Configuring_primitive_objects(_Table_with_Computer_item_creation_parameters[Index]);
                Index++;
            });
        }

        #Configure_all_sections_of_primitive_objects(_Table_with_sections, _Table_with_section_creation_parameters)
        {
            let Index = 0;
            _Table_with_sections.forEach(element =>
            {
                _Table_with_sections[Index] = element = this.#Configuring_primitive_objects(_Table_with_section_creation_parameters[Index]);
                Index++;
            });
        }

        // Creează dinamic un obiect html.
        #Start_creating_html_object(_Objects)
        {
            this.#Creating_html_objects(_Objects);
            this.#Add_classes_for_the_html_object(_Objects);
        }

        #Creating_html_objects(_Saving_the_object)
        {
            _Saving_the_object._HTML_object = document.createElement(_Saving_the_object._HTML_tags);
            console.log('__Creating_html_objects Finis. NAME: ' + _Saving_the_object._HTML_object_Name);
        }
        
        #Add_classes_for_the_html_object(_Saving_the_object)
        {
            _Saving_the_object._HTML_class.forEach(element =>
            {
                _Saving_the_object._HTML_object.classList.add(element);
            });
            console.log('___Add_classes_for_the_html_object Finis. NAME: ' + _Saving_the_object._HTML_object_Name);
        }

        // Creează toate obiectele html dinamic.
        #Start_creating_all_html_objects()
        {
            // Crearea obiectelor html pentru Computer item.
            this.#Creating_all_Computer_item_of_html_objects(this.__Computer_item_table);

            // Crearea obiectelor html pentru secțiuni.
            this.#Creating_all_sections_of_html_objects(this.__Table_of_sections_computer);
        }

        #Creating_all_Computer_item_of_html_objects(_Table_with_Computer_item)
        {
            _Table_with_Computer_item.forEach(element =>
            {
                this.#Start_creating_html_object(element);
            });
        }

        #Creating_all_sections_of_html_objects(_Table_with_sections)
        {
            _Table_with_sections.forEach(element =>
            {
                this.#Start_creating_html_object(element);
            });
        }
        
        /*
            P1: Index Section.
            P2: Table Sections.
            P3: Computer Item Table.
            P4: Index Start Computer Item Table.
            P5: Index Stop Computer Item Table.
        */
        #Add_the_computer_item_to_the_selection
        (   
            _Index_section,
            _Table_sections,
            _Computer_item_table,
            _Index_Start_Computer_item_table,
            _Index_Stop_Computer_item_table
        )
        {
            console.log('\n\nAdd_the_computer_item_to_the_selection: \n');
            for (let index = _Index_Start_Computer_item_table; index <= _Index_Stop_Computer_item_table; index++)
            {
                _Table_sections[_Index_section]._HTML_object.appendChild(_Computer_item_table[index]._HTML_object);
            }
            console.log('Sections: ' + _Index_section);
            console.log(_Table_sections);
        }

        #Add_the_computer_item_to_all_selections()
        {
            /*
                P1: Index Section.
                P2: Table Sections.
                P3: Computer Item Table.
                P4: Index Start Computer Item Table.
                P5: Index Stop Computer Item Table.
            */
            this.#Add_the_computer_item_to_the_selection(0, this.__Table_of_sections_computer, this.__Computer_item_table, 0, 3);
            this.#Add_the_computer_item_to_the_selection(1, this.__Table_of_sections_computer, this.__Computer_item_table, 4, 4);
            this.#Add_the_computer_item_to_the_selection(2, this.__Table_of_sections_computer, this.__Computer_item_table, 5, 8);
            this.#Add_the_computer_item_to_the_selection(4, this.__Table_of_sections_computer, this.__Computer_item_table, 9, 12);

        }

        

    }



    new Calculator('Calculator');



});


