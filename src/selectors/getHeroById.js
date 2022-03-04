import { heroes } from "../data/heroes"


export const getHeroById = (id)=>{

    return heroes.find(heroe => heroe.id === id)

}








/*
El componente getHeroById barre los heroes de la data con heroes.find y me regresa el heroe que cumple con la condicion que le estoy especificando, en este caso el 
id del heroe que conincida con el id que estoy mandando

*/