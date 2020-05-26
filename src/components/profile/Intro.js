import React from 'react'
import styled from 'styled-components'

const IntroWrapper = styled.div`

    border: 2px dashed #ededed;
    padding: 25px;

`;

const Intro = ({name}) => {
    return (
        <IntroWrapper>
            <h2>Welcome {name ? name: null}</h2>
            <p>Here you can change your profile</p>
        </IntroWrapper>
    )
}

export default Intro
