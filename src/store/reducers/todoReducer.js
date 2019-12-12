import * as actions from '../actions/actionsType';

const initialState = {
    error: null,
    loading: false,
    todos:[]
};



export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.TODO_ADD_START:
            return { ...state, loading: true, error: "" };
        case actions.TODO_ADD_FAIL:
            return { ...state, loading: false, error: payload };
        case actions.TODO_ADD_SUCCESS:
            return { ...state, loading: false }; 
        
        case actions.TODO_LIST_START:
            return { ...state, loading: true, error: false };
        case actions.TODO_LIST_FAIL:
            return { ...state, loading: false, error: payload };
        case actions.TODO_LIST_SUCCESS:
            return { ...state, loading: false, todos : [...payload] }; 

        case actions.TODO_DELETE_START:
            return { ...state, loading: true, error: false };
        case actions.TODO_DELETE_FAIL:
            return { ...state, loading: false, error: payload };
        case actions.TODO_DELETE_SUCCESS:
            return { ...state, loading: false, todos : [...payload] }; 

        case actions.TODO_UPDATE_START:
            return { ...state, loading: true, error: false };
        case actions.TODO_UPDATE_FAIL:
            return { ...state, loading: false, error: payload };
        case actions.TODO_UPDATE_SUCCESS:
            return { ...state, loading: false, todos : [...payload] }; 
        default:
        return state;
    }
};
