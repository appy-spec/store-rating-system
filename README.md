# Store Rating System

A full-stack web application that allows users to discover stores, submit ratings, and manage store information through role-based dashboards. The application implements secure authentication, role-based authorization, and a responsive user interface.

---

## Features

### Authentication
- User Registration
- Secure Login using JWT Authentication
- Role-Based Authorization
- Protected Routes
- Change Password
- Secure Password Hashing with bcrypt

### Admin
- Dashboard with overall statistics
- View all users
- Add new users
- View all stores
- Add new stores
- View user details
- View store details

### Normal User
- Browse all stores
- Search stores by name
- Search stores by address
- View overall store ratings
- Submit ratings (1–5)
- Update previously submitted ratings
- View profile
- Change password

### Store Owner
- View store details
- View average store rating
- View users who rated the store
- View profile
- Change password

---

# Tech Stack

## Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify
- React Icons

## Backend
- Node.js
- Express.js
- JWT
- bcrypt
- Express Validator

## Database
- MySQL

---

# Folder Structure

```
store-rating-system
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   ├── validations
│   ├── app.js
│   ├── server.js
│   └── package.json
│
└── frontend
    ├── public
    ├── src
    │   ├── api
    │   ├── assets
    │   ├── components
    │   ├── context
    │   ├── hooks
    │   ├── layouts
    │   ├── pages
    │   ├── routes
    │   ├── services
    │   ├── utils
    │   ├── App.jsx
    │   └── main.jsx
    │
    └── package.json
```

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/store-rating-system.git

cd store-rating-system
```

---

# Backend Setup

Navigate to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password

DB_NAME=store_rating_system

JWT_SECRET=your_secret_key

JWT_EXPIRES_IN=7d

NODE_ENV=development
```

Run backend

```bash
npm run dev
```

Backend runs at

```
http://localhost:3000
```

---

# Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run frontend

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# Database Schema

Create a MySQL database named

```
store_rating_system
```

Run the provided SQL script to create

- Users Table
- Stores Table
- Ratings Table
- Indexes
- Foreign Keys

---

# API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /auth/signup | Register User |
| POST | /auth/login | Login |
| POST | /auth/logout | Logout |

---

## User

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /user/profile | Get Profile |
| PUT | /user/password | Change Password |

---

## Stores

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /stores | Get All Stores |
| GET | /stores/search | Search Stores |

---

## Ratings

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /ratings | Submit Rating |
| PUT | /ratings/:storeId | Update Rating |

---

## Admin

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /admin/dashboard | Dashboard |
| GET | /admin/users | Get Users |
| POST | /admin/users | Add User |
| GET | /admin/users/:id | User Details |
| GET | /admin/stores | Get Stores |
| POST | /admin/stores | Add Store |

---

## Store Owner

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /owner/dashboard | Dashboard |
| GET | /owner/ratings | View Ratings |

---

# Authentication

The application uses

- JWT Authentication
- HTTP Only Cookies
- Role-Based Authorization

Supported Roles

- Admin
- User
- Store Owner

---

# Validation

## Frontend

- Name Validation
- Email Validation
- Password Validation
- Address Validation

## Backend

- Request Validation
- JWT Validation
- Role Validation
- Input Sanitization

---

# Security

- JWT Authentication
- bcrypt Password Hashing
- Protected Routes
- Role-Based Authorization
- MySQL Prepared Statements
- Express Validator
- Cookie-Based Authentication

---

# Screens

- Landing Page
- Login
- Signup
- Admin Dashboard
- User Dashboard
- Store Owner Dashboard
- User Management
- Store Management
- Ratings
- Profile
- Change Password

---

# Future Improvements

- Email Verification
- Forgot Password
- Pagination
- Store Images
- Dashboard Charts
- Analytics
- Dark Mode
- Unit Testing
- Docker Support

---

# Author

Rahul Patel

Portfolio

https://portfolio-psi-one-mzgyj2data.vercel.app/#main

GitHub

https://github.com/appy-spec

---

# Assignment Information

This project was developed as part of the Full Stack Intern Coding Challenge.

The application fulfills the required functionality, including:

- Role-based authentication
- Store rating system
- Admin dashboard
- Store owner dashboard
- User dashboard
- Store management
- User management
- Search functionality
- Rating submission and update
- Responsive design
- Secure REST APIs
- MySQL database integration

---

Thank you for reviewing this project. Your feedback is greatly appreciated.
