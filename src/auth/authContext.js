import { createContext } from "react";


export const AuthContext = createContext()










 





/*
AUTENTICACION DE RUTAS

Context me permite compartir el estado y el dispath de las acciones del Reducer a lo largo de toda la aplicacion.

Este AuthContext me permite proveer informacion a todos los componentes hijos, crea un nuevo contexto, va con mayuscula porque tambien es un componente y 
lo uso en el archivo princpipal de mi aplicacion para poder compartir la informacion a los otros componentes, en este caso <HeroesApp />. 


*/