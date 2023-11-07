// CustomerRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Customer from '../screens/Customer';

function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/customer" element={<Customer />} />
    </Routes>
  );
}

export default CustomerRoutes;
