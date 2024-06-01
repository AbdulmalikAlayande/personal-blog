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
        achievements: [
            "Developed an airline reservation system designed to facilitate ticket reservation and flight bookings, allowing users to search, reserve tickets, and pay for flights efficiently.",
            "Utilized Spring Security and OAuth 2.0 and JSON Web Tokens (JWT) authentication mechanisms for secure authentication and authorization, ensuring user data privacy and system integrity.",
            "Integrated FlightAware API to retrieve real-time flight information, including schedules, and availability enhancing the accuracy and reliability of the reservation system.",
            "Integrated PayStack payment gateway for secure and convenient payment processing, allowing users to easily complete transactions with various payment methods.",
            "Implemented an in-app notification system using RabbitMQ as the message broker, enabling real-time communication of important updates and alerts to users regarding their flight reservations, booking confirmations, and schedule changes.",
            "Utilized Dijkstra's algorithm for route optimization and flight scheduling, enabling the system to calculate the most efficient routes and flight paths based on factors such as distance, time, and availability.",
            "Incorporated the Observer design pattern to implement event-driven architecture for handling flight status updates, allowing subscribed users to receive notifications and updates in real-time whenever there are changes to their booked flights or travel itineraries.",
            "Implemented the Factory Method design pattern for the creating flight-related objects and entities, like flights, bookings, and payment transactions, ensuring flexible and scalable object creation while adhering to the SOLID principles of object-oriented design.",
            "Designed and implemented a database schema to efficiently store and manage flight details, user profiles, booking records, and payment transactions.",
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
        achievements: [
            "Led a team of four engineers to develop a Learning Management Platform aimed at equipping citizens with valuable skills and fostering social protection initiatives.",
            "Integrated Google Classroom API to streamline classroom administration and enhance collaboration between educators and learners, contributing to the platform's effectiveness in facilitating knowledge dissemination.",
            "Implemented Live Session functionality using Google Meet API integration. to foster interaction between facilitators and learners.",
            "Implemented Class Scheduling and Organization functionality leveraging the Google Calendar API, to facilitate effortless management and coordination of educational activities with precision and ease.",
            "Developed the classroom resources management functionality, using Google Drive API, to allow users organize, store, and access to educational materials such as assignments, notes, and classwork with efficiency and convenience.",
            "Implemented authentication and authorization mechanisms to ensure secure access to classroom resources, removing the risk of unauthorized access and data breaches.",
            "Deployed the Learning Management Platform to Google Cloud Platform (GCP), utilizing its robust infrastructure to ensure scalability, reliability, and accessibility for users across the country.",
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
        achievements: [
            "Led a team of six engineers in the development of an Electronic Health Record (EHR) system from scratch, ensuring compliance with HIPAA and HITECH regulations, increasing patient data accuracy and security, and streamlined patient data management to improve healthcare delivery.",
            "Implemented key features of the EHR system, including: Patient management, Appointment scheduling, Medical records management, and Prescription management.",
            "Led the integration of Interoperability standards such as HL7 (Health Level Seven) and FHIR (Fast Healthcare Interoperability Resources), to enable seamless data exchange between different healthcare systems.",
            "Integrated Firebase Realtime Database for real-time patient medical logs and health records management.",
            "Implemented Role-Based Access Control (RBAC) to ensure granular access control and maintain data confidentiality, allowing only authorized personnel to view and modify patient records based on their roles and permissions.",
            "Employed robust encryption techniques and SSL/TLS transmission protocols to safeguard patient data during transmission over networks, ensuring compliance with GDPR (General Data Protection Regulation) and PHI (Protected Health Information) privacy and security standards.",
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
