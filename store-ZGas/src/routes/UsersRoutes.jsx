// CustomerRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Users from '../screens/Users';

function UsersRoutes() {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default UsersRoutes;
