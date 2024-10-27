// useTasks.js
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/tasks`, {
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const saveTaskToDatabase = async (taskData, edit = false) => {
    try {
      let response;
      if (edit) {
        response = await axios.put(
          `http://localhost:5000/api/tasks/${taskData._id}`,
          taskData,
          {
            headers: {
              Authorization: `Bearer ${Cookies.get("token")}`,
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        response = await axios.post("http://localhost:5000/api/tasks", taskData, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            "Content-Type": "application/json",
          },
        });
      }
      const result = response.data;
      setIsModalOpen(false);
      if (edit) {
        setTasks(tasks.map((task) => (task._id === result._id ? result : task)));
      } else {
        setTasks([...tasks, result]);
      }
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  const openModal = (task = null) => {
    setCurrentTask(task);
    setIsEditing(!!task);
    setIsModalOpen(true);
  };

  const openDeleteModal = (index) => {
    setCurrentTask(index);
    setIsDeleteModalOpen(true);
  };

  const deleteTask = async () => {
    try {
      const taskToDelete = tasks[currentTask];
      await axios.delete(`http://localhost:5000/api/tasks/${taskToDelete._id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      setTasks((prevTasks) => prevTasks.filter((_, index) => index !== currentTask));
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return {
    tasks,
    isModalOpen,
    isDeleteModalOpen,
    currentTask,
    isEditing,
    openModal,
    openDeleteModal,
    saveTaskToDatabase,
    deleteTask,
    setIsModalOpen,
    setIsDeleteModalOpen,
  };
};

export default useTasks;
