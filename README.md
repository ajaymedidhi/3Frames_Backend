# Student Management System - 3Frames Assignment Backend

This is the backend of a simple Student Management System built with Node.js and MongoDB. It provides APIs to add, retrieve, and delete students.

## Features

- Add a new student with details such as first name, last name, course, and date of birth.
- Retrieve a list of all students.
- Delete a student by ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- Nodemon (for auto-restarting during development)
- CORS (for handling cross-origin requests)

## Project Structure

src/
│
├── controllers/  # API logic for adding, fetching, and deleting students
│
├── middleware/   # Mongoose schema for Student
│
├── models/       # Mongoose schema for Student
│
├── routes/       # API routes
│
├── app.js        # Main server entry point
│
├── server.js     # Main server entry point
└── .env


## Prerequisites

Before running the application, make sure you have the following installed on your machine:

- Node.js (v12 or later)
- MongoDB (local or cloud instance)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/notes-app-backend.git
    cd notes-app-backend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the root directory and add the following:

    ```
    MONGO_URI=mongodb://localhost:27017/studentdb
    PORT=5000
    ```

4. Start the server:

    ```sh
    npm start
    ```
## API Endpoints

### Add a Student
- **URL**: `/api/students`
- **Method**: `POST`

#### Request Body:
```json
{
  "firstName": "Ajay",
  "lastName": "M",
  "course": "BTech",
  "dob": "2002-08-15"
}
```

#### Response Body:
```json
{
  "_id": "64d3c6f1f9a5a811b5e00c78",
  "firstName": "Ajay",
  "lastName": "M",
  "course": "BTech",
  "dob": "2002-08-15T00:00:00.000Z"
}
```

### Get All Students

- **URL**: `/api/students`
- **Method**: `GET`

#### Response Body:

```json
[
  {
    "_id": "64d3c6f1f9a5a811b5e00c78",
    "firstName": "Ajay",
    "lastName": "M",
    "course": "BTech",
    "dob": "2002-08-15T00:00:00.000Z"
  },
  {
    "_id": "64d3c7f2e9f7c90ab5d12345",
    "firstName": "Sravani",
    "lastName": "M",
    "course": "MCA",
    "dob": "2004-05-12T00:00:00.000Z"
  }
]
```





