// que se pinte el nombre de la persona
// que al dar click  en el log out, que se mande a 
// 1. llamar el navigate y el replace  2. el log out se tiene que mandar a llamar 

import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/context/AuthContext";
import { Navbar } from "../../../ui/components/NavBar";



const mockedUseNavigate = jest.fn();


jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUseNavigate
}));
// sobre escribimso el useNavigate 

describe('Pruebas en el Navbar componente', ()=>{
    

    beforeEach(  ()=> jest.clearAllMocks() )
    // limpiramso los mocks en todas las prubas 


    const contextValue = {
        logged: true,
        user: 'Juan',
        logout: jest.fn()
    }

    test('Debe de pintar el no,bre del usuario en el navbar', ()=> {

        render(
            <AuthContext.Provider  value={ contextValue } >    
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Juan') ).toBeTruthy();
    });

    test('debe de llamar el log out al hacer click en el log out', ()=>{

        
        render(
            <AuthContext.Provider  value={ contextValue } >    
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        )


        const logoutBtn = screen.getByRole('button');
            
        // se dispara el evento click
            fireEvent.click(logoutBtn); 
            

            expect( contextValue.logout ).toHaveBeenCalled();

            expect( mockedUseNavigate ).toHaveBeenCalledWith('/login');

    });

});