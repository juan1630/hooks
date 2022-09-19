import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef =useRef();
    // console.log(ref)

    const onClick  = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />
            <input type="text" placeholder="Ingrese su nombre" ref={inputRef}   />

            <button className="btn btn-primary" onClick={onClick} > Focus </button>
        </>
    )
};