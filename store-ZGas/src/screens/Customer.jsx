import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Header from '../components/Header.jsx';
import Grid from '../components/Grid.jsx';

function Customer() {
  return (
    <div>
      <Header />
      <div className='home-container'>
        <Sidebar />
        <Grid className='grid-container'/>
      </div>
    </div>
  );
}

export default Customer;