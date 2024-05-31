export const projects = [
    {
        id: "ars",
        description: {
            title: "Airline Reservation System",
            des: "A comprehensive system designed to handle airline bookings, manage customer data, and streamline flight scheduling and management."
        },
        technologies: {
            frontend: {
                languagesAndFramework: ["TypeScript", "React.js"],
                databaseAndCache: ["IndexedDB"],
                cloudTools: ["Docker", "Vercel"]
            },
            backend: {
                languagesAndFramework: ["Java", "Springboot"],
                databaseAndCache: ["MySQL", "Redis"],
                cloudTools: ["Docker", "Heroku"]
            }
        },
        database: {
            dbms: "MySQL",
            reason: "Chosen for its reliability and performance in handling complex queries and transactions.",
            schemaDesign: "Normalized schema design to optimize for read and write performance.",
            erd: "https://erd.jpg"
        },
        api: {
            endpoints: [
                {
                    title: "Create Booking",
                    description: "Endpoint to create a new booking in the system."
                },
                {
                    title: "Fetch Flights",
                    description: "Endpoint to retrieve available flights based on search criteria."
                },
                {
                    title: "Cancel Booking",
                    description: "Endpoint to cancel an existing booking."
                }
            ],
            authentication: "JWT-based authentication to ensure secure access to the endpoints."
        },
        testing: {
            testFrameworks: ["JUnit", "Mockito", "Cypress"],
            testCoverage: "Extensive unit and integration tests covering 90% of the codebase."
        },
        sourceCode: {
            repository: "https://github.com/yourusername/airline-reservation-system"
        }
    },
    {
        id: "lms",
        description: {
            title: "Learning Management System",
            des: "A robust platform designed to facilitate online learning, manage courses, track student progress, and provide educational resources."
        },
        technologies: {
            frontend: {
                languagesAndFramework: ["JavaScript", "React.js"],
                databaseAndCache: ["IndexedDB"],
                cloudTools: ["AWS S3", "Netlify"]
            },
            backend: {
                languagesAndFramework: ["Node.js", "Express.js"],
                databaseAndCache: ["MongoDB", "Redis"],
                cloudTools: ["AWS Lambda", "AWS DynamoDB"]
            }
        },
        database: {
            dbms: "MongoDB",
            reason: "Selected for its flexibility in handling unstructured data and ease of scalability.",
            schemaDesign: "Document-based schema to accommodate dynamic course content and student records.",
            erd: "https://example.com/lms-erd.jpg"
        },
        api: {
            endpoints: [
                {
                    title: "Enroll Student",
                    description: "Endpoint to enroll a student in a course."
                },
                {
                    title: "Get Course Content",
                    description: "Endpoint to retrieve the content of a specific course."
                },
                {
                    title: "Submit Assignment",
                    description: "Endpoint to submit an assignment for grading."
                }
            ],
            authentication: "OAuth2.0 for secure authentication and authorization."
        },
        testing: {
            testFrameworks: ["Mocha", "Chai", "Jest"],
            testCoverage: "Comprehensive test suites with coverage reports indicating 85% of the codebase."
        },
        sourceCode: {
            repository: "https://github.com/yourusername/learning-management-system"
        }
    },
    {
        id: "ehr",
        description: {
            title: "Electronic Health Record(EHR) System",
            des: "A secure and efficient system to manage patient records, streamline healthcare workflows, and enhance patient care."
        },
        technologies: {
            frontend: {
                languagesAndFramework: ["TypeScript", "Angular"],
                databaseAndCache: ["IndexedDB"],
                cloudTools: ["Azure", "Firebase"]
            },
            backend: {
                languagesAndFramework: ["Python", "Django"],
                databaseAndCache: ["PostgreSQL", "Memcached"],
                cloudTools: ["Azure Functions", "Firebase"]
            }
        },
        database: {
            dbms: "PostgreSQL",
            reason: "Chosen for its advanced data integrity features and support for complex queries.",
            schemaDesign: "Relational schema design to ensure data integrity and efficient access.",
            erd: "https://example.com/ehr-erd.jpg"
        },
        api: {
            endpoints: [
                {
                    title: "Create Patient Record",
                    description: "Endpoint to create a new patient record."
                },
                {
                    title: "Update Patient Record",
                    description: "Endpoint to update existing patient information."
                },
                {
                    title: "Fetch Patient History",
                    description: "Endpoint to retrieve the medical history of a patient."
                }
            ],
            authentication: "Two-factor authentication (2FA) for enhanced security."
        },
        testing: {
            testFrameworks: ["PyTest", "Selenium"],
            testCoverage: "High coverage of critical functionalities with unit, integration, and end-to-end tests."
        },
        sourceCode: {
            repository: "https://github.com/yourusername/ehr-system"
        }
    }
];
