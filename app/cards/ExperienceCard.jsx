import React from "react";
import { motion } from "motion/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "@/assets/assets";
import Image from "next/image";

const ExperienceCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
    >
      <VerticalTimeline lineColor="#9ca3af">
        {experience
          .slice()
          .reverse()
          .map(({ icon, job, company, date, responsibilities }, index) => (
            <VerticalTimelineElement
              key={index}
              date={
                <motion.span
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-sm text-gray-700 dark:text-white"
                >
                  {date}
                </motion.span>
              }
              dateClassName="text-sm text-gray-700 dark:text-white"
              iconStyle={{
                background: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #9ca3af",
                boxShadow: "none",
              }}
              icon={
                <motion.div
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, times: [0, 0.5, 1] }}
                >
                  <Image src={icon} alt="" className="w-10" />
                </motion.div>
              }
              contentStyle={{
                background: "none",
                border: "1px solid #9ca3af",
              }}
              contentArrowStyle={{ borderRight: "7px solid #9ca3af" }}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="px-2 py-5"
              >
                <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                  {job}
                </h3>
                <h4 className="text-base my-3 text-gray-700 dark:text-white">
                  {company}
                </h4>
                <ul className="list-disc pl-5 mt-6 text-sm text-gray-600 leading-6 dark:text-white/80">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </motion.div>
  );
};

export default ExperienceCard;
