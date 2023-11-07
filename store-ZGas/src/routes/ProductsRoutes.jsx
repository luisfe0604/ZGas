// CustomerRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../screens/Products';

function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default CustomerRoutes;
