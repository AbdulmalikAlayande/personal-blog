import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./resumeCard";

const Experience = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
		>
			<div>
				<div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
					<p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
					<h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
				</div>
				<div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
					<ResumeCard
						title="Backend Engineering Intern"
						subTitle="Vegeel Technologies - (2024 - Present)"
						result="NIGERIA"
						des="Vegeel technologies is a security and compliance management platform that helps 
                  businesses to secure their data and comply with regulations.
                  Vegeel automates compliance tasks, control monitoring, and audit management, making
                  processes seamless and efficient"
					/>
					<ResumeCard
						title="Frontend Developer"
						subTitle="Darsh - (2024 - Present)"
						result="NIGERIA"
						des="Darsh is a food and groccy delivery service, that partner's with 
            established restaurants and supermarkets to deliver to customers at their convenience."
					/>
					<ResumeCard
						title="Volunteer Backend Developer"
						subTitle="SyncCollab - (03/2024 - 05/2024)"
						result="NIGERIA"
						des="A tech startup working on building a video conferencing platform like zoom"
					/>
					<ResumeCard
						title="Software Engineering Trainee"
						subTitle="Semicolon Africa - (10/2022 - 10/2023)"
						result="NIGERIA"
						des=""
					/>
				</div>
			</div>
			{/* <div>
				<div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
					<p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
					<h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
				</div>
				<div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
					<ResumeCard
						title="Gym Instructor"
						subTitle="Rainbow Gym Center (2015 - 2020)"
						result="DHAKA"
						des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
					/>
					<ResumeCard
						title="Web Developer and Instructor"
						subTitle="SuperKing College (2010 - 2014)"
						result="CANADA"
						des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
					/>
					<ResumeCard
						title="School Teacher"
						subTitle="Kingstar Secondary School (2001 - 2010)"
						result="NEVADA"
						des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
					/>
				</div>
			</div> */}
		</motion.div>
	);
};

export default Experience;
