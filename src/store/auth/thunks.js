// the think fucnitons allow us to dispatch async functions

import {checkingCredentials, loggin, logout} from '../auth/authSlice.js';
import {signinWithGoogle} from "../../firebase/providers.js";

export const checkingAutentication = () => {
    return async ( dispatch  ) => {
        dispatch( checkingCredentials() );
    }
}


export const startLoginCrendetials = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials());

        const result = await signinWithGoogle();

        if( !result.ok  ) return  dispatch(logout( result.errorMessage ));

        delete result.ok;
        dispatch( loggin(result));

    }
}