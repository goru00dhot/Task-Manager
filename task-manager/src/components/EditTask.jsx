import React, { useState } from 'react';

function EditTask({ task, saveTask }) {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleSave = (e) => {
    e.preventDefault();
    if (updatedTask !== task) {
      saveTask(updatedTask);
    }
  };

  return (
    <div className="edit-task">
      <h3>Edit Task</h3>
      <form onSubmit={handleSave}>
        <input
          type="text"
          value={updatedTask}
          onChange={(e) => setUpdatedTask(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default EditTask;
