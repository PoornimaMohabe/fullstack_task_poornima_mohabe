# Fullstack To-Do List (WebSocket + Redis + MongoDB + React)
## Aim
The goal of this project is to build a real-time, full-stack To-Do List application that demonstrates effective use of WebSockets,
Redis caching, and MongoDB for scalable data management. The application allows users to add tasks instantly using WebSockets, 
temporarily store them in Redis for fast access, and persist them in MongoDB when Redis exceeds its limit, ensuring performance and reliability.

## View UI 
https://fullstack-task-poornima-mohabe.vercel.app

## Deployed backend
https://fullstack-task-poornima.onrender.com


A full-stack real-time to-do list app built using:
- **Backend**: Node.js, Express, WebSocket (Socket.io), Redis, MongoDB
- **Frontend**: React.js, tailwind css
- **Data Store**: Redis for cache, MongoDB for persistence

## Features

- Add tasks via WebSocket `add` event
- Cache tasks in Redis under a single key: 
- Auto-transfer tasks to MongoDB if Redis exceeds 50 tasks
- HTTP endpoint `/fetchAllTasks` to retrieve all tasks
- Responsive React frontend (based on Figma design)
- Real-time UI updates via WebSocket

##  Project Structure

### Backend 
 src/
 │
 ├── config/
 │ └── db.js 
 ├── models/
 │ └── Task.js 
 ├── routes/
 │ └── fetchTasks.js 
 ├── utils/
 │ ├── redisClient.js 
 │ ├── taskUtils.js
 │ └── websocket.js 
 ├── index.js 

### Frontend 
 src/
 │
 ├── assets/images/
 ├── components/ 
 │ ├── AddTaskForm.jsx
 │ ├── Header.jsx
 │ └── TaskList.jsx
 ├── pages/
 │ └── Home.jsx
 ├── utils/
 │ └── url.js 
 ├── socket.js 
 ├── App.jsx 
 ├── main.jsx

## Installation & Setup
### 1. Backend
cd fullstack_task_poornima
npm install
## Run the backend server:
npm run server

### 2. Frontend
cd to-do list
npm install
## Run the frontend
npm run dev

## API Endpoints
GET /fetchAllTasks
Returns all tasks (from Redis and MongoDB if overflowed).

## Images
Todo list homepage
![image](https://github.com/user-attachments/assets/ba2ead2b-46fa-49ad-8d38-06cf88b8d3c5)


