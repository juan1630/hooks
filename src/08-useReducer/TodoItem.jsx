export const TodoItem = ({ todo , onDeleteTodo, handleToggleTodo})=> {
    return(
        <li className="list-group-item"  >
            <span
                className={ (todo.done) ? 'text-decoration-line-through' : '' }
                onClick={()=> handleToggleTodo(todo.id) }
            >
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