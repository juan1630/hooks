import { todoReducer } from "../../08-useReducer/todoReducer";

describe('Pruebas en el todoReducer', ()=>{
    //creamos el estado inicial del reducer
    const intialState =[{
        id: 1,
        descrption: 'Demo todo',
        done: false
    }];

    test('Debe de regrsar el estado inicial del reducer', ()=>{

        const newSate = todoReducer(intialState, {});
        //se mande el objeto vacio, para que caiga en el default

        expect( newSate ).toBe(intialState);

    });

    test('Debe de agregar un todo', ()=>{
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id:2,
                descrption:  'tarea nuemero 2',
                done: false
            }
        }

        const newSate = todoReducer(intialState, action );
        expect( newSate.length  ).toBe(2);
        expect( newSate ).toContain(action.payload);

    });


    test('Debe de eliminar el todo', ()=>{
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }
        const newState =todoReducer( intialState, action );
        expect( newState.length ).toBe(0);
        
    });

    test('Debe de completar la tarea', ()=>{
        
        const action = {
            type: '[TODO] Toggle todo',
            payload: 1
        }

        const newSatate =todoReducer(intialState, action);
        expect(newSatate[0].done).toBeTruthy();

     });

});