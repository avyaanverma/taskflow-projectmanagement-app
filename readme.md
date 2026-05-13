# TaskFlow - Collaborative Project Management Platform

# 🚀 TaskFlow

TaskFlow is a modern collaborative project management platform inspired by tools like Trello, Jira, and Notion.

It allows teams to create projects, manage tasks, collaborate with members, and track project progress using a clean Kanban-style interface.

---

# ✨ Features

## 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Cookie-based Sessions
- Protected Routes

---

## 📁 Project Management
- Create Projects
- Update Projects
- Delete Projects
- Private/Public Projects
- Project Tags
- Project Members & Roles

---

## ✅ Task Management
- Create Tasks
- Update Tasks
- Delete Tasks
- Drag & Drop Kanban Board
- Task Priorities
- Task Status Management
- Assign Tasks to Members

---

## 👥 Team Collaboration
- Invite Members
- Role-Based Access
- Project Admins
- Team Member Management

---

## 📊 Dashboard
- Project Statistics
- Task Analytics
- Recent Projects
- Greeting Dashboard
- Productivity Overview

---

# 🛠️ Tech Stack

## Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Context API
- Lucide React Icons

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# 📂 Folder Structure

```bash
src/
│
├── components/
│   └── dashboard/
│
├── context/
│
├── pages/
│
├── routes/
│
├── data/
│
└── App.jsx
```


# ⚙️ Backend Structure

```bash
server/
│
├── models/
│   ├── user.model.js
│   ├── project.model.js
│   └── task.model.js
│
├── routes/
│   ├── auth.routes.js
│   ├── project.routes.js
│   └── task.routes.js
│
├── middleware/
│
├── controllers/
│
├── config/
│
└── server.js

```


# 🧠 Database Design

## User

* Name
* Email
* Password
* Profile Image

## Project

* Name
* Description
* Admin
* Members
* Tasks
* Tags
* Privacy
* Progress

## Task

* Title
* Description
* Status
* Priority
* Assigned Members
* Due Date


# 🔑 Environment Variables

Create a `.env` file in the backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/taskflow.git
```

---

## Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Install Backend Dependencies

```bash
cd server
npm install
```

---

# ▶️ Running the Application

## Start Frontend

```bash
npm run dev
```

## Start Backend

```bash
npm run dev
```

---

# 🔒 Authentication Flow

1. User registers/login
2. JWT token generated
3. Token stored in cookies
4. Protected APIs validate token
5. User gets authenticated access

---

# 📌 Future Improvements

* Real-Time Collaboration (Socket.io)
* File Uploads
* Activity Logs
* Email Notifications
* AI Task Suggestions
* Calendar View
* Timeline View
* Dark Mode
* Mobile Responsive Optimization

---

# 📸 UI Inspiration

* Linear
* Jira
* Notion
* Trello
* Asana

---

# 🧑‍💻 Author

Avyaan Verma

---

# 📄 License

MIT License

```
