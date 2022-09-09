export const todoReducer = (initlaState, action) =>{
    switch (action.type) {
        case 'ABC':
            throw new Error('No esta definido');
            
    
        default:
            return initlaState;
    }
};