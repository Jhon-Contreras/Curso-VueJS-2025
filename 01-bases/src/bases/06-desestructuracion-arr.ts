

const saiyayins = ['Gokum', 'Vegeta', 'Trunks'];

const [ g, v, t] = saiyayins;


const returnArray = () =>{
    return [123, 'ABC'] as const;
}
const [numbers, letters] = returnArray();

console.log(numbers * 2, letters.toLocaleLowerCase());
