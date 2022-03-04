
//Asi es como quiero que luzca mi state
// const state = {
//     name:'Cristian',
//     logged:true
// }

import { types } from "../types/types";


export const authReducer = (state={}, action) =>{

    switch (action.type) {
        case types.login:
            return {
                ...action.payload,   
                logged: true        
            }
        case types.logout:
            return {
                logged: false               
            }
            
    
        default:
            return state       
    }
    
}








/*
AUTENTICACION DE RUTAS

reducer ==> es una función que recibe el state que en este caso le di valor por defecto un objeto vacio y el action que es la que modifica el state y cuando la action
modifique el state React va a volcer a ejecutar lo que sea que este dentro de este.

return {
    ...action.payload           ==> forma de exparsir sus propiedades con operador express es decir si en la accion vienen propiedades como nombre,apellido u otros todas esas van a hacer parte del login y adicionalmente el logged va a estar en true
    logged: true
}      


return {
    logged: false               ==> de esta forma borra las propiedades y solo retorna el logged en false esta bandera del logout me va a confirmar si el usuario esta autenticado o no
}


 default:
    return state                ==> Forma de manejar la excepcion, es decir si no se dispara ninguna de las dos acciones me retorne el estate en su forma inicial


*/