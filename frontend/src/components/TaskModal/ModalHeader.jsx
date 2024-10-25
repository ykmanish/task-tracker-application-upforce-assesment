// ModalHeader.js
import React from 'react';

const ModalHeader = ({ isEditing }) => {
  return (
    <h2 className="text-2xl text-center text-[#0c0c0c] heading mb-6">
      {isEditing ? "Edit Task" : "Add New Task"}
    </h2>
  );
};

export default ModalHeader;
