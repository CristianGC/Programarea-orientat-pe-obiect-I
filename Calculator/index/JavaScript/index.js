
console.log('index.js Start');

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

