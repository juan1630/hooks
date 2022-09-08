import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Samll";

export const Memorize = () => {

   const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(false);

    return (
        <>
            <h1> Counter:  <Small value={counter}  />  </h1>
            <hr />
            <button className="btn btn-primary"  onClick={ ()=> increment(1) }  >
                +1
            </button>

            <button className="btn btn-outline"  onClick={ ()=> setShow( !show )  }>    
                Show/Hide 
                { JSON.stringify( show ) }
            </button>
        </>
    );
};