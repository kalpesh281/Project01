# Google OAuth Authentication Project

A full-stack application implementing Google OAuth2.0 authentication with React and Node.js.

## Features

- 🔐 Google OAuth2.0 Authentication
- 🍪 Secure HTTP-only Cookie Session Management
- 👤 User Profile Dashboard
- 🚪 Secure Logout Functionality
- 📱 Responsive Design with Tailwind CSS

## Tech Stack

### Frontend

- React with Vite
- React Router DOM for navigation
- Tailwind CSS for styling
- Axios for API requests
- @react-oauth/google for Google OAuth

### Backend

- Node.js & Express
- MongoDB with Mongoose
- JWT for authentication
- Cookie-parser for session management

## Setup Instructions

1. Clone the repository
2. Set up environment variables:

### Frontend (.env)

```
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

### Backend (.env)

```
PORT=5003
MONGO_URI=your_mongodb_uri
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
JWT_SECRET=your_jwt_secret
```

3. Install dependencies:

```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

4. Run the application:

```bash
# Frontend
npm run dev

# Backend
npm run start
```

## Project Structure

```
project/
├── frontend/
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── PageNotFound.jsx
│   │   └── ...
│   └── ...
└── backend/
    ├── config/
    ├── controllers/
    ├── routes/
    ├── models/
    └── ...
```

## Features Explanation

1. **Authentication Flow**

   - Users click "Login with Google"
   - OAuth2.0 flow handles authorization
   - Backend creates/updates user in MongoDB
   - Session managed via HTTP-only cookies

2. **Security Features**

   - HTTP-only cookies for JWT
   - Protected routes
   - Secure logout mechanism
   - Environment variable configuration

3. **User Interface**
   - Clean, modern design with Tailwind CSS
   - Responsive layout
   - User-friendly error handling
   - Smooth transitions and animations

## API Endpoints

- `GET /api/auth/google` - Google OAuth login
- `POST /api/auth/logout` - User logout

## Contributing

Feel free to submit issues and enhancement requests.

## License

MIT License
