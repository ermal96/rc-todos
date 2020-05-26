import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from "react-router-dom"
import styled from 'styled-components'

const NavItemWrapper = styled.span`
    padding:  0 15px;
    a{
        color: unset;
        display: inline-flex;
        align-items: center;
        padding: 0 8px;
        span{
            margin-right:5px
        }

    }
`;

const activeStyle = {
        color: '#1890ff',
        borderBottom: '2px solid #1890ff'
}

const NavItem = ({hasPermission, link, name, isPrivate, isPublic, icon}) => {


    const renderItem  = () => {
        if(isPrivate){
            if(hasPermission){
              return(
                <NavItemWrapper>
                    <NavLink exact activeStyle={activeStyle} to={link}>{icon} {name}</NavLink>
                </NavItemWrapper>
              )
            }else{
                return null
            }
        }else if(isPublic){
            if(! hasPermission){
                return(
                  <NavItemWrapper >
                      <NavLink exact activeStyle={activeStyle} to={link}>{icon} {name}</NavLink>
                  </NavItemWrapper>
                )
              }else{
                  return null
              }
        }
    } 
    return renderItem();
}


const mapStateToProps = (ref) => {
    return {
        hasPermission: ref.firebase.isAuthenticated
    }
}

export default connect(mapStateToProps, {})(NavItem)
