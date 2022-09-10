export const todoReducer = (initlaState, action) =>{

    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initlaState, action.payload ];
            // agregamos el nuevo elemento al arregloe
        case '[TODO] Remove Todo':
            return initlaState.filter( (todo) => todo.id !== action.payload );
            // Se puede usar ya que este metodo no muta el estado, es decir,  nos devuelve un nuevo arreglo
        default:
            return initlaState;
    }
};