import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import { PrivateRoutes } from "../../router/PrivateRoute";

describe('Pruebas en el componete de privateRoutes' , ()=> {
    test('Debe de mostrar el children si está autenticado', ()=>{
        
        const contextValue = {
            logged: true,
            user: 'Juan'
        }

        Storage.prototype.setItem = jest.fn();

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter>
                <PrivateRoutes>
                    <h1> Ruta privada </h1>
                </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        );


        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        // evaluamos que si ni esta autenticado, mande el children

        expect( localStorage.setItem ).toHaveBeenCalled();

    });
});