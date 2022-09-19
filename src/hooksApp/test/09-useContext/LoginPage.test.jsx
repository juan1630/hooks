import { fireEvent, getByLabelText, getByRole, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/UserContext";
import { LoginPage } from "../../09-useContext/LoginPage";

describe('Pruebas en el <LoginComponent/>', ()=>{

    const user = {name:'juan', email: 'juan@gmail.com'}

    test('Debe de mostrar el componente sin el usuario', ()=> {
        render( 
            <UserContext.Provider value={{user: null}} >
                <LoginPage />
            </UserContext.Provider>);

        const preTag = screen.getByLabelText('user');
    
        expect(preTag).toBeTruthy();

    });

    test('Debe de mandar a llamar la funcion de setUser', ()=> {
        
        const setUserMock = jest.fn();

        render(<UserContext.Provider value={{user, setUser: setUserMock}} >
            <LoginPage />
        </UserContext.Provider>);
       
       const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(  setUserMock  ).toBeCalledWith( user );

    });

});