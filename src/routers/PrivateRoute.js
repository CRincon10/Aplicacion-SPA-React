import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth/authContext"

export const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext)

    const {pathname, search} = useLocation()

    localStorage.setItem('lastPath', pathname + search)

    return user.logged 
        ? children 
        : <Navigate to="/login" />
}






/*
para tener acceso a la informacion del Context importe useContex y mi componente authContex. ya tengo acceso al user y al dispatch en este componente use el user.

De manera condicional voy a retornar si el usuario esta logged ?entonces muestre el componente hijo <dashboardRoutes/> en caso contrario con el hook Navigate, 
navegue ahacia la ruta del login.

este es un Componente que al tener otro componente como hijo puede recibir por props las propiedades de <dashboardRoutes/> las desestructuro y las llame children

Con el useLocation()  ==> hook de react puedo conocer mi localizacion dentro de la app. cuando nota que hay un cambio internamente vuelve a disparar los procedimientos
porque internamente tiene un state y eso redibuja lo que tiene que redibujar entonces gracias a eso puedo guardar esa informacion en el localStorage
localStorage.setItem('lastPath', location.pathname)    ==>   location.pathname   es el nombre del path de la ruta de localizacion actual o donde me encuentro


*/