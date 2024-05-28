import React from "react";
import { motion } from "framer-motion";
import {AchievementCard} from "./achievementCard";

const Achievement = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Achievements</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <AchievementCard
                        title="Postman Student API Expert."
                        subTitle="Postman"
                        result="View Certificate"
                        des="Earned the Postman Student API Expert certification, demonstrating proficiency in API design,
                        development, and testing using Postman. Gained in-depth knowledge of RESTful APIs, API documentation,
                        and automated testing."
                        link={"http://localhost:300"}
                    />
                    <AchievementCard
                        title="RabbitMQ Training"
                        subTitle="CloudAMQP."
                        result="View Certificate"
                        des="Successfully completed the Free RabbitMQ Training Course, gaining comprehensive knowledge
                        on building scalable applications using RabbitMQ. The course covered topics like Sending messages
                        all the way to running it in production, Benefits of RabbitMQ, AMQP, and message queue architectures.
                        Additionally, I learnt how to install and configure RabbitMQ and its plugins, enhancing application
                        scalability, resource efficiency, and reliability. The training also provided real-world use cases
                        and insights from leading experts."
                        link={"http://localhost:3000"}
                    />
                    <AchievementCard
                        title="RabbitMQ Training"
                        subTitle="CloudAMQP."
                        result="View Certificate"
                        des="Successfully completed the Free RabbitMQ Training Course, gaining comprehensive knowledge
                        on building scalable applications using RabbitMQ. The course covered topics like Sending messages
                        all the way to running it in production, Benefits of RabbitMQ, AMQP, and message queue architectures.
                        Additionally, I learnt how to install and configure RabbitMQ and its plugins, enhancing application
                        scalability, resource efficiency, and reliability. The training also provided real-world use cases
                        and insights from leading experts."
                        link={"http://localhost:3000"}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Achievement;
