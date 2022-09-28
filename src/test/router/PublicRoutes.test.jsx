import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { PublciRoutes } from "../../router/PublicRoutes";

describe('Pruebas en el public routes', ()=>{
    test('Debe de mostrar el children sino esta autenticado', ()=>{
        
        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                <PublciRoutes>
                    <h1> Ruta pública </h1>
                </PublciRoutes>
            </AuthContext.Provider>
        );


        expect( screen.getByText('Ruta pública') ).toBeTruthy();
        // evaluamos que si ni esta autenticado, mande el children

    });


    test('Debe de mostrar el navigate si está autenticado', ()=>{
        const contextValue = {
            logged: true,
            user:'Juan'
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                    <MemoryRouter initialEntries={['/login']} >

                        {/* se genera un ciclo infinito si no se define uan ruta publica  */}

                            <Routes>
                                <Route path="marvel" element={ <h1> Ruta marvel </h1> } />
                                <Route path="login" element={ 
                                    
                                    <PublciRoutes>
                                    <h1> Ruta pública </h1>
                                </PublciRoutes>
                                } />
                            </Routes>
                    </MemoryRouter>
            </AuthContext.Provider>
        );


        expect(screen.getByText('Ruta marvel')).toBeTruthy();
    });

});