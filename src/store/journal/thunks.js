// for async tasks 

import { doc, collection, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/firebaseConfig';
import { loadNotes } from '../../helpers/loadNotes';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes, setSavingNotes } from './journalSlice';

export const startNewNote = () =>{

    return async (dispatch, getState ) => {
        //get state is a function that retturn the state

        dispatch( savingNewNote());
        
        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body:'',
            date: new Date().getDate()
        }
        
        const newDoc = doc(collection( FirebaseDB, uid+'/journal/notes' ));
        await  setDoc( newDoc, newNote );
        
        newNote.id = newDoc.id;
        dispatch( addNewEmptyNote(  newNote ));
        dispatch( setActiveNote( newNote ) );
    }
}



export const startLoadingNotes = ( ) =>{
    
    
    return async (dispatch, getState) => {
        
        const { uid }  = getState().auth;

        if(!uid) throw new Error('El UID del usuario no existe ');
        const notes =await loadNotes( uid );
        dispatch( setNotes(  notes ));

    }
}



export const startSavingNote = () => {
    return async (dispatch, getState) => {

        dispatch( setSavingNotes());
        const { uid } = getState().auth;
        const { activeNote } = getState().journal
        //obtenemos este state

        console.log( activeNote );

        const noteToFireStore = { ...activeNote };

        delete noteToFireStore.id
        delete noteToFireStore.imgUrls
        //eliminamos la propiedad ID 

        const docRef = doc(FirebaseDB, uid+'/journal/notes/'+activeNote.id );
        await setDoc(docRef, noteToFireStore, { merge: true});

    }
}