import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'

export const PublicRoutes = ({children}) => {
   
    const {user} = useContext(AuthContext)
    
    
    return user.logged
        ? <Navigate to="/marvel" /> 
        : children
}




/*
Si el usuario esta loggueado lo haga navegar a la ruta de marvel caso contrairio que lo mande a las rutas hijos que este caso el el login
es lo mismo que le indique
return !user.logged
    ? children
    :<Navigate to="/marvel" />
Es decir si el usuario es diferente a logged o no esta logueado muestre solo las rutas hijas que solo seria /login caso contrario Navigate lo redirige a /marvel

*/