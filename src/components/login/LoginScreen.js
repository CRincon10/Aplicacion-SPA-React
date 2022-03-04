import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { types } from "../../types/types"


export const LoginScreen = () => {


    const {dispatch} = useContext(AuthContext)

    

    const navigate = useNavigate()

    const handleLogin = ()=>{
        
        dispatch({
            type: types.login,
            payload: {name:'Cristian'}
        })
        
        const lastPath = localStorage.getItem('lastPath') || '/marvel' 
        
        navigate( lastPath, {
            replace:true
            
        })
    }

    return (
        <div className="container mt-5 ">
            <h1>LoginScreen</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login 
            </button>


        </div>
    )
}






/*
Para acceder a la informacion del Context necesito importar el useContext y mi componente authContext, de este necesito la propiedad dispatch
const {dispatch} = useContext(AuthContext)


dispatch({
    type: types.login,
    payload: {name:'Cristian'}
})
al llamar la funcion dispatch==> el dispatch es una funcion que llame dentro del handleLogin cuando se da click en el button. a este le indico de que type va a ser
en este caso importo mis types de la carpeta types/types.js y va a ser types.login y en su payload le computo un objeto con propiededes inicialmente el name,



useNavigate ==> CustomHook aportado por React que me ofrece una funcion que me permite navegar a otras pantallas, le puedo indicar cual va a ser la ruta por defecto
a la que va a regresar o cuando se de click en el boton del navegador de atras que en este caso inicialmente va a ser '/marvel' y como segundo argumento tiene un 
objeto con opciones como el replace, en este caso ponemos el replace en true que indica que una vez se ejecute el click reemplace la página en la que me encuentro.

pero como necesito que al hacer login me recuerde la ULTIMA PAGINA VISITADA por el usuario y esa pagina o path ya lo tengo guardado en el localStorage indicado en mi
componente <PrivateRoutes/>, se lo indico en el handleLogin
const lastPath = localStorage.getItem('lastPath') || '/marvel'     de esta forma si hay algo en el colal storage uselo ||or sino use el parh '/marvel'
Y esa location es a donde va a navegar el navigate


*/






