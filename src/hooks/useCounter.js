import { useState  } from 'react';


export const useCounter = (initalState = 10) => {

    const [counter, setCounter] = useState(initalState);

    const increment = (value = 1) => {
        setCounter( counter+  value );
    };

    
    const decrement = (value) => {
        if( counter == 0 ) return;
        //validacion para que el counter no llegue a 0
        setCounter( counter - value);
    };

    const resetValue = () => {
        setCounter( initalState );
    }


    return{
        counter,
        increment,
        decrement,
        resetValue
    }
};