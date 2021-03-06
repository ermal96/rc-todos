import React from 'react'
import {Form, Input, Button} from 'antd';
import {UserOutlined, LockOutlined, InboxOutlined} from '@ant-design/icons';
import {connect} from 'react-redux';
import {register} from '../../store/actions/authActions'

const RegisterForm = ({register}) => {

    const onFinish = (e) => {
        register({displayName: e.displayName, email: e.email, password: e.password})
    }
    return (
        <div className="register-from">
            <Form onFinish={onFinish}>

                <Form.Item hasFeedback name="displayName"
                    rules={
                        [{
                                required: true,
                                message: 'Please input your name!'
                            }]
                }>
                    <Input prefix={<UserOutlined/>}
                        placeholder="Your Name"
                        allowClear/>
                </Form.Item>


                <Form.Item hasFeedback name="email"
                    rules={
                        [{
                                required: true,
                                message: 'Please input your email!'
                            }]
                }>
                    <Input prefix={<InboxOutlined/>}
                        placeholder="Email"
                        type="email"
                        allowClear/>
                </Form.Item>

                <Form.Item hasFeedback name="password"
                    rules={
                        [{
                                required: true,
                                message: 'Please input your Password!'
                            }]
                }>
                    <Input prefix={<LockOutlined/>}
                        type="password"
                        placeholder="Password"
                        allowClear/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default connect(null, {register})(RegisterForm)
