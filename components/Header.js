import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i> {/* You can replace this with React Icons */}
      </div>
      <h1>FixFlow</h1>
      <div className="staff-info">
        <span>Staff Name</span>
      </div>
    </header>
  );
};

export default Header;
