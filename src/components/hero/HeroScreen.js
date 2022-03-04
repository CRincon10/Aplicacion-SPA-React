import { useMemo } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById"


export const HeroScreen = () => {

    const {heroeId} = useParams()
    const navigate = useNavigate()

    const hero = useMemo( ()=> getHeroById(heroeId),[heroeId] )
    
    const { 
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters} = hero

    const imagePath = `/assets/${id}.jpg`

    if(!hero){
        return <Navigate to='/' />
    }

    const handleReturn = ()=>{
        navigate( -1 )
    }

    return (
        
        <div className="row mt-5">
            <div className="col-4">
                <img src={ imagePath } alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft'/>
            </div>
            <div className="col-8 animate__animated animate__fadeInDown">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-secondary" 
                    onClick={handleReturn}    
                >
                    Return
                </button>

            </div>

        </div>


    )
}








/*
useParams() ==> Hook aportado por React en este hook viene la propiedad que yo le defini en la ruta al path es decir en el DashboardRoutes a la ruta del HeroScreen
le defini <Route path='hero/:heroeId' element={<HeroScreen/>} />, ese :heroeId lo puedo usar en este componente

const hero = getHeroById(heroeId)   ==> esta llamando la funcion getHeroById creada en la carpeta selectors y lo que hace es regresa el heroe que cumple con la 
condicion que le estoy especificando, en este caso el id del heroe que conincida con el id que estoy mandando

if(!hero){
    return <Navigate to='/' />
}                                 ==> valida si hero no existe entonces navegue hacia la ruta <Route path="/" element={<MarvelScreen />} /> definida en DashboardRoutes

const handleReturn = (  )=>{
        navigate( -1 )
    }                               ==> navigate(-1) cuando se ejecuta la funcion handleReturn navega inmediatamente a la página anterior 

useMemo()  ==> Memoriza procesos para que solo se ejecuten cuando su dependencia cambie, en este caso memoriza la funcion getHeroeById y como dependencia tiene que 
solo se ejecute siempre que el heroeId cambie.





NOTA: en esta aplicación las imagenes se manejan como un recurso estatico con ubicacion en la carpeta assets del directorio public.
si yo quiero que las imagenes hagan parte del proyecto dentro del directorio src, translado la carpeta assets dentro del src, y seria necesario importar las imagenes de 
forma diferente y el imagePath cambiaria tambien 
ejemplo:

const heroImages = require.context('../../assets/, true')  true para que busque en subdirectorios en caso que existan
const imagePath = heroImages(`./${id}.jpg`)

Lo mismo debo hacer en cada uno de los componentes que esta mostrando imagenes 
*/