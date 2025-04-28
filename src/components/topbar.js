import React from 'react';
import '../styles/topbar.css';
 
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-container">
        <i className="fas fa-search search-icon" title="Search"></i>
        <div className="search-bar">
          <input type="text" placeholder="Search..." aria-label="Search" />
        </div>
      </div>
 
      <div className="topbar-icons">
        <div className="feedback" title="Give Feedback">
          <i className="fas fa-comment-dots"></i>
          <span>Feedback?</span>
        </div>
        <i className="fas fa-bell" title="Notifications"></i>
        <i className="fas fa-question-circle" title="Help"></i>
        <i className="fas fa-user" title="Profile"></i>
      </div>
    </div>
  );
};


export default Topbar;
