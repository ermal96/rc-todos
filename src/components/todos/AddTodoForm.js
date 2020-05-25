import React from 'react'
import { Form, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import { addTodo } from '../../store/actions/todosActions'
import * as firebase from 'firebase'
import { connect } from 'react-redux'
import styled from 'styled-components';

const AddForm = styled.div`
        margin-bottom:3rem;
        margin-top:3rem;
`;

const AddTodoForm = ({addTodo, userId}) => {

    const [form] = Form.useForm();

    const onFinish = (e) => {

        if( !e.name ) return;

        const newTodo ={
            name: e.name,
            status : 'ACTIVE',
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            userId: userId
        }

        addTodo(newTodo);

        form.resetFields();
    }

    return (
        <AddForm>
        <Form form={form} onFinish={onFinish} layout="inline" >
            <Form.Item
                    name="name"
                    hasFeedback
                >
                         <Input allowClear prefix={<PlusOutlined  />} placeholder="Add Todo" />
                    </Form.Item>

            <Form.Item>
                <Button   type="primary" htmlType="submit">
                 Add 
                </Button>
            </Form.Item>
        </Form>
    </AddForm>
    )
}

const mapStateToProps = (ref) => {
    return {
        userId: ref.firebase.user.uid
    }
}

export default connect(mapStateToProps, {addTodo})(AddTodoForm);
