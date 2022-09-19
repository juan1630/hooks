import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {

    const [counter, setCounter ]= useState(10);


    const incrementFather = useCallback( 
        (value)=> {
            // cachamos los argumentosd que se envian desde la fucnion memorizada
        setCounter((c) => c + value);
    }, []);
    // const increment = () => {
    //     setCounter( counter +1 );
    // };
    
    return (
        <>
            <h1> Counter : {counter} </h1>
            <hr />
            <ShowIncrement  
                increment={incrementFather} 
                
            />
        
        </>
    );
};