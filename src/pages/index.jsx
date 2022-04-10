import AllRoutes from 'constants/routes';
import React from 'react';
import { useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import Signin from './signin';

export default function Pages() {
  const redirect = useSelector((state) => state.authReducer.redirect);
  return (
    <Routes>
      {AllRoutes.map((route, index) => (
        <Route
          path={route.path}
          element={
            redirect || !route.protected ? <route.component /> : <Signin />
          }
          key={index}
        />
      ))}
      )
    </Routes>
  );
}
