// server.js
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/task"); // Import task routes
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*", credentials: true }));

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes); // Add task routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
