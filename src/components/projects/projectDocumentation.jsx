import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import ProjectTechnicalPov from "./projectTechnicalPov";
import {projects} from "./projectData";
import TechnicalPovSidebar from "./technicalPovSidebar";

function ProjectDocumentation() {

    const parameter = useParams()
    const [project, setProject] = useState(null);

    useEffect(() => {

        function getProject() {
            for (const project of projects) {
                if (project.id === parameter.id) {
                    return project
                }
            }
        }
        setProject(getProject());
    }, [project, parameter])

    if (!project) {
        return <div>Loading...</div>

    }
    else if (project) {
        return (
            <div className={"flex flex-row justify-between w-full h-auto bg-bodyColor text-lightText px-4"}>
                <TechnicalPovSidebar/>
                <ProjectTechnicalPov project={project}/>
            </div>
        );
    }
}

export default ProjectDocumentation;