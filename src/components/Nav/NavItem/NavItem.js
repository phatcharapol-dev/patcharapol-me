// import { Link, NavLink } from "react-router-dom";
import React from "react";
import { Link } from "react-scroll";

function NavItem(props) {
  return (
    <Link
      to={props.goto}
      spy={true}
      smooth={true}
      duration={500}
      className="nav-items cursor-pointer"
      activeClass="underline"
      style={{ textUnderlineOffset: "1rem" }}
    >
      {props.children}
    </Link>
    // <NavLink
    //   className="nav-items"
    //   exact={props.exact}
    //   to={props.link}
    //   activeClassName="text-blue-main"
    // >
    //   {props.children}
    // </NavLink>
  );
}

export default NavItem;
