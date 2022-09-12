import { Link, Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";

export const MainApp = ()=>{
    return(
        <>
            <h1> Main App </h1>

                <NavBar />

            <hr />
            <Routes>
                <Route  path="/"  element={ <HomePage /> } />
                <Route  path="about"  element={ <AboutPage /> } />
                <Route  path="login"  element={ <LoginPage /> } />

                {/* <Route  path="/*"  element={ <LoginPage /> } /> */}
                {/* 
                    para redirigir si la rutra no coincide
                */}


                <Route path="/*" element={ <Navigate to='/about' /> } />
            </Routes>
        </>
    );
}