import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const TechnologyCard = ({ logo, from, to }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="flex overflow-hidden my-20 gradient"
    >
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {logo.map((image, index) => (
          <Image src={image} key={index} alt="" className="w-full mx-12" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {logo.map((image, index) => (
          <Image src={image} key={index} alt="" className="w-full mx-12" />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TechnologyCard;
