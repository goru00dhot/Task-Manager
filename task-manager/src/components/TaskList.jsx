import React, { useState } from 'react';
import TaskItem from './TaskItem';
import AddTask from './AddTask';
import EditTask from './EditTask';

function TaskList() {
  const [tasks, setTasks] = useState([
    'Task 1',
    'Task 2',
    'Task 3',
    'Task 4',
    'Task 5'
  ]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const saveTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task === editingTask ? updatedTask : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  return (
    <div>
      <h2>Task List</h2>
      <AddTask addTask={addTask} />

      {editingTask ? (
        <EditTask task={editingTask} saveTask={saveTask} /> // Ensure this is properly closed
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onEdit={startEditing}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
