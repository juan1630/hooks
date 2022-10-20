import { collection, doc, getDocs  } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/firebaseConfig';

export const loadNotes = async ( uid = '' ) => {
    if( !uid ) throw new Error('el UID del usuario no es valido');

    //hacemos el query para obtener las notes 
    const collectioRef = collection( FirebaseDB, uid+'/journal/notes'  );
    const docs = await getDocs( collectioRef );
    
    const notes = [];

    //iteramos los datos que vienen y obtenemos los datos por medio de la funcion doc.data()
    docs.forEach(doc => {
        
        notes.push({ id: doc.id, ...doc.data() })
    });
    
    //retornamos el arreglo de las notas
    return notes;

};