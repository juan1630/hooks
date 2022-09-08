import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";


const heavyStuff = ( numberIteration = 100 ) => {
    
    for( let i = 0; i < numberIteration; i++ ) {
        console.log("Ahí vamos jejejej");


    }
    
    return "iteration " + numberIteration + " done"
};

export const MemoHook = () => {

    const { counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(false);

    const componetMeomorizado = useMemo( ()=> heavyStuff(counter), [ counter ] );

    return (
        <>
            <h1> Counter:  <small> {counter} </small>  </h1>
            <hr />

            <h4>
                { componetMeomorizado }
            </h4>

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