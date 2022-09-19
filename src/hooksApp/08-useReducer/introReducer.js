

const initialState = [
    {
        id:1,
        todo: 'Recolectar la gema del alma',
        done: false
    }
]


const todoReducer = (state= initialState, action ={})=>{
    console.log(action)
    // si no hay algun etstado, se toma el initialState, el parametro action hace referencia a que accion es la que va a ejecutar
    
    // Siempre se debe de manejar un return 
    //  el return puede ser cualquier cosa  

    if(action.type == '[TODO]: add todo' ){
        return [...state, action.payload];
    }
    return state;
};

let todos = todoReducer();


const newTodo ={    
    id: 2,
    todo: 'Recolectar la gema del poder',
    done: false
}
const addTodoAction = {
    type: '[TODO]: add todo',
    payload: newTodo
};



todos = todoReducer( todos, addTodoAction );

console.log({ state: todos })