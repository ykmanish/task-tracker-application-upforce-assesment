const mongoose = require("mongoose");
require("dotenv").config(); // For environment variables

// MongoDB connection URI from .env
const mongoURI = process.env.MONGO_URI || "mongodb+srv://Manish026636:manish1728@cluster0.fotxcbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB; // Export the connectDB function
