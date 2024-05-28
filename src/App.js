import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/resume";
// import Testimonial from "./components/testimonial/testimonial";
import Tools from "./components/tools/tools";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Tools />
        <Projects />
        <Resume />
        {/*<Testimonial />*/}
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
