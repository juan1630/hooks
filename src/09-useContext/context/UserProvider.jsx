import { useState } from "react";
import { UserContext } from "./UserContext";

 export const UserProvider = ({ children }) =>{ 

    const [user, setUser] = useState();

    return( 
        // hacemos visible este value para todos los componentes hijos que se encuentren dentro del provider 
        // <UserContext.Provider  value={{hola: 'mundo', user}} >
        <UserContext.Provider value={{
            user,
            setUser
        }}>
            {children}
        </UserContext.Provider>
    );
 };