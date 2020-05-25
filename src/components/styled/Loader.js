import React from 'react'
import { Spin } from 'antd';
import styled from 'styled-components'
const LoaderWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const Loader = () => {
    return (
        <LoaderWrapper>
            <Spin />
        </LoaderWrapper>
    )
}

export default Loader
