import React from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { login } from '../../store/actions/authActions'

const LoginForm = ({login}) => {

    const onFinish = (e) => {
        login({
            email: e.email,
            password: e.password
        })
    }

    return (
        <div className="login-from">
                   <Form
                    name="normal_login"
                    className="login-form"
                    onFinish={onFinish}
                     >
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                    </Form.Item>
                    
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                    </Form.Item>
             </Form>
        </div>
    )
}

export default connect(null, {login})(LoginForm)
