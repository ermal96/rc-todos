import React from 'react'
import Logo from './Logo';
import TodoMenu from './TodoMenu'
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;



const Navigation = () => {
    return (
        <Nav>
            <Logo />
            <TodoMenu/>
        </Nav>
    )
}

export default Navigation
