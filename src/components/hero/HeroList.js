import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCards'



export const HeroList = ({publisher}) => {

    const heroes = useMemo( ()=> getHeroesByPublisher(publisher), [publisher]  )

    return (
        <div className='row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn'>   
            {
                heroes.map( (heroe) =>(
                    <HeroCard key={heroe.id}
                        {...heroe}
                    />
                        
                ))
            } 
        </div>
    )
}






/*  Se llama en DcScreen.js y en MarvelScreen.js
HeroList recibe por props un publisher que guarde en la constante heroes, este componente me va a retornar unas cards con una clase de bootstrap. 
dentro tiene:
OPCION 1 ==> la funcion de heroes.map que recorre cada uno de los heroes que esten dentro del publisher y me va a retornar en una card con el superhero que es
el nombre del heroe y cada uno tiene como key su id
{
    heroes.map( (heroe) =>(
        <li key={heroe.id} >
            {heroe.superhero}
        </li>
    ))
} 

OPCION2 ==> llamamos el componente HeroeCard que recibe por props cada uno de las propiedades que tiene el heroe y los va a mostrar dentro de la card que 
crea el HeroList con el operador spred {...} le mando como props cada una de las propiedades que tiene el heroe que recibo como argumento 


Al return de las cards le puse una animacion de animate.css importado desde un link en el html.

*/