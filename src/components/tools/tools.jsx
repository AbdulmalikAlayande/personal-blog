import * as React from 'react';
import Title from "../layouts/Title";
import {FaJava, FaPython, FaReact, FaDocker, FaJenkins, FaGit} from "react-icons/fa";
import {
    SiSpring, SiSpringboot, SiDjango, SiJavascript,
    SiTypescript, SiMysql, SiPostgresql, SiPostman,
    SiMongodb, SiRedis, SiRabbitmq, SiGooglecloud,
    SiMicrosoftazure, SiHeroku, SiElasticsearch,
    SiNumpy, SiPandas, SiApachekafka, SiVercel,
} from "react-icons/si";
import TextTitle from "../layouts/TextTitle";


const Tools = () => {

    return (
        <section id="tools" className="w-full py-20 border-b-[1px] border-b-black">
            <Title title="Tools" des="Tools and Technologies I Use" />
            <section className={"gap-10 mb-8"}>
                <TextTitle title={"Languages And Frameworks"}/>
                <div className="flex gap-4 mt-4">
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <FaJava size={30} />
                        </span>
                        <p>Java</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiSpring size={30} />
                        </span>
                        <p>Spring</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiSpringboot size={30} />
                        </span>
                        <p>Springboot</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <FaPython size={30} />
                        </span>
                        <p>Python</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiDjango size={30} />
                        </span>
                        <p>Django</p>
                    </span>

                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiJavascript size={30} />
                        </span>
                        <p>JavaScript</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiTypescript size={30} />
                        </span>
                        <p>Typescript</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <FaReact size={30} />
                        </span>
                        <p>React</p>
                    </span>
                </div>
            </section>
            <section className="gap-10 mb-8">
                <TextTitle title={"Databases"}/>
                <div className="flex gap-4 mt-4">
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiMysql size={30} />
                        </span>
                        <p>MySQL</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiPostgresql size={30} />
                        </span>
                        <p>PostgreSQL</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiMongodb size={30} />
                        </span>
                        <p>MongoDB</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiRedis size={30} />
                        </span>
                        <p>Redis</p>
                    </span>
                </div>
            </section>
            <section className={"gap-10 mb-8"}>
                <TextTitle title={"Cloud and DevOps"}/>
                <div className="flex gap-4 mt-4">
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <FaDocker size={30} />
                        </span>
                        <p>Docker</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <FaJenkins size={30} />
                        </span>
                        <p>Jenkins</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiMicrosoftazure size={30} />
                        </span>
                        <p>Azure</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiGooglecloud size={30} />
                        </span>
                        <p>Google Cloud</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiHeroku size={30} />
                        </span>
                        <p>Heroku</p>
                    </span>
                </div>
            </section>
            <section className={"gap-10"}>
                <TextTitle title={"Other Tools"}/>
                <div className="flex gap-4 mt-4">
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <FaGit size={30} />
                        </span>
                        <p>Git</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiNumpy size={30} />
                        </span>
                        <p>Numpy</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiPandas size={30} />
                        </span>
                        <p>Pandas</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiPostman size={30} />
                        </span>
                        <p>Postman</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiRabbitmq size={30} />
                        </span>
                        <p>RabbitMQ</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiElasticsearch size={30} />
                        </span>
                        <p>Elastic Search</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiApachekafka size={30}/>
                        </span>
                        <p>Kafka</p>
                    </span>
                    <span className="flex flex-col items-center gap-2">
                        <span className="bannerIcon">
                            <SiVercel size={30} />
                        </span>
                        <p>Vercel</p>
                    </span>
                </div>
            </section>
        </section>
    );
};

export default Tools