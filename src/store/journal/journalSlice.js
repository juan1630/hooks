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
            state.activeNote = action.payload
        },
        setNotes : (state, action) => {
            state.notes = action.payload;
        },
        setSavingNotes: ( state, action) => {
            state.isSaving = true;
        },
        updateNote: ( state, action) => {
            state.isSaving = false;

            state.notes = state.notes.map(note => {
                if( note.id ===  action.payload.id ){   
                    return action.payload;
                }
                return note;
            });

        }, 
        deleteNoteById: ( state, action) => {

        }
    }
})  

export const { 
    addNewEmptyNote,
    savingNewNote,
    setActiveNote,
    setNotes,
    setSavingNotes,
    updateNote,
    deleteNoteById
 } =  journalSlice.actions;