import { techStack } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const TechStack = () => {
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
        Tech Stack
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Tech Stack
      </motion.h2>
      <div className="overflow-hidden flex my-20">
        <div className="flex animate-slide-left">
          {techStack.concat(techStack).map((tech, index) => (
            <div key={index} className="flex-shrink-0 mx-12">
              <Image src={tech} alt="Tech" className="w-full" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;
