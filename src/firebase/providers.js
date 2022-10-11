import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
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