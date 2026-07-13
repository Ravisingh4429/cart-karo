# Cart Karo 🛒

Cart Karo is a modern, full-stack MERN (MongoDB, Express, React, Node.js) e-commerce application designed to provide a seamless shopping experience. It features user authentication, a dynamic product catalog, category filtering, a shopping cart management system, and order placement history.

---

## 🏗️ Project Architecture & Folder Structure

The project is split into two primary folders:

```text
Cart Karo/
├── backend/            # Express.js REST API & MongoDB models
│   ├── src/
│   │   ├── DB/         # Database connection logic
│   │   ├── middleware/ # Auth & error handling middlewares
│   │   ├── model/      # Mongoose schemas (User, Product, Category, Cart, Order)
│   │   ├── routes/     # Express API routes (endpoints)
│   │   ├── seed/       # Database seeding scripts & sample data
│   │   └── vaildations/# Joi schema validations
│   ├── upload/         # Uploaded assets (e.g., product images)
│   ├── .env            # Environment configuration
│   └── index.js        # Server entry point
│
└── frontend/           # React + Vite Client-side application
    ├── src/
    │   ├── assets/     # Images, icons, and static assets
    │   ├── components/ # Reusable UI components (Nav, Cart, Authentication, Home, Products)
    │   ├── contexts/   # React Context API (Cart & User state)
    │   ├── hooks/      # Custom React hooks
    │   ├── services/   # Axios API service calls
    │   └── utils/      # Client utility helpers (e.g., JWT handlers)
    ├── index.html      # Main HTML entry point
    └── vite.config.js  # Vite bundler configuration
```

---

## 🚀 Features

- **User Authentication**: Secure signup and login flow with password hashing (bcrypt) and JWT-based authentication.
- **Product Catalog**: Paginated product listings, search capabilities, and filtering by categories.
- **Detailed Product View**: Dedicated page for each product showing detailed info, images, stock availability, and reviews.
- **Shopping Cart**: Real-time cart calculations, add/remove items, and persistent state synced with the database.
- **Order Management**: Checkout system and historical order log.
- **Form Validation**: Strict schema validations on both sides (Joi in the backend, React Hook Form + Zod in the frontend).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 (built using Vite)
- **Routing**: React Router DOM (v7)
- **State Management**: React Context API
- **Form Handling & Validation**: React Hook Form, Zod
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Styling**: Vanilla CSS

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js (v5)
- **Database**: MongoDB (via Mongoose ODM)
- **Authentication**: JSON Web Tokens (JWT) & Bcrypt
- **File Uploads**: Multer
- **Validation**: Joi

---

## ⚙️ Setup & Installation

### Prerequisites
- Node.js installed on your machine
- MongoDB running locally or a MongoDB Atlas connection string

### 1. Backend Setup

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the `backend/` directory and configure the variables:
   ```env
   DB=mongodb://127.0.0.1:27017/cartkaro
   PORT=5000
   JWT=your_jwt_secret_key_here
   ```
4. **Seed Database** (Optional): Populate the database with initial categories and products by running:
   ```bash
   node src/seed/seed.js
   ```
5. Start the development server (runs with nodemon):
   ```bash
   npm run dev
   ```

The backend server will run by default on `http://localhost:5000` (or the port defined in `.env`).

---

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

The frontend will be available at the local address printed by Vite (typically `http://localhost:5173`).
