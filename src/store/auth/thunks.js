// the think fucnitons allow us to dispatch async functions

import  {  checkingCredentials } from '../auth/authSlice.js';

export const checkingAutentication = () => {
    return async ( dispatch  ) => {
        dispatch( checkingCredentials() );
    }
}


export const startLoginCrendetials = () => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials());
    }
}