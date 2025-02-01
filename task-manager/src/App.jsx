import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap for styling

// Navigation Bar Component
const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#">Task Manager</a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="#tasks">Tasks</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        <li className="nav-item"><a className="nav-link" href="#settings">Settings</a></li>
      </ul>
    </div>
  </nav>
);

// Task List Component
const TaskList = () => (
  <div className="container mt-4">
    <h2>Your Tasks</h2>
    <ul className="list-group">
      <li className="list-group-item">Home</li>
      <li className="list-group-item">About</li>
      <li className="list-group-item">Tasks</li>
      <li className="list-group-item">Contact</li>
      <li className="list-group-item">Settings</li>
    </ul>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="bg-dark text-white text-center py-4 mt-4">
    <p>&copy; 2025 Task Manager. All rights reserved.</p>
  </footer>
);

// App Component (Main)
const App = () => (
  <div>
    <NavBar />
    <TaskList />
    <Footer />
  </div>
);

export default App;

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap for styling

import './App.css';  // Import custom styles
