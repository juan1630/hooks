import {  Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { HerosRoutes } from "../components/routes/HeroesRoutes";


export const RouterApp = ()=>{
 return(
    <>
        
        <Routes>
            <Route path="login" element={<LoginPage />} />

            <Route path="/*" element={ <HerosRoutes /> } />
            
        </Routes>
    </>
 );
};