import { useForm } from "../hooks/useForm";

export const AddNewTodo = ({ handleTodos })=>{

    const {  onInputChange, onResetForm, description}  = useForm({
        id:'',
        description:'',
        done:false
    });
    
    const handelSubmitTodod  = (event)=> {
        event.preventDefault();

        handleTodos({
            id: new Date().getTime(),
            description,
            done: false
        });
        onResetForm();
    };

    return(
        <form onSubmit={handelSubmitTodod} >

            <input type="text" className="form-control" placeholder="Que hay que hacer?..." name="description" id="" value={description}  onChange={ onInputChange } />
            <button  type="submit" className="btn btn-primary btn-block" >
                Agregar
            </button>
        </form>
    );
};