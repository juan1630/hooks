const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
const { AuthContext } = require("../../auth/context/AuthContext");
const { RouterApp } = require("../../router/AppRouter");

describe('Pruebas en el AppRoutes', ()=>{
    test('Debe de mostrar el login si no esta autenticado', ()=>{

        const noAuth ={
            logged: false
        }

        render(
            <AuthContext.Provider value={{ noAuth }}>
                <MemoryRouter initialEntries={['/marvel']} >
                    <RouterApp />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // screen.debug();

        // como se usa el route, se debe de usar el memory router

        expect( screen.getAllByText('Login').length ).toBe(2);

    });


    test('Debe de mostrar el componente de marvel si está autenticado', ()=>{

        const authstate ={
            logged: true
        }

        render(
            <AuthContext.Provider value={ authstate } >
                <MemoryRouter initialEntries={[ '/marvel' ]} >
                    <RouterApp   />
                </MemoryRouter>
            </AuthContext.Provider>
        );


        expect( screen.getByText('Marvel') ).toBeTruthy();

    });


});