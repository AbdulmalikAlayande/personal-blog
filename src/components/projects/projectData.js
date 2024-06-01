import {testErd} from "../../assets";

export const projects = [
    {
        id: "ars",
        description: {
            title: "Airline Reservation System",
            des: "A comprehensive system designed to handle airline bookings, manage customer data, and streamline flight scheduling and management. This project involved the creation of a user-friendly web interface for customers to book flights, an admin panel for airline staff to manage flights and reservations, and an API to handle all backend processes securely and efficiently."
        },
        features: [
            "User registration and authentication",
            "Flight search and booking",
            "Payment processing",
            "Flight management for admins",
            "Booking cancellation and modification",
            "Email notifications for booking confirmations and updates"
        ],
        technologies: {
            frontend: {
                languagesAndFramework: ["TypeScript", "React.js"],
                databaseAndCache: ["IndexedDB", "Redux"],
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
            erd: testErd
        },
        api: {
            endpoints: [
                {
                    title: "Create Booking",
                    description: "Endpoint to create a new booking in the system.",
                    method: "POST",
                },
                {
                    title: "Fetch Flights",
                    description: "Endpoint to retrieve available flights based on search criteria.",
                    method: "GET",
                },
                {
                    title: "Cancel Booking",
                    description: "Endpoint to cancel an existing booking.",
                    method: "DELETE",
                },
            ],
            authentication: "JWT-based authentication to ensure secure access to the endpoints.",
        },
        testing: {
            testFrameworks: ["JUnit", "Mockito", "Cypress"],
            testCoverage: "Extensive unit and integration tests covering 90% of the codebase."
        },
        sourceCode: {
            repository: {
                backend: "https://github.com/AbdulmalikAlayande/bola-air-backend",
                frontend: "https://github.com/AbdulmalikAlayande/bola-air-frontend",
            }
        }
    },
    {
        id: "lms",
        description: {
            title: "Learning Management System",
            des: "A robust platform designed to facilitate online learning, manage courses, track student progress, and provide educational resources. The system supports a wide range of educational activities, including course creation, student enrollment, assignment submission, and grading. It provides an interactive learning environment with features like forums, quizzes, and real-time feedback."
        },
        features: [
            "Course creation and management",
            "Student enrollment and tracking",
            "Assignment submission and grading",
            "Interactive quizzes and assessments",
            "Discussion forums and messaging",
            "Progress tracking and reporting"
        ],
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
            erd: testErd,
        },
        api: {
            endpoints: [
                {
                    title: "Enroll Student",
                    description: "Endpoint to enroll a student in a course.",
                    method: "POST",
                },
                {
                    title: "Get Course Content",
                    description: "Endpoint to retrieve the content of a specific course.",
                    method: "GET",
                },
                {
                    title: "Submit Assignment",
                    description: "Endpoint to submit an assignment for grading.",
                    method: "POST",
                }
            ],
            authentication: "OAuth2.0 for secure authentication and authorization.",
        },
        testing: {
            testFrameworks: ["Mocha", "Chai", "Jest"],
            testCoverage: "Comprehensive test suites with coverage reports indicating 85% of the codebase.",
        },
        sourceCode: {
            repository: {
                backend: "https://github.com/AbdulmalikAlayande/bola-air-backend",
                frontend: "https://github.com/AbdulmalikAlayande/bola-air-frontend",
            }
        }
    },
    {
        id: "ehr",
        description: {
            title: "Electronic Health Record(EHR) System",
            des: "A secure and efficient system to manage patient records, streamline healthcare workflows, and enhance patient care. The EHR system allows healthcare providers to access patient information in real-time, ensuring accurate and up-to-date records. It supports patient registration, medical history tracking, appointment scheduling, and secure communication between healthcare providers and patients."
        },
        features: [
            "Patient registration and management",
            "Medical history tracking",
            "Appointment scheduling",
            "Secure messaging between providers and patients",
            "Prescription management",
            "Billing and insurance processing"
        ],
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
                    description: "Endpoint to create a new patient record.",
                    method: "POST",
                },
                {
                    title: "Update Patient Record",
                    description: "Endpoint to update existing patient information.",
                    method: "PATCH",
                },
                {
                    title: "Fetch Patient History",
                    description: "Endpoint to retrieve the medical history of a patient.",
                    method: "GET",
                },
            ],
            authentication: "Two-factor authentication (2FA) for enhanced security.",
        },
        testing: {
            testFrameworks: ["PyTest", "Selenium"],
            testCoverage: "High coverage of critical functionalities with unit, integration, and end-to-end tests.",
        },
        sourceCode: {
            repository: {
                backend: "https://github.com/AbdulmalikAlayande/bola-air-backend",
                frontend: "https://github.com/AbdulmalikAlayande/bola-air-frontend",
            }
        }
    }
];
