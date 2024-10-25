// ModalForm.js
import React from 'react';
import Input from '../resuables/Input';

const ModalForm = ({
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
  handleSubmit,
  onClose,
  isEditing,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <Input
          label="Task Name"
          type="text"
          name="taskName"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        {errors.taskName && <p className="text-red-600 text-sm">{errors.taskName}</p>}
      </div>
      <div className="mb-4">
        <Input
          label="Description"
          type="text"
          name="description"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
      </div>
      <div className="flex gap-4 items-center">
        <div className="mb-3">
          <Input
            label="Date Added"
            type="date"
            name="dateAdded"
            value={dateAdded}
            onChange={(e) => setDateAdded(e.target.value)}
          />
          {errors.dateAdded && <p className="text-red-600 text-sm">{errors.dateAdded}</p>}
        </div>
        <div className="mb-3">
          <Input
            label="Due Date"
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          {errors.dueDate && <p className="text-red-600 text-sm">{errors.dueDate}</p>}
        </div>
      </div>
      <div className="flex ml-1 gap-4 mt-3 items-center">
        <div className="mb-4">
          <span className="label-text uppercase text-zinc-600 text-xs tracking-wide small">
            Status
          </span>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full small text-[#0c0c0c] p-2 mt-3 border rounded-lg"
          >
            <option value="">Select Status</option>
            <option value="Incomplete">Incomplete</option>
            <option value="Completed">Completed</option>
          </select>
          {errors.status && <p className="text-red-600 text-sm">{errors.status}</p>}
        </div>
        <div className="mb-4">
          <span className="label-text uppercase text-zinc-600 text-xs tracking-wide small">
            Priority
          </span>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full small text-[#0c0c0c] p-2 mt-3 border rounded-lg"
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Moderate">Moderate</option>
            <option value="Low">Low</option>
          </select>
          {errors.priority && <p className="text-red-600 text-sm">{errors.priority}</p>}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          type="button"
          className="px-4 py-2 small bg-[#0c0c0c] text-white rounded-lg"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 small bg-[#21b0fe] text-white rounded-lg"
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};

export default ModalForm;
