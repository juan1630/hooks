// the think fucnitons allow us to dispatch async functions

import {checkingCredentials, loggin, logout} from '../auth/authSlice.js';
import {registerUserWithEmaiAndPassword, signinWithGoogle} from "../../firebase/providers.js";
import {createUserWithEmailAndPassword} from "firebase/auth";

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


export const startCreatingUserWithEmailPassword  = ({nombre, email, password}) => {
    return async  (dispatch ) => {
        dispatch( checkingCredentials() );

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmaiAndPassword({ nombre, email, password });
        //diapramos el log put si algo falla en la autenticación
        if(!ok) return dispatch( logout(errorMessage ));

        //si todo sale bien se hace el dispatch del log in

        if(ok) return dispatch( loggin({ uid, nombre, photoUrl: photoURL, email }));
    }
}