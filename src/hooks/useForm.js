import {useEffect, useMemo, useState} from 'react';

export const useForm = ( initialForm = {} , formValidations = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(()=> {
            createValidators();
    }, [formState]);

    //comparamos el useEffect 
    useEffect(()=> {
        setFormState( initialForm)
    }, [initialForm])


    const isFormValid = useMemo(()=> {
        for ( const formValue of Object.keys(formValidation) ){
            if( formValidation[ formValue ]  != null  )return false;

            return  true
        }
    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators= () => {
        const formCheckedValues = {};

        for( const formFields  of Object.keys(formValidations)  ){
            //obtenemos los keys del json

            const [ fn, error = 'Este campo es requerido' ] = formValidations[ formFields ];

            formCheckedValues[ formFields+'Valid' ] = fn( formState[ formFields ] )  ? null :  error ;
        }

        setFormValidation( formCheckedValues );

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        isFormValid,
        ...formValidation
    }
}