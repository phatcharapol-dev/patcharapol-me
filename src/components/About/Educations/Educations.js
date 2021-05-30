import React from "react";
import Education from "./Education/Education";

function Educations() {
  return (
    <div className=" w-full">
      <h5>Education</h5>
      <Education
        icons={`graduation-cap`}
        subject={`B.Sc. Computer Science, 2017`}
        place={`King Mongkut's University of Technology North Bangkok`}
      />
      <Education
        icons={`graduation-cap`}
        subject={`Science - Mathematics, 2013`}
        place={`Satriwittaya 2 School`}
      />
    </div>
  );
}

export default Educations;
