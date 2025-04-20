Job Portal with Automation

Project Overview

The Job Portal with Automation is a full-stack application designed to streamline the job-hunting process for job seekers and employers. This project provides a platform for job postings, search functionalities, and application tracking. With automation features, it enhances user convenience and efficiency, reducing the time spent on repetitive tasks.

Live Project Link
https://anurag-job-portal-with-automation.netlify.app/jobs

Features

For Job Seekers:

Search and Filter Jobs: Find jobs based on location, job type, and niche.

Profile Management: Update personal details, upload resumes, and customize preferences.

Automated Alerts: Receive notifications for relevant job openings.

Responsive Design: Accessible on desktop, tablet, and mobile devices.

For Employers:

Post Job Listings: Add detailed job descriptions, including responsibilities and qualifications.

Manage Applications: Review candidate profiles and resumes with ease.

Company Profile: Share company information and attract top talent.

Automation Features:

Automated resume parsing and keyword matching.

AI-based job recommendations for seekers.

Scheduled email alerts for both job seekers and employers.

Tech Stack

Frontend:

Framework: React.js

State Management: Redux

Styling: CSS Modules

Routing: React Router Dom

Backend:

Framework: Express.js

Database: MongoDB

Authentication: JWT-based authentication and authorization

File Handling: Multer for file uploads

Other Tools and Services:

Cloud Storage: Cloudinary for storing resumes and other assets.

Automation: Cron jobs for scheduled tasks.

Deployment:

Frontend: Netlify

Backend: Hosted on a Node.js server

Installation and Setup

Prerequisites:

Node.js and npm installed

MongoDB instance running locally or on the cloud

Cloudinary account for file storage

Steps:

Clone the repository:

git clone:(https://github.com/anurag0058/JOB_PORTAL_WITH_AUTOMATION)

Navigate to the project directory:

cd job-portal-with-automation

Install dependencies for the backend and frontend:

cd back && npm install
cd ../frontend && npm install

Set up environment variables:

Create a .env file in the backend directory with the following:

PORT=5000
MONGO_URI=your-mongodb-connection-string
JWT_SECRET_KEY=your-jwt-secret
CLOUDINARY_NAME=dn2fqt7ob
CLOUDINARY_API_KEY=363652654878213
CLOUDINARY_API_SECRET=4hPVJJnCSk0xpVZ-8bsSL6nhB5k

Start the backend server:

cd back && npm start

Start the frontend server:

cd ../frontend && npm start

Usage

Visit the homepage to explore job listings.

Job seekers can sign up, create profiles, and apply for jobs.

Employers can post job vacancies and review applications.

Use the search and filter features to narrow down job listings.


Contact

For queries or feedback, please contact:

Name: Anurag

Email: rathourasr0508@gmail.com

License

This project is licensed under the MIT License.
