import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function DropdownItem(props) {
    return (
        <div className="py-4">
            <NavLink className="text-gray-300 text-xl" exact={props.exact} to={props.link} activeClassName="text-green-400 text-2xl" onClick={props.toggle}>{props.children}</NavLink>        
        </div>
    )
}

export default DropdownItem
