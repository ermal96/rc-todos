import {Firebase, Firestore} from '../../config/firebase'
import {types} from './actionTypes';
import {SuccessMsg, ErrorMsg} from '../../utils/helpers/msg'

export const register = (data) => async dispatch => {
    Firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {

        Firestore.collection("users").doc(res.user.uid).set({
            firstName: data.firstName,
            lastName: data.lastName
        }).then(() => {
            dispatch({type: types.REGISTER_SUCCESS})
            SuccessMsg('Successfully Registered')
        })
        
    }).catch(err => {
        ErrorMsg(err.message)
    })
}


export const login = (data) => async dispatch => {
    Firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((res) => {  
        const userId = res.user.uid;

        Firestore.collection('users').doc(userId).get().then(res => {
            const name  = res.data().firstName
            SuccessMsg(`Welcome ${name}`)
        })
       
    }).catch(err => {
        ErrorMsg(err.message)
    })
}


export const logout = () => async (dispatch, getState) => {

    const userId  = getState().firebase.user.uid

    Firestore.collection('users').doc(userId).get().then(res => {

        const name  = res.data().firstName

        Firebase.auth().signOut().then(() => {
            SuccessMsg('Bye ' + name + ' see you soon ' +  String.fromCharCode(0xD83D, 0xDE04))
            dispatch({
                type: types.LOGOUT,
                payload: ''
            })
        }).catch(err => {
            ErrorMsg(err.message)
        })


    })


}



export const initFirebase = () => async dispatch => {

    Firebase.auth().onAuthStateChanged((user) => {
        dispatch({
            type: types.FIREBASE_LOADED,
            payload: true
        })
        if (user) {
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: user
            })
        }
      });
}