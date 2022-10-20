import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {FirebaseAuth} from "../firebase/firebaseConfig.js";
import {loggin, logout} from "../store/auth/authSlice.js";
import { startLoadingNotes } from "../store/journal/thunks.js";

export const useCheckAuth = () => {
    const { status  } = useSelector( state => state.auth );
    const dispatch = useDispatch();

    useEffect( () => {
        onAuthStateChanged( FirebaseAuth,  async (user) => {
            if ( !user ) return dispatch( logout());

            const { uid, displayName, email,photoURL } = user;
            dispatch(loggin({ uid, displayName, email, photoURL }));
            dispatch( startLoadingNotes());
        });

    }, [] )

    return {
        status
    }
}