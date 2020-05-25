import React from 'react'
import LoginForm from '../../components/auth/LoginForm'
import AuthContainer from '../../components/styled/AuthContainer'

const Signin = () => {
    return (
        <AuthContainer>
            <h2>Login
            </h2>
            <LoginForm/>
        </AuthContainer>
    )
}

export default Signin
