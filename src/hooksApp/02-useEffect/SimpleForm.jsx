import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () =>{
   
    const [ form, setForm] = useState({
        username: "juancho",
        email: "juan@gmail.com"
    });

    const { username, email } = form;


    useEffect( ()=> {
       // console.log('useEffect called!!');
    }, [form]);

    useEffect( ()=> {
       // console.log('form called!!');
    }, [form.email]);

    const onInputChange = ({target}) => {

        const { name, value } = target;

        setForm({ 
            ...form,
            [name]: value
        });
        
    }
   
   return <>
        <h1>Simple Form!!! </h1>
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
    
       {
            username == 'juancho2' &&  <Message />
       }
    </>
};  