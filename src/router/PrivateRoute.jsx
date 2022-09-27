import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoutes = ({children}) => {
    // resimos los componentes que estan dentro de este componente
    // el parametro children, ya es un jsx
    const { logged } = useContext(AuthContext);
    // Obtenemos el logged del estado global de la aplicacion

    const { pathname, search } = useLocation();
    const lastPath =  pathname + search;
    localStorage.setItem('lastPath', lastPath);

    return (logged) 
        ? children
        : <Navigate to='/login' />
};