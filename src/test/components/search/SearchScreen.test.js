import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { SearchScreen } from "../../../components/search/SearchScreen"



describe('Test en <SearchScreen/>', () => { 

    

    test('Debe mostrarse correctamente y con valores por defecto', () => {  

        const wrapper = mount(
                            <MemoryRouter initialEntries={['/search']}>
                                <SearchScreen/>
                            </MemoryRouter>
                            )

        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('.alert-info').text().trim()).toBe('look for a hero')
    })

    test('Debe mostrar a batman y el input con el valor del queryString', () => { 

        const wrapper = mount(
                            <MemoryRouter initialEntries={['/search?q=batman']}>
                                <SearchScreen/>
                            </MemoryRouter>
                            )
        
        expect(wrapper.find('.alert-info').length).toBe(0)
        expect(wrapper.find('input').prop('value')).toBe('batman')
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe mostrar el error si no se encuentra el Hero', () => {  

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman1234']}>
                <SearchScreen/>
            </MemoryRouter>
            )

        
        expect(wrapper.find('.alert-danger').text().trim()).toBe(`No results found for: batman1234`)
        


    })

})







/*
Para hacer pruebas con componentes que tengan el router y tambien url necesito proveer un contexto en el cual hayan rutas es decir al <SearchScreen/> es necesario
proveerle el useNavigate() y un contexto que tenga rutas por eso es necesario importar el MemoryRouter que es el que me permite hacer evaluaciones y pruebas como si 
estuviera en el navegador ese <MemoryRouter/> debe estar dentro del context y debe contener el componente que estamos evaluando par simular las rutas, también es 
necesario que le indique el path de la ruta que vamos a evaluar ya que depende de esto me va a renderizar una ruta o componente, se llama el initialEntries y dentro 
de este el segmento de url en el cual definimos el path initialEntries={['/search']}

Los queryParemeters eventualmente son leidos por 
const query = queryString.parse(location.search)
basados en esos queryparameters se extrae el q   const {q = '' } = query  
basado en el q se construye el valor que tiene el texto
 const [ {searchText},handleInputChange] = useForm({
    searchText:q                     
})
basado en esto se muestran los heroes que coincidan con ese searchText
const heroesfilter = useMemo(()=> getHeroesByName(q), [q])
Entonces si yo tengo un valor el componente reacciona o se renderiza de alguna manera de forma condicional



Test:
1.Debe mostrarse correctamente y con valores por defecto
2.Debe mostrar a batman y el input con el valor del queryString
  initialEntries={['/search?q=batman']}  lo defino de esta forma porque esta es la ruta o path para que muestre a batman
*/
