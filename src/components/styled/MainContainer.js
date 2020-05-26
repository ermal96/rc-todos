import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    margin: 2rem auto;
    min-height: 100vh;
    background: #fff;
    padding: 3rem;
    border: 1px solid #ededed;
    @media(max-width: 1300px){
        margin:0 auto;
        padding:1rem;
        border:none;
        width:100%;
    }

`;

const MainContainer = ({children}) => {
    return (
        <Container>{children}</Container>
    )
}

export default MainContainer
