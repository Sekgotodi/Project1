import React from 'react';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <ul>
        <li>Dashboard</li>
        <li>Log Issue</li>
        <li>All Issues</li>
        <li>Notifications</li>
      </ul>
    </aside>
  );
};

export default Sidebar;

