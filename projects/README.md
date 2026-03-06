# Portfolio Projects

This folder contains three fully functional, production-ready projects that showcase full-stack development skills using React, Node.js, Express.js, and MongoDB.

## 📁 Projects Overview

### 1. TaskFlow - Task Management Platform
**Tech Stack:** MERN (MongoDB, Express, React, Node.js)  
**Features:** User authentication, CRUD operations, task filtering, categories, priorities, status tracking  
**Location:** `taskflow-app/`

A comprehensive task management application demonstrating:
- JWT authentication
- RESTful API design
- MongoDB database design
- React state management
- Responsive UI design

### 2. LinkShort - URL Shortener with Analytics
**Tech Stack:** Node.js, Express, MongoDB, React  
**Features:** URL shortening, custom aliases, analytics tracking, QR codes, click statistics  
**Location:** `linkshort-app/`

A URL shortener with comprehensive analytics showing:
- URL validation and shortening
- Click tracking and analytics
- Device and browser detection
- Data visualization with charts
- QR code generation

### 3. RecipeHub - Recipe Sharing Platform
**Tech Stack:** MERN Stack with File Uploads  
**Features:** Recipe CRUD, image uploads, search, favorites, ratings, categories  
**Location:** `recipehub-app/`

A recipe sharing platform demonstrating:
- File upload handling (Multer)
- Complex data relationships
- Search functionality
- User favorites and ratings
- Image management

## 🚀 Quick Start

Each project has its own README with detailed setup instructions. General steps:

1. **Navigate to project directory**
   ```bash
   cd [project-name]
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Fill in required values (MongoDB URI, JWT secret, etc.)

4. **Start backend server**
   ```bash
   npm start
   # or npm run dev for development
   ```

5. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

6. **Start frontend development server**
   ```bash
   npm start
   # or npm run dev
   ```

## 🛠️ Common Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File uploads (RecipeHub)

### Frontend
- **React** 18+ - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Recharts** - Data visualization (LinkShort)
- **QRCode.js** - QR code generation (LinkShort)

## 📋 Project Requirements

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Environment Setup
Each project requires:
- MongoDB connection string
- JWT secret key
- Port configuration
- (Optional) File storage configuration

## 🎯 Skills Demonstrated

These projects showcase:

1. **Full-Stack Development**
   - RESTful API design
   - Database modeling
   - Authentication & authorization
   - File handling

2. **Frontend Development**
   - React component architecture
   - State management
   - Responsive design
   - User experience design

3. **Backend Development**
   - API endpoint design
   - Middleware implementation
   - Error handling
   - Data validation

4. **Database Design**
   - MongoDB schema design
   - Data relationships
   - Indexing for performance
   - Query optimization

5. **DevOps & Deployment**
   - Environment configuration
   - Error handling
   - Production considerations
   - Code organization

## 📝 Project Structure

Each project follows a professional structure:

```
[project-name]/
├── backend/
│   ├── config/        # Database configuration
│   ├── controllers/   # Business logic
│   ├── middleware/    # Custom middleware
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── utils/         # Utility functions
│   ├── uploads/       # File uploads (if applicable)
│   ├── server.js      # Entry point
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # Context API
│   │   ├── services/    # API services
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## 🧪 Testing

Each project can be tested by:

1. Starting the backend server
2. Starting the frontend development server
3. Accessing the application in a browser
4. Testing all CRUD operations
5. Testing authentication flows
6. Testing search/filter functionality

## 📦 Deployment

### Backend Deployment Options
- **Heroku** - Easy deployment with Git integration
- **Railway** - Modern deployment platform
- **Render** - Free tier available
- **AWS EC2** - Full control
- **DigitalOcean** - Simple VPS

### Frontend Deployment Options
- **Vercel** - Optimized for React
- **Netlify** - Great for static sites
- **GitHub Pages** - Free hosting
- **AWS S3 + CloudFront** - Scalable solution

### Deployment Checklist
- [ ] Set environment variables
- [ ] Update API URLs
- [ ] Configure CORS
- [ ] Set up MongoDB Atlas (if using cloud)
- [ ] Configure file storage (if applicable)
- [ ] Test production build
- [ ] Set up error monitoring

## 🤝 Contributing

These are portfolio projects. Feel free to:
- Fork and modify for your own use
- Use as learning resources
- Reference for your own projects

## 📄 License

MIT License - Feel free to use these projects for learning and portfolio purposes.

## 👤 Author

**Hemang Patel**
- Full-Stack Developer
- Based in Etobicoke, Ontario, Canada
- Skills: React, Node.js, Express, MongoDB, JavaScript, TypeScript

---

**Note:** These projects are designed to showcase professional development practices and real-world application development skills. Each project is fully functional and can be deployed to production with minimal configuration.
