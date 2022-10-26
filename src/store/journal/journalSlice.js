import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name:'journal',
    initialState: {
        isSaving: false,
        messageSaved: "",
        notes : [],
        activeNote:null
    },
    reducers: {
        savingNewNote: (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: ( state, {payload}) => {
            state.notes.push( payload );
            state.isSaving = false
        },
        setActiveNote: (state,{ payload }) => {
            state.activeNote = payload;
            state.messageSaved = '';
        },
        setNotes : (state, action) => {
            state.notes = action.payload;
        },
        setSavingNotes: ( state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: ( state, action) => {
            state.isSaving = false;

            state.notes = state.notes.map(note => {
                if( note.id ===  action.payload.id ){   
                    return action.payload;
                }
                return note;
            });

            state.messageSaved = action.payload.title + 'Nota actualiza!!'

        },
        clearAllNotes: (state ) =>{
            state.activeNote=null;
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
        },
        setPhotoUrl : (state, action) => {
            state.activeNote.imagesUrl = [ ...state.activeNote.imagesUrl,  ...action.payload ];
            state.isSaving = false;
        },
        deleteNoteById: ( state, { payload }) => {
            state.notes = state.notes.filter( note => note.id !== payload );
            state.activeNote = null;
        }   
    }
});


export const { 
    addNewEmptyNote,
    setPhotoUrl,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSavingNotes,
    updateNote,
    deleteNoteById,
    clearAllNotes
 } =  journalSlice.actions;