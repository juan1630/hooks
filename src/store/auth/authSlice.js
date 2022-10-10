import {  createSlice } from  '@reduxjs/toolkit';


export  const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        // not-authenticated, authenticated, checking this ares our 3 states
        uid: null,
        email: null,
        displayName: null,
        photoUrl: null,
        errorMessage: null
    },
    reducers:{
        loggin: (state, action)=> {
            //will be the login method
        },
        logout: (state, action)=>{
            //this will be the log out method
        },
        checkingCredentials: (state, action) => {
            console.log(state)
            // will be checking the credentials
            state.status = 'checking'
        }
    }
})

//action creators funtions
export  const { loggin, logout, checkingCredentials } = authSlice.actions;