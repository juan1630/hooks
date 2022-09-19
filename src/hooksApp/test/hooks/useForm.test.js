import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en el useForm', ()=>{

    const initialState ={
        name: 'juan',
        email: 'juan@gmail.com'
    }

    test('Debe de los valores por defecto', ()=>{

        const {result} =  renderHook(()=> useForm( initialState ));

        expect( result.current ).toEqual({
            name: initialState.name,
            email: initialState.email,
            formstate: initialState,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });

    });

    test('Debe de regresa el nombre de forma correcta', ()=>{
        


        const { result } = renderHook(()=> useForm(initialState));
        const { onInputChange, name, formstate } = result.current;
        act( ()=>{
                onInputChange({target: {name : 'name',value: 'juan'}});
            } );

        expect( name ).toBe('juan' );
        expect( formstate.name ).toBe('juan');

    });


    
    test('Debe de hacer el resete del form', ()=>{
        
        const { result } = renderHook(()=> useForm(initialState));
        const { onInputChange, onResetForm } = result.current;
        act(()=>{
                onInputChange({target: {name : 'name',value: 'juan'}});
                onResetForm();
            });

        expect( result.current.name ).toBe(initialState.name );
        expect( result.current.formstate.name ).toBe(initialState.name);


    });


});