export const persona = {
    lastName: 'Stark',
    age: 45,
    address:{
        city: 'New york',
        zip: 92292,
        lat: 222,
        lng: 1212,
    } 
} 


//const persona2 = { ...persona}; // no funciona del todo bien
const persona2 = structuredClone(persona);


persona2.lastName = "Parker";

persona2.address.city = 'L.A';

console.log({persona});
console.log({persona2});




