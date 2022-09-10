import { useEffect, useReducer } from "react";
import { AddNewTodo } from "./AddNewTodo";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState =[];


const init = ()=>{
    return JSON.parse(localStorage.getItem('todos'))  || [];
}

export const TodoApp = () => {

   const [ todos, dispatch ] =useReducer(todoReducer, initialState, init);

   useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

   const handleNewTodo = ( todo )=>{
        
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
   }

   const handleDeleteTodo = (id)=>{
    dispatch({
        type:'[TODO] Remove Todo',
        payload: id
   });
   };

    return(
        <>
            <section className="container-fluid" >
                <h1>  Todo App (10)  <small> ,pendientes:  2  </small>   </h1>
                <hr />
                <div className="row">
                    <div className="col-7">
                    <TodoList todos={todos}  onDeleteTodo={handleDeleteTodo}  />
                    </div>
                    <div className="col-5">
                        <h4> Agregar Todo </h4>
                        <hr />
                        <AddNewTodo handleTodos={handleNewTodo} />
                    </div>
                </div>
            </section>
        </>
    )
};