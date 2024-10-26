import React from "react";
import TaskItem from "./TaskItem";
import Pagination from "./Pagination";

const TaskList = ({
  tasks,
  openModal,
  openDeleteModal,
  searchQuery,
  currentPage,
  setCurrentPage,
}) => {
  // Filter tasks based on search query
  const filteredTasks = tasks.filter((task) => {
    const query = searchQuery.toLowerCase();
    return (
      task.taskName.toLowerCase().includes(query) ||
      task.priority.toLowerCase().includes(query) ||
      task.status.toLowerCase().includes(query)
    );
  });

  // Determine the number of tasks to display per page
  const itemsPerPage = 2;
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);
  
  // Calculate the items to show for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTasks = filteredTasks.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
    {filteredTasks.length === 0 ? (
          <p className="text-center small text-gray-500 text-2xl mt-20">No data found</p>
        ) : (
    <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {currentTasks.map((task, index) => (
        <TaskItem
          key={task._id}
          task={task}
          index={index}
          openModal={openModal}
          openDeleteModal={openDeleteModal}
        />
      ))}
     
    </div>
    )}

{filteredTasks.length === 0 ? (


     ""
  ) : (
    <Pagination
      totalPages={totalPages} // Pass the calculated total pages
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  )}

    </>
    
  );
};

export default TaskList;
