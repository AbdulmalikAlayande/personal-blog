import React from 'react';
import TechnicalPovSidebar from './technicalPovSidebar';

const ProjectTechnicalPov = (project) => {
    return (
        <div className={"flex"}>
            <TechnicalPovSidebar/>
            <div>
                <section id={"description"}>
                    <h1 id={"Title"}>
                        {project.description.title}
                    </h1>
                    <p id={"description"}>
                        {project.description.des}
                    </p>
                </section>
                <section id={"technologies used"}>
                    <section id={"Frontend"}>
                        <p>Languages And Framework</p>
                        <ul>
                            {
                                project.technologies.frontend.languagesAndFrameworks.map((lang)=>(
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
                                project.technologies.backend.languagesAndFrameworks.map((lang)=>(
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
                <section id={"database"}>
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
                <section id={"APIs"}>
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
                <section id={"testing"}>
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
                <section id={"source code"}>
                    <p>Repository: <a href={project.sourceCode.repository}>GitHub Repo</a></p>
                    <p>Code Snippets</p>
                </section>
                
            </div>
        </div>
    );
};

export default ProjectTechnicalPov;