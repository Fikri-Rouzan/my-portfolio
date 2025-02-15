import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Footer = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-20"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-6"
        />
      </motion.div>
      <motion.a
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        target="_blank"
        href="https://mail.google.com/mail/?view=cm&to=fikrirzn@gmail.com"
        className="w-max flex items-center gap-2 mx-auto hover:text-pink-500 dark:hover:text-lime-300 transition-colors"
      >
        <Image
          src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
          alt=""
          className="w-6"
        />
        fikrirzn@gmail.com
      </motion.a>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="cursor-pointer hover:text-pink-500 dark:hover:text-lime-300 transition-colors"
        >
          © {new Date().getFullYear()} Muhammad Fikri Rouzan Ash Shidik
        </motion.p>
        <motion.ul
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex items-center gap-10 justify-center mt-4 sm:mt-0"
        >
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a target="_blank" href="https://github.com/Fikri-Rouzan">
              <Image
                src={isDarkMode ? assets.github_dark : assets.github_light}
                alt=""
                className="w-6"
              />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
            <a target="_blank" href="https://www.linkedin.com/in/fikrirouzan/">
              <Image
                src={isDarkMode ? assets.linkedin_dark : assets.linkedin}
                alt=""
                className="w-6"
              />
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
};

export default Footer;
