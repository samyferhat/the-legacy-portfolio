"use client";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";

const Credits = ({children, className}) => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
      <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
      <p className="font-light  text-xs sm:text-sm md:text-base  ">"son goku" (https://skfb.ly/o8QX9) by ejohnson967 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
      <p>"Kamisama Planet" (https://skfb.ly/6oF76) by davidescalante is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
    </motion.div>

      </div>
    </section>
  );
};

export default Credits;