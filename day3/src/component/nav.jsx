import React, {useState} from 'react';
import tw, {styled, css} from 'twin.macro'

export const Nav = (props) => {
    return (
        <div>{props.children}</div>
    )
}


const NavItem = styled.a`
  ${tw`block pl-4 pt-1 h-6 align-middle leading-snug hover:bg-gray-300 active:bg-gray-300`}
`

const NavGroup = (props) => {
    return (
        <div>
            <h5 style={{marginBottom:"0.5rem", paddingLeft: "0.5rem", fontWeight:'bold'}}>{props.title}</h5>
            {props.children}
        </div>
    )
}

Nav.Item = NavItem
Nav.Group = NavGroup