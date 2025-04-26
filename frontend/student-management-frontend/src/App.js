import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Home from './components/Home';
import ManageStudents from './components/ManageStudents';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:id" element={<EditStudent />} />
          <Route path="/manage-students" element={<ManageStudents />} />
          <Route path="/student-list" element={<StudentList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
