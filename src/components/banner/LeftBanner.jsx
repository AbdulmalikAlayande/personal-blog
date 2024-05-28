import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMedium, FaGithub} from "react-icons/fa";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["A Software Engineer.", "Aspiring Systems Engineer.", "An Entrepreneur."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY BLOG</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Abdulmalik Alayande</span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I build robust and efficient software solutions using multiple programming languages and frameworks. I create
                    innovative applications that meet user needs and business requirements, thriving in collaborative environments
                    while continuously enhancing my skills.
                </p>
                <p>
                    As an aspiring Systems Engineer, I am studying and exploring the complexities of system architecture and
                    integration. My goal is to design and manage reliable and scalable large-scale systems, fascinated by the
                    interplay between hardware and software.
                </p>
                <p>
                    As an Entrepreneur, I solve real-world problems through technology and innovation, identify market gaps and
                    develop solutions that address these issues, creating value for users. My entrepreneurial spirit drives me to
                    think creatively and strategically, aiming to make a positive impact on society.
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                      Find me on
                    </h2>
                    <div className="flex gap-4">
                        <a href={"https://github.com/AbdulmalikAlayande/"}>
                            <span className="bannerIcon">
                                <FaGithub size={30}/>
                            </span>
                        </a>
                        <a href={"https://web.facebook.com/abdulmalik.alayande.39"}>
                            <span className="bannerIcon">
                                <FaFacebookF size={30}/>
                            </span>
                        </a>
                        <a href={"https://x.com/The_good_man02"}>
                            <span className="bannerIcon">
                                <FaTwitter size={30}/>
                            </span>
                        </a>
                        <a href={"https://www.linkedin.com/in/abdulmalik-alayande-b49814250/"}>
                            <span className="bannerIcon">
                                <FaLinkedinIn size={30}/>
                            </span>
                        </a>
                        <a href={"https://www.instagram.com/blaq_mhee/"}>
                            <span className="bannerIcon">
                                <FaInstagram size={30}/>
                            </span>
                        </a>
                        <a href={"https://medium.com/@alaabdulmalik03"}>
                            <span className="bannerIcon">
                                <FaMedium size={30}/>
                            </span>
                        </a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBanner