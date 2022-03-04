import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"


describe('Test del componente <AuthReducer/>', () => { 

    test('Debe retornar el estado por defecto', () => { 

        // creo un estado para pruebas con el logged en false y el action como un string vacio
        const state = authReducer({ logged:false }, {})       
        expect(state).toEqual({logged:false})
    })

    test('Debe autenticar y usar en name del usuario', () => { 

        //Creo una accion y si yo mando esta accion al reducer el state tiene que cambiar
        const action={
            type: types.login,
            payload:{
                name:'Cristian'
            }
        }

        const state = authReducer({ logged:false }, action)    //este es el estado inicial pero ahora mando la accion

        expect(state).toEqual({
            logged:true,
            name:'Cristian'
        })
    })

    test('Debe borrar el name del usuario y el logged debe estar el false', () => { 

        const action={
            type: types.logout
        }

        const state = authReducer({ logged:true, name:'Cristian' }, action)
        
        expect(state).toEqual({
            logged:false
        })


    })

})














/*
importo el componente al que le hago las pruebas y necesito disparar acciones por eso importo las types.

debe tener un estado inicial, ejecutarlo osea ver cual es el estado inicial y asumir ese estado inicial 
test:
1.Debe retornar el estado por defecto
2.Debe autenticar el logged estar en true y usar en name del usuario
3.Debe borrar el name del usuario y el logged debe estar el false


*/
