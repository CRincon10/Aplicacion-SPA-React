import { useState } from "react"

// useForm recibe como argumento un objeto que tiene campos de un formulario el cual yo quiero manipular

export const useForm = (initialState={}) => {

    const [values, setValues] = useState(initialState)

    const reset = ()=>{                     //metodo para resetear el state, puede o no recibir los newValues
        setValues(initialState)
    }



    const handleInputChange = ({target})=>{

        setValues({
            ...values,
            [target.name]: target.value
        })  

    }
    return [values, handleInputChange, reset]

}