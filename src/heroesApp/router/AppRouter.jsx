import {  Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HerosRoutes } from "../components/routes/HeroesRoutes";
import { PrivateRoutes } from "./PrivateRoute";
import { PublciRoutes } from "./PublicRoutes";


export const RouterApp = ()=>{
 return(
    <>
        
        <Routes>
        
            <Route path="/login" element={ 
                <PublciRoutes>
                    <LoginPage />
                </PublciRoutes> 
                } 
            />

            <Route path="/*" element={
                <PrivateRoutes> 
                    <HerosRoutes />
                </PrivateRoutes>
                } 
            />
            {/* solo el route se puede manejar dentro de los routes */}
            {/* <Route path="/*" element={ <HerosRoutes /> } /> */}
            
        </Routes>
    </>
 );
};