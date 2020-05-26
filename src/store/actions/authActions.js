import {Firebase, Firestore} from '../../config/firebase'
import {types} from './actionTypes';
import {SuccessMsg, ErrorMsg} from '../../utils/helpers/msg'

export const register = (data) => async dispatch => {
    Firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {

        const  user = Firebase.auth().currentUser;

        user.updateProfile({
            displayName: data.displayName,
          }).then(() => {

            user.sendEmailVerification().then(() => {
                SuccessMsg('Please verify your email')
            }).catch(function(err) {
                ErrorMsg(err.message)
            });
            
          }).catch(function(err) {
            ErrorMsg(err.message)
          });

        
    }).catch(err => {
        ErrorMsg(err.message)
    })
}


export const login = (data) => async dispatch => {
    Firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((res) => {  
        
        SuccessMsg(`Welcome ${res.user.displayName}`)

    }).catch(err => {
        ErrorMsg(err.message)
    })
}


export const logout = () => async (dispatch, getState) => {

    const name  = getState().firebase.user.displayName

    Firebase.auth().signOut().then(() => {
        SuccessMsg('Bye ' + name + ' see you soon ' +  String.fromCharCode(0xD83D, 0xDE04))
        dispatch({
            type: types.LOGOUT,
            payload: ''
        })
    }).catch(err => {
        ErrorMsg(err.message)
    })
}

export const initFirebase = () => async dispatch => {

    Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: user
            })
        }

        dispatch({
            type: types.FIREBASE_LOADED,
            payload: true
        })


      });
}


export const updateUser = (data) => async (dispatch) => {

    const user = Firebase.auth().currentUser;


    if(data.displayName || data.password || data.email ){

        // update email if user provide a email && send email confirmation to user
    if(data.email){
        user.updateEmail(data.email).then(() =>  {
            
            user.sendEmailVerification().then(() => {
                dispatch({
                    type: types.USER_EMAIL_UPDATED,
                    payload: data.email
                })
              }).catch(function(err) {
                ErrorMsg(err.message)
              });

          }).catch((err) => {
            ErrorMsg(err.message)
          });
    }


    //update password if user provide a password
    if(data.password){
        user.updatePassword(data.password).then(() => {
            dispatch({
                type: types.USER_PASSWORD_UPDATED,
            })
          }).catch(function(err) {
            ErrorMsg(err.message)
          });
    }


    // update name  if user provode it
    if(data.displayName){
        user.updateProfile({
            displayName: data.displayName,
          }).then(() => {
            dispatch({
                type: types.USER_NAME_UPDATED,
                payload: data.displayName
            })
          }).catch(function(err) {
            ErrorMsg(err.message)
          });
    }



        SuccessMsg('Successfully updated')

    }





}