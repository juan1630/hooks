import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRouthes = () => {
    return (
        <Routes>
            <Route path="login" element={ <LoginPage /> } />
            <Route path="register" element={ <RegisterPage /> } />

            <Route path="/*" element={ <Navigate to='{/auth/login}'/>  }  />
         </Routes>
    );
}
/**
 * Recordar que se debe de importar en el punto mas alto de la aplicacion el browserRoue
 */