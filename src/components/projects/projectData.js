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
            "Designed and implemented a database schema to efficiently store and manage flight details, user profiles, booking records, and payment transactions."
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
            erd: "Not Available"
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
            testFrameworks: ["JUnit", "Mockito", "Jest"],
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
                cloudTools: ["Vercel"]
            },
            backend: {
                languagesAndFramework: ["Java", "Springboot"],
                databaseAndCache: ["PostgreSQL", "Redis"],
                cloudTools: ["GCP"]
            }
        },
        database: {
            dbms: "MongoDB",
            reason: "Selected for its flexibility in handling unstructured data and ease of scalability.",
            schemaDesign: "Document-based schema to accommodate dynamic course content and student records.",
            erd: "Not Available",
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
            testFrameworks: ["Junit", "Mockito", "Jest"],
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
                languagesAndFramework: ["TypeScript", "React.js"],
                databaseAndCache: ["IndexedDB"],
                cloudTools: ["Vercel", "Firebase"]
            },
            backend: {
                languagesAndFramework: ["Java", "Springboot"],
                databaseAndCache: ["PostgreSQL", "Memcached"],
                cloudTools: ["Heroku", "Firebase"]
            }
        },
        database: {
            dbms: "PostgreSQL",
            reason: "Chosen for its advanced data integrity features and support for complex queries.",
            schemaDesign: "Relational schema design to ensure data integrity and efficient access.",
            erd: "Not Available"
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
            testFrameworks: ["PyTest"],
            testCoverage: "High coverage of critical functionalities with unit, integration, and end-to-end tests.",
        },
        sourceCode: {
            repository: {
                backend: "https://github.com/AbdulmalikAlayande/e-Reach-backend",
                frontend: "https://github.com/AbdulmalikAlayande/e-Reach-frontend",
            }
        }
    },
    {
        id: "blog",
        description: {
            title: "Blog Application",
            des: "A feature-rich blogging platform built using Django and Django REST Framework, allowing users to create, publish, and manage blog posts. The application supports various functionalities such as content creation, tagging, categorization, and user engagement through comments and reviews."
        },
        features: [
            "User authentication and profile management",
            "Content creation and editing",
            "Tagging and categorization",
            "Comments and replies",
            "Search and filtering",
            "SEO-friendly URLs",
            "Content moderation and review system",
            "Social media sharing"
        ],
        achievements: [
            "Designed and built a blog application using Django and Django REST Framework, enabling users to create, publish, and manage blog posts effectively.",
            "Implemented content creation, tagging, and categorization features to allow bloggers to organize and manage their posts efficiently.",
            "Utilized Django's admin interface to provide an intuitive backend dashboard for content creators, allowing them to publish, edit, and delete posts with ease.",
            "Developed a commenting system to facilitate user engagement and interaction with content, including moderation, replies, and notifications.",
            "Implemented input validation, data sanitization, HTTPS encryption, and protection against SQL injection vulnerabilities to ensure secure and reliable operations.",
            "Integrated a search and filtering functionality to enhance user experience, allowing users to easily find relevant content.",
            "Implemented a review system where users can rate and provide feedback on posts, increasing user interaction and content credibility.",
            "Integrated social media sharing features to allow users to easily share blog posts across various social media platforms."
        ],
        technologies: {
            frontend: {
                languagesAndFramework: ["None"],
                databaseAndCache: ["None"],
                cloudTools: ["None"]
            },
            backend: {
                languagesAndFramework: ["Python", "Django", "Django REST Framework"],
                databaseAndCache: ["PostgreSQL", "Redis", "Elastic Search"],
                cloudTools: ["Docker", "Heroku"]
            }
        },
        database: {
            dbms: "PostgreSQL",
            reason: "Chosen for its robustness and support for complex queries.",
            schemaDesign: "Normalized schema design to ensure data integrity and performance.",
            erd: "Not Available"
        },
        api: {
            endpoints: [
                {
                    title: "Create Post",
                    description: "Endpoint to create a new blog post.",
                    method: "POST",
                },
                {
                    title: "Get Posts",
                    description: "Endpoint to retrieve all blog posts.",
                    method: "GET",
                },
                {
                    title: "Delete Post",
                    description: "Endpoint to delete an existing blog post.",
                    method: "DELETE",
                },
            ],
            authentication: "JWT-based authentication to ensure secure access to the endpoints.",
        },
        testing: {
            testFrameworks: ["PyUnit"],
            testCoverage: "Extensive unit and integration tests covering 90% of the codebase."
        },
        sourceCode: {
            repository: {
                backend: "https://github.com/AbdulmalikAlayande/bloggy",
                frontend: "",
            }
        }
    },
    {
        id: "dap",
        description: {
            title: "Dating App",
            des: "A modern dating application built using Java and Springboot, providing users with the ability to find and connect with potential partners. The app includes features such as user profiles, matchmaking algorithms, chat functionality, and various security measures to ensure a safe and enjoyable user experience."
        },
        features: [
            "User registration and profile creation",
            "Matchmaking algorithms",
            "Real-time chat functionality",
            "Profile verification",
            "Location-based search",
            "Advanced filtering and preferences",
            "Notifications and alerts",
            "Security measures to prevent harassment and fraud"
        ],
        achievements: [
            "Developed a dating application using Java and Springboot, providing users with a platform to find and connect with potential partners.",
            "Implemented sophisticated matchmaking algorithms to provide users with relevant and compatible matches based on their preferences and behaviors.",
            "Integrated real-time chat functionality using WebSockets to enable instant communication between users.",
            "Implemented profile verification processes to enhance user trust and safety, including ID verification and photo verification.",
            "Developed location-based search features, allowing users to find matches in their vicinity.",
            "Implemented advanced filtering and preference settings to provide users with a personalized and tailored matchmaking experience.",
            "Integrated notifications and alerts to keep users updated on new matches, messages, and other important activities.",
            "Employed robust security measures to prevent harassment and fraud, including user reporting, blocking, and moderation tools.",
            "Integrated Redis for efficient session management and caching.",
            "Utilized Docker for containerization and deployment, ensuring consistency across different environments.",
            "Implemented microservices architecture to ensure scalability and maintainability of the application."
        ],
        technologies: {
            frontend: {
                languagesAndFramework: ["None"],
                databaseAndCache: ["None"],
                cloudTools: ["None"]
            },
            backend: {
                languagesAndFramework: ["Java", "Springboot"],
                databaseAndCache: ["MySQL", "Redis"],
                cloudTools: ["Docker", "GCP", "Cloudinary"]
            }
        },
        database: {
            dbms: "MySQL",
            reason: "Chosen for its robust transaction support and reliability.",
            schemaDesign: "Normalized schema design to ensure data integrity and performance.",
            erd: "Not Available"
        },
        api: {
            endpoints: [
                {
                    title: "Create Profile",
                    description: "Endpoint to create a new user profile.",
                    method: "POST",
                },
                {
                    title: "Get Matches",
                    description: "Endpoint to retrieve potential matches based on user preferences.",
                    method: "GET",
                },
                {
                    title: "SendMessage",
                    description: "Endpoint to send a message to another user.",
                    method: "POST",
                },
            ],
            authentication: "JWT-based authentication to ensure secure access to the endpoints.",
        },
        testing: {
            testFrameworks: ["JUnit", "Mockito"],
            testCoverage: "Extensive unit, integration, and end-to-end tests covering 95% of the codebase."
        },
        sourceCode: {
            repository: {
                backend: "https://github.com/AbdulmalikAlayande/Promeescuous",
                frontend: "",
            }
        }
    },
    {
        id: "ons",
        description: {
            title: "Online Store App",
            des: "An platform built using Python and Django that serves as a digital marketplace where users can browse, select, and purchase products remotely. The application supports product browsing, secure payment processing, order tracking, and customer reviews."
        },
        features: [
            "User authentication and profile management",
            "Product browsing and search",
            "Secure payment processing",
            "Order tracking",
            "Customer reviews and ratings",
            "Shopping cart and checkout",
            "Inventory management",
            "Promotions and discount codes"
        ],
        achievements: [
            "Designed and built an online store using Django and Django REST Framework, enabling users to browse, search, and purchase products securely.",
            "Integrated PayStack payment gateway to facilitate seamless and secure online transactions.",
            "Implemented recommendations, user reviews, and order tracking features to enhance the shopping experience and drive customer satisfaction.",
            "Utilized Django's admin interface to provide an intuitive backend dashboard for managing products, orders, and customers.",
            "Developed a robust shopping cart and checkout process, ensuring a smooth and secure transaction flow for users.",
            "Implemented a comprehensive inventory management system to keep track of stock levels and automate restocking alerts.",
            "Integrated Redis for efficient session management and caching to enhance application performance.",
            "Utilized Docker for containerization and deployment, ensuring consistency across different environments.",
            "Implemented promotional features such as discount codes and seasonal offers to boost sales and customer engagement.",
            "Ensured the application adhered to best security practices, including input validation, data sanitization, HTTPS encryption, and protection against SQL injection vulnerabilities."
        ],
        technologies: {
            frontend: {
                languagesAndFramework: ["None"],
                databaseAndCache: ["None"],
                cloudTools: ["None"]
            },
            backend: {
                languagesAndFramework: ["Python", "Django", "Django REST Framework"],
                databaseAndCache: ["MySQL", "Redis"],
                cloudTools: ["Docker", "Heroku", "Elastic Search"]
            }
        },
        database: {
            dbms: "MySQL",
            reason: "Chosen for its robust transaction support and reliability.",
            schemaDesign: "Normalized schema design to ensure data integrity and performance.",
            erd: "Not Available"
        },
        api: {
            endpoints: [
                {
                    title: "Create Order",
                    description: "Endpoint to create a new order in the system.",
                    method: "POST",
                },
                {
                    title: "Get Products",
                    description: "Endpoint to retrieve available products.",
                    method: "GET",
                },
                {
                    title: "Track Order",
                    description: "Endpoint to track the status of an existing order.",
                    method: "GET",
                },
            ],
            authentication: "JWT-based authentication to ensure secure access to the endpoints.",
        },
        testing: {
            testFrameworks: ["PyTest", "Selenium"],
            testCoverage: "Extensive unit and integration tests covering 90% of the codebase."
        },
        sourceCode: {
            repository: {
                backend: "https://github.com/AbdulmalikAlayande/snap-shop",
                frontend: "",
            }
        }
    }
];
