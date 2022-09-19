import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () =>{

    const { onInputChange, username, email, password, onResetForm }  =  useForm({
        username:"",
        email:"",
        password:""
   });
   
//    const { username, email, password  }  = formstate;

    // useEffect( ()=> {
    //    // console.log('useEffect called!!');
    // }, [form]);

    // useEffect( ()=> {
    //    // console.log('form called!!');
    // }, [form.email]);

 
   return <>
        <h1> FormWithCustomHook </h1>
        <hr />
        <input type="text" 
            placeholder="Username"
            name="username"
            className="form-control"
            value={ username }
            onChange={onInputChange}
        />
        <input type="email" 
            placeholder="email"
            name="email"
            className="form-control mt-2"
            value={ email }
            onChange={onInputChange}
        />

        <input type="password" 
            placeholder="password"
            name="password"
            className="form-control mt-2"
            value={ password }
            onChange={onInputChange}
        />

        <button className="btn btn-primary"onClick={ onResetForm } > Reset </button>
    
    </>
};  