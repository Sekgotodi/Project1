import React from 'react';
import { FaBars } from 'react-icons/fa'; // Import an icon for the menu

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <h1>FixFlow</h1>
      <div className="staff-info">
        <span>Staff Name</span>
        {/* Notification bubble */}
      </div>
    </header>
  );
};

export default Header;
