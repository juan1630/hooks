import { useReducer } from "react";
import { AddNewTodo } from "./AddNewTodo";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState =[{
    id: new Date().getTime(),
    description: 'Recolectar la piedar el alma',
    done: false
},
{
    id: new Date().getTime()+100,
    description: 'Recolectar la piedra del poder',
    done: false
}

]

export const TodoApp = () => {

   const [ todos, dispatch ] =useReducer(todoReducer, initialState);

   const handleNewTodo = ( todo )=>{
    console.log(todo);
   }

    return(
        <>
            <section className="container-fluid" >
                <h1>  Todo App (10)  <small> ,pendientes:  2  </small>   </h1>
                <hr />
                <div className="row">
                    <div className="col-7">
                        <ul className="list-group" >
                            {
                                todos.map( (element)=> (<TodoList key={ element.id } todo={element} />) )
                            }
                        </ul>
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