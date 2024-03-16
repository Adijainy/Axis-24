import React from "react";
import grid from "../assets/grid.png";
import aibrain from "../assets/aibrain.png";

const Footer = () => {
  return (
    <>
      <div className="bg-richBlue-100 relative">
        {/* background grid */}
        <img
          src={grid}
          alt="grid-img"
          className="absolute top-0 left-0 h-full z-10"
        />
        <div className=" px-36 flex flex-row text-white">
          <div className="pt-12">
            {/* main heading */}
            <h2 className="text-6xl font-orbitron font-bold mb-8">
              LET'S <span className="text-richYellow">WORK</span> TOGETHER
            </h2>
            {/* contacts */}
            <div className="border-2 border-richYellow py-2 px-3 font-baumans text-2xl w-fit mb-4">
              Student Activity Centre, Near Auditorium, VNIT, Nagpur-440010
            </div>
            <div className="border-2 border-richYellow py-2 px-3 font-baumans text-2xl w-fit">
              admin@axisvnit.in
            </div>
            {/* follow us div with socials */}
            <div className="font-saira">
              <h3 className="text-2xl font-medium mt-12">
                <span className="text-richPink-100">Follow</span> us on
              </h3>
              <ul className=" text-lg flex gap-3">
                <li>Instagram</li>
                <li>Youtube</li>
                <li>LinkedIN</li>
                <li>X</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          {/* ai bain img */}
          <div className="ml-20">
            <img src={aibrain} alt="ai-brain" className="w-[93%]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
