import React, {useEffect} from 'react';
import TextTitle from "../layouts/TextTitle";

const ProjectTechnicalPov = ({project}) => {

    useEffect(() => {
        console.log('in tech pov ==> ', project);
    }, []);

    return (
        <div className={"w-[82%]"}>
            <section className={"w-full py-20 border-b-[1px] border-b-black"} id={"description"}>
                <h1 className={"text-4xl text-designColor"} id={"Title"}>
                    {project.description.title}
                </h1>
                <p id={"description"}>
                    {project.description.des}
                </p>
            </section>
            <section className={"w-full py-20 border-b-[1px] border-b-black"} id={"technologies used"}>
                <a href={"#technologies-used"}>
                    <TextTitle title={"Technologies Used"}/>
                </a>
                <section id={"Frontend"}>
                    <p>Languages And Framework</p>
                    <ul>
                        {
                            project.technologies.frontend.languagesAndFramework.map((lang)=>(
                                <li>
                                    {lang}
                                </li>
                            ))
                        }
                    </ul>
                    <p>Database and Caching</p>
                    <ul>
                        {
                            project.technologies.frontend.databaseAndCache.map(data => (
                                <li>{data}</li>
                            ))
                        }
                    </ul>
                    <p>Tools And Platform</p>
                    <ul>
                        {
                            project.technologies.frontend.cloudTools.map((tool)=>(
                                <li>{tool}</li>
                            ))
                        }
                    </ul>
                </section>
                <section id={"Backend"}>
                    <p>Languages And Framework</p>
                    <ul>
                        {
                            project.technologies.backend.languagesAndFramework.map((lang)=>(
                                <li>
                                    {lang}
                                </li>
                            ))
                        }
                    </ul>
                    <p>Database and Caching</p>
                    <ul>
                        {
                            project.technologies.backend.databaseAndCache.map(data => (
                                <li>{data}</li>
                            ))
                        }
                    </ul>
                    <p>Cloud Tools And Platform</p>
                    <ul>
                        {
                            project.technologies.backend.cloudTools.map((tool)=>(
                                <li>{tool}</li>
                            ))
                        }
                    </ul>
                </section>
            </section>
            <section className={"w-full py-20 border-b-[1px] border-b-black"} id={"database"}>
                <a href={"#database"}>
                    <TextTitle title={"Database"}/>
                </a>
                <div id={"DBMS"}>
                    <p>Database Management System: {project.database.dbms}</p>
                    <p>Reason: {project.database.reason}</p>
                </div>
                <div id={"Schema Design"}>
                    {project.database.schemaDesign}
                </div>
                <div id={"ERD"}>
                    <p>Entity Relationship Diagram</p>
                    <img src={project.database.erd} alt={"Erd Diagram"}/>
                </div>
            </section>
            <section className={"w-full py-20 border-b-[1px] border-b-black"} id={"APIs"}>
                <a href={"#api"}>
                    <TextTitle title={"APIs"}/>
                </a>
                <div id={"endpoint"}>
                    <p>Endpoints</p>
                    <table>
                        <thead>
                            <tr>
                                <th scope={'col'}>Title</th>
                                <th scope={'col'}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                project.api.endpoints.map((endpoint)=>(
                                    <tr>
                                        <td>{endpoint.title}</td>
                                        <td>{endpoint.description}</td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>
                <div id={"authentication"}>

                </div>
            </section>
            <section className={"w-full py-20 border-b-[1px] border-b-black"} id={"testing"}>
                <a href={"#testing"}>
                    <TextTitle title={"Testing"}/>
                </a>
                <div>
                    <p>Testing Frameworks</p>
                    <ul>
                        {
                            project.testing.testFrameworks.map((framework)=>(
                                <li>{framework}</li>
                            ))
                        }
                    </ul>
                </div>
                <p>Test Coverage: {project.testing.testCoverage}</p>
            </section>
            <section className={"w-full py-20 border-b-[1px] border-b-black"} id={"source code"}>
                <a href={"#source-code"}>
                    <TextTitle title={"Source Code"}/>
                </a>
                <TextTitle title={"Source Code"}/>
                <p>Repository: <a href={project.sourceCode.repository}>GitHub Repo</a></p>
                <p>Code Snippets</p>
            </section>

        </div>
    );
};

export default ProjectTechnicalPov;