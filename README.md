# Alumni Portal Project

## Project Overview
The **Alumni Portal** is a full-stack web application designed to bridge the communication gap between alumni and current students. It serves as a platform where alumni can post job opportunities, share referrals, and connect with other alumni or current students.

## Features
- **User Authentication**: Alumni can register, log in, and access their dashboard using secure authentication mechanisms.
- **Job Postings**: Alumni can post job opportunities and referrals that will be visible to all users.
- **Profile Management**: Users can manage their profiles, including updating personal information and viewing job applications.
- **Responsive UI**: A user-friendly interface built with Tailwind CSS, making the platform accessible across various devices.
- **Real-time Updates**: Job posts and profile updates are reflected in real-time, enhancing the interactivity of the platform.

## Technology Stack
- **Frontend**: 
  - React.js
  - Tailwind CSS
- **Backend**: 
  - Node.js
  - Express.js
- **Database**: 
  - MongoDB
- **Authentication**: 
  - JWT (JSON Web Token) for user login and registration.
  
## Backend Features
- Designed the **Navbar** and **Home Page** to ensure smooth navigation across the platform.
- **Authentication System**: Implemented secure user registration and login functionalities with token generation and API request handling.
- Developed the **Job Posting** and **Referral Posting** system, allowing alumni to easily share job opportunities.
  
## Frontend Features
- Built the **Job Listing Page** where users can view and search for jobs and referrals.
- Developed the **Profile Page** for users to view and update their personal information.

## Tools and Libraries
- **Moment.js**: Used for date and time manipulation in job posts.
- **Multer**: Integrated for file uploads such as profile images.
  
## Challenges and Solutions
1. **Handling Authentication**: Implemented JWT-based authentication to secure the login and registration process.
2. **Managing Real-time Data**: Used efficient API calls to ensure real-time job postings without overloading the server.

## How This Project Helps
The Alumni Portal creates a seamless way for alumni to engage with their alma mater. It fosters professional connections, supports job-seeking students, and provides alumni with an opportunity to contribute by sharing job opportunities and referrals.

## Future Enhancements
- **Messaging System**: Allow alumni and students to communicate directly through the platform.
- **Event Management**: A feature to post and manage alumni-related events.

## Steps to Run the Code

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally or on a cloud-based service (e.g., MongoDB Atlas)
- Git installed

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/alumni-portal.git
cd alumni-portal
