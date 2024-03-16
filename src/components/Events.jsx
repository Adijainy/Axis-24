import React from "react";
import grid from "../assets/grid.png";
import robot from "../assets/robotic-hand.png";
const Events = () => {
  return (
    <div className="bg-richBlue-100 relative py-4 h-[26rem] ">
      {/* background grid */}
      <img
        src={grid}
        alt="grid-img"
        className="absolute top-0 left-0 h-full z-10"
      />
      <div className=" px-36 text-white text-center flex flex-col items-center">
        <h1 className="text-8xl font-orbitron font-bold text-richYellow tracking-wide mb-10">
          EVENTS
        </h1>
        <div>
          <ul className="flex flex-row gap-20 font-baumans text-4xl ">
            <li>
              Software
              <br />&<br />
              Electronics
            </li>
            <li>
              Management
              <br />&<br />
              Analytics
            </li>
            <li className="ml-64">
              Robotics
              <br />&<br />
              Automation
            </li>
            <li>
              Construction
              <br />&<br />
              Design
            </li>
          </ul>
        </div>
        <img src={robot} alt="robot's hand" className=" absolute top-12" />
      </div>
    </div>
  );
};

export default Events;
