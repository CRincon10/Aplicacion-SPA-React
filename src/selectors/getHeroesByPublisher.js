import { heroes } from "../data/heroes"


export const getHeroesByPublisher = (publisher)=>{

    const validPublisher = ['DC Comics','Marvel Comics']

    if( !validPublisher.includes(publisher) ){
        throw new Error( `${publisher} is not a valid publisher` )
    }

    return heroes.filter( heroes => heroes.publisher === publisher )
}














/*
if( !validPublisher.includes(publisher) ){
        throw new Error( `${publisher} is not a valid publisher` )       ==> validacion si el publisher que estoy mandando como parametro no existe en el validPublisher me retorne un nuevo error controlado 
    }


*/