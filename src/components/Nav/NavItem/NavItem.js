import { Link, NavLink } from 'react-router-dom';

function NavItem( props ) {
    return (
        <NavLink className="p-4 text-gray-300 hover:text-green-500 duration-300" exact={props.exact} to={props.link} activeClassName="text-green-500">{props.children}</NavLink>        
    )
}

export default NavItem;
