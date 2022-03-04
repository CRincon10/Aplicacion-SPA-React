import { heroes } from "../data/heroes"



export const getHeroesByName = (name = '')=>{

    if( name.length === 0 ){            //si el name o el q es igual a 0 'no contiene nada' retorne un arreglo vacio
        return []
    }
    
    name =  name.toLowerCase()
    return heroes.filter( hero => hero.superhero.toLowerCase().includes(name) )
}