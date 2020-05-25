import {types} from '../actions/actionTypes';

const inittialState = {
    isAuthenticated: false,
    user: {},
    isFirebaseloaded: false
}


export default(state = inittialState, action) => {

    switch (action.type) {

        case types.REGISTER_SUCCESS:
            return Object.assign({}, state, {isAuthenticated: true});

        case types.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true,
                user: action.payload
            });

        case types.FIREBASE_LOADED:
            return Object.assign({}, state, {
                    isFirebaseloaded: action.payload
            });
            
        case types.LOGOUT:
            return Object.assign({}, state, {
                isAuthenticated: false,
                user: action.payload
            });

        default:
            return state;
    }

};
