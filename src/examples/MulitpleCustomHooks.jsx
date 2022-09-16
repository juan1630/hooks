import { useCounter, useFetch } from "../hooks";
import { Loading, Quotes } from "./";

export const MultipleCustomHook = ()=> {

    const { counter, increment } = useCounter(1);
    
    const {isLoading, data, haserror} = useFetch('https://www.breakingbadapi.com/api/quotes/' +counter);
    const { author, quote } = !!data && data[0];

    return <>
        <h2> BrakingBad Quotes </h2>
        <hr />

        {
            (isLoading) ?( <Loading /> ): (<Quotes author={author} quote={quote} />)
        }

        <button className="btn btn-primary" onClick={ ()=> increment(1) }  disabled={isLoading} > Next quote</button>
    </>
};