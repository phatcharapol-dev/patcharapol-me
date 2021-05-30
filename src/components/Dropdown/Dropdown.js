import React from "react";
import DropdownItem from "./DropdownItem/DropdownItem";
import bgDropdown from "../../images/bg_dropdown.jpg";
function Dropdown(props) {
  return (
    <div
      className={
        props.isOpen
          ? "flex h-screen z-30 flex-col fixed w-full bg-no-repeat bg-center bg-cover"
          : "hidden"
      }
      style={{ backgroundImage: `url(${bgDropdown})` }}
    >
      <div
        className="p-6 flex justify-end flex-row w-full"
        onClick={props.toggle}
      >
        {/* <span className="font-bold text-gray-custom md:text-5xl text-3xl duration-300">N</span> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white-custom cursor-pointer hover:h-7 hover:w-7 duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="flex justify-center flex-col items-center w-full h-full">
        <DropdownItem toggle={props.toggle} link="/" exact>
          Home
        </DropdownItem>
        <DropdownItem toggle={props.toggle} link="/about">
          About
        </DropdownItem>
        <DropdownItem toggle={props.toggle} link="/skill">
          Skill
        </DropdownItem>
        <DropdownItem toggle={props.toggle} link="/resume">
          Resume
        </DropdownItem>
        <DropdownItem toggle={props.toggle} link="/portfolio">
          Portfolio
        </DropdownItem>
        <DropdownItem toggle={props.toggle} link="/contact">
          Contact
        </DropdownItem>
      </div>
    </div>
  );
}

export default Dropdown;
