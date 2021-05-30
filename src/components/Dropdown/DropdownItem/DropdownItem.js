import React from "react";
import { Link, NavLink } from "react-router-dom";

function DropdownItem(props) {
  return (
    <div className="py-4">
      <NavLink
        className="text-gray-custom text-xl"
        exact={props.exact}
        to={props.link}
        activeClassName="text-blue-custom text-2xl"
        onClick={props.toggle}
      >
        {props.children}
      </NavLink>
    </div>
  );
}

export default DropdownItem;
