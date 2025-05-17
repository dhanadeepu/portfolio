import React from "react";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection ";
import ContactSection from "./components/ContactSection ";
import ShowcaseSection from "./components/ShowcaseSection ";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <ContactSection />
        <ShowcaseSection />
      </div>
    </>
  );
};

export default App;
