import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { DashboardRoutes } from "../../routers/DashboardRoutes"


describe('Test en <DashboardRoutes/>', () => { 

    const contexValue = {
        user:{
            logged:true,
            name:'Juanito'
        }
    }

    test('Debe mostrarse correctamente con el path de la ruta principal o la de marvel', () => { 

        const wrapper = mount(
                            <AuthContext.Provider value={ contexValue }>
                                <MemoryRouter initialEntries={['/']}>
                                    <DashboardRoutes /> 
                                </MemoryRouter>
                            </AuthContext.Provider>
                            )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.text-info').text().trim()).toBe('Juanito')
        expect(wrapper.find('h1').text().trim()).toBe('MarvelScreen')
    })

    test('Debe mostrarse correctamente con el path de la ruta DC', () => { 

        const wrapper = mount(
                            <AuthContext.Provider value={ contexValue }>
                                <MemoryRouter initialEntries={['/dc']}>
                                    <DashboardRoutes /> 
                                </MemoryRouter>
                            </AuthContext.Provider>
                            )
            
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('h1').text().trim()).toBe('DcScreen')
    })


})









/*
En este componente hay una pieza fundamental que confirma si el usuario esta o no autenticado y es el navbar ya que este solo se muestra dependiendo del estado del usuario
Renderiza el navbar, el div con clasname='container', los routes con cada unas de las rutas de la aplicacion, asi que puedo analizar que dependiendo de la ruta 
que yo le mande deberia mostrar marvel o dc o serch.

Para hacer pruebas con componentes que tengan el router y tambien url necesito proveer un contexto en el cual hayan rutas es decir al <DashboardRoutes/> es necesario
proveerle el useNavigate() y un contexto que tenga rutas por eso es necesario importar el MemoryRouter que es el que me permite hacer evaluaciones y pruebas como si 
yo estuviera en el navegador ese <MemoryRouter/> debe estar dentro del context y debe contener el componente que estamos evaluando par simular las rutas, también es 
necesario que le indique el path de la ruta que vamos a evaluar ya que depende de esto me va a renderizar una ruta o componente, se llama el initialEntries y dentro 
de este el segmento de url en el cual definimos el path ejemplo initialEntries={['/dc']}

Test:
1.Debe mostrarse correctamente con el path de la ruta principal o la de marvel
2.Debe mostrarse correctamente con el path de la ruta DC
*/