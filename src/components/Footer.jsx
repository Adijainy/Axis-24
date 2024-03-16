import React from "react";
import grid from "../assets/grid.png";
import aibrain from "../assets/aibrain.png";
import { easeInOut, motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="bg-richBlue-100 relative px-6 md:px-0">
        {/* background grid */}
        <img
          src={grid}
          alt="grid-img"
          className="absolute top-0 left-0 h-full z-10"
        />
        <div className=" md:px-36 flex flex-row text-white relative z-20">
          <div className="pt-12">
            {/* main heading */}
            <motion.h2
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{
                duration: 1.5,
                delay: 0.3,
                ease: easeInOut,
              }}
              className="text-4xl md:text-6xl font-orbitron font-bold mb-8"
            >
              LET'S <span className="text-richYellow">WORK</span> TOGETHER
            </motion.h2>
            {/* contacts */}
            <div className="border-2 border-richYellow py-2 px-3 font-baumans text-base md:text-2xl w-fit mb-4 transition-all duration-300 hover:bg-richYellow hover:text-richBlue-100 max-w-72 md:max-w-fit">
              Student Activity Centre, Near Auditorium, VNIT, Nagpur-440010
            </div>
            <a
              href="mailto:admin@axisvnit.in"
              className="border-2 border-richYellow py-2 px-3 font-baumans text-base  md:text-2xl w-fit transition-all duration-300 hover:bg-richYellow hover:text-richBlue-100"
            >
              admin@axisvnit.in
            </a>
            {/* follow us div with socials */}
            <div className="font-saira">
              <h3 className="text-2xl font-medium mt-14">
                <span className="text-richPink-100 ">Follow</span> us on
              </h3>
              <ul className="text-base md:text-lg flex gap-3 pb-6">
                <li className="transition-all duration-200 hover:text-richPink-100 hover:border-b-2 border-richPink-100">
                  <a
                    href="https://www.instagram.com/axis_vnit/?igsh=MTg0MDRjcmphZmVmZg%3D%3D"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li className="transition-all duration-200 hover:text-richPink-100 hover:border-b-2 border-richPink-100">
                  <a
                    href="https://youtube.com/@AXISVNIT?si=7s08iKfbI65In2Xl"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </li>
                <li className="transition-all duration-200 hover:text-richPink-100 hover:border-b-2 border-richPink-100">
                  <a
                    href="https://www.linkedin.com/company/axis-vnit-nagpur/"
                    target="_blank"
                  >
                    LinkedIN
                  </a>
                </li>
                <li className="transition-all duration-200 hover:text-richPink-100 hover:border-b-2 border-richPink-100">
                  <a href="https://axisvnit.in/" target="_blank">
                    X
                  </a>
                </li>
                <li className="transition-all duration-200 hover:text-richPink-100 hover:border-b-2 border-richPink-100">
                  <a href="https://axisvnit.in/" target="_blank">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* ai bain img */}
          <div className="md:ml-[4.5rem] h-4/5 absolute -bottom-0 md:bottom-0 -right-7 md:right-0 md:static -z-10 md:z-0">
            <img
              src={aibrain}
              alt="ai-brain"
              className="md:w-full h-4/5 md:h-fit"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
