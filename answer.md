Web Application Fundamentals

Q1. Role of Frontend (FE)

The Frontend (FE) is the part of a web application that users directly see and interact with. It focuses on presentation and usability.

User Interface: The frontend defines the layout, design, and visual elements such as buttons, forms, menus, and navigation. It ensures the application looks appealing and is easy to use.

User Interaction: It handles how users interact with the system — clicking buttons, filling forms, scrolling pages, or submitting data. Frontend frameworks like React, Angular, or Vue make these interactions smooth and responsive.

Communication with Backend: The frontend sends requests to the backend (for example, fetching data or submitting forms) and displays the results. This is usually done through APIs using HTTP methods like GET, POST, PUT, DELETE.


Q2. Role of Backend (BE)

The Backend (BE) is the behind-the-scenes part of a web application that processes requests and manages data.

Server-Side Processing: It executes business logic, processes user requests, and generates responses. For example, when a user logs in, the backend verifies credentials and returns the result.

Database Handling: The backend connects to databases, stores information, retrieves records, and ensures data consistency. Examples include MySQL, MongoDB, and PostgreSQL.

Security and Authentication: It manages user authentication (login, signup) and authorization (who can access what). It also protects data through encryption, validation, and secure APIs.


Q3. Business Logic

Business Logic refers to the rules and workflows that define how data is processed and decisions are made in an application. It connects the frontend and backend by applying real-world rules to digital systems.

Examples:
1. E-commerce Website: Calculating discounts, applying taxes, and checking product availability before confirming an order.
2. Banking Application: Validating transactions, ensuring sufficient balance, and applying interest rates.
3. Social Media Platform: Deciding who can view a post, filtering inappropriate content, and ranking feeds based on relevance.


Q4. Client–Server Model

The Client–Server Model is the foundation of web communication.

Client: The device or application (browser, mobile app) that requests services or data.

Server: The machine or software that provides services, processes requests, and sends back responses.

Communication: The client sends a request (for example, an HTTP request) to the server. The server processes it, interacts with the database if needed, and returns a response (HTML, JSON, etc.) to the client.


Q5. Three-Tier Architecture

The 3-Tier Architecture divides a web application into three layers for better organization and scalability.

Presentation Layer: The frontend/UI that users interact with. Example: web pages, mobile app screens.

Application (Business) Layer: Contains the business logic — rules, workflows, and processing. Example: validating user input, calculating prices.

Data Layer: Manages storage and retrieval of data from databases. Example: SQL queries, NoSQL collections.

Why it is used:
- Separation of concerns, each layer has a clear role.
- Easier maintenance and scalability.
- Better security and performance.


Q6. JavaScript as a Backend Language

JavaScript is widely used as a backend language, especially with Node.js.

Performance: Node.js uses a non-blocking, event-driven architecture, making it fast and efficient for handling multiple requests.

Ecosystem: JavaScript has a huge ecosystem of libraries and tools (npm packages) that simplify backend development.

Popular Backend Frameworks:
Express.js: Lightweight and flexible framework for building APIs.
NestJS: Structured framework for scalable applications.
Meteor.js: Full-stack framework for rapid development.
