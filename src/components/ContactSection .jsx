import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 px-4 sm:px-10 md:px-20 py-16"
    >
      <motion.div
        className="w-full max-w-4xl text-white text-center space-y-6 p-8 rounded-lg transition duration-300 hover:shadow-[0_0_30px_rgba(237,221,83,0.9)]"
        initial={{ x: -100, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <p>
          Experienced front-end web developer with 2 years 5 months of hands-on
          experience in JavaScript and React js Proficient in developing
          interactive user interfaces, implementing state management using
          Redux, and collaborating with backend teams to integrate frontend
          components. Skilled in writing clean, modular code using JavaScript
          ES6+ features and implementing responsive design principles using
          CSS3. Strong team player with a keen eye for code quality, conducting
          code reviews, and providing constructive feedback. Eager to leverage
          skills and contribute to innovative web development projects.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="/DeepakJ_Resume.pdf"
            download
            className="transition text-white px-6 py-2 rounded-full text-sm sm:text-base hover:opacity-90"
            style={{
              background:
                "linear-gradient(90deg, rgba(42,123,155,1) 0%, rgba(87,199,133,1) 50%, rgba(237,221,83,1) 100%)",
            }}
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
