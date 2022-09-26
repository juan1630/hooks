import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';


const initialState ={
    logged: false
}


const init = ()=> {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user
    }
}


export const AuthProvider = ({children}) =>{

    const [ authState, dispatch ] = useReducer(authReducer, initialState, init);

    const login = ( name = '')=>{
        const action ={ 
            type: types.login,
            payload: name
        }

        localStorage.setItem('user', name);

        dispatch( action );
    }

    const logout = () => {

        const action ={
            type: types.logout
        }
        
        localStorage.removeItem('user');
        dispatch( action );
    }
// hacemos publicos los paramentros ya que se inyectan en el componente 
    return(
        <AuthContext.Provider value={{
            ...authState,
            //methods
            login,
            logout
        }} >
            { children }
        </AuthContext.Provider>
    );
}