import React from 'react'
import Navigation from './nav'
import MainContainer from '../components/styled/MainContainer';

const Layout = ({children}) => {
    return (
        <MainContainer>
            <Navigation/>
            {children}
        </MainContainer>
    )
}

export default Layout
