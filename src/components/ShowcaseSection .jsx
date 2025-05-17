import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    name: "ReactJS",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    name: "HTML",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  },
  {
    name: "CSS",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name: "JavaScript",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "SQL",
    icon: "https://cdn-icons-png.flaticon.com/512/2774/2774530.png",
  },
  {
    name: "Git",
    icon: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
  },
  {
    name: "Redux",
    icon: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
  },
];

const certificates = [
  { title: "ReactJS Certification", issuer: "Udemy" },
  { title: "JavaScript Mastery", issuer: "Coursera" },
  { title: "NodeJS Backend", issuer: "LinkedIn Learning" },
];

const ShowcaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [activeSection, setActiveSection] = useState(null);

  return (
    <section
      id="Skills"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-4 sm:px-10 md:px-20 py-16"
    >
      <motion.div
        className="w-full max-w-4xl text-white text-center space-y-6 p-8 rounded-lg"
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-400">
          Portfolio Showcase
        </h2>

        <p className="text-base sm:text-lg text-gray-300">
          I stay updated with the latest in the web development world — from
          building reusable React components to integrating APIs that make apps
          smarter and faster
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {["Project", "Skills", "Certificate"].map((item) => (
            <button
              key={item}
              onClick={() =>
                setActiveSection(activeSection === item ? null : item)
              }
              className="transition text-white px-6 py-2 rounded-full text-sm sm:text-base hover:opacity-90 min-w-[10rem]"
              style={{
                background:
                  "linear-gradient(90deg, #8E2DE2 0%, #4A00E0 50%, #00C9FF 100%)",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Render Projects */}
        {activeSection === "Project" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl w-full px-4">
            <div className="bg-white text-black rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">ABIS</h3>
              <p className="text-sm">
                Brief description of the project goes here.
              </p>
            </div>
            <div className="bg-white text-black rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">Pricing</h3>
              <p className="text-sm">
                Brief description of the project goes here.
              </p>
            </div>
            <div className="bg-white text-black rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">Salary Management</h3>
              <p className="text-sm">
                Brief description of the project goes here.
              </p>
            </div>
            <div className="bg-white text-black rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">Admin Portal</h3>
              <p className="text-sm">
                Brief description of the project goes here.
              </p>
            </div>
          </div>
        )}

        {/* Render Skills */}
        {activeSection === "Skills" && (
          <div className="flex justify-center gap-8 mt-10 flex-wrap max-w-6xl mx-auto px-4">
            {skills.map(({ name, icon }) => (
              <div
                key={name}
                className="flex flex-col items-center text-white cursor-pointer rounded-full p-4"
                title={name}
                style={{
                  boxShadow: "0 0 10px white",
                  borderRadius: "50%",
                  transition: "box-shadow 0.3s",
                  width: "80px",
                  height: "80px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 20px 5px #3b82f6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow = "0 0 10px white")
                }
              >
                <img
                  src={icon}
                  alt={name}
                  className="w-10 h-10 mb-1"
                  style={{ filter: "drop-shadow(0 0 2px white)" }}
                />
                <span className="text-xs">{name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Render Certificates */}
        {activeSection === "Certificate" && (
          <div className="max-w-4xl mx-auto mt-10 px-4 space-y-4 text-left text-white">
            {certificates.map(({ title, issuer }, i) => (
              <div
                key={i}
                className="bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-gray-300 text-sm">Issued by: {issuer}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ShowcaseSection;
