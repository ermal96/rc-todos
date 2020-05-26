import React from 'react'
import {Menu} from 'antd';
import * as ROUTES from '../../constants/routes'
import {DatabaseOutlined, CarryOutOutlined, PlayCircleOutlined} from '@ant-design/icons';
import NavItem from '../nav/NavItem';


const FilterMenu = () => {
    
    return (
        <Menu mode="horizontal">
        
        <NavItem isPrivate link={ROUTES.HOME} icon={<DatabaseOutlined />} name="All"/>
        <NavItem isPrivate link={ROUTES.ACTIVE} icon={<PlayCircleOutlined />} name="Active"/>
        <NavItem isPrivate link={ROUTES.COMPLETED} icon={<CarryOutOutlined />} name="Completed"/>

    </Menu>
    )
}


export default FilterMenu
