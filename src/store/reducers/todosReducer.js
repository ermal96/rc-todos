import {types} from '../actions/actionTypes';

const inittialState = {
    items: [],
    loading: false,

}

export default(state = inittialState, action) => {

    switch (action.type) {

        case types.FETCH_TODOS:
            return Object.assign({}, state, {
                items: action.payload,
                loading: action.loading
            });


        case types.ADD_TODO:
            return Object.assign({}, state, {
                items: [action.payload].concat(state.items),
            });


        case types.MOVE_TODO:
            return Object.assign({}, state, {
                items: state.items.filter(item => item.id !== action.payload)
            });


        case types.DELETE_TODO:
            return Object.assign({}, state, {
                items: state.items.filter(item => item.id !== action.payload)
            });


        default:
            return state;
    }

};
