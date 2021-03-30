
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

Object.assign(User.prototype, Voce);;

new User('Cristian').Salut();

