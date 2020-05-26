import React, { useEffect } from 'react';
import Layout from './containers/Layout';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import Logout from './containers/auth/Logout'
import {BrowserRouter as Router,  Redirect} from "react-router-dom";
import PrivateRoute  from './components/routes/PrivateRoute'
import PublicRoute  from './components/routes/PublicRoute'
import * as ROUTES from './constants/routes'
import { connect } from 'react-redux';
import { initFirebase } from './store/actions/authActions';
import Loader from './components/styled/Loader';

import ActiveTodos from './containers/todos/ActiveTodos';
import AllTodos from './containers/todos/AllTodos';
import CompletedTodos from './containers/todos/CompletedTodos';

const App = ({initFirebase, isFirebaseloaded}) => {

    useEffect(() => {
        initFirebase()
    }, [initFirebase])

    if(isFirebaseloaded){
        return (
            <Router>
                <Layout>
                        <PrivateRoute exact path={ROUTES.TODOS} component={AllTodos} />

                        <Redirect path={ROUTES.HOME} to={AllTodos} />

                        <PrivateRoute  exact path={ROUTES.TODOS + ROUTES.ACTIVE} component={ActiveTodos} />
                           
                        <PrivateRoute  exact path={ROUTES.TODOS + ROUTES.COMPLETED} component={CompletedTodos} />
                           
                        <PublicRoute   exact path={ROUTES.LOGIN} component={Login} />
                            
                        <PublicRoute   exact path={ROUTES.REGISTER} component={Register} />
                           
                        <PrivateRoute  exact path={ROUTES.LOGOUT} component={Logout} />  
                </Layout>
            </Router>
        );
    }else{
        return(
           <Loader />
        )
    }
 
}

const mapStateToProps = (ref) => {
    return {
        isFirebaseloaded: ref.firebase.isFirebaseloaded
    }
}

export default connect(mapStateToProps, {initFirebase})(App)
