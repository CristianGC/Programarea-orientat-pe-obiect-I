document.addEventListener("DOMContentLoaded", () =>
{
    console.log('index.js Start');

    /*
        Decizia de a face totul dinamic.
        Sau parțial.

        După un timp, mi-am dat seama că vreau să fac o clasă specială doar pentru trimiterea de mesaje.
    */

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



        // Obiectele de bază.
        __Title;
        __The_minus_button;
        __Maximum_button;
        __Exit_button;
        __Button_CE;
        __Button_C;
        __Butonul_Percent;
        __Butonul_Divided;
        __Butonul_Multiplication;
        __Butonul_Decreasing;
        __Butonul_Assembly;
        __Butonul_0;
        __Butonul_1;
        __Butonul_2;
        __Butonul_3;
        __Butonul_4;
        __Butonul_5;
        __Butonul_6;
        __Butonul_7;
        __Butonul_8;
        __Butonul_9;
        __Butonul_Invert_the_number;
        __Butonul_Comma;         
        __Butonul_Final_product;



        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Title__Primitive_objects_array_of_structure_for_object;
        __The_minus_button__Primitive_objects_array_of_structure_for_object;
        __Maximum_button__Primitive_objects_array_of_structure_for_object;
        __Exit_button__Primitive_objects_array_of_structure_for_object;
        __We_display_what_was_written_and_the_result;
        __We_display_what_was_written_and_the_result__Primitive_objects_array_of_structure_for_object;
        __Button_CE__Primitive_objects_array_of_structure_for_object;
        __Button_C__Primitive_objects_array_of_structure_for_object;
        __Button_Remove_the_item_from_the_end_of_the_line;
        __Button_Remove_the_item_from_the_end_of_the_line__Primitive_objects_array_of_structure_for_object;
        __Butonul_Percent__Primitive_objects_array_of_structure_for_object;
        __Butonul_Divided__Primitive_objects_array_of_structure_for_object;
        __Butonul_Multiplication__Primitive_objects_array_of_structure_for_object;
        __Butonul_Decreasing__Primitive_objects_array_of_structure_for_object;
        __Butonul_Assembly__Primitive_objects_array_of_structure_for_object;
        __Butonul_0__Primitive_objects_array_of_structure_for_object;
        __Butonul_1__Primitive_objects_array_of_structure_for_object;
        __Butonul_2__Primitive_objects_array_of_structure_for_object;
        __Butonul_3__Primitive_objects_array_of_structure_for_object;
        __Butonul_4__Primitive_objects_array_of_structure_for_object;
        __Butonul_5__Primitive_objects_array_of_structure_for_object;
        __Butonul_6__Primitive_objects_array_of_structure_for_object;
        __Butonul_7__Primitive_objects_array_of_structure_for_object;
        __Butonul_8__Primitive_objects_array_of_structure_for_object;
        __Butonul_9__Primitive_objects_array_of_structure_for_object;
        __Butonul_Invert_the_number__Primitive_objects_array_of_structure_for_object;
        __Butonul_Comma__Primitive_objects_array_of_structure_for_object;
        __Butonul_Final_product__Primitive_objects_array_of_structure_for_object;

        // Este tabelul de item.
        __Computer_item_table;

        // Este tabelul item cu parametrii pentru obiectele HTML.
        __Computer_item_table__Primitive_objects_array_of_structure_for_object;

        // Obiectul de bază. 
        // Secțiunea 1 calculator
        __Section_1_computer;    
        __Section_2_computer;    
        __Section_3_computer;    
        __Section_4_computer;    
        __Section_5_computer;    
        __Section_6_computer;    

        // Structura pentru crearea obiectelor primitive.
        // Masivul pentru structuri.
        __Section_1_computer__Primitive_objects_array_of_structure_for_object;
        __Section_2_computer__Primitive_objects_array_of_structure_for_object;
        __Section_3_computer__Primitive_objects_array_of_structure_for_object;
        __Section_4_computer__Primitive_objects_array_of_structure_for_object;
        __Section_5_computer__Primitive_objects_array_of_structure_for_object;
        __Section_6_computer__Primitive_objects_array_of_structure_for_object;

        // Este tabelul de secțiuni.
        __Table_of_sections_computer;

        // Este tabelul secțiunilor cu parametrii pentru obiectele HTML.
        __Table_of_sections__Primitive_objects_array_of_structure_for_object;

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

            this.#All_the_return_of_the_massif_with_the_structure();

            this.#Assembling_arrays_with_primitive_structures_and_Object_into_an_array_of_primitive_structures();

            this.#Configuring_All_primitive_objects();

            this.#Start_creating_all_html_objects();

            this.#Add_the_computer_item_to_all_selections();

            /*
                P1: __Computer_item_table
                P2: __Table_of_sections_computer
            */
            this.#Add_the_type_and_value_attribute_to_all_HTML_elements(this.__Computer_item_table, this.__Table_of_sections_computer)

            this.__Table_of_sections_computer.forEach(element => 
            {
                this.__Calculator.appendChild(element._HTML_object);
            });
            
        }

        #The_return_of_the_massif_with_the_structure
        (
            _Save_value_HTML_object_Name,
            _Save_value_Save_value__HTML_object,
            _Save_value_HTML_tags,
            _Save_value_HTML_class,
            _Save_value_HTML_type,
            _Save_value_HTML_value
        )
        {

            let Primitive_structure;
            Primitive_structure =
            [
                { _HTML_object_Name: _Save_value_HTML_object_Name },
                { _HTML_object: _Save_value_Save_value__HTML_object },
                { _HTML_tags: _Save_value_HTML_tags },
                { _HTML_class: _Save_value_HTML_class },
                { _HTML_type: _Save_value_HTML_type },
                { _HTML_value: _Save_value_HTML_value }
            ];

            console.log('\nThe_return_of_the_massif_with_the_structure');
            console.log('Finis');
            
            return Primitive_structure;
        }

        /*
            În această funcție masivele sunt setate cu anumiți parametri.
        */
        #All_the_return_of_the_massif_with_the_structure()
        {
            this.__Title__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Title', {}, 'h1', ['__Title'], '', '');

            this.__The_minus_button__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__The_minus_button', {}, 'input', ['__The_minus_button'], 'button', '__The_minus_button');

            this.__Maximum_button__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Maximum_button', {}, 'input', ['__Maximum_button'], 'button', '__Maximum_button');

            this.__Exit_button__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Exit_button', {}, 'input', ['__Exit_button'], 'button', '__Exit_button');

            this.__We_display_what_was_written_and_the_result__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__We_display_what_was_written_and_the_result', {}, 'span', ['__We_display_what_was_written_and_the_result'], '', '');

            this.__Button_CE__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Button_CE', {}, 'input', ['__Button_CE'], 'button', 'CE');

            this.__Button_C__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Title', {}, 'input', ['__Title'], '', '');

            this.__Button_Remove_the_item_from_the_end_of_the_line__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Button_Remove_the_item_from_the_end_of_the_line', {}, 'input', ['__Button_Remove_the_item_from_the_end_of_the_line'], 'button', '__Button_Remove_the_item_from_the_end_of_the_line');

            this.__Butonul_Percent__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_Percent', {}, 'input', ['__Butonul_Percent'], 'button', '%');

            this.__Butonul_Divided__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_Divided', {}, 'input', ['__Butonul_Divided'], 'button', '/');

            this.__Butonul_Multiplication__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_Multiplication', {}, 'input', ['__Butonul_Multiplication'], 'button', '*');

            this.__Butonul_Decreasing__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_Decreasing', {}, 'input', ['__Butonul_Decreasing'], 'button', '-');

            this.__Butonul_Assembly__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_Assembly', {}, 'input', ['__Butonul_Assembly'], 'button', '+');

            this.__Butonul_0__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_0', {}, 'input', ['__Butonul_0'], 'button', '0');

            this.__Butonul_1__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_1', {}, 'input', ['__Butonul_1'], 'button', '1');

            this.__Butonul_2__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_2', {}, 'input', ['__Butonul_2'], 'button', '2');

            this.__Butonul_3__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_3', {}, 'input', ['__Butonul_3'], 'button', '3');

            this.__Butonul_4__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_4', {}, 'input', ['__Butonul_4'], 'button', '4');

            this.__Butonul_5__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_5', {}, 'input', ['__Butonul_5'], 'button', '5');

            this.__Butonul_6__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_6', {}, 'input', ['__Butonul_6'], 'button', '6');

            this.__Butonul_7__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_7', {}, 'input', ['__Butonul_7'], 'button', '7');

            this.__Butonul_8__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_8', {}, 'input', ['__Butonul_8'], 'button', '8');

            this.__Butonul_9__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_9', {}, 'input', ['__Butonul_9'], 'button', '9');

            this.__Butonul_Invert_the_number__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_Invert_the_number', {}, 'input', ['__Butonul_Invert_the_number'], 'button', '+/-');

            this.__Butonul_Comma__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_Comma', {}, 'input', ['__Butonul_Comma'], 'button', ',');

            this.__Butonul_Final_product__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Butonul_Final_product', {}, 'input', ['__Butonul_Final_product'], 'button', '=');

            this.__Section_1_computer__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Section_1_computer', {}, 'input', ['__Section_1_computer'], '', '');

            this.__Section_2_computer__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Section_2_computer', {}, 'input', ['__Section_1_computer'], '', '');

            this.__Section_3_computer__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Section_3_computer', {}, 'input', ['__Section_3_computer'], '', '');

            this.__Section_4_computer__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Section_4_computer', {}, 'input', ['__Section_4_computer'], '', '');

            this.__Section_5_computer__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Section_5_computer', {}, 'input', ['__Section_5_computer'], '', '');

            this.__Section_6_computer__Primitive_objects_array_of_structure_for_object =
            this.#The_return_of_the_massif_with_the_structure('__Section_6_computer', {}, 'input', ['__Section_6_computer'], '', '');



            console.log('\n-------------All_the_return_of_the_massif_with_the_structure');
            console.log('Finis');
        }

        #Assembling_arrays_with_primitive_structures_and_Object_into_an_array_of_primitive_structures()
        {
            // Este tabelul de secțiuni.
            this.__Table_of_sections_computer =
            [
                this.__Section_1_computer,
                this.__Section_2_computer,
                this.__Section_3_computer,
                this.__Section_4_computer,
                this.__Section_5_computer,
                this.__Section_6_computer
            ]

            // Este tabelul secțiunilor cu parametrii pentru obiectele HTML.
            this.__Table_of_sections__Primitive_objects_array_of_structure_for_object =
            [
                this.__Section_1_computer__Primitive_objects_array_of_structure_for_object,
                this.__Section_2_computer__Primitive_objects_array_of_structure_for_object,
                this.__Section_3_computer__Primitive_objects_array_of_structure_for_object,
                this.__Section_4_computer__Primitive_objects_array_of_structure_for_object,
                this.__Section_5_computer__Primitive_objects_array_of_structure_for_object,
                this.__Section_6_computer__Primitive_objects_array_of_structure_for_object
            ]

            // Este tabelul de item.
            this.__Computer_item_table =
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
                this.__Butonul_0,
                this.__Butonul_1,
                this.__Butonul_2,
                this.__Butonul_3,
                this.__Butonul_4,
                this.__Butonul_5,
                this.__Butonul_6,
                this.__Butonul_7,
                this.__Butonul_8,
                this.__Butonul_9,
                this.__Butonul_Comma,
                this.__Butonul_Invert_the_number,
                this.__Butonul_Final_product
            ]

            // Este tabelul item cu parametrii pentru obiectele HTML.
            this.__Computer_item_table__Primitive_objects_array_of_structure_for_object =
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
                this.__Butonul_0__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_1__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_2__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_3__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_4__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_5__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_6__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_7__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_8__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_9__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_Comma__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_Invert_the_number__Primitive_objects_array_of_structure_for_object,
                this.__Butonul_Final_product__Primitive_objects_array_of_structure_for_object
            ]

            console.log('\nAssembling_arrays_with_primitive_structures_and_Object_into_an_array_of_primitive_structures');
            console.log('Finis');
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
            console.log('\nConfigurarea Computer item.');
            // Configurarea Computer item.
            this.#Configure_ALL_Computer_item__of_primitive_objects(this.__Computer_item_table, this.__Computer_item_table__Primitive_objects_array_of_structure_for_object);

            console.log('\nConfigurarea secțiunilor.');
            // Configurarea secțiunilor.
            this.#Configure_ALL_sections_of_primitive_objects(this.__Table_of_sections_computer, this.__Table_of_sections__Primitive_objects_array_of_structure_for_object);

            console.log('\nConfiguring_All_primitive_objects');
            console.log('Finis');
        }

        #Configure_ALL_Computer_item__of_primitive_objects(_Table_with_Computer_item, _Table_with_Computer_item_creation_parameters)
        {
            let Index = 0;
            _Table_with_Computer_item.forEach(element =>
            {
                _Table_with_Computer_item[Index] = element = this.#Configuring_primitive_objects(_Table_with_Computer_item_creation_parameters[Index]);
                Index++;
            });
        }

        #Configure_ALL_sections_of_primitive_objects(_Table_with_sections, _Table_with_section_creation_parameters)
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
            console.log('\n__Creating_html_objects Finis. NAME: ' + _Saving_the_object._HTML_object_Name);
        }
        
        #Add_classes_for_the_html_object(_Saving_the_object)
        {
            _Saving_the_object._HTML_class.forEach(element =>
            {
                _Saving_the_object._HTML_object.classList.add(element);
            });
            console.log('\n___Add_classes_for_the_html_object Finis. NAME: ' + _Saving_the_object._HTML_object_Name);
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
            P2: Section array.
            P3: Computer Item Table.
            P4: Index Start Computer Item Table.
            P5: Index Stop Computer Item Table.
        */
        #Add_the_computer_item_to_the_selection
        (   
            _Index_section,
            _Section_array,
            _Computer_item_table,
            _Index_Start_Computer_item_table,
            _Index_Stop_Computer_item_table
        )
        {
            console.log('\nAdd_the_computer_item_to_the_selection: ' + _Index_section);
            for (let index = _Index_Start_Computer_item_table; index <= _Index_Stop_Computer_item_table; index++)
            {
                _Section_array[_Index_section]._HTML_object.appendChild(_Computer_item_table[index]._HTML_object);
            }
        }

        #Add_the_computer_item_to_all_selections()
        {
            /*
                P1: Index Section.
                P2: Section array.
                P3: Computer Item Table.
                P4: Index Start Computer Item Table.
                P5: Index Stop Computer Item Table.
            */
            this.#Add_the_computer_item_to_the_selection(0, this.__Table_of_sections_computer, this.__Computer_item_table, 0, 3);
            this.#Add_the_computer_item_to_the_selection(1, this.__Table_of_sections_computer, this.__Computer_item_table, 4, 4);
            this.#Add_the_computer_item_to_the_selection(2, this.__Table_of_sections_computer, this.__Computer_item_table, 5, 8);
            this.#Add_the_computer_item_to_the_selection(3, this.__Table_of_sections_computer, this.__Computer_item_table, 9, 12);

        }

        #Add_the_type_and_value_attribute_to_all_HTML_elements(_Computer_item_array, _Section_array)
        {
            _Computer_item_array.forEach(element =>
            {
                this.#Check_if_we_can_add_type_and_value_to_html_Object(element);
            });

            _Section_array.forEach(element =>
            {
                this.#Check_if_we_can_add_type_and_value_to_html_Object(element);
            });
        }

        #Check_if_we_can_add_type_and_value_to_html_Object(_The_primitive_object)
        {
            if (_The_primitive_object._HTML_type != '')
            {
                _The_primitive_object._HTML_object.setAttribute("type", _The_primitive_object._HTML_type);   
            }

            if (_The_primitive_object._HTML_value != '')
            {
                _The_primitive_object._HTML_object.setAttribute("value", _The_primitive_object._HTML_value);   
            }
        }

    }

    new Calculator('Calculator');
    
});

