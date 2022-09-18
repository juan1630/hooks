const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../08-useReducer/TodoApp");
import { useTodo } from '../../08-useReducer/useTodo'
jest.mock('../../08-useReducer/useTodo');

describe('Pruebas en el <TodoApp />', ()=> {

    useTodo.mockReturnValue({
        todos: [{id:1,description: 'algo #1',done: false }, {id:2,description: 'algo #2',done: false } ],
        handleNewTodo: jest.fn(),
        handleDeleteTodo:jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodos: 2
    });

    test('Debe de mostrar  el componente corecatmente', ()=> {
        render( <TodoApp /> );

        expect( screen.getByText('algo #1') ).toBeTruthy()
        expect( screen.getByText('algo #2') ).toBeTruthy()

    });
})