import React from "react";
import sponsors from "../assets/sponsorsimg.png";

const Sponsors = () => {
  return (
    <div className="bg-richViolet-800 text-white md:py-10 md:px-56">
      <div className="bg-richViolet-600 border-2 border-richViolet-100 p-8 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
          OUR<span className="text-richPink-100"> SPONSORS</span>
        </h2>
        {/* sponsors imgs */}
        <img src={sponsors} alt="event sponsors img" className="ml-6 w-[85%]" />
      </div>
    </div>
  );
};

export default Sponsors;
