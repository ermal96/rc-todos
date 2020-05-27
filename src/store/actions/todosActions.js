import {Firestore} from '../../config/firebase'
import {types} from './actionTypes';
import {SuccessMsg, ErrorMsg} from '../../utils/helpers/msg'

// Add Todo
export const addTodo = newToDo => async dispatch => {

    Firestore.collection('todos').add(newToDo).then(docRef => {
        let data = null
        data = {
            ...newToDo,
            id: docRef.id
        }
         dispatch({
            type: types.ADD_TODO, 
            payload: data,
        });

        SuccessMsg('Added successfully')

    }).catch(err => {
        ErrorMsg(err.message)
    })

};


// Remove Todo
export const removeTodo = id => async dispatch => {
    Firestore.collection('todos').doc(id).delete().then(() => {
        SuccessMsg('Deleted successfully')
        dispatch({
            type: types.DELETE_TODO, 
            payload: id
        });
    }).catch((err) => {
        ErrorMsg(err.message)
    });


};


// Move Todo
export const moveTodo = (id, status) => async dispatch => {
    Firestore.collection('todos').doc(id).update({status: status}).then(() => {
        console.log(status)
        if (status === 'ACTIVE') {
            SuccessMsg('Moved to todo ')
        } else if(status === 'COMPLETED') {
            SuccessMsg('Moved to completed ')
        }
        dispatch({
            type: types.MOVE_TODO, 
            payload: id
        })
    }).catch((err) => {
        ErrorMsg(err.message)
    });
};


// Fetch active todos from firebase
export const fetchTodos = (status) => async (dispatch, getState) => {

    let data = [];

    const userId = getState().firebase.user.uid;

    dispatch({
        type: types.FETCH_TODOS, 
        loading: true
    });

    if(status){
        Firestore.collection('todos').where("status", "==", status ).where("userId", "==", userId).orderBy('date', 'desc').get().then(res => {  

            res.forEach(item => {
                const doc = {
                    ...item.data(),
                    id: item.id
                };
                data.push(doc);

            })

            dispatch({
                type: types.FETCH_TODOS, 
                payload: data,
                loading: false
            });

        })
    } else{
        Firestore.collection('todos').where("userId", "==", userId).orderBy('date', 'desc').get().then(res => {  

            res.forEach(item => {
                const doc = {
                    ...item.data(),
                    id: item.id
                };
                data.push(doc);

            })

            dispatch({
                type: types.FETCH_TODOS, 
                payload: data,
                loading: false
            });

        })
    }


};
