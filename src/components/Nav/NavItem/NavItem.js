import { Link, NavLink } from "react-router-dom";

function NavItem(props) {
  return (
    <NavLink
      className="nav-items"
      exact={props.exact}
      to={props.link}
      activeClassName="text-blue-custom"
    >
      {props.children}
    </NavLink>
  );
}

export default NavItem;
