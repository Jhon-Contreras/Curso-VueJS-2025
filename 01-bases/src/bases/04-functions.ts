

function greetPerson(name: string){

    return  `Hola, ${ name }`;
}

console.log( greetPerson('Jhon'));


const greetPerson2 = (name: string) => {
    return  `Hola, ${ name }`;
}   

console.log( greetPerson2('Jhon'));

const greetPerson3 = (name: string) => `Hola, ${ name }`;

console.log( greetPerson3('Jhon'));


const getUser = (uid:string) => ({
   // esto es como un return, pero sin la expresion
   uid: uid,
   username: 'Tiny'
})

console.log( getUser('xs') );


const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id:2,
        name: 'Superman',
        power: 'Super fuerza',
    }
]


const hero = heroes.find( (h) => h.id === 1 );

console.log( hero?.power);

