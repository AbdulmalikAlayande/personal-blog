import React, {useState} from 'react'
import {FaHamburger} from "react-icons/fa";
import {Icon} from "@iconify/react";

const TechnicalPovSidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-[15%] flex flex-col lgl:py-10 gap-6 border-r-[3px] border-r-designColor fixed md:relative z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`} id={"technical-pov-sidebar"}>
            <button onClick={toggleSidebar}>
                <Icon icon={"system-uicons:menu-hamburger"} className={"text-lg w-10 h-10 rounded-md bg-black items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"}/>
            </button>
            <h2 className={"text-designColor"}>Table Of Contents</h2>
            <ul>
                <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer" href={"#overview"}>Overview</a></li>
                <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer" href={"#features"}>Features</a></li>
                <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer" href={"#achievements"}>Achievements</a></li>
                <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer" href={"#technologies-used"}>Technologies Used</a></li>
                <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer" href={"#database"}>Database</a></li>
                <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer" href={"#api"}>API</a></li>
                <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer" href={"#testing"}>Testing</a></li>
                <li><a className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer" href={"#source-code"}>Source Code</a></li>
            </ul>
        </div>        
    )
}

export default TechnicalPovSidebar
