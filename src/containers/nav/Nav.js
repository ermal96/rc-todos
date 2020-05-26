import React from 'react'
import {Menu} from 'antd';
import {BarsOutlined, UserOutlined, ExportOutlined, EditOutlined} from '@ant-design/icons';
import * as ROUTES from '../../constants/routes'
import NavItem from './NavItem';

const Nav = () => {
    return (
       
            <Menu mode="horizontal">
               <NavItem isPrivate icon={<BarsOutlined/>} link={ROUTES.HOME} name="Todos" />
               <NavItem isPrivate icon={<UserOutlined/>} link={ROUTES.PROFILE} name="Profile" />
               <NavItem isPublic  icon={<ExportOutlined/>} link={ROUTES.LOGIN} name="Login" />
               <NavItem isPublic  icon={<EditOutlined/>}link={ROUTES.REGISTER} name="Register" />
               <NavItem isPrivate icon={<ExportOutlined/>} link={ROUTES.LOGOUT} name="Logout" />

            </Menu>
    )
}



export default Nav
