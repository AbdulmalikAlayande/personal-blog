import React from 'react';
import {Icon} from "@iconify/react";

const ProjectTechnicalPov = ({project}) => {

    return (
        <div className={"w-[82%]"}>
            <section className={"text-lg w-full py-10 border-b-[1px] mt-0 border-b-black flex flex-col gap-6"} id={"overview"}>
                <a href={"#overview"}>
                    <h1 className={"text-4xl text-designColor"}>Overview</h1>
                </a>
                <h3 className={"text-designColor"} id={"Title"}>
                    {project.description.title}
                </h3>
                <p id={"description"}>
                    {project.description.des}
                </p>
            </section>
            <section className={"w-full py-10 border-b-[1px] border-b-black flex flex-col justify-around gap-6"} id={"features"}>
                <a href={"#features"}>
                    <h1 className={"text-4xl text-designColor"}>Features</h1>
                </a>
                <ul className={"text-lg list-disc flex flex-col pl-10"}>
                    {
                        project.features.map((feature, index) => (
                            <li id={index}>{feature}</li>
                        ))
                    }
                </ul>
            </section>
            <section className={"w-full py-10 border-b-[1px] border-b-black flex flex-col justify-around gap-6"} id={"achievements"}>
                <a href={"#achievements"}>
                    <h1 className={"text-4xl text-designColor"}>Achievements</h1>
                </a>
                <ul className={"text-lg list-disc flex flex-col pl-10"}>
                    {
                        project.achievements.map((achievement, index) => (
                            <li id={index}>{achievement}</li>
                        ))
                    }
                </ul>
            </section>
            <section
                className={"w-full py-10 text-lg border-b-[1px] border-b-black flex flex-col justify-between gap-6"}
                id={"technologies-used"}>
                <a className={"text-4xl text-designColor"} href={"#technologies-used"}>
                    <h3>Technologies Used</h3>
                </a>
                <section className={"flex flex-col justify-between h-[40%]"} id={"Frontend"}>
                    <h3 className={"text-lightText text-2xl"}>Frontend</h3>
                    <div className={"pl-10"}>
                        <p className={"text-designColor"}>Languages And Framework</p>
                        <ol className={"list-disc flex flex-col pl-10"}>
                            {
                                project.technologies.frontend.languagesAndFramework.map((lang, index) => (
                                    <li id={index.toString()}>
                                        {lang}
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                    <div className={"pl-10"}>
                        <p className={"text-designColor"}>Database and Caching</p>
                        <ol className={"list-disc flex flex-col pl-10"}>
                            {
                                project.technologies.frontend.databaseAndCache.map((data, index) => (
                                    <li id={index.toString()}>{data}</li>
                                ))
                            }
                        </ol>
                    </div>
                    <div className={"pl-10"}>
                        <p className={"text-designColor"}>Tools And Platform</p>
                        <ol className={"list-disc flex flex-col pl-10"}>
                            {
                                project.technologies.frontend.cloudTools.map((tool, index) => (
                                    <li id={index.toString()}>{tool}</li>
                                ))
                            }
                        </ol>
                    </div>
                </section>
                <section className={"flex flex-col justify-between h-[40%]"} id={"Frontend"}>
                    <h3 className={"text-lightText text-2xl"}>Backend</h3>
                    <div className={"pl-10"}>
                        <p className={"text-designColor"}>Languages And Framework</p>
                        <ol className={"list-disc flex flex-col pl-10"}>
                            {
                                project.technologies.backend.languagesAndFramework.map((lang, index) => (
                                    <li id={index.toString()}>
                                        {lang}
                                    </li>
                                ))
                            }
                        </ol>
                    </div>
                    <div className={"pl-10"}>
                        <p className={"text-designColor"}>Database and Caching</p>
                        <ol className={"list-disc flex flex-col pl-10"}>
                            {
                                project.technologies.backend.databaseAndCache.map((data, index) => (
                                    <li id={index.toString()}>{data}</li>
                                ))
                            }
                        </ol>
                    </div>
                    <div className={"pl-10"}>
                        <p className={"text-designColor"}>Tools And Platform</p>
                        <ol className={"list-disc flex flex-col pl-10"}>
                            {
                                project.technologies.backend.cloudTools.map((tool, index) => (
                                    <li id={index.toString()}>{tool}</li>
                                ))
                            }
                        </ol>
                    </div>
                </section>
            </section>
            <section className={"text-lg w-full py-10 border-b-[1px] mt-0 border-b-black flex flex-col gap-6"} id={"database"}>
                <a href={"#database"}>
                    <h1 className={"text-4xl text-designColor"}>Database</h1>
                </a>
                <div className={"flex flex-col gap-4"} id={"DBMS--Schema-Design--Erd"}>
                    <p><span className={"text-designColor"}>Database Management System:</span> {project.database.dbms}</p>
                    <p><span className={"text-designColor"}>Reason:</span> {project.database.reason}</p>
                    <p><span className={"text-designColor"}>Schema Design:</span> {project.database.schemaDesign}</p>
                    <div className={"w-full p-4 xl:px-12 h-auto xl:py-5 rounded-lg shadow-shadowOne flex flex-col justify-between bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"} id={"ERD"}>
                        <p className={"text-designColor"}>Entity Relationship Diagram</p>
                        <div className="w-full h-[80%] overflow-hidden rounded-lg">
                            <img className={"w-[100%]"} src={project.database.erd} alt={"Erd Diagram"}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"text-lg w-full py-10 border-b-[1px] mt-0 border-b-black flex flex-col gap-6"} id={"APIs"}>
                <a href={"#api"}>
                    <h1 className={"text-4xl text-designColor"}>APIs</h1>
                </a>
                <section className={"flex flex-col justify-between gap-6"}>
                    <div className={"flex flex-col gap-4"} id={"endpoint"}>
                        <p className={"text-designColor"}>Endpoints</p>
                        <table className="table-auto border-collapse border-2 border-gray-500">
                            <thead>
                                <tr>
                                    <th className="border-2 border-gray-500 px-4 py-2" scope={'col'}>Title</th>
                                    <th className="border-2 border-gray-500 px-4 py-2" scope={'col'}>Description</th>
                                    <th className="border-2 border-gray-500 px-4 py-2" scope={'col'}>Method</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                project.api.endpoints.map((endpoint) => (
                                    <tr>
                                        <td className="border-2 border-gray-500 px-4 py-2">{endpoint.title}</td>
                                        <td className="border-2 border-gray-500 px-4 py-2">{endpoint.description}</td>
                                        <td className="border-2 border-gray-500 px-4 py-2">{endpoint.method}</td>
                                    </tr>
                                ))

                            }
                            </tbody>
                        </table>
                    </div>
                    <div id={"authentication"}>
                        <p><span className={"text-designColor"}>Authentication:</span> {project.api.authentication}</p>
                    </div>
                </section>
            </section>
            <section className={"text-lg w-full py-10 border-b-[1px] mt-0 border-b-black flex flex-col gap-6"}
                     id={"testing"}>
                <a href={"#testing"}>
                    <h1 className={"text-4xl text-designColor"}>Testing</h1>
                </a>
                <div>
                    <p className={"text-designColor"}>Testing Frameworks</p>
                    <ul className={"text-lg list-disc w-[50%] flex flex-col pl-10"}>
                        {
                            project.testing.testFrameworks.map((framework, index) => (
                                <li id={index.toString()}>{framework}</li>
                            ))
                        }
                    </ul>
                </div>
                <p><span className={"text-designColor"}>Test Coverage:</span> {project.testing.testCoverage}</p>
            </section>
            <section className={"text-lg w-full py-10 border-b-[1px] mt-0 border-b-black flex flex-col gap-6"} id={"source-code"}>
                <a href={"#source-code"}>
                    <h1 className={"text-4xl text-designColor"}>Source Code</h1>
                </a>
                <div className={"h-[35%] flex flex-col justify-between gap-4"}>
                    <p>Repository</p>
                    <div className={"flex w-[50%] justify-between"} >
                        <a className={"w-[45%] p-4 h-auto rounded-lg shadow-shadowOne flex items-center justify-around gap-4 bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:text-designColor hover:from-gray-900 hover:gray-900 transition-colors duration-1000"} href={project.sourceCode.repository.backend}>
                            <span>Backend Repo</span>
                            <Icon icon={"akar-icons:github-fill"} className={"text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"}/>
                        </a>
                        <a className={"w-[45%] p-4 h-auto rounded-lg shadow-shadowOne flex items-center justify-around gap-4 bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:text-designColor hover:from-gray-900 hover:gray-900 transition-colors duration-1000"} href={project.sourceCode.repository.frontend}>
                            <span>Frontend Repo</span>
                            <Icon icon={"akar-icons:github-fill"} className={"text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer"}/>
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ProjectTechnicalPov;