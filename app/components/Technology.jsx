import { techStack, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Technology = () => {
  return (
    <motion.div
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Technologies
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Tech Stack and Tools
      </motion.h2>
      <div className="relative overflow-hidden flex my-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex animate-slide-left"
        >
          {techStack.concat(techStack).map((tech, index) => (
            <div key={index} className="flex-shrink-0 mx-12 cursor-pointer">
              <Image src={tech} alt="Tech" className="w-full" />
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-white dark:from-darkTheme to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-white dark:from-darkTheme to-transparent"></div>
      </div>
      <div className="relative overflow-hidden flex my-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex animate-slide-right"
        >
          {toolsData.concat(toolsData).map((tool, index) => (
            <div key={index} className="flex-shrink-0 mx-12 cursor-pointer">
              <Image src={tool} alt="Tool" className="w-full" />
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 right-0 w-16 pointer-events-none bg-gradient-to-l from-white dark:from-darkTheme to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-16 pointer-events-none bg-gradient-to-r from-white dark:from-darkTheme to-transparent"></div>
      </div>
    </motion.div>
  );
};

export default Technology;
