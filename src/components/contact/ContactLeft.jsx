import React from 'react'
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaTelegram, FaDiscord} from "react-icons/fa";
import { contactImg } from "../../assets/index";
import {SiGmail, SiReddit} from "react-icons/si";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Abdulmalik Alayande</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Engineer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
            I am always open to new opportunities, whether it be for a full-time role,
            freelance project, or collaboration. If you are looking to hire a dedicated software engineer,
            have an exciting project in mind, or simply want to connect, feel free to reach out.
            I look forward to the possibility of working together and making impactful contributions
            to your team or project.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+2347036174617</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">alaabdulmalik03@gmail.com</span>
        </p>
      </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
            <div className="flex gap-4">
                <a href="https://wa.me/+2347036174617" target={"_blank"} rel={"noopener noreferrer"}>
                    <span className="bannerIcon">
                        <FaWhatsapp size={30}/>
                    </span>
                </a>
                <a href="https://t.me/+2347036174617" target={"_blank"} rel={"noopener noreferrer"}>
                    <span className="bannerIcon">
                        <FaTelegram size={30}/>
                    </span>
                </a>
                <a href={"mailto:alaabdulmalik03@gmail.com"} target={"_blank"} rel={"noopener noreferrer"}>
                    <span className="bannerIcon">
                        <SiGmail size={30}/>
                    </span>
                </a>
                <a href={"https://discord.com/"} title="abdulmalik03" target={"_blank"} rel={"noopener noreferrer"}>
                    <span className="bannerIcon">
                        <FaDiscord size={30}/>
                    </span>
                </a>
            </div>
            <div className={"flex gap-4"}>
                <a href={"https://web.facebook.com/abdulmalik.alayande.39"} target={"_blank"} rel={"noopener noreferrer"}>
                    <span className="bannerIcon">
                        <FaFacebookF size={30}/>
                    </span>
                </a>
                <a href={"https://x.com/The_good_man02"} target={"_blank"} rel={"noopener noreferrer"}>
                    <span className="bannerIcon">
                        <FaTwitter size={30}/>
                    </span>
                </a>
                <a href={"https://www.linkedin.com/in/abdulmalik-alayande-b49814250/"} target={"_blank"}  rel={"noopener noreferrer"}>
                    <span className="bannerIcon">
                        <FaLinkedinIn size={30}/>
                    </span>
                </a>
                <a href={"https://www.reddit.com/user/bolaballer/"} target={"_blank"} rel={"noopener noreferrer"}>
                    <span className="bannerIcon">
                        <SiReddit size={30}/>
                    </span>
                </a>
            </div>
        </div>
    </div>
  );
}

export default ContactLeft