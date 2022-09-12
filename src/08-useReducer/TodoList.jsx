import { TodoItem } from "./TodoItem";

export const  TodoList = ({todos = [], onDeleteTodo, handleToggleTodo}) => {
    console.log(todos)
    return(
        <ul className="list-group" >
            {
                todos.map( (element) => (

                    <TodoItem key={element.id} todo={element }  onDeleteTodo={onDeleteTodo}  handleToggleTodo={handleToggleTodo} />
                ))
            }
        </ul>
    
    )
};