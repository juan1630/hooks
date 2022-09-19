import { useEffect, useState } from "react";

export const Message = () =>{
    
   const [coords, setCoords] = useState({
        x:0,
        y:0
    });


    useEffect( ()=> {
        console.log("Component Mounted")

        const onMouseMove = ({ x, y }) =>{
            const coords = { x, y };
            setCoords( coords );
            console.log( coords );
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            console.log("Component Unmounted")
            window.removeEventListener('mousemove', onMouseMove);
        }

    }, [])
    
    return (
        <>
            <h2> El usuario ya exuste  </h2>
            <h3> Coords: {JSON.stringify(coords) } </h3>
        </>
    )
};