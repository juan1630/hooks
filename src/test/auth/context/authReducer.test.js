import { authReducer } from "../../../auth/context/authReducer";
import { types } from "../../../auth/types/types";

describe('Pruebas en el authReducer', ()=>{
    const intialState = {
        logged: false
    }
    test('Debe de retornar el estado por defecti', ()=>{
        const stateReducer = authReducer(intialState, {} );

        expect( stateReducer ).toBe( intialState );
    });


    test('Debe mandar a llamar la funcion de login y autenticar el usuario', ()=>{

        const action = {
            type: types.login,
            payload: 'Juan'
        }

        const state = authReducer(intialState, action);
        
        expect( state ).toEqual({
            logged: true,
            user: 'Juan'
        })

    });

    test('Debe de mandar a llamar la función de log out', ()=>{
        
        const state ={
            logged: true,
            user: 'Juan'
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( intialState, action );


        expect( newState.logged ).toBeFalsy();
        expect(newState.user).toBe(undefined);
    });
})