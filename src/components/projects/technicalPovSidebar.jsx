import React, {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {Icon} from "@iconify/react";
import {FaCode, FaDatabase, FaTrophy, FaTools} from "react-icons/fa";
import {BsFillLightbulbFill} from "react-icons/bs";
import {MdDescription} from "react-icons/md";

const TechnicalPovSidebar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            { !isOpen ?
                (
                    <div className={"h-[full] w-10% flex flex-col justify-between gap-6 p-4 xl:px-12 xl:py-5 rounded-lg shadow-shadowOne"}>
                        <a href={"#overview"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                            <MdDescription size={30}/>
                        </a>
                        <a href={"#features"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                            <BsFillLightbulbFill size={30}/>
                        </a>
                        <a href={"#achievements"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                            <FaTrophy size={30}/>
                        </a>
                        <a href={"#technologies-used"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                            <Icon icon={"bi:cpu-fill"} height={30}/>
                        </a>
                        <a href={"#database"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                            <FaDatabase size={30}/>
                        </a>
                        <a href={"#api"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                            <Icon icon={"mdi:api"} height={30}/>
                        </a>
                        <a href={"#testing"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                            <FaTools size={30}/>
                        </a>
                        <a href={"#source-code"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                            <FaCode size={30}/>
                        </a>
                    </div>
                ): (
                    <div className={`w-[20%] ${isOpen ? "translate-x-0" : "translate-x-full"} ease-in-out duration-300`}>
                        <button onClick={toggleSidebar}>
                            <GiHamburgerMenu size={30} />
                        </button>
                        <h2 className={"text-designColor"}>Table Of Contents</h2>
                        <ul>
                            <li>
                                <a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                   href={"#overview"}>Overview</a></li>
                            <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                   href={"#features"}>Features</a></li>
                            <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                   href={"#achievements"}>Achievements</a></li>
                            <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                   href={"#technologies-used"}>Technologies Used</a></li>
                            <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                   href={"#database"}>Database</a></li>
                            <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                   href={"#api"}>API</a></li>
                            <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                   href={"#testing"}>Testing</a></li>
                            <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                   href={"#source-code"}>Source Code</a></li>
                        </ul>
                    </div>
                )
            }
        </>
    )
}

export default TechnicalPovSidebar
