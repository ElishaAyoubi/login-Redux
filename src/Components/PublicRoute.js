
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUser } from '../features/userSlice';

const PublicRoute = ({ element: Component, ...rest }) => {
  const user = useSelector(selectUser);
  return user ? <Navigate to="/userPanel" /> : <Component {...rest} />;
};

export default PublicRoute;
