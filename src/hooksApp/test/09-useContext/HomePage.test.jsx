const { render, screen } = require("@testing-library/react");
const { UserContext } = require("../../09-useContext/context/UserContext");
const { HomePage } = require("../../09-useContext/HomePage");

describe('Pruebas en al <HomePage />', ()=> {
    
    const user = {
        id:1,
        name: 'juan'
    }
    
    test('Debe de mostrar el componete sin el usuario', ()=> {
        render( 
        <UserContext.Provider value={{user: null}} >
            <HomePage /> 

        </UserContext.Provider>
        
        );


        const preTag = screen.getByLabelText('pre') // siempre se usa el aria-labe;
        expect( preTag ).toBeTruthy()
    });


    test('Debe de mostrar el componete Con  el usuario', ()=> {
        render( <UserContext.Provider value={{user}} >
            <HomePage /> 
        </UserContext.Provider>);
    

        const preTag = screen.getByLabelText('pre').innerHTML // siempre se usa el aria-labe;
        expect( preTag ).toContain( user.name );
        expect( preTag).toContain(user.id.toString())
    });
});