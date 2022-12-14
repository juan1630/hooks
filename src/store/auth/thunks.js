// the think fucnitons allow us to dispatch async functions

import {checkingCredentials, loggin, logout} from '../auth/authSlice';
import { deleteDoc, doc } from 'firebase/firestore/lite';
import { clearAllNotes, deleteNoteById } from '../journal/journalSlice';

import {
    loginWithEmailPassword,
    logOutFirebase,
    registerUserWithEmaiAndPassword,
    signinWithGoogle
} from "../../firebase/providers.js";
import { FirebaseDB } from '../../firebase/firebaseConfig';


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


export const startLoginWithEmailPassword = ({email, password})  => {
    return async ( dispatch ) => {
        dispatch( checkingCredentials() );
        const { ok, uid, displayName,  photoURL, errorMessage } = await loginWithEmailPassword({email, password});
        console.log(errorMessage)

        if(!ok) return dispatch(logout( errorMessage ));

        if(ok) return  dispatch( loggin({ok, uid, displayName, email, photoURL}));

    }
}



export const startLogOut =  () => {
    return async (dispatch) => {

        await logOutFirebase();
        dispatch(logout({ errorMessage: null }));
        dispatch( clearAllNotes());
    }
}


export const startDeletingNote = () => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().auth;
        const { activeNote: note } = getState().journal;

        const docRef = doc( FirebaseDB, + uid+'/journal/notes/'+note.id );
        await deleteDoc( docRef );
        
        dispatch( deleteNoteById( note.id ));
    }
};