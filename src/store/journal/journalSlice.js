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

        },
        setSavingNotes: ( state, action) => {

        },
        updateNote: ( state, action) => {

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