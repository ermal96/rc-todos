import React from 'react'
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import * as ROUTES from '../../constants/routes'
import {DatabaseOutlined, CarryOutOutlined, PlayCircleOutlined} from '@ant-design/icons';
import { useLocation } from "react-router-dom";

const FilterMenu = () => {

    let location = useLocation();

    let defPath = 'allTodos';
    
    if(location.pathname === ROUTES.HOME){
        defPath = 'allTodos'
    }else if (location.pathname === ROUTES.ACTIVE){
        defPath = 'active'
    }else if (location.pathname === ROUTES.COMPLETED){
        defPath = 'completed'
    }else {
        defPath = 'allTodos'
    }

    return (
        <Menu selectedKeys={defPath}
        mode="horizontal">
        
        <Menu.Item key="allTodos"
            icon={<DatabaseOutlined />}>
                <Link to={ROUTES.HOME}>All</Link>
             </Menu.Item>

         <Menu.Item key="active"
            icon={<PlayCircleOutlined />}>
            <Link to={ROUTES.ACTIVE}>Active</Link>
             </Menu.Item>

        <Menu.Item key="completed"
            icon={<CarryOutOutlined/>}>
            <Link to={ROUTES.COMPLETED}>Completed</Link>
        </Menu.Item>

    </Menu>
    )
}


export default FilterMenu
