// Modal.js
"use client";
import React from "react";
import ModalHeader from "./ModalHeader";
import ModalForm from "./ModalForm";
import useTaskForm from "../Hooks/useTaskForm";

const Modal = ({ isOpen, onClose, saveTask, task, isEditing }) => {
  const {
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
  } = useTaskForm(task, isEditing);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newTask = {
      taskName,
      description,
      dateAdded,
      dueDate,
      status,
      priority,
    };
    if (isEditing) {
      newTask._id = task._id;
      await saveTask(newTask, true);
    } else {
      await saveTask(newTask, false);
    }

    // Reset fields and close modal
    onClose();
  };

  if (!isOpen) return null;

  return (
   

    
    <div className="fixed p-4  inset-0 bg-black bg-opacity-90 flex justify-center items-center">
      <div className="bg-white  p-8 rounded-[35px] w-[600px]">
        <ModalHeader isEditing={isEditing} />
        <ModalForm
          taskName={taskName}
          setTaskName={setTaskName}
          description={description}
          setDescription={setDescription}
          dateAdded={dateAdded}
          setDateAdded={setDateAdded}
          dueDate={dueDate}
          setDueDate={setDueDate}
          status={status}
          setStatus={setStatus}
          priority={priority}
          setPriority={setPriority}
          errors={errors}
          handleSubmit={handleSubmit}
          onClose={onClose}
          isEditing={isEditing}
        />
      </div>
    </div>
   
  );
};

export default Modal;
