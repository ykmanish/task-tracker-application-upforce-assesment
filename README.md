# Task Tracker Web App

A web application for managing tasks built using **Next.js** for the frontend, **Express.js** for the backend, and **MongoDB** as the database. The app allows users to sign up, log in, and manage their tasks effectively.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **MongoDB**: You need a MongoDB database. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution or install MongoDB locally.
- **Git**: Git should be installed on your machine to clone the repository. Download it from [git-scm.com](https://git-scm.com/).


## Features

- **User Authentication**: Secure sign-up and sign-in using JWT.
- **Task Management**: Add, update, and delete tasks.
- **Task Details**: Each task includes a title, description, due date, date added, status, and priority.
- **Search Functionality**: Easily search tasks by title, priority, and status.
- **Dashboard**: Users can view all their tasks after logging in.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ykmanish/task-tracker-application-upforce-assesment.git
cd task-tracker-application-upforce-assesment
```

### 2. Install Dependencies

#### For Backend

```bash
cd .\backend\
npm install
```

#### For Frontend

```bash
cd .\frontend\
npm install
```

### 3. Set Up Environment Variables

#### Backend (.env)

Create a `.env` file in the `/backend` directory and add the following variables:

```bash
MONGODB_URI="your_mongodb_uri"
PORT=5000
JWT_SECRET="your_jwt_secret"
COOKIE_EXPIRE=7
```

#### Frontend (.env.local)

Create a `.env.local` file in the `/frontend` directory and set the following variable:

```bash
NEXT_PUBLIC_API_URL="http://localhost:5000"
```

### 4. Start the Backend

```bash
cd .\backend\
npm start
```

### 5. Start the Frontend

```bash
cd .\frontend\
npm run dev
```

## Notes

- Ensure MongoDB is set up correctly, and the provided connection URI is accurate.
- Use bcrypt for password hashing in your backend.

## Sign in page
![image](https://github.com/user-attachments/assets/1609f3a0-3aee-4c82-9d57-f43f2dc1dbb4)

## Dashboard
![image](https://github.com/user-attachments/assets/fc419e27-f7a2-41e9-b58f-d430f323bff1)

## Add Task Modal
![image](https://github.com/user-attachments/assets/b2c29d02-0bc3-4c7b-99ba-3da02cd99b55)

## Dashboard with the Data fetched from Database
![image](https://github.com/user-attachments/assets/e6d06a8c-9c32-43d9-ad29-dac35db1a7b4)

## Delete Task
![image](https://github.com/user-attachments/assets/c4ab021b-c764-4776-9917-5ba09d382f96)






