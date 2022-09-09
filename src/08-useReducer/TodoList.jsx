import { TodoItem } from "./TodoItem";

export const  TodoList = ({todo}) => {
    
    return(
        
        <li className="list-group-item"  >
            <TodoItem description={todo.description }  />
            <button className="btn btn-danger ml-1" >
                Borrar
            </button>
        </li>
    
    )
};