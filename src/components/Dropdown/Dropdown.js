import React from "react";
import DropdownItem from "./DropdownItem/DropdownItem";
function Dropdown(props) {
  const bgColor = props.isDarkMode ? "bg-black-main" : "bg-gray-light";
  return (
    <div
      className={
        props.isOpen
          ? `flex h-screen z-40 flex-col fixed w-full text-black-main dark:text-white-main ${bgColor}`
          : "hidden"
      }
      // style={{ backgroundImage: `url(${bgDropdown})` }}
    >
      <div
        className="p-6 flex justify-end flex-row w-full"
        onClick={props.toggle}
      >
        {/* <span className="font-bold text-gray-dark md:text-5xl text-3xl duration-300">N</span> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6  cursor-pointer hover:h-7 hover:w-7 duration-300"
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
        <DropdownItem toggle={props.toggle} goto="hero">
          Home
        </DropdownItem>
        <DropdownItem toggle={props.toggle} goto="about">
          About
        </DropdownItem>
        <DropdownItem toggle={props.toggle} goto="experience">
          Experience
        </DropdownItem>
        <DropdownItem toggle={props.toggle} goto="skills">
          Skills
        </DropdownItem>
        <DropdownItem toggle={props.toggle} goto="portfolios">
          Portfolios
        </DropdownItem>
      </div>
    </div>
  );
}

export default Dropdown;
