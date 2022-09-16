import { render, screen } from "@testing-library/react";
import { MultipleCustomHook } from "../../examples/MulitpleCustomHooks";

describe('Pruebas en el componente <MulitpleCustomHooks.jsx/>', ()=>{
    test('Debe de mostrar el componete de forma correcta', ()=>{
        render( <MultipleCustomHook /> );
        const nextButton = screen.getByRole('button')
        // screen.debug();

        expect( screen.getByText('Cargando...') )
        expect( screen.getByText('BrakingBad Quotes') );
        expect( nextButton.disabled ).toBeTruthy();
        
    }); 
});