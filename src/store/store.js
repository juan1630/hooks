// esta es la funete unica de la verdad
import { configureStore  } from  '@reduxjs/toolkit';
import {authSlice} from "./auth/authSlice.js";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
});