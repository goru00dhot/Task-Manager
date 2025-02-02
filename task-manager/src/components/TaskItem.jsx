import React from 'react';

function TaskItem({ task, onEdit }) {
  return (
    <li>
      {task} 
      <button onClick={() => onEdit(task)}>Edit</button>
    </li>
  );
}

export default TaskItem;
