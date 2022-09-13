import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = ()=>{

    const { user, setUser } = useContext( UserContext );
    // console.log(algo);
    // rcibe el value que le mandamos del context
    return(
        <>
            <h1> Login Page </h1>
            <hr />
            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button onClick={ () => setUser({name:'juan', email: 'juan@gmail.com'})} >
                Set user
            </button>
        </>
    );
}