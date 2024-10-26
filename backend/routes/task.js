// routes/task.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");

// Apply the auth middleware to ensure the user is authenticated
router.post("/", authMiddleware, createTask);
router.get("/", authMiddleware, getTasks);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;
