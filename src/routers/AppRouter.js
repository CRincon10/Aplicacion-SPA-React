//AppRouters es el Router principal

import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoutes } from './PublicRoutes';



//BrowserRouter ==> es necesatio envolver las rutas en este componente para que trabajen adecuadamente, hay que hacer su importación.


export const AppRouter = () => {
    return (
        <BrowserRouter>   
            <Routes>
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                <Route path="/login" element={
                    <PublicRoutes>
                        <LoginScreen />
                    </PublicRoutes>
                } 
                />
                

                <Route path='/*' element={
                    <PrivateRoute>
                        <DashboardRoutes/>
                    </PrivateRoute>
                } 
                />


                {/* <Route path='/*' element={<DashboardRoutes/>} /> */}
            </Routes>
        </BrowserRouter>
    )
}





/*Cuando se crea la aplicación web, para que poder navegar en ella y ver su contenido es necesario loguearse, es decir en la primera página que es el login no
deberiamos ver aun el Navbar ni el contenido de la app, es por eso que se creo un router hijo que contiene las páginas una vez estoy logueado y ver su contenido.
En este punto solo podemos ver la página del loggin y tenemos la ruta o el path que llama al router hijo que es el que contiene las rutas una vez estoy logueado

<Route path='/*' element={<DashboardRoutes/>} />    ==> '/*' indica que si no es por el login que es la primera ruta entonces sean manejadas por esta ruta que 
inicia con el / es por ero que en el path de los routers hijos en ellos ya no es necesario poner el /


CREACION DE RUTAS PRIVADAS Y RUTAS PUBLICAS

cree el nuevo componente <PrivateRoute /> lo importe y dentro de el voy a poner las rutas privadas que en este caso son mis <DashboardRoutes /> en el <PrivateRoute />
especifique la condicion que debe cumplirse para que el usuario pueda ingresar a las rutas hijas. como el <DashboardRoutes/> es un componente hijo pasa sus props
al componente padre.

Cree el nuevo componente <PublicRoutes> lo importe y dentro de ella puse la ruta publica que en este caso solo es una y es login de esta forma en caso de que el usuario
no este logged solo podra ver esta ruta. le puse la condicion en el componente <PublicRoutes />

*/


