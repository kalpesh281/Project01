const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const authRoute = require("./routes/authRoute");
const ConnectDB = require("./config/DB");

// Simplified CORS setup
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoute);

const PORT = process.env.PORT || 5003; // Added fallback port
ConnectDB();
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
