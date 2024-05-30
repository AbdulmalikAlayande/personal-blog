import React from 'react';

const ProjectTechnicalPov = (project) => {
    return (
        <>
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
                        {}
                    </ul>
                </section>
                <section id={"Backend"}>
                    <p>Languages And Framework</p>
                    <ul>
                        {}
                    </ul>
                    <p>Database and Caching</p>
                    <ul>
                        {}
                    </ul>
                    <p>Cloud Tools And Platform</p>
                    <ul>
                        {}
                    </ul>
                </section>
            </section>
            <section id={"database"}>
                <div id={"DBMS"}>
                    <p>Database Management System: {}</p>
                    <p>Reason: {}</p>
                </div>
                <div id={"Schema Design"}>
                    {}
                </div>
                <div id={"ERD"}>
                    <p>Entity Relationship Diagram</p>
                    <img src={""} alt={"Erd Diagram"}/>
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
                                <tr>
                                    <td>{}</td>
                                    <td>{}</td>
                                </tr>
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
                        {} 
                    </ul>
                </div>
                <p>Test Coverage: {}</p>
            </section>
            <section id={"source code"}>
                <p>Repository: <a href={"https://"}>GitHub Repo</a></p>
                <p>Code Snippets</p>
            </section>
            
        </>
    );
};

export default ProjectTechnicalPov;