import React from "react";
import { easeIn, motion } from "framer-motion";

const DirectorsDesk = () => {
  return (
    <div className="bg-richViolet-800 text-white md:py-10  md:px-56">
      <div className="bg-richViolet-600 border-2 border-richViolet-100 p-10 text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.1,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="text-4xl md:text-5xl font-orbitron font-bold mb-3"
        >
          <span className="text-richPink-100">DIRECTOR'S</span> DESK
        </motion.h2>
        <div className="h-[0.1rem] w-2/3 bg-white"></div>
        <motion.p
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: easeIn }}
          viewport={{ once: false }}
          className="font-saira px-0 md:px-10 text-base md:text-lg mt-5"
        >
          I am elated to witness the diverse participation from universities and
          schools nationwide in AXIS from last 24years. Year after year, AXIS
          continues to bridge the gap between technology and tech enthusiasts.
          The competitions held during AXIS showcased some of India's brightest
          minds, competing and surmounting challenges for the betterment of
          society. I sincerely hope that AXIS continues its upward trajectory,
          achieving new milestones with each passing year and bringing honor to
          VNIT. My best wishes go out to AXIS.
        </motion.p>
      </div>
    </div>
  );
};

export default DirectorsDesk;
