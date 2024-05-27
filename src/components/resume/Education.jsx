import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
              title="Software Engineering"
              subTitle="Semicolon Africa (2022 - 2023)"
              result="Nigeria"
              des="Completed an intensive one-year program focused on full-stack software development, including languages and frameworks such as JavaScript, Python, React, and Node.js. Worked on multiple real-world projects, including a web application for local businesses and an e-commerce platform. Gained experience with version control systems (Git), agile methodologies, and collaborative team projects."
          />
          <ResumeCard
              title="BSc in Systems Engineering"
              subTitle="University of Lagos (2022 - Present)"
              result="Nigeria"
              des="Pursuing a comprehensive degree that covers systems theory, control systems, computer programming, and engineering mathematics. Engaged in hands-on projects such as designing a traffic light control system and developing a simulation model for a manufacturing process. Active member of the university's engineering society and robotics club."
          />
          <ResumeCard
              title="Diploma of Entrepreneurship and Entrepreneurial Studies"
              subTitle="Henley Business School, University Of Reading (2020)"
              result="5.00/5"
              des="Achieved top marks in a program that covered business strategy, startup development, marketing, and financial planning. Developed a business plan for a tech startup, which included market research, competitive analysis, and financial projections. Participated in workshops and networking events with successful entrepreneurs and business leaders."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
