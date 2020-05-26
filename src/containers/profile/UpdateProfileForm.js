import React from 'react'
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined, InboxOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { updateUser } from '../../store/actions/authActions';

const UpdateProfileFormrapper = styled.div`

    margin:3rem 0;
    h3{
        margin-bottom:1.5rem;
    }

`;

const UpdateProfileForm = ({userMeta, updateUser}) => {

    const onFinish = (e) => {
       console.log(e)
       updateUser({
        displayName: e.displayName,
        password: e.password, 
        email: e.email
       });
    }
    return (
        <UpdateProfileFormrapper>
        <h3>Update Your Profile</h3>
            <Form onFinish={onFinish}>

                <Form.Item hasFeedback name="displayName">
                    <Input prefix={<UserOutlined/>}
                         placeholder={userMeta.displayName ? userMeta.displayName : 'Your Name'}
                        allowClear/>
                </Form.Item>


                <Form.Item hasFeedback name="email">
                    <Input prefix={<InboxOutlined/>}
                        placeholder={userMeta.email ? userMeta.email : 'Email'}
                        type="email"
                        allowClear/>
                </Form.Item>

                <Form.Item hasFeedback name="password">
                    <Input prefix={<LockOutlined/>}
                        type="password"
                        placeholder="Password"
                        allowClear/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        </UpdateProfileFormrapper>
    )
}

const mapStateToProps = (ref) => {
    return {
        userMeta: ref.firebase.user,
    }
}


export default connect(mapStateToProps, {updateUser})(UpdateProfileForm)
