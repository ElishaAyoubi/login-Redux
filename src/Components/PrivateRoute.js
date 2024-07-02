
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../features/userSlice';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const user = useSelector(selectUser);
  return user ? <Component {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
