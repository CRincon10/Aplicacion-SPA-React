import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = ()=>{
    return JSON.parse(localStorage.getItem('user')) || {logged: false}    
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init)


    useEffect(() => {
        if( !user ) return
        
        localStorage.setItem('user', JSON.stringify(user))
        
    }, [user])
    


    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}
        >
            <AppRouter />
        </AuthContext.Provider>
    )
}






/*
Componente con AuthContext para autenticacion de rutas

El <AppRouter/> tiene que estar dentro del AuthContext porque cualquier ruta que este dentro de este que es mi Router principal debe tener acceso a la información
del AuthContext.Provider y .Provider porque necestio que provea información.

AuthContext.Provider value={ }  dentro de value va la información que se va a compartir a lo largo de la aplicación en este caso un objeto que tiene el 
user y el dispatch que estan en mi useReducer


useReducer() aca defini mi useReducer  ==> hook de React me permite crear mi propia implementacion del context, retorna un array con dos argumentos el primero 
es el 'state' que lo puedo renombrar es el mismo state que tiene el Reducer y segundo el 'dispatch' que es la funcion que dispara las acciones que ejecuta 
el Reducer.
Y recibe o requiere:
1. el Reducer que en este caso es mi authReducer sin ejecutarse.

2. un estado inicial que en este caso es un objeto vacio { }.

3. el tercer argumento que es el:
init ==> es una funcion y forma para inicializar el authReducer y lo puedo definir fuera del componente para que solo se ejecute 1 primera vez, en este init
puedo verificar si hay alguna informacion en el localStorage.
El usuario va a estar guardado en el localStorage y así voy a saber si esta autenticado o no.
const init = ()=>{
    return localStorage.getItem('user') || {logged: false}       
}
init me retorna el usuario que esta guardado en el localStorage pero si por alguna razon el storage esta vacio sin ususario me va a retornar el logged en false
Recordar que en el Storage solo se pude guardar strings.


Es necesario guardar el usuario que se recibe en el useReducer es por eso que cree el el efecto para que este pendiente del cambio del user y se lo dejo claro 
en la dependencia y de manera condicional que si el usuario no existe o esta vacio retorne vacio pero si el usuario existe entonces llame el setItem en el 
LocalStorage e introduzca el usuario en el localStorage, el usuario viene del loginScreen.js

de modo que cuando la aplicacion es recargada se vuelve a ejecutar el codigo hasta antes del return el dogigo pasa por el useReducer, el useReducer manda a llamar el 
init nuevamente, la funcion init es quien lee nuevamente lo que hay en el localStorage y como lo encuentra lo parsea y regresa ese objeto, ese objeto ahora es mi 
nuevo state o user, por eso puedo ver el usuario llogeado asi recergue el navegador 




*/
