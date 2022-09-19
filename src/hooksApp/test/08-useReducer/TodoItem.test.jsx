import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en el todoItem', ()=>{
    
    const todo = {
        id:1,
        description: 'piedra del alma',
        done: false
    }

    const onDeleteTodoMock = jest.fn();
    const handleToggleTodoMock = jest.fn();

    beforeEach( ()=> jest.clearAllMocks());
    //resetamos cada una de las pruebas

    test('Debe de mostart el todo pendientes de completar', ()=>{
        render( <TodoItem todo={ todo }  
                        onDeleteTodo={ onDeleteTodoMock }  
                        handleToggleTodo={handleToggleTodoMock}   
                        /> );


        const liElement = screen.getByRole('listitem');            
        const span = screen.getByLabelText('span');
    
        expect( liElement.className ).toBe('list-group-item');
        
        
        expect( span.className ).toBe('')
            
    });


    
    test('Debe de mostart el todo completado', ()=>{
        todo.done = true;
        render( <TodoItem todo={ todo }  
                        onDeleteTodo={ onDeleteTodoMock }  
                        handleToggleTodo={handleToggleTodoMock}   
                        /> );


        const liElement = screen.getByRole('listitem');            
        const span = screen.getByLabelText('span');
    
        expect( liElement.className ).toBe('list-group-item');
        
        
        expect( span.className ).toContain('text-decoration-line-through')
            
    });


    test('Se debe de mandar a llamar el toggleTod cuando se haga el click en el boton', ()=>{
        render( <TodoItem todo={ todo }  
            onDeleteTodo={ onDeleteTodoMock }  
            handleToggleTodo={handleToggleTodoMock}   
            /> );

            const span = screen.getByLabelText('span');
            fireEvent.click(span);
            expect( handleToggleTodoMock ).toHaveBeenCalledWith(todo.id);
    });

    test('Se debe de mandar a llamar el delete en el boton de borrar', ()=>{

        render( <TodoItem todo={ todo }  
            onDeleteTodo={ onDeleteTodoMock }  
            handleToggleTodo={handleToggleTodoMock}   
            /> );

            const span = screen.getByRole('button');
            fireEvent.click(span);
            expect( onDeleteTodoMock     ).toHaveBeenCalledWith(todo.id);
    });
    
});