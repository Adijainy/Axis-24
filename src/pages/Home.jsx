import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import DirectorDesk from "../components/DirectorsDesk";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import Events from "../components/Events";
const Home = () => {
  return (
    <div className="max-w-[100vw] overflow-x-hidden min-h-screen bg-richViolet-800">
      <Navbar />
      <HeroSection />
      <DirectorDesk />
      <Events />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
