import React from 'react'
import { FaCode, FaDev, FaBook } from "react-icons/fa";
import {SiAntdesign} from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Backend Development"
          des="I build robust backend systems with Python and Java, using Spring, Springboot
          and Django frameworks. I build systems that ensures data integrity and high performance."
          icon={<FaDev />}
        />
        <Card
          title="Frontend Development"
          des="I create responsive and interactive user interfaces with React, HTML, CSS, and JavaScript,
          I translate design mockups into functional, interactive web pages that are efficient and accessible."
          icon={<FaCode />}
        />
        <Card
          title="Technical Writing"
          des="I document technical processes, create guides and tutorials, and write blog posts.
          My clear and comprehensive writing makes complex concepts accessible to both technical
          and non-technical stakeholders."
          icon={<FaBook />}
        />
        <Card
          title="System Design"
          des="I design scalable, reliable, and maintainable system architectures, considering load balancing,
          microservices, database design, and cloud infrastructure to optimize performance and resilience."
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
}

export default Features