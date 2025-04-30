import React, { useState } from 'react';
import '../styles/sidebar.css';
import mainLogo from '../assets/image.png';
import { NavLink } from 'react-router-dom';

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
            <li
              onClick={toggleStudentDropdown}
              className={`dropdown-btn ${isStudentOpen ? 'active' : ''}`}
            >
              <i className="fas fa-user-graduate"></i>
              <span>Students</span>
              <i className="fas fa-angle-down arrow"></i>
            </li>

            {isStudentOpen && (
              <ul className="dropdown-content-vertical">
                <li>State</li>
                <li>City</li>
                <li>Campus</li>
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? 'sidebar-link active' : 'sidebar-link'
                    }
                  >
                    Fee Payment Year
                  </NavLink>
                </li>
                <li>Fee Heads</li>
                <li>Organization</li>
                <li>Card Type</li>
                <li>Stream</li>
                <li>Program Name</li>
                <li>Exam Program</li>
                <li>Course Track</li>
              </ul>
            )}

            <li><i className="fas fa-laptop" style={{ color: '#84909A' }}></i> Application</li>
            <li><i className="fas fa-user-tie" style={{ color: '#84909A' }}></i> Employee</li>
            <li><i className="fas fa-bus" style={{ color: '#84909A' }}></i> Fleet</li>
            <li><i className="fas fa-warehouse" style={{ color: '#84909A' }}></i> Warehouse</li>
            <li><i className="fas fa-message" style={{ color: '#84909A' }}></i> SMS</li>
            <li><i className="fas fa-book-open" style={{ color: '#84909A' }}></i> Question Bank</li>
            <li><i className="fas fa-boxes" style={{ color: '#84909A' }}></i> Assets Management</li>
            <li><i className="fas fa-credit-card" style={{ color: '#84909A' }}></i> Payment Services</li>
            <li><i className="fas fa-video" style={{ color: '#84909A' }}></i> CCTV</li>
            <li><i className="fas fa-users-cog" style={{ color: '#84909A' }}></i> HRMS</li>
          </ul>
        </div>
      </div>

      <div className="bottom-section">
        <ul>
          <li><i className="fas fa-book"></i> Documentation</li>
          <li><i className="fas fa-cog"></i> Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
