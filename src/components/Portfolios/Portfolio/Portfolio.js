import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

function Portfolio(props) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 portfolio-box">
      <div className="flex flex-col justify-center items-start md:my-0 my-3 md:order-first order-last">
        <h5>{props.name}</h5>
        <p className="py-2">{props.description}</p>
        <p className="py-2">Stack:{props.stack}</p>
        <div className="flex xs:flex-col lg:flex-row md:flex-col flex-row justify-start w-full">
          <div className="btn-outline">
            <p className="pr-2">View Source</p>
            <FontAwesomeIcon
              className="text-2xl ml-2"
              icon={["fab", "github"]}
            />
          </div>
          <div className="btn-full lg:ml-5 md:ml-0 xs:ml-0 ml-5">
            <p className="pr-2">Visit Site</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-5 md:w-6 h-4 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-3">
        <div className="flex flex-row w-full h-5 bg-gray-100 justify-start items-center">
          <div className="bg-red-500 w-3 h-3 my-2 mx-1 rounded-full"></div>
          <div className="bg-yellow-500 w-3 h-3 my-2 mx-1 rounded-full"></div>
          <div className="bg-green-400 w-3 h-3 my-2 mx-1 rounded-full"></div>
        </div>
        <img className="w-full" src={props.image} alt={props.name} />
      </div>
    </div>
  );
}

export default Portfolio;
