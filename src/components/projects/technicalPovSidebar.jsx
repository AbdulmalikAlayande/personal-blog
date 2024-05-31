import React from 'react'

const TechnicalPovSidebar = () => {
    return (
        <div className={"w-[15%] items-center border-r-[3px] border-r-designColor"} id={"technical-pov-sidebar"}>
            <h2 className={"text-designColor"}>Table Of Contents</h2>
            <ul>
                <li><a href={"#description"}>Description</a></li>
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
