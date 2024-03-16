import React from "react";
import grid from "../assets/grid.png";
import robot from "../assets/robotic-hand.png";
import { easeInOut, motion } from "framer-motion";

const Events = () => {
  return (
    <div className="bg-richBlue-100 relative py-4 h-[12.3rem] md:h-[26rem] ">
      {/* background grid */}
      <img
        src={grid}
        alt="grid-img"
        className="absolute top-0 left-0 h-full z-10"
      />
      <div className="md:px-36 text-white text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-orbitron font-bold text-richYellow tracking-wide mb-5 md:mb-10">
          EVENTS
        </h1>
        <div>
          <ul className="flex flex-row gap-4 md:gap-20 font-baumans text-base md:text-4xl ">
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
            <li className="ml-20 md:ml-64">
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
        <motion.img
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: easeInOut,
          }}
          src={robot}
          alt="robot's hand"
          className="w-32 md:w-fit absolute top-12"
        />
      </div>
    </div>
  );
};

export default Events;
