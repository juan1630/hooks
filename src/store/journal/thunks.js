// for async tasks 

import { doc, collection, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/firebaseConfig';
import { addNewEmptyNote, savingNewNote, setActiveNote } from './journalSlice';

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