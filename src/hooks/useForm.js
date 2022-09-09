import { useState } from 'react';

export const useForm = (  initalForm = {} ) => {
    
    const [ formstate, setformstate] = useState(initalForm);

    const onInputChange = ({target}) => {
        const { name, value } = target;

        setformstate({ 
            ...formstate,
            [name]: value
        });
        
    }


    const onResetForm =() => {
        setformstate( initalForm);
    };
   

    return {
        //desestructuramos el objeo, en variables 
        ...formstate,
        formstate,
        onInputChange,
        onResetForm
    }
    //como se agrega en el return se tiene que importar en el component
};