import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useCounter } from "../../hooks/useCounter";

describe('Pruebas en el hook useCounter', ()=> {
    test('Debe de retornar los valores por defecto', ()=> {
       const { result }=  renderHook( ()=> useCounter() );
       const { counter, decrement, increment, resetValue } = result.current;
        //obtenemos los valores de retorno del hook
       expect( counter ).toBe(10);
       expect( increment ).toEqual( expect.any( Function ) );
       expect( decrement ).toEqual( expect.any( Function ) );
       expect( resetValue ).toEqual( expect.any( Function ) );
    });

    test('Debe de retornar un valor de 100', ()=> {
    
        const { result }=  renderHook( ()=> useCounter( 100) );
        const { counter } = result.current;
    
        expect( counter ).toBe(100);
    });


    test('Debe de hacer el increment en el contador', ()=> {
        const { result }=  renderHook( ()=> useCounter( 100) );
        const { counter, increment } = result.current;

        act( ()=> {
            increment();
            increment(2);
        })

        expect( result.current.counter ).toBe(103)
    });

    test('Debe de hacer el decementar en el contador', ()=> {
        const { result }=  renderHook( ()=> useCounter( 100) );
        const {  decrement } = result.current;

        act( ()=> {
            decrement();
            decrement(2);
        })

        expect( result.current.counter ).toBe(97)
    });


    test('Debe hacer el reset del contador', ()=> {
        const { result }=  renderHook( ()=> useCounter( 1) );
        const {  resetValue, increment } = result.current;

        act( ()=> {
            increment(2)
            resetValue(1);
        })

        expect( result.current.counter ).toBe(1)
    });


});