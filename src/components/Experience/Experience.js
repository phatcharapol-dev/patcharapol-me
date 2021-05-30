import React from "react";
import Timelines from "./Timelines/Timelines";

function Experince() {
  return (
    <section className="section experience">
      <div className="container">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="flex flex-row md:justify-center justify-start">
            <h1>Experience</h1>
          </div>
          <div className="md:col-span-2 w-full">
            <Timelines />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experince;
