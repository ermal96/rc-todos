import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { TODOS } from '../../constants/routes'

const PublicRoute = ({children, path, to, isAuthenticated}) => {
    return (
        ! isAuthenticated ? <Route to={to} path={path}>
            {children}
        </Route>: <Redirect to={TODOS} />
    )
};

const mapStateToProps = (ref) => {
    return {
        isAuthenticated: ref.firebase.isAuthenticated
    }
}

export default connect(mapStateToProps, {})(PublicRoute);