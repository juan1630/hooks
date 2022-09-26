import { types } from "../types/types";

const intialState ={ logged: false };

export const authReducer = (state = intialState, action) =>{

    switch (action.type) {
        case types.login:
            return {
                
                logged: true,
                user: action.payload
            };
    
        case types.logout:
            return {
                ...state,
                logged: false,
            };
    
        default:
            state;
    }
};