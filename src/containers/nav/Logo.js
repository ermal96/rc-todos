import React from 'react'
import logo from '../../logo.svg'
import styled from 'styled-components';


const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h2{
        margin: 0;
        padding-left: 20px;
    }

    img{
        height: 40px;
    }
`;

const Logo = () => {
    return (
        <LogoWrapper>
                <img src={logo}  alt="Logo"/>
                <h2>Todo App</h2>
        </LogoWrapper>
    )
}

export default Logo
