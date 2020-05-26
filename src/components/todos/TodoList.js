import React from 'react'
import {List, Tag} from 'antd';
import {connect} from 'react-redux';
import {removeTodo, moveTodo} from '../../store/actions/todosActions';
import RemoveTodo from '../../utils/todos/removeTodo';
import MoveTodo from '../../utils/todos/moveTodo';
import styled from 'styled-components'
import { useLocation } from "react-router-dom";
import { HOME } from '../../constants/routes'

const TodoListWrapper = styled.div`
    margin: 2rem 0;
`;

const ListIndex = styled.h4`

    margin-right: 20px;
    width: 20px;
    display: flex;
    height: 20px;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #1a90ff;
    border-radius: 3px;
    color: #fff;
    font-size: 13px;

`;

const TodoList = ({
    data,
    moveTodo,
    removeTodo,
    loading
}) => {

    let location = useLocation();

    const renderBtn = (item) => {
        if( location.pathname === HOME){
            return(
                <Tag color={item.status === 'ACTIVE' ? 'red': 'green' }>{item.status}</Tag>
            )
        }else {
            return(
                <>
                     <MoveTodo 
                            isActive={item.status} 
                            moveTodo={ () => moveTodo(item.id, item.status  === 'ACTIVE' ? 'COMPLETED': 'ACTIVE') }/>
                     <RemoveTodo 
                            deleteTodo={ () => removeTodo(item.id) }/>
                </>
            )
        }
    }

    return (
        <TodoListWrapper >
            <List   
                loading={loading}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={
                    (item, index) => (
                        <List.Item key={
                            item.id
                        }>
                            <ListIndex>{index + 1}</ListIndex>
                            <List.Item.Meta title={
                                item.name
                            }/>
                            {renderBtn(item)}
                        </List.Item>
                    )
                }/>
        </TodoListWrapper>
    )
}

const mapStateToProps = (ref) => {
    return { loading: ref.todos.loading};
}


export default connect(mapStateToProps, {removeTodo, moveTodo})(TodoList)
