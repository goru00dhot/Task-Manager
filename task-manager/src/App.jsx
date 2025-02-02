import React, { useEffect, useState } from 'react';  // Import the hooks
import './App.css';
import TaskList from './components/TaskList';  // Keep the TaskList component

function App() {
  const [tasks, setTasks] = useState([]);  // Declare state to hold tasks

  useEffect(() => {
    // Fetch tasks from the API
    fetch('https://jsonplaceholder.typicode.com/todos')  // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setTasks(data));  // Set the fetched data to the tasks state
  }, []);  // Empty dependency array means it runs once when the component mounts

  return (
    <div className="App">
      <h1>Task Manager App</h1>
      {/* Pass tasks as props to TaskList component */}
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
