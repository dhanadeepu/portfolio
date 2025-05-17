import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import profileImage from "../assets/dev1.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-b from-black to-gray-900 px-4 sm:px-10 md:px-20 py-16 gap-10"
    >
      <motion.div
        className="text-white space-y-6 max-w-md text-center md:text-left"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold">
          Hello, I'm <span className="text-pink-500">Deepak J</span>
        </h2>
        <p>
          Front-End Developer. I build websites that rank higher and perform
          better.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {["HTML", "CSS", "JavaScript", "ReactJs"].map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>arana

        <a
          href="mailto:dhanadeepu77@gmail.com?subject=Let's%20Book%20a%20Call&body=Hi%20Deepak,%0AI'd%20like%20to%20schedule%20a%20call%20with%20you."
          className="inline-block bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-2 rounded-full text-sm sm:text-base"
        >
          Let's Book a Call →
        </a>

        <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl">
          <a
            href="https://github.com/dhanadeepu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center bg-gray-700 p-2 rounded-full shadow-lg hover:shadow-xl">
              <Github size={28} className="text-white" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-j-3626a8194/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center justify-center bg-gray-700 p-2 rounded-full shadow-lg hover:shadow-xl">
              <Linkedin size={28} className="text-white" />
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <div className=" w-80 h-80 sm:w-84 sm:h-64 rounded-full overflow-hidden border-4 border-pink-500 shadow-[0_0_30px_10px_rgba(236,72,153,0.5)]">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
