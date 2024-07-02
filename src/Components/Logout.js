

import React from 'react';
import './Logout.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout  } from '../features/userSlice';

const Logout = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div calssname="logout">
      <h1>Welcome <span className='user__name'>{user.name}</span></h1>
      <button className='logout__button' onClick={(e) => handleLogout(e)}>Log out</button>
    </div>
  );
};

export default Logout;
