import React from "react";

function TaskItem({ title }) {
  return (
    <li className="border-b p-3 text-lg font-medium last:border-none">
      ✅ {title}
    </li>
  );
}

export default TaskItem;
