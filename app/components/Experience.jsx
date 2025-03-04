import { experience } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Experience
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Overview of My Journey
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my personal experience space.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {experience
          .slice()
          .reverse()
          .map(({ job, company, date, responsibilities }, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover -translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white"
            >
              <h3 className="text-lg font-semibold my-4 text-gray-700 dark:text-white">
                {job}
              </h3>
              <p className="text-base my-3 text-gray-700 dark:text-white">
                {company}
              </p>
              <p className="text-sm my-3 text-gray-700 dark:text-white">
                {date}
              </p>
              <ul className="list-disc pl-5 mt-6 text-sm text-gray-600 leading-6 dark:text-white/80">
                {responsibilities.map((respons, index) => {
                  return <li key={index}>{respons}</li>;
                })}
              </ul>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Experience;
