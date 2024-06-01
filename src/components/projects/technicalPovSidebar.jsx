import React, {useState} from 'react'
import {FaHamburger} from "react-icons/fa";

const TechnicalPovSidebar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`w-[15%] flex flex-col lgl:py-10 gap-6 border-r-[3px] border-r-designColor fixed md:relative z-50 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`} id={"technical-pov-sidebar"}>
            <button onClick={toggleSidebar}>
                <FaHamburger/>
            </button>
            <h2 className={"text-designColor"}>Table Of Contents</h2>
            <ul>
                <li><a href={"#overview"}>Overview</a></li>
                <li><a href={"#features"}>Features</a></li>
                <li><a href={"#achievements"}>Achievements</a></li>
                <li><a href={"#technologies-used"}>Technologies Used</a></li>
                <li><a href={"#database"}>Database</a></li>
                <li><a href={"#api"}>API</a></li>
                <li><a href={"#testing"}>Testing</a></li>
                <li><a href={"#source-code"}>Source Code</a></li>
            </ul>
        </div>        
    )
}

export default TechnicalPovSidebar
