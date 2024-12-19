import { Result } from "../interfaces/gif.response";

const apiKey = "AIzaSyAbUgOHIk7a-RcvFi4OT-sjzNdF1cj6wAg";
const searchTerm = 'funny';

fetch(`https://tenor.googleapis.com/v2/search?q=funny&key=${apiKey}&limit=10`)
    .then( (resp) => resp.json())
    .then( (body: Result) => {
     
        
    })
    .catch( (err) => console.info(err))
    
