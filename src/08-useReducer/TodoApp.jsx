import { useReducer } from "react";
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

    return(
        <>
            <h1>  Todo App (10)  <small> ,pendientes:  2  </small>   </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group" >
                        <li className="list-group-item"  >
                            <span>
                                item 1
                            </span>
                            <button className="btn btn-danger ml-1" >
                                Borrar
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="col-5">
                    <h4> Agregar Todo </h4>
                    <hr />
                    <form>

                        <input type="text" className="form-control" placeholder="Que hay que hacer?..." name="" id="" />
                        <button  type="submit" className="btn btn-primary btn-block" >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
};