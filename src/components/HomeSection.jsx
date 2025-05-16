import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const HomeSection = () => {
  const firstSectionRef = useRef(null);
  const isInView = useInView(firstSectionRef, { once: false });

  return (
    <section id="home">
      <motion.div
        ref={firstSectionRef}
        className="h-screen flex items-center justify-center bg-black px-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-center font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-snug">
          This is My <br />
          <span className="text-purple-500 font-black tracking-tight">
            Portfolio Website
          </span>
        </p>
      </motion.div>
    </section>
  );
};

export default HomeSection;
