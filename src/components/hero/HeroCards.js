import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const imagesPath = `/assets/${id}.jpg` 

    return (

        <div className='col animate__animated animate__fadeIn'>
            <div className='card'>
                
                <div className='row no-gutters'>
                    
                    <div className='col-4'>
                        <img src= {imagesPath} className='card-img' alt={superhero} />
                    </div>
                    <div className='col-8'>

                        <div className='card-body'>

                            <h5 className='card-tittle'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {
                                (alter_ego !== characters) && 
                                    <p className='text-muted'>{characters}</p>   
                            }
                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`} >
                                Más...
                            </Link>
                            
                            

                        </div>

                    </div>
                    
                    
                </div>


            </div>
        </div>
    )
}





/*
El componente HeroCards me retorna una targeta por heroe, recibo del componente HeroList por props cada una de las propiedades que tiene el heroe en el archivo 
data y con ellas renderizo una card que muestra imagen e informacion del heroe.

En algunos heroes el alter_ego y characters son el mismo es por eso que de manera condicional muestro solo los characters, es decir:
{
    (alter_ego !== characters) && 
        <p className='text-muted'>{characters}</p>   
} 
Si el alter_ego y characters con diferentes con el doble && ejecute la siguiente instruccion, <p>cree un parrafo donde se van a mostrar los characters</p>


*/