const { render, screen } = require("@testing-library/react");
const { BrowserRouter, MemoryRouter } = require("react-router-dom");
const { MainApp } = require("../../09-useContext/main");

describe('Pruebas en el componete mainApp', ()=>{
    test('Debe de mostrar el homepage', ()=> {
        //para probar los camponentes siempre se inicia con el render 
        render( 
            //el memoryRouter hace la fucnion del browserRouter
            <MemoryRouter>
                <MainApp />
            </MemoryRouter>);
            expect( screen.getByText('HomePage:') ).toBeTruthy();
    });

    test('Debe de mostrar el loginPage', ()=> {
        //para probar los camponentes siempre se inicia con el render 
        render( 
            //el memoryRouter hace la fucnion del browserRouter
            <MemoryRouter  initialEntries={['/login']} >
                <MainApp />
            </MemoryRouter>);
            expect( screen.getByText('Login') ).toBeTruthy();
    });
});