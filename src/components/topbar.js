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
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V6C0 6.53043 0.210714 7.03914 0.585786 7.41421C0.960859 7.78929 1.46957 8 2 8H4V11L7 8H9C9.53043 8 10.0391 7.78929 10.4142 7.41421C10.7893 7.03914 11 6.53043 11 6V2C11 1.46957 10.7893 0.960859 10.4142 0.585786C10.0391 0.210714 9.53043 0 9 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786Z" fill="#B0BABF"/>
        <path d="M13 6V4H14C14.5304 4 15.0392 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6V10C16 10.5304 15.7893 11.0391 15.4142 11.4142C15.0392 11.7893 14.5304 12 14 12H12V15L9.00001 12H7.00001C6.66101 12 6.34201 11.916 6.06201 11.767L7.82801 10H9.00001C10.0609 10 11.0783 9.57857 11.8284 8.82843C12.5786 8.07828 13 7.06087 13 6Z" fill="#B0BABF"/>
        </svg>
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