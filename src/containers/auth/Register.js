import React from 'react'
import RegisterForm from '../../components/auth/RegisterForm'
import AuthContainer from '../../components/styled/AuthContainer'


const Register = () => {
    return (
        <AuthContainer>
            <h2>Register</h2>
            <RegisterForm/>
        </AuthContainer>
    )
}

export default Register
