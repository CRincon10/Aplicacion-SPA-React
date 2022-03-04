import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const Navbar = () => {

    const {user, dispatch} = useContext(AuthContext)

    



    const navigate = useNavigate()

    const handleLogout = ()=>{
        
        dispatch({
            type: types.logout
        })

        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className=  'navbar-collapse'>
                <div className="navbar-nav">

                    <NavLink                         
                        className= { ({isActive})=> 'nav-item nav-link ' + (isActive ? 'active' : '')   } 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className= { ({isActive})=> 'nav-item nav-link ' + (isActive ? 'active' : '')   }  
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        className= { ({isActive})=> 'nav-item nav-link ' + (isActive ? 'active' : '')   }  
                        to="/search"
                    >
                        Search
                    </NavLink>


                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    
                    <span className='nav-item nav-link text-info'>
                        {user.name}
                        
                    </span>
                    
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={handleLogout}  
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}





/*
<button>  ==> boton que me va a ejecutar el logout llamando la función handleLogout al hacer click, al div que contiene este boton le modifique el className con especificaciones de bootstrap para que se muestre
a la derecha del navbar

<span>  ==> muestra el usuario que esta logueado

className= { ({isActive})=> 'nav-item nav-link ' + (isActive ? 'active' : '') }  ==> El className ahora es una funcion que manda como argumentos props, una de ellas 
isActive es por eso que yo puedo desestructurarla y  manipularla y en este caso mandar de manera condicional con un operador ternario que compruebe si esta activo
me devuelva la clase active sino que no agregue nada.

useNavigate ==> CustomHook aportado por React que me ofrece una funcion que me permite navegar a otras pantallas, le puedo indicar cuak va a ser la ruta por defecto
a la que va a regresar cuando se de click en el boton del navegador de atras que en este caso va a ser '/marvel' y como segundo argumento tiene un objeto con opciones
como el replace, en este caso ponemos el replace en true que indica que una vez se ejecute el click remplace la página en la que me encuentro.

Para tener acceso a mi Contex que esta en el componente <HeroesApp /> y comparte el user y el dispatch, importo el useContext y el AuthReducer y los voy a usar asi:
const {user,dispatch} = useContext(AuthContext)   ==> de esta forma ya tendo acceso a las propiedades y puedo hacer uso de ellas.

el dispatch ==> lo llamo dentro del handleLogout, importo mis types de la carpeta types/types.js y puedo llamar el types.logout que dispara la funcion de olvidar o
borrar las propiedades que ya estan guardadas en el types.login y hace el logout que es poner el logged en false


*/ 



