import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="add-task">
      <h3>Add New Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
