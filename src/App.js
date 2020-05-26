import React, { useEffect } from 'react';
import Layout from './containers/Layout';
import Login from './containers/auth/Login';
import Register from './containers/auth/Register';
import Logout from './containers/auth/Logout'
import {BrowserRouter as Router,  Redirect, Switch} from "react-router-dom";
import PrivateRoute  from './components/routes/PrivateRoute'
import PublicRoute  from './components/routes/PublicRoute'
import * as ROUTES from './constants/routes'
import { connect } from 'react-redux';
import { initFirebase } from './store/actions/authActions';
import Loader from './components/styled/Loader';

import Profile from './containers/profile/Profile'
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
                     <Switch>

                        <PrivateRoute exact path={ROUTES.HOME} component={AllTodos} />

                        <PrivateRoute  exact path={ROUTES.ACTIVE} component={ActiveTodos} />
                        
                        <PrivateRoute  exact path={ROUTES.COMPLETED} component={CompletedTodos} />

                        <PrivateRoute  exact path={ROUTES.PROFILE} component={Profile} />
                        
                        <PublicRoute   exact path={ROUTES.LOGIN} component={Login} />
                            
                        <PublicRoute   exact path={ROUTES.REGISTER} component={Register} />
                        
                        <PrivateRoute  exact path={ROUTES.LOGOUT} component={Logout} />  

                     </Switch>   
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
