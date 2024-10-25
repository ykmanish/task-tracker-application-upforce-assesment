// useTaskLogic.js
import { useState, useEffect } from 'react';

const useTaskForm = (task, isEditing) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dateAdded, setDateAdded] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Incomplete");
  const [priority, setPriority] = useState("High");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!taskName.trim()) formErrors.taskName = "Task name is required.";
    if (!description.trim()) formErrors.description = "Description is required.";
    if (!dateAdded) formErrors.dateAdded = "Date added is required.";
    if (!dueDate) formErrors.dueDate = "Due date is required.";
    if (!status) formErrors.status = "Please select a status.";
    if (!priority) formErrors.priority = "Please select a priority.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const resetFields = () => {
    setTaskName("");
    setDescription("");
    setDateAdded("");
    setDueDate("");
    setStatus("Incomplete");
    setPriority("High");
  };

  useEffect(() => {
    if (task && isEditing) {
      setTaskName(task.taskName);
      setDescription(task.description);
      setDateAdded(task.dateAdded ? new Date(task.dateAdded).toISOString().substring(0, 10) : "");
      setDueDate(task.dueDate ? new Date(task.dueDate).toISOString().substring(0, 10) : "");
      setStatus(task.status);
      setPriority(task.priority);
    } else {
      resetFields();
    }
  }, [task, isEditing]);

  return {
    taskName,
    setTaskName,
    description,
    setDescription,
    dateAdded,
    setDateAdded,
    dueDate,
    setDueDate,
    status,
    setStatus,
    priority,
    setPriority,
    errors,
    validateForm,
    resetFields,
  };
};

export default useTaskForm;
