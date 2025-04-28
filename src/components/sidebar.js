import React, { useState } from 'react';
import '../styles/sidebar.css';
import mainLogo from '../assets/image.png';
 
const Sidebar = () => {
  const [isStudentOpen, setIsStudentOpen] = useState(false);
 
  const toggleStudentDropdown = () => {
    setIsStudentOpen(!isStudentOpen);
  };
 
  return (
    <div className="sidebar">
      <div className="top-section">
        <div className="logo-container">
          <img src={mainLogo} alt="Logo" className="logo" />
        </div>
 
        <div className="menu-section">
          <ul>
          <li onClick={toggleStudentDropdown} className="dropdown-btn">
            <i className="fas fa-user-graduate"></i>
            <span>Students</span>
            <i className="fas fa-angle-down arrow"></i>
            </li>
            {isStudentOpen && (
              <ul className="dropdown-content-vertical">
                <li>State</li>
                <li>City</li>
                <li>Campus</li>
                <li>Fee Payment Year</li>
                <li>Fee Heads</li>
                <li>Organization</li>
                <li>Card Type</li>
                <li>Stream</li>
                <li>Program Name</li>
                <li>Exam Program</li>
                <li>Course Track</li>
              </ul>
            )}
            <li><i class="fas fa-laptop"></i> Application</li>
            <li><i class="fas fa-user-tie"></i> Employee</li>
            <li><i class="fas fa-bus"></i> Fleet</li>
            <li><i class="fas fa-warehouse"></i> Warehouse</li>
            <li><i class="fas fa-sms"></i> SMS</li>
            <li><i class="fas fa-question-circle"></i> Question Bank</li>
            <li><i class="fas fa-boxes"></i> Assets Management</li>
            <li><i class="fas fa-credit-card"></i> Payment Services</li>
            <li><i class="fas fa-video"></i> CCTV</li>
            <li><i class="fas fa-users-cog"></i> HRMS</li>
 
          </ul>
        </div>
      </div>
 
      <div className="bottom-section">
        <ul>
          <li><i class="fas fa-book"></i> Documentation</li>
          <li><i class="fas fa-cog"></i> Settings</li>
        </ul>
      </div>
    </div>
 
  );
};
 
export default Sidebar;