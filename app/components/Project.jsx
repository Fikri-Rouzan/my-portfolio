import { assets, projectsData } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Project = ({ isDarkMode }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleToggleProjects = () => {
    if (visibleCount >= projectsData.length) {
      setVisibleCount(4);
    } else {
      setVisibleCount((prevCount) =>
        Math.min(prevCount + 4, projectsData.length)
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my projects collection!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5 dark:text-black"
      >
        <AnimatePresence>
          {projectsData
            .slice()
            .reverse()
            .slice(0, visibleCount)
            .map((project, index) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                key={index}
                target="_blank"
                href={project.link}
                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
                style={{ backgroundImage: `url(${project.bgImage})` }}
              >
                <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                  <div>
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-sm text-gray-700">
                      {project.description}
                    </p>
                  </div>
                  <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <Image
                      src={assets.send_icon}
                      alt="send icon"
                      className="w-5"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
        </AnimatePresence>
      </motion.div>
      {projectsData.length > 4 && (
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          onClick={handleToggleProjects}
          className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        >
          {visibleCount < projectsData.length ? "Show more" : "Hide"}
          <Image
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            alt="Right arrow"
            className="w-4"
          />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Project;
