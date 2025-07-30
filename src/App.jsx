import React from "react";
import HomeSection from "./Pages/HomeSection";
import AboutSection from "./Pages/AboutSection ";
import ContactSection from "./Pages/ContactSection ";
import ShowcaseSection from "./Pages/ShowcaseSection ";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div >
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
