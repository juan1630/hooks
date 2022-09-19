import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../examples/MulitpleCustomHooks";
import {  useFetch } from "../../hooks/useFetch";
import { useCounter } from '../../hooks/useCounter'

jest.mock("../../hooks/useFetch")
jest.mock('../../hooks/useCounter');

describe('Pruebas en el componente <MulitpleCustomHooks.jsx/>', () => {


    const mockIncrement = jest.fn();
    
    //se declara de forma globale el counter

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });


    beforeEach( ()=> {
        jest.clearAllMocks();
    });

    // test('Debe de mostrar el componete de forma correcta', ()=>{
    
    //     render( <MultipleCustomHook /> );
    //     useFetch.mockReturnValue({
    //         data: null,
    //         isLoading: true,
    //         hasError: null
    //     });
    //     const nextButton = screen.getByRole('button')
    //     screen.debug();

    //     expect( screen.getByText('Cargando...') )
    //     expect( screen.getByText('BrakingBad Quotes') );
    //     expect( nextButton.disabled ).toBeTruthy();
        
    // }); 

    test('Debe de mostrar un Quote', ()=> {

        useFetch.mockReturnValue({
            data: [{
                author:'juan',
                quote: 'Hola mundo'
            }],
            isLoading: false,
            hasError: null
        });
        render( <MultipleCustomHook /> );

        expect( screen.getByText('Hola mundo') ).toBeTruthy();
        expect( screen.getByText('juan') ).toBeTruthy();

        const nextButton = screen.getByRole('button')
        expect( nextButton.disabled ).toBeFalsy();

    });


    test('debe de llamar la funcion de incrementar', ()=>{

        useFetch.mockReturnValue({
            data: [{
                author:'juan',
                quote: 'Hola mundo'
            }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHook /> );

        const nextButton = screen.getByRole('button')
        fireEvent.click( nextButton )

        expect( mockIncrement ).toHaveBeenCalled();
    });
});