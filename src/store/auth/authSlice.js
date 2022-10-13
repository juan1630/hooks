import {  createSlice } from  '@reduxjs/toolkit';


export  const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        // not-authenticated, authenticated, checking this ares our 3 states
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers:{
        loggin: (state, { payload})=> {
            console.log( payload );
            //will be the login method
            state.status = 'authenticated'
            state.uid = payload.uid;
            state.email= payload.email;
            state.displayName= payload.displayName;
            state.photoUrl= payload.photoURL;
            state.errorMessage= null;
        },
        logout: (state, {payload})=>{
            //this will be the log out method
            state.status = 'not-authenticated'
            state.uid = null;
                state.email= null;
                state.displayName= null;
                state.photoUrl= null;
                state.errorMessage= payload;

        },
        checkingCredentials: (state, action) => {
            // will be checking the credentials
            state.status = 'checking'
        }
    }
})

//action creators funtions
export  const { loggin, logout, checkingCredentials } = authSlice.actions;