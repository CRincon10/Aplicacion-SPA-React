import { mount } from "enzyme"
import { AuthContext } from "../../auth/authContext"
import { AppRouter } from "../../routers/AppRouter"

describe('Test en Router AppRouter', () => { 

    

    test('Debe mostrar la ruta del Login si el usuario no esta autenticado', () => { 

        // De esta forma proveemos un contexto controlado para hacer las pruebas
        const contexValue = {
            user:{
                logged:false
            }
        }

        //se creo el contex tal cual como en la aplicacion para poder ejecutar las pruebas, con la diferencia que se la manda como value el contex creado 
        //en este punto debemos estar en el path del login ya que el usuario no se encuentra autenticado, es por eso que podemos evaluar que el h1 del wrapper contenga la palabra 'Login'
        const wrapper = mount(
                                <AuthContext.Provider value={contexValue} >
                                    <AppRouter/>
                                </AuthContext.Provider> )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('h1').text().trim()).toBe('LoginScreen')

    })

    test('Debe mostrar las rutas privadas si el usuario esta autenticado', () => { 

        const contexValue = {
            user:{
                name:'Cristian',
                logged:true
            }
        }

        const wrapper = mount(
                                <AuthContext.Provider value={contexValue} >
                                    <AppRouter/>
                                </AuthContext.Provider> )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.navbar').exists()).toBe(true)
        


    })



})














/* En este Router estan definidaslas rutas privadas y publicas
Si el usuario no esta autenticado deberia mostrarse el LoginScreen pero si el usuario esta autenticado se van a mostrar las rutas del <DashboardRoutes/>,
para saber si esta autenticado o no me baso en el Contex de la app.
Como este componente renderiza otros componentes y estos a su vez otros se hace necesario el uso del  mount() en remplazo del shallow(), ya que quiero llegar a cada
uno de los componentes.

Test:
1.Debe mostrar la ruta del Login si el usuario no esta autenticado
2.Debe mostrar las rutas privadas si el usuario esta autenticado

*/