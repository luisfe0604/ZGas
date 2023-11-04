import React from 'react';
import Dashboard from '../components/Dashboard.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Header from '../components/Header.jsx';

function HomeScreen() {
  return (
    <div>
      <Header />
      <div className='home-container'>
        <Sidebar />
        <div className='dashboard-container'>
          <Dashboard className='dashboard-item'/>
          <Dashboard className='dashboard-item'/>
          <Dashboard className='dashboard-item'/>
          <Dashboard className='dashboard-item'/>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;