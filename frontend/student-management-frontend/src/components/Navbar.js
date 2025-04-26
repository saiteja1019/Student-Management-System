import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-links">
      <Link to="/">Home</Link>
      <Link to="/add-student">Add Student</Link>
      <Link to="/manage-students">Manage Students</Link>
      <Link to="/student-list">Student List</Link>
    </div>
  </nav>
);

export default Navbar;
