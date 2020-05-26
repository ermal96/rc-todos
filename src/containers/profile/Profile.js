import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import Intro from '../../components/profile/Intro';
import UpdateProfileForm from './UpdateProfileForm';

const ProfileWrapper = styled.div`
    margin:3rem 0;
`;

const Profile = ({ userMeta}) => {

    return (
        <ProfileWrapper>
            <Intro name={userMeta.displayName}/>
                <UpdateProfileForm />
        </ProfileWrapper>
    )
}

const mapStateToProps = (ref) => {
    return {
        userMeta: ref.firebase.user
    }
}

export default connect(mapStateToProps, {})(Profile)
