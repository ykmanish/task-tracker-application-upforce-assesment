// controllers/taskController.js
const Task = require("../models/Task");

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      user: req.user._id // Set the user ID from the logged-in user
    });
    await task.save();
    res.status(201).json(task);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Get all tasks for the logged-in user
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!task) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
};
