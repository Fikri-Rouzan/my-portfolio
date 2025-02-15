import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <a
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
        </a>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="cursor-pointer hover:text-pink-500 dark:hover:text-lime-300 transition-colors">
          © {new Date().getFullYear()} Muhammad Fikri Rouzan Ash Shidik
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Fikri-Rouzan">
              <Image
                src={isDarkMode ? assets.github_dark : assets.github_light}
                alt=""
                className="w-6"
              />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/fikrirouzan/">
              <Image
                src={isDarkMode ? assets.linkedin_dark : assets.linkedin}
                alt=""
                className="w-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
