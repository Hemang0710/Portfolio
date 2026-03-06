# RecipeHub - Recipe Sharing Platform

A full-stack recipe sharing platform where users can discover, share, and save recipes. Built with React, Node.js, Express.js, and MongoDB. Features include recipe CRUD operations, search functionality, favorites, ratings, and image uploads.

## 🚀 Features

- **Recipe Management**: Create, read, update, and delete recipes
- **Recipe Search**: Search recipes by name, ingredients, or cuisine
- **Categories**: Organize recipes by cuisine type (Italian, Mexican, Asian, etc.)
- **Favorites**: Save favorite recipes for quick access
- **Ratings & Reviews**: Rate and review recipes
- **Image Uploads**: Upload recipe images
- **Ingredient Lists**: Detailed ingredient lists with measurements
- **Cooking Instructions**: Step-by-step cooking instructions
- **Cooking Time & Servings**: Track preparation time and serving size
- **User Profiles**: User authentication and profile management
- **Responsive Design**: Works on all devices

## 🛠️ Tech Stack

### Frontend
- **React** 18+ - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **Multer** - File upload handling
- **JWT** - Authentication
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
recipehub-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── recipeController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── uploadMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Recipe.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── recipeRoutes.js
│   ├── uploads/
│   ├── .env.example
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── index.jsx
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

1. **Navigate to project directory**
```bash
cd recipehub-app
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
MONGODB_URI=mongodb://localhost:27017/recipehub
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

### Recipes
- `GET /api/recipes` - Get all recipes (with search/filter)
- `POST /api/recipes` - Create a new recipe
- `GET /api/recipes/:id` - Get a specific recipe
- `PUT /api/recipes/:id` - Update a recipe
- `DELETE /api/recipes/:id` - Delete a recipe
- `POST /api/recipes/:id/favorite` - Add to favorites
- `POST /api/recipes/:id/rating` - Rate a recipe

## 🎨 Features in Detail

### Recipe Management
- Full CRUD operations
- Rich recipe details (ingredients, instructions, images)
- Category-based organization
- Search and filter functionality

### User Features
- User authentication
- Favorite recipes
- Recipe ratings
- User profiles

### Search & Discovery
- Search by recipe name
- Filter by cuisine category
- Filter by cooking time
- Sort by rating or date

## 🧪 Testing

To test the application:

1. Register a new account
2. Create a recipe with image
3. Search for recipes
4. Add recipes to favorites
5. Rate recipes
6. Update and delete recipes

## 📦 Deployment

### Backend Deployment
- Deploy to Heroku, Railway, or Render
- Set environment variables
- Update MongoDB URI for production
- Configure file upload storage (AWS S3 recommended)

### Frontend Deployment
- Deploy to Vercel, Netlify, or similar
- Update API endpoint URLs
- Configure environment variables

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

Built with ❤️ using React, Node.js, Express, and MongoDB
