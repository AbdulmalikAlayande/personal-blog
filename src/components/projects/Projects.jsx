import React from 'react'
import Title from '../layouts/Title'
import {
    ars1, ars2, ars3,
    dating1, dating2, dating3,
    blog1, blog2, blog3,
    ehr1, ehr2, interoperability,
    lms1, lms2, lms3,
    store1, store2, store3,
} from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { BsGithub } from "react-icons/bs";
// import { FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="ELECTRONIC HEALTH RECORD (EHR) SYSTEM"
          des="Led the developed of a comprehensive Electronic Health Record (EHR) System
          that provides real-time, patient-centered records accessible to authorized users.
          The system enhances care coordination and efficiency by enabling seamless
          information sharing among healthcare providers, laboratories, and medical facilities"
          images={[ehr1, ehr2, interoperability]}
          githubUrls={["https://github.com/AbdulmalikAlayande/e-Reach-frontend.git", "https://github.com/AbdulmalikAlayande/e-Reach-backend.git"]}
          icons={[<BsGithub/>, <BsGithub/>]}
        />
        <ProjectsCard
          title="LEARNING MANAGEMENT SYSTEM (LMS)"
          des="A learning management system (L.M.S), aimed at advancing UN Goal 8,
          fostering inclusive economic growth, full employment, and decent work.
          By emphasizing skills development and entrepreneurship, the project aimed to empower youth
          to contribute meaningfully to the economy and society."
          images={[lms1, lms2, lms3]}
          githubUrls={["https://github.com/Thrivefuse/thrivefuse-backend.git", "https://github.com/Thrivefuse/Thrivefuse.git"]}
          icons={[<BsGithub/>, <BsGithub/>]}
        />
        <ProjectsCard
          title="A BLOGGING WEBSITE"
          des="An online blog platform that enables users to create, publish, and share their contents.
          Users can write articles, stories, or personal reflections, and organize them into categories or tags.
          Readers can explore the blog, leave comments, and engage with the community. Essentially,
          it serves as a platform for expressing ideas, and discovering interesting content"
          images={[blog1, blog2, blog3]}
          githubUrls={["https://github.com/AbdulmalikAlayande/bloggy.git"]}
          icons={[<BsGithub/>]}
        />
        <ProjectsCard
          title="ONLINE STORE"
          des="A platform that serves as a digital marketplace where users can browse, select,
          and purchase products remotely. It provides a convenient platform for users to explore a wide
          range of items, make purchases securely, and track orders seamlessly."
          images={[store1, store2, store3]}
          githubUrls={["https://github.com/AbdulmalikAlayande/snap-shop.git"]}
          icons={[<BsGithub/>]}
        />
        <ProjectsCard
          title="Dating App"
          des="A user-friendly Dating App designed to facilitate romantic connections.
          The app includes features such as profile creation, photo uploads, messaging,
          and algorithm-based matching to connect users based on their preferences and interests."
          images={[dating1, dating2, dating3]}
          githubUrls={["https://github.com/AbdulmalikAlayande/promiscuous.git"]}
          icons={[<BsGithub/>]}
        />
        <ProjectsCard
          title="AIRLINE RESERVATION SYSTEM"
          des="A comprehensive web application developed to enable users to effortlessly book flights,
          create itineraries, manage reservations, and check flight availability. With a focus on
          simplicity and user satisfaction, this application streamlines the travel experience for customers."
          images={[ars1, ars2, ars3]}
          githubUrls={["https://github.com/AbdulmalikAlayande/bola-air-backend.git", "https://github.com/AbdulmalikAlayande/bola-air-frontend.git"]}
          icons={[<BsGithub/>, <BsGithub/>]}/>
      </div>
    </section>
  );
}

export default Projects