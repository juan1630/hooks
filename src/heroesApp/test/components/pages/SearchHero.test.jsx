import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchHeroe } from "../../../components/pages/SearchHero";

import { AuthContext } from "../../../auth/context/AuthContext";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUseNavigate
}));


describe('Pruebas en el componente seacrhHero', ()=> {



    beforeEach( ()=> jest.clearAllMocks());


    test('Debe de mostrarse correctamente con los valores por defecto', ()=>{
        const container = render(
            <MemoryRouter>

                    <SearchHeroe />
            </MemoryRouter>
        );

            // para actulizar el snapshot se usa la U
        expect( container ).toMatchSnapshot();
        // screen.debug();
    });


    test('Debe de mostrar a Batman y el valor del queryString', ()=>{
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                {/* pasamos al url los query parameters, en este caso el de batman */}
                <SearchHeroe />
            </MemoryRouter>
        )

            const inputValue = screen.getByRole('textbox');

            expect( inputValue.value ).toBe('batman')
            // compatramso el input con el valor de batman

            const imgValue = screen.getByRole('img');

            expect( imgValue.src ).toBe('http://localhost/assets/heroes/dc-batman.jpg');
    
            // screen.debug();

            const alertHero = screen.getByLabelText('alertNoHero').style._values;
            
            // expect( alertHero ).toEqual( { display: 'none' })
            expect(alertHero.display).toBe('none')
        }); 


        test('Deba de mostrar el alert sino encuntra a batman123', ()=>{
            render(
                <MemoryRouter initialEntries={['/search?q=batman123']}>
                    {/* pasamos al url los query parameters, en este caso el de batman */}
                    <SearchHeroe />
                </MemoryRouter>
            );

            const alertHero = screen.getByLabelText('alertNoHero').style;
            
            // expect( alertHero ).toEqual( { display: 'none' })
            expect(alertHero.display).toBe('')

        });


        test('debe de mandar a llamar el navigate', ()=>{
            
            const valueContext = {
                logged: true
            }
            
            render(
                <AuthContext.Provider value={ valueContext } >
                    <MemoryRouter   initialEntries={['/search']} >
                        <SearchHeroe />
                    </MemoryRouter>
                </AuthContext.Provider>
            )
                const inptuSearche = screen.getByRole('textbox');

                fireEvent.change(inptuSearche, { target:{ name: 'searchText', value: 'superman' }});



                const form = screen.getByRole('form');

                // console.log(form);

                fireEvent.submit(form);




                // console.log( inptuSearche.value )

                console.log(    )
                expect( mockedUseNavigate ).toHaveBeenCalledWith('?q=superman')
        });

});