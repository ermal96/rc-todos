import { Button, Tooltip } from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import React from 'react'

const RemoveTodo = ({ deleteTodo}) => {
    return (
        <Tooltip placement="top" title="Delete Todo">
             <Button type="link" onClick={deleteTodo}><DeleteTwoTone twoToneColor="#f5222d" /></Button>
        </Tooltip>
    )
}

export default RemoveTodo;
