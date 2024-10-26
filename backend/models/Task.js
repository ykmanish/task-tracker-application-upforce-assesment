// models/Task.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    taskName: { type: String, required: true },
    description: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now }, // Automatically set when created
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ["Incomplete", "Completed"], default: "Incomplete" },
    priority: { type: String, enum: ["High", "Moderate", "Low"], default: "Low" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

module.exports = mongoose.model("Task", taskSchema);
