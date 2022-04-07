import AllRoutes from 'constants/routes';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
export default function Pages() {
  return (
    <Routes>
      {AllRoutes.map((route, index) => (
        <Route path={route.path} element={<route.component />} key={index} />
      ))}
    </Routes>
  );
}
