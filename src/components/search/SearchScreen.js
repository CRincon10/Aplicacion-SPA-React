import {useNavigate, useLocation} from 'react-router-dom'
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm"
import {getHeroesByName} from '../../selectors/getHeroesByName'
import {HeroCard} from '../hero/HeroCards'
import { useMemo } from 'react'

export const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const query = queryString.parse(location.search)
    const {q = '' } = query       //solo estoy desestructurando la prop q de query y le di valor por default en caso de que no tenga ningun valor inicial


    const [ {searchText},handleInputChange] = useForm({
        searchText:q                     //initialState asi es como se va a ver el input de forma inicial en este caso va a mantener el valor de la busqueda ya que ese es el valor que tiene q
    })
    
    const heroesfilter = useMemo(()=> getHeroesByName(q), [q])

    const handleSearchText = (e)=>{
        e.preventDefault()

        if(searchText.trim().length <=2 ){
            return;
        }

        navigate(`?q=${searchText}`)  //metodo de busqueda que va a dirigirme a la ruta que se le indique dentro del ${}, en este punto ya navegue hacia esa ruta lo puedo comprobar en el url del navegador
    
    }

    return (
        <>
            <h1>Your Hero</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search</h4>
                    <hr/>

                    <form onSubmit={handleSearchText}>
                        <input 
                            type='text'
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}

                        />
                        <button
                            type="submit"
                            className="btn btn-outline-secondary mt-3"
                        >
                            search...
                        </button>

                    </form>

                </div>

                <div className='col-7'>
                        <h4>Results</h4>
                        <hr/>

                        {
                            (q === '')
                                ? <div className='alert alert-info'>look for a hero</div>
                                : (heroesfilter.length === 0 ) && <div className='alert alert-danger'> No results found for: {q} </div>
                        }

                        {
                            heroesfilter.map( hero =>( 
                                <HeroCard 
                                    key={hero.id}
                                    {...hero}

                                />
                            ))
                        }

                </div>

            </div>

        </>
    )
}





/*
En este componente use el hook useForm que me retorna el values que es el initialState el handleInputChange que retorna 
los values que tenga pero al target.name le computa el valor del target.value y el reset para reestablecer el valor del input

query parameters desde la busqueda
El handleSearchText retorna el searchText y ese va a ser el valor de la busqueda lo que voy a hacer es navegar a la ruta donde el queryParameter va a estar establecido
navigate(`?q=${searchText}`)  ==> metodo de busqueda que va a dirigirme a la ruta que se le indique dentro del ${}
useLocation  == > hook que indica la localizacion donde nos encontramos dentro de la app tiene varias propiedades la que uso en este componente es search
es necesario usar query-string instalacion de npm install query-string e importarlo 
const query = queryString.parse(location.search)    ==> a queryString le parseo el valor de location con su propiedad serch


*/