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
        setActiveNote: (state, action) => {
            state.activeNote = action.payload;
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
        deleteNoteById: ( state, action) => {

        }
    }
});

//TODO: los reducers no deben de disparar funciones de terceros

export const { 
    addNewEmptyNote,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSavingNotes,
    updateNote,
    deleteNoteById
 } =  journalSlice.actions;