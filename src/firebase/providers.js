import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import {FirebaseAuth} from "./firebaseConfig.js";


const googleProvider = new GoogleAuthProvider();


export  const signinWithGoogle = async() => {
      try{
          const result = await signInWithPopup( FirebaseAuth, googleProvider );
          //const credentials = GoogleAuthProvider.credentialFromResult( result );
          const { displayName, uid, photoURL, email } = result.user;

          console.log({ displayName, uid, photoURL, email })
          return {
              ok: true,
          displayName, uid, photoURL, email
          }

      }catch (error){

          const errorCode = error.code;
          const errorMessage = error.message;

          return {
              ok:false,
              errorCode,
              errorMessage
          }
      }
};


export const registerUserWithEmaiAndPassword = async ({nombre, email, password }) => {

    try{

        const resp = await createUserWithEmailAndPassword( FirebaseAuth,email, password );
        const { uid, photoURL } = resp.user;
        //pasmaos el usuario logeado
        await updateProfile( FirebaseAuth.currentUser, { displayName: nombre } );

        return  {
            ok: true,
            uid, photoURL, email, nombre
        }

    }catch (error) {
        return {
            ok: false,
            errorMessage: error
        }
    }
}


export const loginWithEmailPassword = async ({ email, password }) => {

    try{

       const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password );

        const { uid, displayName, photoURL } = resp.user;

       return {
            ok: true,
           uid,
           displayName,
           photoURL
        }

    }catch (e) {
        return {
            ok: false,
            errorMessage: e
        }
    }

};