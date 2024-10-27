'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Cookies from "js-cookie"; // Import library to manipulate cookies
import Modal from "../TaskModal/Modal";
import DeleteModal from "./DeleteModal";
import TaskList from "./TaskList";
import SearchBar from "./SearchBar";
import useTasks from "../Hooks/useTasks";
import Pagination from "./Pagination";

const Header = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // Initialize router

  const {
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
  } = useTasks();

  const handleLogout = () => {
    Cookies.remove("token"); // Remove the authentication cookie
    router.push("/sign-in"); // Redirect to the login page
  };

  return (
    <div className="max-w-6xl p-4 mx-auto">
      <div className="flex flex-col lg:flex-row justify-center border rounded-[35px] p-6 mt-10 items-center lg:justify-between">
        <button className="flex justify-center items-center lg:justify-start">
          <img
            src="https://www.svgrepo.com/show/497576/task-square.svg"
            alt="logo"
            className="w-8 mr-2 h-8"
          />
          <h1 className="heading text-4xl text-[#0c0c0c]">NexTask</h1>
        </button>

        <div className="flex justify-center lg:flex-row flex-col lg:mt-0 mt-6 items-center gap-4">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={(query) => {
              setSearchQuery(query);
              setCurrentPage(1); // Reset to first page on search
            }}
          />
          <div className="flex items-center gap-3">
          <button
            className="bg-[#9381ff] hover:bg-[#7d6aed] w-32 flex gap-2 justify-center items-center tracking-wide text-white small py-3 rounded-3xl"
            onClick={() => openModal()}
          >
            <img src="/add.svg" alt="add" className="w-5 h-5" />
            New Task
          </button>
          <button
            className="bg-[#db2b39] hover:bg-red-700 w-32 flex gap-2 justify-center items-center tracking-wide text-white small py-3 rounded-3xl"
            onClick={handleLogout}
          >
            <img src="/logout.svg" alt="logout" className="w-5 h-5" />
            Logout
          </button>
          </div>
          
        </div>
      </div>

      <TaskList
        tasks={tasks}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        openModal={openModal}
        openDeleteModal={openDeleteModal}
        searchQuery={searchQuery}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        saveTask={saveTaskToDatabase}
        task={currentTask}
        isEditing={isEditing}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={deleteTask}
      />
    </div>
  );
};

export default Header;
