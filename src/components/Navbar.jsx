import React, { useState } from "react";
import { navlinks } from "../utils/navlinks";
import logo from "../assets/logo.png";
import { RiMenu4Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-fit py-4 md:py-8 relative">
      <div className="bg-richPink-100 h-14 max-w-[80rem] w-full mx-auto px-8 rounded-none md:rounded-full flex justify-between items-center">
        {/* LOGO && Hamburger for mobile layout */}
        <div className="flex flex-row gap-3">
          {/* HAMBURGER MENU  */}
          <div className="block md:hidden text-white text-3xl">
            <button onClick={() => setIsMenuOpen(true)}>
              <RiMenu4Fill className="text-white text-2xl" />
            </button>
          </div>
          <img src={logo} />
        </div>

        {/* NAVIGATION LINKS */}
        <div
          className={`w-screen h-screen z-10 bg-richPink-100 md:w-fit md:h-fit absolute top-0 left-0 md:static ${
            isMenuOpen
              ? "translate-x-0 md:translate-x-0"
              : "-translate-x-[1200px] md:translate-x-0"
          } flex justify-center items-center transition-all duration-500`}
        >
          <button
            className="block md:hidden absolute top-6 right-6 text-white text-3xl"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoClose />
          </button>
          {/* Navlinks container  */}
          <ul className="flex flex-col md:flex-row items-center md:items-start list-none gap-8 md:gap-5 z-50">
            {navlinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  className="font-poppins text-xl md:text-base font-medium uppercase text-white transition-all duration-300 hover:underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* BUTTON */}
        <div>
          <a
            href="https://axisvnit.in/sign-in"
            target="_blank"
            className="border-2 border-white text-white px-5 py-2 rounded-full uppercase font-poppins font-medium transition-all duration-300 hover:bg-white hover:text-richPink-100 hover:shadow-lg"
          >
            login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
