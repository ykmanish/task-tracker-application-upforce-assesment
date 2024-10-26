import React from "react";

const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center">
      <div className="bg-white p-6 h-60 flex flex-col justify-center items-center rounded-[35px] w-96">
        <h2 className="text-2xl text-[#0c0c0c] heading">Confirm Deletion</h2>
        <p className="mt-4 text-[#0c0c0c] small">
          Are you sure you want to delete this task?
        </p>
        <div className="mt-8 flex gap-4">
          <button
            className="bg-[#0c0c0c] small text-white py-2 w-20 px-4 rounded-xl"
            onClick={onClose}
          >
            No
          </button>
          <button
            className="bg-red-600 text-[#ffffff] small py-2 w-20 px-4 rounded-xl"
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default DeleteModal;
