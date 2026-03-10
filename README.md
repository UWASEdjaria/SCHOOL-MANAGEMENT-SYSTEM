# School Management System

This repository contains the full stack implementation of the Elevanda Ventures School Management System practical test.

## Project Structure
The repository is split into three main folders:
- `/backend`: The Node.js Express API.
- `/admin-app/frontend`: The React (Next.js) Admin Dashboard.
- `/client-app/frontend`: The React (Next.js) Parent/Student Dashboard.

---

## 🚀 Running Locally (with XAMPP / phpMyAdmin)

### Prerequisites
1. **Node.js** installed on your machine.
2. **XAMPP** installed and running (specifically **Apache** and **MySQL**).

### 1. Database Setup
1. Open XAMPP Control Panel and Start **Apache** and **MySQL**.
2. Click on the "Admin" button next to MySQL to open `phpMyAdmin` (usually `http://localhost/phpmyadmin`).
3. Create a new database named **`school_management`**. 
   *(Note: The backend is configured to automatically connect to this database and build the necessary tables on startup).*

### 2. Run the Backend API
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm install
   ```
3. Set up European variables:
   Copy `.env.example` to `.env`. Ensure it looks like this:
   ```env
   PORT=5000
   DB_HOST=127.0.0.1
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=school_management
   JWT_SECRET=your_super_secret_jwt_key_here
   FRONTEND_URL=http://localhost:3000
   ```
4. Start the backend server:
   ```bash
   npm run dev
   # OR
   node server.js
   ```
   *The server should say "Database synced successfully" - this creates all the tables in phpMyAdmin!*

### 3. Run the Admin Frontend
1. Open a new terminal and navigate to the admin frontend:
   ```bash
   cd admin-app/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the admin interface:
   ```bash
   npm run dev
   ```

### 4. Run the Client Frontend
1. Open a new terminal and navigate to the client frontend:
   ```bash
   cd client-app/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the client interface:
   ```bash
   npm run dev
   ```

---

## 🌍 Deployment Guide (Sharing with anyone)

To share this project online, you will need to map your local setup to cloud providers. They offer **free tiers** perfect for this test.

### Step 1: Deploy the MySQL Database
You cannot use your local XAMPP for production.
1. Go to [Aiven for MySQL](https://aiven.io/mysql) or [Clever Cloud](https://www.clever-cloud.com/) and create a free MySQL database.
2. They will give you connection details: Host, User, Password, Database Name.

### Step 2: Deploy the Backend (Render.com)
1. Push your code to GitHub.
2. Go to [Render](https://render.com) and create an account.
3. Click "New" -> "Web Service".
4. Connect your GitHub repository.
5. Set the **Root Directory** to `backend`.
6. Set the **Build Command** to `npm install`.
7. Set the **Start Command** to `node server.js`.
8. Under **Environment Variables**, add the database credentials you got from Step 1, plus a strong `JWT_SECRET`.
9. Deploy! Render will give you a public URL (e.g., `https://your-backend.onrender.com`).

### Step 3: Deploy the Frontends (Vercel.com)
1. Go to [Vercel](https://vercel.com) and sign in with GitHub.
2. Click "Add New..." -> "Project".
3. Import your GitHub repository.
4. Set the **Root Directory** to `admin-app/frontend`.
5. Under Environment Variables, add `NEXT_PUBLIC_API_URL` pointing to your Render backend URL.
6. Click Deploy. Vercel will give you a public link for the admin app.
7. Repeat the exact same process, but set the **Root Directory** to `client-app/frontend` to deploy the client app.
