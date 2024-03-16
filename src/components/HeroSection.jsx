import React from "react";
import grid from "../assets/grid.png";
import HeroImage from "../assets/Hero_img.png";
import MetricContainer from "./MetricContainer";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-full flex flex-col overflow-x-hidden">
      {/* Hero Heading  */}
      <div className="max-w-[83rem] mx-auto pb-14 pt-2 md:pt-10 pr-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="font-orbitron text-5xl md:text-[4rem] text-right text-white font-extrabold "
        >
          Be our <span className="text-richYellow">Mascot</span> for{" "}
          <span className="text-richPink-100">AXIS</span>, The Largest tech fest
          by <span className="text-richYellow">VNIT NAGPUR</span>
        </motion.p>
      </div>
      {/* Hero Secondary container  */}
      <div className=" h-full bg-richBlue-100 min-h-[18rem] md:min-h-[25rem] relative ">
        {/* Hero Section Grid  */}
        <div className="absolute top-0 left-0 z-0">
          <img
            src={grid}
            alt="Hero section secondary container grid"
            className="h-full object-cover"
          />
        </div>
        {/* Hero Section Image and heading container  */}
        <div className="w-full h-[18rem] md:h-[25rem] flex flex-row">
          {/* Hero Image container  */}
          <div className="absolute bottom-0 left-0">
            <img src={HeroImage} className="h-96 md:h-fit" />
          </div>
          {/* Hero section dummy div  */}
          <div className="w-64 md:w-[40rem] block"></div>
          {/* Hero Section Heading  */}
          <div className="h-full flex justify-center items-center ">
            <div className="flex flex-col justify-center items-center gap-10">
              <motion.p
                initial={{ opacity: 0, translateY: 100 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{
                  duration: 1.1,
                  delay: 0.1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="font-saira font-normal hidden md:block  md:text-4xl text-center text-white leading-relaxed pr-8"
              >
                Get ready for an electrifying experience with thrilling
                workshops and events at our AXIS Fest 2024!
              </motion.p>
              {/* Metric container  */}
              <MetricContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
