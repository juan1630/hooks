import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages/LoginPage";
import { DCPage } from "../components/pages/DCPage";
import { Marvel } from "../components/pages/Marvel";
import { Navbar } from "../ui/components/NavBar";

export const RouterApp = ()=>{
 return(
    <>
        <Navbar/>
        <Routes>
            <Route path="marvel" element={ <Marvel /> } />
            <Route path="dc" element={ <DCPage /> } />
            <Route path="login" element={<LoginPage />} />
            
            <Route path="/" element={ <Navigate to="/marvel" /> } />

        </Routes>
    </>
 );
};