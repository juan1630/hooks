import { AddNewTodo } from "./AddNewTodo";
import { TodoList } from "./TodoList";
import { useTodo } from "./useTodo";

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo, todosCount, pendingTodos } = useTodo();

    return(
        <>
            <section className="container-fluid" >
                <h1>  Todo App { todosCount}  <small> ,pendientes:  { pendingTodos }  </small>   </h1>
                <hr />
                <div className="row">
                    <div className="col-7">
                    <TodoList todos={todos}  onDeleteTodo={handleDeleteTodo}  handleToggleTodo={handleToggleTodo} />
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