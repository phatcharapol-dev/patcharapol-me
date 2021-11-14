import React from "react";
import InterestV2 from "./InterestV2/InterestV2";

function InterestsV2() {
  return (
    <div className=" w-full">
      <h5>Interests</h5>      
        <ul className="list-disc list-inside mt-2 ml-8 list-outside">
            <InterestV2 name={"Web Technologies"} />
            <InterestV2 name={"Mobile Technologies"} />
            <InterestV2 name={"Cloud Computing"} />
        </ul>              
    </div>
  );
}

export default InterestsV2;
