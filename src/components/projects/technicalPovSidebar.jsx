import React, {useState} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {Icon} from "@iconify/react";
import {FaCode, FaDatabase, FaTrophy, FaTools} from "react-icons/fa";
import {BsFillLightbulbFill} from "react-icons/bs";
import {MdDescription} from "react-icons/md";

const TechnicalPovSidebar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        if (isOpen === true)
            setIsOpen(false);
        else if (!isOpen)
            setIsOpen(true)
    };

    return (
        <>
            <div className={`flex flex-col gap-6 p-4 xl:px-5 xl:py-5 rounded-lg shadow-shadowOne border-solid ${isOpen ? "translate-x-0" : "translate-x-0"} ease-in-out duration-300`}>
                <button onClick={toggleSidebar} className={"text-designColor"}>
                    <GiHamburgerMenu size={30} className={"text-designColor"}/>
                </button>
                {!isOpen ?
                    (
                        <>
                            <h2 className={"text-designColor"}>Table Of Contents</h2>
                            <ul className={"flex flex-col gap-6"}>
                                <li>
                                    <a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                       href={"#overview"}>Overview</a></li>
                                <li><a
                                    className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                    href={"#features"}>Features</a></li>
                                <li><a
                                    className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                    href={"#achievements"}>Achievements</a></li>
                                <li><a
                                    className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                    href={"#technologies-used"}>Technologies Used</a></li>
                                <li><a
                                    className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                    href={"#database"}>Database</a></li>
                                <li><a
                                    className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                    href={"#api"}>API</a></li>
                                <li><a
                                    className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                    href={"#testing"}>Testing</a></li>
                                <li><a
                                    className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"
                                    href={"#source-code"}>Source Code</a></li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <ul className={"flex flex-col gap-6"}>
                                <li>
                                    <a href={"#overview"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                                        <MdDescription size={30}/>
                                    </a>
                                </li>
                                <li>
                                    <a href={"#features"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                                        <BsFillLightbulbFill size={30}/>
                                    </a>
                                </li>
                                <li>
                                    <a href={"#achievements"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                                        <FaTrophy size={30}/>
                                    </a>
                                </li>
                                <li>
                                    <a href={"#technologies-used"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                                        <Icon icon={"bi:cpu-fill"} height={30}/>
                                    </a>
                                </li>
                                <li>
                                    <a href={"#database"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                                        <FaDatabase size={30}/>
                                    </a>
                                </li>
                                <li>
                                    <a href={"#api"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                                        <Icon icon={"mdi:api"} height={30}/>
                                    </a>
                                </li>
                                <li>
                                    <a href={"#testing"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                                        <FaTools size={30}/>
                                    </a>
                                </li>
                                <li>
                                    <a href={"#source-code"} className={"w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer"}>
                                        <FaCode size={30}/>
                                    </a>
                                </li>
                            </ul>
                        </>
                    )
                }

            </div>
        </>
    )
}
/*
<div className={"h-[full] flex flex-col gap-10 p-4 xl:px-12 xl:py-5 rounded-lg shadow-shadowOne"}>
</div>

 */

export default TechnicalPovSidebar
