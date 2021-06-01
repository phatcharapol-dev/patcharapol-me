import React from "react";
import { Link } from "react-scroll";
function DropdownItem(props) {
  return (
    <div className="py-4 text-lg">
      <Link
        to={props.goto}
        spy={true}
        smooth={true}
        duration={500}
        className="dropdown-items cursor-pointer"
        activeClass="underline"
        onClick={props.toggle}
        style={{ textUnderlineOffset: "1rem" }}
      >
        {props.children}
      </Link>
    </div>
  );
}

export default DropdownItem;
