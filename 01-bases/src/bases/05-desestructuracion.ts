interface Hero{ // principal uso es poder decir como lucen los objetos
    name: string;
    age: number;
    codeName: string;
    power?: string; //? = opcional
} 


export const persona: Hero = {
    name: 'tony',
    age: 45,
    codeName: 'iron man',
}

const { name, age, codeName, power = 'No posee poder' } = persona; // puede ser un objeto o un arreglo

console.log( { name, age, codeName, power});



interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}


const createHero = ({name, age, codeName, power}: CreateHeroArgs) => ({

    id: '123124',
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})


console.log(createHero( persona ));
