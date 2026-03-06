# LinkShort - URL Shortener with Analytics

A full-stack URL shortener application with comprehensive analytics tracking. Built with Node.js, Express.js, MongoDB, and React. This project demonstrates RESTful API design, database optimization, and real-time analytics visualization.

## 🚀 Features

- **URL Shortening**: Convert long URLs into short, shareable links
- **Custom Aliases**: Create custom short links with your own alias
- **Analytics Dashboard**: Track clicks, referrers, locations, and devices
- **QR Code Generation**: Generate QR codes for easy sharing
- **Link Management**: Edit, delete, and organize your shortened links
- **Real-time Stats**: View click statistics in real-time
- **Expiration Dates**: Set expiration dates for links
- **Password Protection**: Optional password protection for links
- **Responsive Design**: Works on all devices

## 🛠️ Tech Stack

### Frontend
- **React** 18+ - UI library
- **Recharts** - Data visualization
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **QRCode.js** - QR code generation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **shortid** - Unique ID generation
- **express-validator** - Input validation

## 📁 Project Structure

```
linkshort-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── linkController.js
│   │   └── analyticsController.js
│   ├── middleware/
│   │   └── validation.js
│   ├── models/
│   │   ├── Link.js
│   │   └── Click.js
│   ├── routes/
│   │   └── linkRoutes.js
│   ├── utils/
│   │   └── generateShortId.js
│   ├── .env.example
│   ├── server.js
│  end── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
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
cd linkshort-app
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
MONGODB_URI=mongodb://localhost:27017/linkshort
BASE_URL=http://localhost:5000
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

### Links
- `POST /api/links` - Create a new short link
- `GET /api/links` - Get all links (with pagination)
- `GET /api/links/:id` - Get a specific link
- `PUT /api/links/:id` - Update a link
- `DELETE /api/links/:id` - Delete a link
- `GET /:shortId` - Redirect to original URL (tracks analytics)

### Analytics
- `GET /api/links/:id/analytics` - Get analytics for a link
- `GET /api/links/:id/stats` - Get detailed statistics

## 🎨 Features in Detail

### URL Shortening
- Generate unique short IDs (6-8 characters)
- Support for custom aliases
- URL validation
- Duplicate detection

### Analytics Tracking
- Click count tracking
- Referrer tracking
- Geographic location (IP-based)
- Device and browser information
- Timestamp tracking
- Click timeline visualization

### Link Management
- Edit link properties
- Set expiration dates
- Password protection
- Link deactivation
- Bulk operations

## 🧪 Testing

To test the application:

1. Create a new short link
2. Copy and visit the short link
3. View analytics dashboard
4. Test custom aliases
5. Test link expiration
6. Generate QR codes

## 📦 Deployment

### Backend Deployment
- Deploy to Heroku, Railway, or Render
- Set environment variables
- Update MongoDB URI for production
- Set BASE_URL to production domain

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

Built with ❤️ using Node.js, Express, MongoDB, and React
