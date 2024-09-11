import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {

    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
    
      <div className="container">
     
        <MainContent />
       

      </div>
    </div>
  );
}

export default App;


