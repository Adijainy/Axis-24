import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const MetricContainer = () => {
  const countEvents = useMotionValue(0);
  const countColleges = useMotionValue(0);
  const countFootfall = useMotionValue(0);
  const Events = useTransform(countEvents, Math.round);
  const Colleges = useTransform(countColleges, Math.round);
  const Footfall = useTransform(countFootfall, Math.round);
  useEffect(() => {
    const animation = animate(countEvents, 35, { duration: 10 });
    const animation2 = animate(countColleges, 200, { duration: 10 });
    const animation3 = animate(countFootfall, 25000, { duration: 10 });
    return () => {
      animation.stop;
      animation2.stop;
      animation3.stop;
    };
  }, []);
  return (
    <div className="w-full md:w-3/5 grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-1">
      {/* Events  */}
      <div className="flex flex-col justify-center items-center gap-4 ">
        <p className="font-poller text-lg md:text-3xl text-white">Events</p>
        <div className="font-poller text-lg md:text-3xl text-richYellow">
          <motion.span>{Events}</motion.span>
          <span>+</span>
        </div>
      </div>
      {/* Colleges  */}
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="font-poller text-lg md:text-3xl text-white">Colleges</p>
        <div className="font-poller text-lg md:text-3xl text-richYellow">
          <motion.span>{Colleges}</motion.span>
          <span>+</span>
        </div>
      </div>
      {/* Footfall  */}
      <div className="flex flex-col justify-center items-center gap-4 col-span-2 md:col-span-1">
        <p className="font-poller text-lg md:text-3xl text-white">Footfall</p>
        <div className="font-poller text-lg md:text-3xl text-richYellow">
          <motion.span>{Footfall}</motion.span>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default MetricContainer;
