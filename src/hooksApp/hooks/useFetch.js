import { useEffect, useState } from "react";

export const useFetch = (url) =>{

    const [ state, setState] = useState({ 
        data: '',
        isLoading: true,
        hasError: false
    }) 

    const getFetch = async() => {
        const resp = await fetch(url);
        const data = await resp.json();

        // console.log(data);
        setState({ 
            hasError: null,
            data,
            isLoading: false,
        });
        return data;

    };


    useEffect( ()=> {
        getFetch();
        //esta funcion no debe ser asincrona ya que queda a la espera de la promesa
    }, [url]);

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError:state.hasError,
    };
};