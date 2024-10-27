import React from "react";

const TaskItem = ({ task, index, openModal, openDeleteModal }) => {
  return (
    <div className="bg-[#ffffff] p-2 rounded-[40px] border border-zinc-200 flex flex-col justify-center items-start w-full h-auto py-3">
      <div className="rounded-[35px] flex p-4 flex-col w-full h-auto py-3">
        <div className="flex lg:justify-start items-center">
          <div className="grid grid-cols-2 lg:grid-cols-4  gap-3 items-center">
            <h1 className="text-[14px] bg-green-100 w-28 py-3 flex flex-col justify-center items-center heading rounded-3xl text-zinc-800">
              <span className="text-xs small">Date Added</span>
              {new Date(task.dateAdded).toLocaleDateString()}
            </h1>
            <h1 className="text-[14px] bg-red-100 w-28 py-3 flex flex-col justify-center items-center heading rounded-3xl text-red-800">
              <span className="text-xs small">Due Date</span>
              {new Date(task.dueDate).toLocaleDateString()}
            </h1>
            <h1 className="text-[14px] bg-blue-100 w-28 py-3 flex flex-col justify-center items-center heading rounded-3xl text-blue-800">
              <span className="text-xs small">Status</span>
              {task.status}
            </h1>
            <h1 className="text-[14px] bg-purple-100 w-28 py-3 flex flex-col justify-center items-center heading rounded-3xl text-purple-800">
              <span className="text-xs small">Priority</span>
              {task.priority}
            </h1>
          </div>
        </div>

        <h1 className="text-3xl mt-8 text-left heading text-[#0c0c0c]">
          {task.taskName}
        </h1>
        <p className="mt-2 text-left small">{task.description}</p>
        <div className="flex justify-start items-center gap-4 mt-8">
          <button
            className="bg-zinc-100 tooltip flex justify-center items-center tracking-wide text-white small h-12 w-12 rounded-3xl"
            onClick={() => openModal(task)}
            data-tip="Edit Task"
          >
            <img src="/edit.svg" alt="edit" className="w-4 h-4" />
          </button>
          <button
            className="bg-red-100/70  tooltip flex justify-center items-center tracking-wide text-white small h-12 w-12 rounded-3xl"
            onClick={() => openDeleteModal(index)}
            data-tip="Delete Task"
          >
            <img src="/delete.svg" alt="delete" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
