import React from 'react'
import Logo from './Logo';
import Nav from './Nav'
import styled from 'styled-components';

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;



const Navigation = () => {
    return (
        <NavWrapper>
            <Logo />
            <Nav/>
        </NavWrapper>
    )
}

export default Navigation
