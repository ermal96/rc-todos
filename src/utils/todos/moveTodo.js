import { Button, Tooltip } from 'antd';
import { CheckOutlined, RollbackOutlined } from '@ant-design/icons';

import React from 'react'

import * as Filter from '../../constants/filter'

const MoveTodo = ({ moveTodo, isActive}) => {

    return (
        <Tooltip placement="top" title={ isActive === Filter.COMPLETED ? 'Move To Active': 'Move To Completed' }>
             <Button type="link" onClick={moveTodo} >
                { isActive === Filter.COMPLETED ? <RollbackOutlined />:  <CheckOutlined />  }
             </Button>
        </Tooltip>
    )
}


export default MoveTodo

