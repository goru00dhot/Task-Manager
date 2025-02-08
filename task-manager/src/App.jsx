import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1 className="app-title">Task Manager App</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
