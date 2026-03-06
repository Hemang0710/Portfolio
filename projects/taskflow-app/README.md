# TaskFlow - Task Management Platform

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js). This project demonstrates modern web development practices including RESTful APIs, JWT authentication, real-time updates, and responsive UI design.

## 🚀 Features

- **User Authentication**: Secure JWT-based authentication system
- **Task Management**: Create, read, update, and delete tasks
- **Task Categories**: Organize tasks by categories (Work, Personal, Shopping, etc.)
- **Priority Levels**: Set task priorities (High, Medium, Low)
- **Status Tracking**: Track task status (Todo, In Progress, Completed)
- **Due Dates**: Set and track task due dates
- **Search & Filter**: Search tasks and filter by category, priority, or status
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes

## 🛠️ Tech Stack

### Frontend
- **React** 18+ - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment variables

## 📁 Project Structure

```
taskflow-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── .env.example
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd taskflow-app
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

4. **Set up environment variables**

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/taskflow
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

5. **Start the backend server**
```bash
cd backend
npm start
```

The backend will run on `http://localhost:5000`

6. **Start the frontend development server**
```bash
cd frontend
npm start
```

The frontend will run on `http://localhost:3000`

## 📝 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Tasks
- `GET /api/tasks` - Get all tasks for authenticated user
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/:id` - Get a specific task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## 🎨 Features in Detail

### Authentication
- Secure password hashing with bcrypt
- JWT token-based authentication
- Protected routes on both frontend and backend

### Task Management
- Full CRUD operations
- Task filtering by category, priority, and status
- Search functionality
- Due date tracking
- Task completion tracking

### User Experience
- Responsive design for all screen sizes
- Smooth animations and transitions
- Intuitive user interface
- Error handling and validation
- Loading states

## 🧪 Testing

To test the application:

1. Register a new account
2. Create tasks with different categories and priorities
3. Update task status
4. Filter and search tasks
5. Test responsive design on different screen sizes

## 📦 Deployment

### Backend Deployment
- Deploy to Heroku, Railway, or Render
- Set environment variables in deployment platform
- Update MongoDB URI for production

### Frontend Deployment
- Deploy to Vercel, Netlify, or similar
- Update API endpoint URLs for production

## 🤝 Contributing

This is a portfolio project. Feel free to fork and modify for your own use.

## 📄 License

MIT License

## 👤 Author

**Hemang Patel**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

Built with ❤️ using the MERN stack
