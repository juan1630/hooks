import { useState  } from 'react';


export const useCounter = (initalState = 10) => {

    const [counter, setCounter] = useState(initalState);

    const increment = (value = 1) => {
        setCounter( (current) =>  current +  value );
    };

    
    const decrement = (value = 1) => {
        if( counter == 0 ) return;
        //validacion para que el counter no llegue a 0
        setCounter( (current) => current - value);
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