import React from 'react'
import {Menu} from 'antd';
import {BarsOutlined, UserOutlined, ExportOutlined, EditOutlined} from '@ant-design/icons';
import {Link, useLocation} from "react-router-dom";
import { connect } from 'react-redux';
import * as ROUTES from '../../constants/routes'
import styled from 'styled-components'
const MenuWrapper = styled.div`
    ul{
        background:none;
    }
`;

const TodoMenu = ({isAuthenticated}) => {
    return (
        <MenuWrapper>
            <Menu selectedKeys={
                    useLocation().pathname
                }
                mode="horizontal">
                {
                    isAuthenticated ?  <Menu.Item key="todos"
                    icon={<BarsOutlined />}>
                    <Link to={ROUTES.TODOS}>Todos</Link>
                     </Menu.Item>: null
                }
               

                {
                !isAuthenticated ? <Menu.Item key="login"
                    icon={<UserOutlined/>}>
                    <Link to={ROUTES.LOGIN}>Login</Link>
                </Menu.Item>: null
                }

               {
                   !isAuthenticated ?  <Menu.Item key="register"
                    icon={<EditOutlined/>}>
                    <Link to={ROUTES.REGISTER}>Register</Link>
                </Menu.Item>: null
               }

               {
                    isAuthenticated ?  <Menu.Item key="profile"
                    icon={<UserOutlined />}>
                    <Link to={ROUTES.TODOS}>Profile</Link>
                     </Menu.Item>: null
                }

               {
                   isAuthenticated ?  <Menu.Item icon={<ExportOutlined/>}
                    key="logout">
                    <Link to={ROUTES.LOGOUT}>Logout</Link>
                </Menu.Item> :null
               }


            </Menu>
        </MenuWrapper>
    )
}

const mapStateToProps = (ref) => {
    return {
        isAuthenticated: ref.firebase.isAuthenticated
    }
}


export default connect(mapStateToProps, {})(TodoMenu)
