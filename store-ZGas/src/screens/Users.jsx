import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Header from '../components/Header.jsx';
import Grid from '../components/Grid.jsx';
import ActionButtons from '../components/ActionButtons.jsx'

function Customer() {
  return (
    <div>
      <Header />
      <div className='home-container'>
        <Sidebar />
        <div className='content-page'>
        <ActionButtons />
        <Grid className='grid-container'/>
        </div>
      </div>
    </div>
  );
}

export default Customer;