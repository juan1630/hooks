// for async tasks 

import { doc, collection, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/firebaseConfig';
import { loadNotes } from '../../helpers/loadNotes';
import { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } from './journalSlice';

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