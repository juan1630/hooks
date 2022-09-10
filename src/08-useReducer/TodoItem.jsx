export const TodoItem = ({ todo , onDeleteTodo})=> {
    return(
        <li className="list-group-item"  >
            <span>
                { todo.description }
            </span>
            <button 
                className="btn btn-danger ml-1"
                onClick={ ()=> onDeleteTodo(todo.id) }
                >
                Borrar
            </button>
        </li>
    )
};