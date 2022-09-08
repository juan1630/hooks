import { useCounter } from "../hooks/useCounter";

export const CounterWidthCustomHook = () => {

    const { counter, increment, decrement, resetValue} = useCounter();

    return(
        <>
            <h1> Counter with Hook: { counter } </h1>
            <hr />
            <button className="btn"  onClick={ ()=>  increment(2)   }  >+1</button>
            <button className="btn"  onClick={resetValue}  > Reset </button>
            <button className="btn"  onClick={ ()=> decrement(2) } > -1</button>
            {/* Se pasa esta sintaxia pra que no se mande el evento como pruimer parametro */}
        </>
    )
};