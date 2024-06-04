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
                languagesAndFramework: ["Java", "Springboot", "Spring Security"],
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
                    title: "Register Customer",
                    description: "Endpoint for customer registration",
                    method: "POST",
                },
                {
                    title: "Invite Admin",
                    description: "Endpoint to invite an admin to the system",
                    method: "POST",
                },
                {
                    title: "Invite Crew Member",
                    description: "Endpoint to invite a crew member to the system",
                    method: "POST",
                },
                {
                    title: "Book Flight",
                    description: "Endpoint to create a new booking in the system.",
                    method: "POST",
                },
                {
                    title: "Make Payments",
                    description: "Endpoint to allow customers pay for their flight.",
                    method: "POST",
                },
                {
                    title: "Get Available Flights",
                    description: "Endpoint to retrieve available flights based on search criteria.",
                    method: "GET",
                },
                {
                    title: "Get All Flights",
                    description: "Endpoint to retrieve all flights.",
                    method: "GET",
                },
                {
                    title: "Cancel Booking",
                    description: "Endpoint to cancel an existing booking.",
                    method: "DELETE",
                },
                {
                    title: "Create Itinerary",
                    description: "Endpoint to create a travel book.",
                    method: "POST",
                },
                {
                    title: "View Itinerary",
                    description: "Endpoint to view most recently created itinerary.",
                    method: "GET",
                },
                {
                    title: "Cancel Itinerary",
                    description: "Endpoint to cancel an existing itinerary.",
                    method: "DELETE",
                },
                {
                    title: "View Flight Details",
                    description: "Endpoint to view details of a particular flight.",
                    method: "GET",
                },
                {
                    title: "Add Aircraft",
                    description: "Endpoint to add a new aircraft's details to the system.",
                    method: "POST",
                },
                {
                    title: "View Flight Details",
                    description: "Endpoint to view details of a particular flight.",
                    method: "GET",
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
            },
            snippet: {
                language: "Java",
                code: "package com.example.airlinereservation.services.flightservice;\n" +
                    "\n" +
                    "import com.example.airlinereservation.data.model.Airport;\n" +
                    "import com.example.airlinereservation.data.model.flight.Flight;\n" +
                    "import com.example.airlinereservation.data.repositories.AirportRepository;\n" +
                    "import com.example.airlinereservation.data.repositories.FlightRepository;\n" +
                    "import com.example.airlinereservation.dtos.Request.FlightRequest;\n" +
                    "import com.example.airlinereservation.dtos.Request.FlightUpdateRequest;\n" +
                    "import com.example.airlinereservation.dtos.Response.FlightResponse;\n" +
                    "import com.example.airlinereservation.exceptions.InvalidRequestException;\n" +
                    "import lombok.AllArgsConstructor;\n" +
                    "import org.modelmapper.ModelMapper;\n" +
                    "import org.springframework.stereotype.Service;\n" +
                    "import org.springframework.transaction.annotation.Transactional;\n" +
                    "\n" +
                    "import java.lang.reflect.InvocationTargetException;\n" +
                    "import java.util.ArrayList;\n" +
                    "import java.util.List;\n" +
                    "import java.util.Optional;\n" +
                    "\n" +
                    "import static com.example.airlinereservation.utils.Constants.BOLA_AIR;\n" +
                    "\n" +
                    "@Service\n" +
                    "@AllArgsConstructor\n" +
                    "public class BolaAir_FlightService implements FlightService{\n" +
                    "\t\n" +
                    "\tprivate FlightRepository flightRepository;\n" +
                    "\tprivate AirportRepository airportRepository;\n" +
                    "\tprivate ModelMapper mapper;\n" +
                    "\t\n" +
                    "\t@Override\n" +
                    "\t@Transactional(rollbackFor = Exception.class)\n" +
                    "\tpublic FlightResponse addFlight(FlightRequest flightRequest) throws InvalidRequestException {\n" +
                    "\t\tcheckIfFlightExists(flightRequest.getArrivalCity(), flightRequest.getDepartureCity());\n" +
                    "\t\ttry{\n" +
                    "\t\t\tFlight mappedFlight = mapper.map(flightRequest, Flight.class);\n" +
                    "\t\t\t\n" +
                    "\t\t\tAirport arrivalAirport = mapper.map(flightRequest.getArrivalAirportRequest(), Airport.class);\n" +
                    "\t\t\tAirport savedArrivalAirport = airportRepository.save(arrivalAirport);\n" +
                    "\t\t\t\n" +
                    "\t\t\tAirport departureAirport = mapper.map(flightRequest.getDepartureAirportRequest(), Airport.class);\n" +
                    "\t\t\tAirport savedDepartureAirport = airportRepository.save(departureAirport);\n" +
                    "\t\t\t\n" +
                    "\t\t\tmappedFlight.setArrivalAirport(savedArrivalAirport);\n" +
                    "\t\t\tmappedFlight.setDepartureAirport(savedDepartureAirport);\n" +
                    "\t\t\tmappedFlight.setAirline(BOLA_AIR);\n" +
                    "\t\t\tmappedFlight.setFlightInstances(new ArrayList<>());\n" +
                    "\t\t\tmappedFlight.setEstimatedFlightDurationInMinutes(flightRequest.getEstimatedFlightDurationInMinutes());\n" +
                    "\t\t\t\n" +
                    "\t\t\tFlight savedFlight = flightRepository.save(mappedFlight);\n" +
                    "\t\t\treturn buildFlightResponse(savedFlight);\n" +
                    "\t\t} catch (InvocationTargetException | InstantiationException |\n" +
                    "\t\t         NoSuchMethodException | IllegalAccessException exception) {\n" +
                    "\t\t\tSystem.out.println(exception.getMessage());\n" +
                    "\t\t\tthrow new InvalidRequestException(exception.getMessage(), exception);\n" +
                    "\t\t}\n" +
                    "\t}\n" +
                    "\t\n" +
                    "\tprivate void checkIfFlightExists(String arrivalCity, String departureCity) throws InvalidRequestException {\n" +
                    "\t\tboolean flightExists = flightRepository.existsByArrivalCityAndDepartureCity(arrivalCity, departureCity);\n" +
                    "\t\tif (flightExists)\n" +
                    "\t\t\tthrow new InvalidRequestException(\"Flight Already Existed\");\n" +
                    "\t}\n" +
                    "\t\n" +
                    "\t\n" +
                    "\tprivate FlightResponse buildFlightResponse(Flight savedFlight) throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {\n" +
                    "\t\tFlightResponse response = FlightResponse.class.getDeclaredConstructor().newInstance();\n" +
                    "\t\tmapper.map(savedFlight, response);\n" +
                    "\t\tresponse.setArrivalAirportAddress(savedFlight.getArrivalAirport().getAirportAddress());\n" +
                    "\t\tresponse.setArrivalAirportCode(savedFlight.getArrivalAirport().getIcaoCode());\n" +
                    "\t\tresponse.setArrivalAirportName(savedFlight.getArrivalAirport().getAirportName());\n" +
                    "\t\t\n" +
                    "\t\tresponse.setDepartureAirportAddress(savedFlight.getDepartureAirport().getAirportAddress());\n" +
                    "\t\tresponse.setDepartureAirportCode(savedFlight.getDepartureAirport().getIcaoCode());\n" +
                    "\t\tresponse.setDepartureAirportName(savedFlight.getDepartureAirport().getAirportName());\n" +
                    "\t\treturn response;\n" +
                    "\t}\n" +
                    "\t\n" +
                    "\t@Override\n" +
                    "\tpublic FlightResponse updateFlight(FlightUpdateRequest flightRequest) {\n" +
                    "\t\treturn null;\n" +
                    "\t}\n" +
                    "\t\n" +
                    "\t@Override\n" +
                    "\tpublic Long getCountOfAllFlights() {\n" +
                    "\t\treturn flightRepository.count();\n" +
                    "\t}\n" +
                    "\t\n" +
                    "\t@Override\n" +
                    "\tpublic List<Flight> getAllFLights() {\n" +
                    "\t\treturn null;\n" +
                    "\t}\n" +
                    "\t\n" +
                    "\t@Override\n" +
                    "\tpublic FlightResponse getFlightByArrivalAndDepartureLocation(String arrivalCity, String departureCity) throws InvocationTargetException, NoSuchMethodException, InstantiationException, IllegalAccessException, InvalidRequestException {\n" +
                    "\t\tOptional<Flight> foundFlight = flightRepository.findByArrivalCityAndDepartureCity(arrivalCity, departureCity);\n" +
                    "\t\tif (foundFlight.isPresent())\n" +
                    "\t\t\treturn buildFlightResponse(foundFlight.get());\n" +
                    "\t\tthrow new InvalidRequestException(\"Flight Not Found\");\n" +
                    "\t}\n" +
                    "\t\n" +
                    "\t@Override\n" +
                    "\tpublic void removeAll() {\n" +
                    "\t\tflightRepository.deleteAll();\n" +
                    "\t\tairportRepository.deleteAll();\n" +
                    "\t}\n" +
                    "\t\n" +
                    "\t\n" +
                    "}\n"
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
                },
                {
                    title: "Register Guardian",
                    description: "Endpoint for guardians to create an account with personal information and confirm registration.",
                    method: "POST",
                },
                {
                    title: "Register Ward",
                    description: "Endpoint for guardians to register a ward and confirm ward registration.",
                    method: "POST",
                },
                {
                    title: "Browse Course Catalog",
                    description: "Endpoint for guardians to browse the course catalog.",
                    method: "GET",
                },
                {
                    title: "Enroll Ward in Course",
                    description: "Endpoint for guardians to enroll their ward in a course of interest.",
                    method: "POST",
                },
                {
                    title: "Track Ward Progress",
                    description: "Endpoint for guardians to track their ward's progress and completion status of each course.",
                    method: "GET",
                },
                {
                    title: "Manage Guardian Profile",
                    description: "Endpoint for guardians to manage their profile details and preferences.",
                    method: "PUT",
                },
                {
                    title: "View Ward Activities",
                    description: "Endpoint for guardians to view their ward's activities.",
                    method: "GET",
                },
                {
                    title: "Receive Weekly Notifications",
                    description: "Endpoint for guardians to receive weekly notifications about their ward's participation and performance analytics.",
                    method: "GET",
                },
                {
                    title: "Register Instructor",
                    description: "Endpoint for instructors to register as a tutor.",
                    method: "POST",
                },
                {
                    title: "Schedule Live Classes",
                    description: "Endpoint for instructors to schedule live classes.",
                    method: "POST",
                },
                {
                    title: "Upload Resources",
                    description: "Endpoint for instructors to upload resources.",
                    method: "POST",
                },
                {
                    title: "Join Live Classes",
                    description: "Endpoint for instructors to join live classes.",
                    method: "POST",
                },
                {
                    title: "Create Assignment",
                    description: "Endpoint for instructors to create assignments.",
                    method: "POST",
                },
                {
                    title: "Create Classwork",
                    description: "Endpoint for instructors to create classwork.",
                    method: "POST",
                },
                {
                    title: "Create Weekly Tests",
                    description: "Endpoint for instructors to create weekly tests.",
                    method: "POST",
                },
                {
                    title: "Give Feedback on Assessments",
                    description: "Endpoint for instructors to give feedback on assessments.",
                    method: "POST",
                },
                {
                    title: "Manage Student Profile",
                    description: "Endpoint for students to manage their profile details.",
                    method: "PUT",
                },
                {
                    title: "Join Live Session",
                    description: "Endpoint for students to join live sessions.",
                    method: "POST",
                },
                {
                    title: "View Classes Schedule",
                    description: "Endpoint for students to view the class schedule.",
                    method: "GET",
                },
                {
                    title: "Drop Feedback and Comments",
                    description: "Endpoint for students to drop feedback and comments.",
                    method: "POST",
                },
                {
                    title: "Get Feedback from Tutor",
                    description: "Endpoint for students to receive feedback from their tutor.",
                    method: "GET",
                },
                {
                    title: "Access Learning Materials",
                    description: "Endpoint for students to view lectures, videos, readings, and other course content, including past live sessions and download supplementary materials.",
                    method: "GET",
                },
                {
                    title: "Participate in Assessments",
                    description: "Endpoint for students to take quizzes, exams, assignments, and other assessments, submit assignments, and view feedback from the instructor.",
                    method: "POST",
                },
                {
                    title: "Engage in Discussions",
                    description: "Endpoint for students to participate in discussions, interact with instructors and peers, potentially through a chatroom or discussion forum.",
                    method: "POST",
                },
                {
                    title: "View Analytics and Performance",
                    description: "Endpoint for students to access personal analytics and progress reports, review assessment scores, and completion rates.",
                    method: "GET",
                },
                {
                    title: "Track Course Progress",
                    description: "Endpoint for students to track their course progress and completion status.",
                    method: "GET",
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
            },
            snippet: {
                language: "Java",
                code: "package com.thrivefuse.learn.services.google;\n" +
                    "\n" +
                    "import com.google.api.client.http.InputStreamContent;\n" +
                    "import com.google.api.client.http.javanet.NetHttpTransport;\n" +
                    "import com.google.api.client.json.JsonFactory;\n" +
                    "import com.google.api.services.drive.Drive;\n" +
                    "import com.google.api.services.drive.DriveScopes;\n" +
                    "import com.google.api.services.drive.model.File;\n" +
                    "import com.thrivefuse.learn.exceptions.FileFormatNotSupportedException;\n" +
                    "import lombok.AllArgsConstructor;\n" +
                    "import org.slf4j.Logger;\n" +
                    "import org.slf4j.LoggerFactory;\n" +
                    "import org.springframework.stereotype.Service;\n" +
                    "import org.springframework.web.multipart.MultipartFile;\n" +
                    "\n" +
                    "import java.io.IOException;\n" +
                    "import java.io.InputStream;\n" +
                    "import java.util.Collections;\n" +
                    "import java.util.List;\n" +
                    "import java.util.Objects;\n" +
                    "import java.util.concurrent.atomic.AtomicBoolean;\n" +
                    "\n" +
                    "import static com.thrivefuse.learn.utils.Constants.*;\n" +
                    "import static java.math.BigInteger.ONE;\n" +
                    "import static java.math.BigInteger.ZERO;\n" +
                    "\n" +
                    "@Service\n" +
                    "@AllArgsConstructor\n" +
                    "public class ThriveFuseDriveClient implements DriveClient{\n" +
                    "\t\n" +
                    "\tprivate JsonFactory JSON_FACTORY;\n" +
                    "\tprivate NetHttpTransport HTTP_TRANSPORT;\n" +
                    "\tprivate GoogleClientCredential clientCredential;\n" +
                    "\tprivate final Logger logger = LoggerFactory.getLogger(this.getClass());\n" +
                    "\tprivate static final List<String> SCOPES = Collections.singletonList(DriveScopes.DRIVE);\n" +
                    "\t\n" +
                    "\t\n" +
                    "\t\n" +
                    "\t@Override\n" +
                    "\tpublic String createFile(MultipartFile file) throws IOException {\n" +
                    "\t\tDrive drive = new Drive.Builder(HTTP_TRANSPORT, JSON_FACTORY, clientCredential.getCredentials(SCOPES, \"keys\"))\n" +
                    "\t\t\t\t               .setApplicationName(APPLICATION_NAME)\n" +
                    "\t\t\t\t               .build();\n" +
                    "\t\t\n" +
                    "\t\tFile googleFile = new File();\n" +
                    "\t\tgoogleFile.setName(file.getOriginalFilename());\n" +
                    "\t\tInputStream inputStream = file.getInputStream();\n" +
                    "\t\tInputStreamContent mediaContent = new InputStreamContent(file.getContentType(), inputStream);\n" +
                    "\t\tFile uploadedFile = drive.files().create(googleFile, mediaContent)\n" +
                    "\t\t\t\t                    .setFields(REQUIRED_FIELDS_FROM_DRIVE_CREATE_FILE)\n" +
                    "\t\t\t\t                    .execute();\n" +
                    "\t\t\n" +
                    "\t\tinputStream.close();\n" +
                    "\t\treturn uploadedFile.getWebViewLink();\n" +
                    "\t}\n" +
                    "\t\n" +
                    "\t@Override\n" +
                    "\tpublic String createFile(MultipartFile file, List<String> supportedFormats) throws IOException, FileFormatNotSupportedException {\n" +
                    "\t\tString fileExtension = getFileExtension(Objects.requireNonNull(file.getName()));\n" +
                    "\t\tlogger.info(\"file name ==> {}\", file.getName());\n" +
                    "\t\tlogger.info(\"File Extension ==> {}\", fileExtension);\n" +
                    "\t\tAtomicBoolean isSupportedFormat = new AtomicBoolean();\n" +
                    "\t\tsupportedFormats.forEach(extension->{\n" +
                    "\t\t\tif (fileExtension.equals(extension))\n" +
                    "\t\t\t\tisSupportedFormat.set(true);\n" +
                    "\t\t});\n" +
                    "\t\tif (isSupportedFormat.get())\n" +
                    "\t\t\treturn createFile(file);\n" +
                    "\t\tthrow new FileFormatNotSupportedException(String.format(FILE_FORMAT_NOT_SUPPORTED, fileExtension));\n" +
                    "\t}\n" +
                    "\t\n" +
                    "\tprivate String getFileExtension(String filename) {\n" +
                    "\t\tStringBuilder extensionReversed = new StringBuilder();\n" +
                    "\t\tfor (int index = filename.length() - ONE.intValue(); index > ZERO.intValue(); index--) {\n" +
                    "\t\t\textensionReversed.append(filename.charAt(index));\n" +
                    "\t\t\tif (filename.charAt(index) == DOT_CHARACTER)\n" +
                    "\t\t\t\tbreak;\n" +
                    "\t\t}\n" +
                    "\t\treturn extensionReversed.reverse().toString();\n" +
                    "\t}\n" +
                    "\t\n" +
                    "}\n",
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
                    description: "Endpoint for hospital admins to create a new patient record.",
                    method: "POST",
                },
                {
                    title: "Update Patient Record",
                    description: "Endpoint for hospital admins to update existing patient information.",
                    method: "PATCH",
                },
                {
                    title: "Fetch Patient History",
                    description: "Endpoint for authorized users to retrieve the medical history of a patient.",
                    method: "GET",
                },
                {
                    title: "Patient Registration",
                    description: "Endpoint for hospital admins to create new accounts for new patients.",
                    method: "POST",
                },
                {
                    title: "Hospital Registration",
                    description: "Endpoint for hospitals to register themselves as valid healthcare providers and centers.",
                    method: "POST",
                },
                {
                    title: "Healthcare Practitioner Registration",
                    description: "Endpoint for healthcare practitioners to register under a hospital.",
                    method: "POST",
                },
                {
                    title: "View Health Records",
                    description: "Endpoint for authorized users to view a patient's health records using the patient identification number.",
                    method: "GET",
                },
                {
                    title: "Create Medical Log",
                    description: "Endpoint for hospital admins to create new medical logs for a patient.",
                    method: "POST",
                },
                {
                    title: "Add to Medical Log",
                    description: "Endpoint for healthcare practitioners to add or document processes to existing medical logs.",
                    method: "PATCH",
                },
                {
                    title: "View Medical Logs",
                    description: "Endpoint for healthcare practitioners to view the list of all logs related to a patient.",
                    method: "GET",
                },
                {
                    title: "View Patient Records",
                    description: "Endpoint for healthcare practitioners to access and view a patient's medical records.",
                    method: "GET",
                },
                {
                    title: "Document Patient Encounters",
                    description: "Endpoint for healthcare practitioners to document medical procedures, patient encounters, tests, treatments, prescriptions, and diagnoses.",
                    method: "POST",
                },
                {
                    title: "Update Patient Biodata",
                    description: "Endpoint for hospital admins to update patient biodata information.",
                    method: "PATCH",
                }
            ]
            ,
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
            },
            snippet: {
                language: "Java",
                code: `${"package org.ereach.inc.services.hospital;\n" +
                "\n"}import com.cloudinary.Cloudinary;
import com.cloudinary.Uploader;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.fge.jsonpatch.JsonPatch;
import com.github.fge.jsonpatch.JsonPatchException;
import com.github.fge.jsonpatch.JsonPatchOperation;
import com.github.fge.jsonpatch.ReplaceOperation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.ereach.inc.config.EReachConfig;
import org.ereach.inc.data.dtos.request.AddressCreationRequest;
import org.ereach.inc.data.dtos.request.AddressUpdateRequest;
import org.ereach.inc.data.dtos.request.CreateHospitalRequest;
import org.ereach.inc.data.dtos.request.UpdateHospitalRequest;
import org.ereach.inc.data.dtos.response.*;
import org.ereach.inc.data.dtos.response.entries.*;
import org.ereach.inc.data.models.Address;
import org.ereach.inc.data.models.entries.MedicalLog;
import org.ereach.inc.data.models.hospital.Hospital;
import org.ereach.inc.data.models.hospital.Record;
import org.ereach.inc.data.models.users.HospitalAdmin;
import org.ereach.inc.data.models.users.Practitioner;
import org.ereach.inc.data.repositories.hospital.EReachHospitalRepository;
import org.ereach.inc.data.repositories.users.HospitalAdminRepository;
import org.ereach.inc.exceptions.EReachBaseException;
import org.ereach.inc.exceptions.EReachUncheckedBaseException;
import org.ereach.inc.exceptions.FieldInvalidException;
import org.ereach.inc.exceptions.RequestInvalidException;
import org.ereach.inc.services.AddressService;
import org.ereach.inc.services.notifications.EReachNotificationRequest;
import org.ereach.inc.services.notifications.MailService;
import org.ereach.inc.services.validators.EmailValidator;
import org.ereach.inc.utilities.JWTUtil;
import org.jetbrains.annotations.NotNull;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

import static org.apache.catalina.util.Introspection.getDeclaredFields;
import static org.ereach.inc.data.models.AccountStatus.ACTIVE;
import static org.ereach.inc.data.models.AccountStatus.PENDING;
import static org.ereach.inc.data.models.Role.HOSPITAL;
import static org.ereach.inc.data.models.Role.HOSPITAL_ADMIN;
import static org.ereach.inc.utilities.AppUtil.doReplace;
import static org.ereach.inc.utilities.AppUtil.filterEmptyField;
import static org.ereach.inc.utilities.Constants.*;
import static org.ereach.inc.utilities.JWTUtil.extractEmailFrom;

@Service
@AllArgsConstructor
@Slf4j
public class EReachHospitalService implements HospitalService {


\tprivate EReachHospitalRepository hospitalRepository;
\tprivate ModelMapper modelMapper;
\tprivate HospitalAdminRepository hospitalAdminRepository;
\tprivate MailService mailService;
\tprivate EmailValidator emailValidator;
\tprivate AddressService addressService;
\tprivate final EReachConfig config;
\tprivate ObjectMapper objectMapper;


\t@Override
\tpublic HospitalResponse registerHospital(@NotNull CreateHospitalRequest hospitalRequest) throws FieldInvalidException, RequestInvalidException {
\t\temailValidator.validateEmail(hospitalRequest.getHospitalEmail());
\t\tverifyHefamaaId(hospitalRequest.getHEFAMAA_ID());

\t\tAddressCreationRequest mappedAddress = modelMapper.map(hospitalRequest, AddressCreationRequest.class);
\t\tAddressResponse saveAddressResponse = addressService.saveAddress(mappedAddress);
\t\tAddress savedAddress = modelMapper.map(saveAddressResponse, Address.class);

\t\tHospital mappedHospital = modelMapper.map(hospitalRequest, Hospital.class);
\t\tmappedHospital.setUserRole(HOSPITAL);
\t\tmappedHospital.setAccountStatus(PENDING);
\t\tmappedHospital.setAddress(savedAddress);
\t\tmappedHospital.setLogsCreated(new HashSet<>());
\t\tmappedHospital.setAdmins(new HashSet<>());
\t\tmappedHospital.setPractitioners(new HashSet<>());
\t\tmappedHospital.setRecords(new HashSet<>());

\t\tHospitalAdmin admin = modelMapper.map(hospitalRequest, HospitalAdmin.class);
\t\tadmin.setAdminRole(HOSPITAL_ADMIN);
\t\tadmin.setActive(true);
\t\tadmin.setAccountStatus(PENDING);
\t\tHospitalAdmin savedAdmin = hospitalAdminRepository.save(admin);

\t\tmappedHospital.getAdmins().add(savedAdmin);
\t\tlog.info("mapped hospital is => {}", mappedHospital);
\t\tHospital savedHospital = hospitalRepository.save(mappedHospital);

//\t\tHospital temporarilySavedHospital = inMemoryDatabase.temporarySave(mappedHospital);
`
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
                {
                    title: "Register Account",
                    description: "Endpoint to register a new account and get authenticated securely.",
                    method: "POST",
                },
                {
                    title: "Reset Password",
                    description: "Endpoint to reset a forgotten password.",
                    method: "POST",
                },
                {
                    title: "Social Media Login",
                    description: "Endpoint to login using social media platforms (Facebook, LinkedIn, Twitter).",
                    method: "POST",
                },
                {
                    title: "Update Profile",
                    description: "Endpoint to update profile information including preferences and biodata.",
                    method: "PATCH",
                },
                {
                    title: "View Profile",
                    description: "Endpoint to view profile information.",
                    method: "GET",
                },
                {
                    title: "Edit Post",
                    description: "Endpoint to edit an existing blog post.",
                    method: "PATCH",
                },
                {
                    title: "Save Draft Post",
                    description: "Endpoint to save a draft post.",
                    method: "POST",
                },
                {
                    title: "Auto Save Draft Post",
                    description: "Endpoint to auto save a post as a draft.",
                    method: "POST",
                },
                {
                    title: "Like Post",
                    description: "Endpoint to like a blog post.",
                    method: "POST",
                },
                {
                    title: "Comment on Post",
                    description: "Endpoint to comment on a blog post.",
                    method: "POST",
                },
                {
                    title: "Search Followers",
                    description: "Endpoint to search followers with filters for region and date followed.",
                    method: "GET",
                },
                {
                    title: "Search Blogger",
                    description: "Endpoint to search for a specific blogger.",
                    method: "GET",
                },
                {
                    title: "Search Post",
                    description: "Endpoint to search for a post with filters for author and topic/category.",
                    method: "GET",
                },
                {
                    title: "Advanced Post Search",
                    description: "Endpoint to perform an advanced post search with filters for tags, most liked, most viewed, and keyword.",
                    method: "GET",
                },
                {
                    title: "Elastic Search",
                    description: "Endpoint to search anything, everywhere by keyword (full-text search).",
                    method: "GET",
                },
                {
                    title: "Share Post",
                    description: "Endpoint to share a post on social media platforms (Facebook, LinkedIn, Twitter).",
                    method: "POST",
                },
                {
                    title: "Collaborate on Post",
                    description: "Endpoint to collaborate on a blog post.",
                    method: "POST",
                },
                {
                    title: "Send Notification Alert",
                    description: "Endpoint to send a notification alert for new posts from bloggers a user follows.",
                    method: "POST",
                }
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
            },
            snippet: {
                language: "Python",
                code: `${"from django_elasticsearch_dsl_drf.filter_backends import (\n" +
                "    SearchFilterBackend,\n"}    FilteringFilterBackend,
    OrderingFilterBackend,
    CompoundSearchFilterBackend,
)
from django_elasticsearch_dsl_drf.viewsets import DocumentViewSet
from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import (
    CreateModelMixin,
    ListModelMixin,
    RetrieveModelMixin,
    DestroyModelMixin,
    UpdateModelMixin,
)

from auths.models import Blogger
from auths.permissions import IsAuthenticatedUser
from blog.document import PostsDocument
from blog.models import Media, Post, Comment, Like
from blog.querysets import ALL_POSTS_QUERYSET
from blog.serializers import (
    PostSerializer,
    PostCreateSerializer,
    CommentSerializer,
    LikeSerializer,
    PostDocumentSerializer,
)
from blog.filters import PostFilter
from commons.utils import get_object_or_404


# region Base Classes
class PostAPIView(GenericAPIView):
    queryset = ALL_POSTS_QUERYSET
    serializer_class = PostSerializer
    filter_class = PostFilter
    # permission_classes = [IsAuthenticatedUser]
    search_fields = [
        "title",
        "blogger__username",
        "blogger__email",
        "id",
        "uuid",
        "created_at",
    ]
    ordering_fields = ["title", "created_at"]
    ordering = ["-created_at"]


# endregion
# region Post - Public(Not User Endpoint)


class PostCreateView(CreateModelMixin, PostAPIView):
    serializer_class = PostCreateSerializer

    def post(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            blogger: Blogger = get_object_or_404(
                Blogger, email=request.data.get("blogger_email")
            )
            data: dict = serializer.validated_data
            data["blogger"] = blogger
            data["status"] = Post.Status.PUBLISHED
            post: Post = self.perform_create(data=data)
            headers = self.get_success_headers(serializer.data)
            response_serializer = PostSerializer(post)
            return Response(
                data={
                    "message": "Post created successfully",
                    **response_serializer.data,
                },
                status=status.HTTP_201_CREATED,
                headers=headers,
            )
        except Exception as exception:
            return Response(
                data={"error": str(exception)}, status=status.HTTP_400_BAD_REQUEST
            )

    def perform_create(self, data: dict) -> Post:
        unwanted_data_keys = ["blogger_email", "media_urls"]
        post: Post = Post.objects.create(
            **{
                key: value
                for key, value in data.items()
                if key not in unwanted_data_keys
            }
        )
        media_urls = data.get("media_urls")
        medias = [Media(cloud_url=url, post=post) for url in media_urls]
        Media.objects.bulk_create(medias)
        return post


`
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
                languagesAndFramework: ["Java", "Springboot", "Spring Security", "RabbitMQ"],
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
            },
            snippet: {
                language: "Java",
                code: ""
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
            },
            snippet: {
                language: "Python",
                code: "from rest_framework import serializers\n" +
                    "\n" +
                    "from store.models import Customer, Product, Cart, CartItem\n" +
                    "\n" +
                    "\n" +
                    "class CustomerSerializer(serializers.ModelSerializer):\n" +
                    "\n" +
                    "    class Meta:\n" +
                    "        model = Customer\n" +
                    "        fields = [\"birth_date\", \"uuid\", \"first_name\", \"last_name\", \"username\", \"email\", \"phone_number\", \"password\"]\n" +
                    "        read_only_fields = ['id', 'uuid']\n" +
                    "        extra_kwargs = {\n" +
                    "            'password': {'write_only': True},\n" +
                    "            'birth_date': {'format': '%d-%m-%Y'},\n" +
                    "        }\n" +
                    "\n" +
                    "class ProductSerializer(serializers.ModelSerializer):\n" +
                    "    class Meta:\n" +
                    "        model = Product\n" +
                    "        fields = ['uuid', 'title', 'description', 'unit_price', 'quantity', 'category']\n" +
                    "        read_only_fields = ['last_updated', 'created_at', 'uuid']\n" +
                    "        extra_kwargs = {\n" +
                    "            'title': {'allow_null': False, 'max_length': 255},\n" +
                    "            'description': {'allow_null': False},\n" +
                    "            'unit_price': {'max_digits': 6, 'decimal_places': 2},\n" +
                    "            'quantity': {'min_value': 1},\n" +
                    "            'category': {'allow_null': False},\n" +
                    "        }\n" +
                    "\n" +
                    "\n" +
                    "class OrderSerializer(serializers.Serializer):\n" +
                    "    pass\n" +
                    "\n" +
                    "\n" +
                    "class OrderItemSerializer(serializers.Serializer):\n" +
                    "    pass\n" +
                    "\n" +
                    "\n" +
                    "class CartSerializer(serializers.ModelSerializer):\n" +
                    "    product_name = serializers.CharField(max_length=30, required=True)\n" +
                    "    quantity = serializers.IntegerField(min_value=0, required=True)\n" +
                    "    customer_email = serializers.CharField(max_length=30, required=True)\n" +
                    "\n" +
                    "    class Meta:\n" +
                    "        model = Cart\n" +
                    "        fields = ['id', 'created_at', 'customer', 'quantity', 'product_name', 'customer_email']\n" +
                    "        read_only_fields = ['id']\n" +
                    "        write_only_fields = []\n" +
                    "\n" +
                    "\n" +
                    "class CartItemSerializer(serializers.ModelSerializer):\n" +
                    "    cart = serializers.PrimaryKeyRelatedField(queryset=Cart.objects.all())\n" +
                    "    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())\n" +
                    "    quantity = serializers.IntegerField(min_value=0)\n" +
                    "    item_name = serializers.CharField(source='product.title', max_length=20)\n" +
                    "    item_description = serializers.CharField(source='product.description', max_length=300)\n" +
                    "    item_price = serializers.DecimalField(source='product.unit_price', max_digits=10, decimal_places=2)\n" +
                    "    item_category = serializers.CharField(source='product.category', max_length=10)\n" +
                    "\n" +
                    "    class Meta:\n" +
                    "        model = CartItem\n" +
                    "        fields = ['id', 'product', 'cart', 'quantity', 'item_name', 'item_description', 'item_price', 'item_category']\n" +
                    "        read_only_fields = ['item_name', 'item_description', 'item_price', 'item_category']\n" +
                    "        extra_kwargs = {\n" +
                    "            'item_name': {'read_only': True},\n" +
                    "            'item_description': {'read_only': True},\n" +
                    "            'item_price': {'read_only': True},\n" +
                    "            'item_category': {'read_only': True}\n" +
                    "        }\n" +
                    "\n" +
                    "\n" +
                    "class RemoveCartItemSerializer(serializers.Serializer):\n" +
                    "    product_name = serializers.CharField(max_length=40, required=True)\n" +
                    "    customer_email = serializers.CharField(max_length=40, required=True)\n" +
                    "\n" +
                    "    def validate(self, attrs):\n" +
                    "        return attrs\n" +
                    "\n" +
                    "\n" +
                    "class RatingSerializer(serializers.Serializer):\n" +
                    "    pass\n"
            }
        }
    }
];
