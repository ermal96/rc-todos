import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { TODOS } from '../../constants/routes'

const PublicRoute = ({ path, to, isAuthenticated, component}) => {
    return (
        ! isAuthenticated ? <Route to={to} path={path} component={component} /> :
           <Redirect to={TODOS} />
    )
};

const mapStateToProps = (ref) => {
    return {
        isAuthenticated: ref.firebase.isAuthenticated
    }
}

export default connect(mapStateToProps, {})(PublicRoute);