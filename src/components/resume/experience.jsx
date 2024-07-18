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
					<p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
					<h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
				</div>
				<div className="mt-6 lgl:mt-14 w-full h-[1500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
					<ResumeCard
						title="Backend Engineering Intern"
						subTitle="Vegeel Technologies - (2024 - Present)"
						result="NIGERIA"
						description={[
							"1. Java backend engineering intern at Vegeel Technologies, a security and compliance management platform.",
							"2. Built a security and compliance system, including the functionality to audit framework requirements.",
							"3. Developed features to create, fetch, and update audited requirements.",
							"4. Implemented caching mechanisms to optimize performance.",
							"5. Worked on a microservice application with a multitenancy structure.",
						]}
					/>
					<ResumeCard
						title="Frontend Developer"
						subTitle="Darsh - (2024 - Present)"
						result="NIGERIA"
						description={[
							"1. Developed intuitive and user-friendly interfaces for customers, vendors (restaurants), and admin users, significantly enhancing the overall user experience.",
							"2. Implemented responsive design principles to ensure seamless functionality across various devices and screen sizes, improving accessibility and user engagement.",
							"3. Conducted thorough user testing and debugging to identify and resolve interface issues.",
							"4. Designed and implemented a streamlined order management system for vendors, enabling efficient order tracking and management.",
							"5. Contributed to the implementation of accessibility features, ensuring compliance with web accessibility standards and enhancing the usability for all users, including those with disabilities.",
						]}
					/>
					<ResumeCard
						title="Volunteer Backend Developer"
						subTitle="SyncCollab - (03/2024 - 05/2024)"
						result="NIGERIA"
						description={[
							"1. Volunteer Backend Developer at SyncCollab, a tech startup building a video conferencing platform.",
							"2. Designed and implemented robust and scalable server-side logic for video conferencing functionalities.",
							"3. Integrated real-time communication features using WebRTC and optimized backend performance for smooth user experiences.",
							"4. Collaborated with frontend developers for seamless integration between client-side and server-side components.",
							"5. Conducted code reviews with other volunteer developers, fostering collaboration and learning.",
						]}
					/>
					<ResumeCard
						title="Software Engineering Trainee"
						subTitle="Semicolon Africa - (10/2022 - 10/2023)"
						result="NIGERIA"
						description={[
							"1. Software Engineering Trainee at Semicolon Africa, completing training in software engineering, including design thinking, programming (Java, Python, JavaScript), HTML, CSS, and React.js.",
							"2. Developed expertise in full RDBMS and gained practical experience in software engineering principles and methodologies.",
							"3. Collaborated on a team project to build an Electronic Health Record (EHR) system, contributing to both backend and frontend development.",
							"4. Participated in the development of a Learning Management System (LMS), focusing on implementing scalable backend solutions.",
							"5. Attended a business development and entrepreneurship course facilitated by Henley Business School, enhancing understanding of software project management and business strategy.",
						]}
					/>
				</div>
			</div>
			{/* <div>
				<div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
					<p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
					<h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
				</div>
				<div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
					
				</div>
			</div> */}
		</motion.div>
	);
};

export default Experience;
