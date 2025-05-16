import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow rounded">
      <div className="container mx-auto px-4 flex items-center justify-between flex-wrap py-4">
        <a className="font-bold text-white text-xl" href="#home">
          Deepak J        </a>

        <div className="flex space-x-5 ml-auto">
          <a className="text-white hover:text-gray-300" href="#home">
            Home
          </a>
          <a className="text-white hover:text-gray-300" href="#about">
            About
          </a>
          <a className="text-white hover:text-gray-300" href="#contact">
            Contact
          </a>
          <a className="text-white hover:text-gray-300" href="#Skills">
            Skills
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
  