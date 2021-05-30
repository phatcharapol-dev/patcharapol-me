import React from "react";
import Interest from "./Interest/Interest";

function Interests() {
  return (
    <div className=" w-full">
      <h5>Interests</h5>
      <div className="grid md:grid-cols-4 grid-cols-3">
        <Interest name={"Code"} icons={"code"} />
        <Interest name={"Money"} icons={"money-bill-alt"} />
        <Interest name={"Travel"} icons={"road"} />
        <Interest name={"Movies"} icons={"video"} />
        <Interest name={"Games"} icons={"gamepad"} />
        <Interest name={"Music"} icons={"headphones"} />
        <Interest name={"Food"} icons={"utensils"} />
        <Interest name={"Coffee"} icons={"coffee"} />
      </div>
    </div>
  );
}

export default Interests;
