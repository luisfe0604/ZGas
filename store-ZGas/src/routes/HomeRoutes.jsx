// HomeRoutes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../screens/Home';

function HomeRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default HomeRoutes;