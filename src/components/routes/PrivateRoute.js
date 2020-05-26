import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGIN } from '../../constants/routes';

const PrivateRoute = ({ path, to, isAuthenticated, component}) => {
    return (
        isAuthenticated ? <Route to={to} path={path} component={component} />:
             <Redirect to={LOGIN} /> 
    )
        
};

const mapStateToProps = (ref) => {
    return {
        isAuthenticated: ref.firebase.isAuthenticated
    }
}

export default connect(mapStateToProps, {})(PrivateRoute);