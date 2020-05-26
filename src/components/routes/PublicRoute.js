import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { HOME } from '../../constants/routes'

const PublicRoute = ({ path, to, isAuthenticated, component}) => {
    return (
        ! isAuthenticated ? <Route to={to} path={path} component={component} /> :
           <Redirect to={HOME} />
    )
};

const mapStateToProps = (ref) => {
    return {
        isAuthenticated: ref.firebase.isAuthenticated
    }
}

export default connect(mapStateToProps, {})(PublicRoute);