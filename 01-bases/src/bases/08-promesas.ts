/** 
new Promise( ( resolve, reject ) => {
    //console.log("Cuerpo de la promesa");
    setTimeout( ()=>{
        //resolve("Mi amigo cumplió")
        reject("Mi amigo, no cumplió")
    }, 1000)
}).then( (message) => console.log( message ))
  .catch( erroMessage => console.log(erroMessage))
  .finally( () => console.log("fin de la promesa"))*/
import type { Hero } from "../data/heroes"
import { getHeroById } from "./07-imp-exp"


const getHeroByIdAsync = (id: number):Promise<Hero> => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const hero = getHeroById(id);

            hero ? resolve(hero) : reject(`Heroe no encontrado #${ id }`)
           
        }, 1500)
    })
}

getHeroByIdAsync(2)
 .then( hero => console.log("El nombre es", hero.name))
 .catch( alert );