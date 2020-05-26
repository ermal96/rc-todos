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

        case types.USER_NAME_UPDATED:
                return {
                    ...state,
                    [state.user.displayName]: action.payload
                }

        case types.USER_EMAIL_UPDATED:
                return {
                    ...state,
                    [state.user.email]: action.payload
                }

        case types.USER_PASSWORD_UPDATED:
                return state


        default:
            return state;
    }

};
