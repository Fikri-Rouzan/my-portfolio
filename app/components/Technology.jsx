import { techStack, toolsData } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";
import TechnologyCard from "../cards/TechnologyCard";

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
      <TechnologyCard logo={techStack} from={0} to={"-100%"} />
      <TechnologyCard logo={toolsData} from={"-100%"} to={0} />
    </motion.div>
  );
};

export default Technology;
