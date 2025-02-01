import React from "react";
import TaskItem from "./TaskItem.jsx";

const tasks = [
  { id: 1, title: "Complete React setup" },
  { id: 2, title: "Create Navbar component" },
  { id: 3, title: "Develop Task List component" },
  { id: 4, title: "Style components with Tailwind" },
  { id: 5, title: "Finalize project structure" }
];

function TaskList() {
  return (
    <div className="max-w-lg mx-auto">
      <ul className="bg-gray-100 shadow-md rounded-lg p-4">
        {tasks.map((task) => (
          <TaskItem key={task.id} title={task.title} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
