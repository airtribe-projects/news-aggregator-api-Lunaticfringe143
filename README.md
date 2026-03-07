# News Aggregator API

## Project Overview
The News Aggregator API is a backend service built with Node.js and Express that allows users to:

- Register and authenticate using JWT
- Store and update news preferences
- Fetch news articles based on authentication
- Access protected routes using middleware

The project demonstrates core backend engineering concepts including:

- REST API design
- Authentication using JSON Web Tokens (JWT)
- Middleware usage
- Modular project structure
- Automated API testing

--------------------------------------------------

Tech Stack

- Node.js
- Express.js
- JWT (jsonwebtoken)
- bcrypt
- Supertest
- Tap (Test runner)

--------------------------------------------------

Project Structure

news-aggregator-api
│
├── src
│   ├── controllers
│   │   └── userController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   └── routes
│       ├── userRoutes.js
│       └── newsRoutes.js
│
├── test
│   └── server.test.js
│
├── app.js
├── package.json
└── README.md

--------------------------------------------------

Installation

1. Clone the repository

git clone <repository-url>
cd news-aggregator-api

2. Install dependencies

npm install

3. Run the development server

npm run dev

The server will start using nodemon.

--------------------------------------------------

Running Tests

This project includes automated API tests.

Run the tests using:

npm run test

Expected output:

15 pass
0 fail

All tests are written using Tap and Supertest to validate API functionality.

--------------------------------------------------

Authentication

Authentication is handled using JWT (JSON Web Tokens).

Protected routes require an Authorization header:

Authorization: Bearer <token>

--------------------------------------------------

API Endpoints

1. User Signup

POST /users/signup

Request Body

{
  "name": "John",
  "email": "john@example.com",
  "password": "password123",
  "preferences": ["movies", "comics"]
}

Response

200 OK

{
  "message": "User created"
}

--------------------------------------------------

2. User Login

POST /users/login

Request Body

{
  "email": "john@example.com",
  "password": "password123"
}

Response

200 OK

{
  "token": "<jwt_token>"
}

--------------------------------------------------

3. Get User Preferences

GET /users/preferences

Headers

Authorization: Bearer <token>

Response

{
  "preferences": ["movies", "comics"]
}

--------------------------------------------------

4. Update Preferences

PUT /users/preferences

Headers

Authorization: Bearer <token>

Request Body

{
  "preferences": ["movies", "comics", "games"]
}

Response

{
  "preferences": ["movies", "comics", "games"]
}

--------------------------------------------------

5. Get News

GET /news

Headers

Authorization: Bearer <token>

Response

{
  "news": [
    { "title": "News 1" },
    { "title": "News 2" }
  ]
}

--------------------------------------------------

Middleware

Authentication Middleware

The authMiddleware verifies JWT tokens before allowing access to protected routes.

Responsibilities:

- Extract token from Authorization header
- Verify token using JWT secret
- Attach decoded user data to req.user
- Reject unauthorized requests

--------------------------------------------------

Testing

The project uses:

- Tap → test runner
- Supertest → API testing

The tests cover:

- User signup
- Login authentication
- Protected routes
- Preference updates
- News retrieval

Run tests:

npm run test

All tests should pass successfully.

--------------------------------------------------

License

ISC License

--------------------------------------------------

Author

Developed as part of the Backend Engineering Launchpad Assignment.