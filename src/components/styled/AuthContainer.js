import React from 'react'
import styled from 'styled-components'

const Conatiner = styled.div`
    max-width: 315px;
    margin-top:3rem;
    h2{
        margin-bottom:2rem
    }
`;

const AuthContainer = ({children}) => {
    return (
       <Conatiner>{children}</Conatiner>
    )
}

export default AuthContainer
