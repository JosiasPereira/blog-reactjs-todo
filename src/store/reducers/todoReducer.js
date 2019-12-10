import * as actions from '../actions/actionsType';

const initialState = {
    error: null,
    loading: false,
};



export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.TODO_ADD_START:
            return { ...state, loading: true, error: "" };
        case actions.TODO_ADD_FAIL:
            return { ...state, loading: false, error: payload };
        case actions.TODO_ADD_SUCCESS:
            return { ...state, loading: false };        
        default:
        return state;
    }
};
