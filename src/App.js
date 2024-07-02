// src/App.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Components/Login';
import Logout from './Components/Logout';
import Navbar from './Components/Navbar'; 
import UserPanel from './Components/UserPanel'; 
import AboutTo from './Components/AboutTo'; 
import Home from './Components/Home'; 
import PrivateRoute from './Components/PrivateRoute'; 
import PublicRoute from './Components/PublicRoute';
import { Routes, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PublicRoute element={user ? Logout : Login} />} /> 
        <Route path="/userPanel" element={<PrivateRoute element={UserPanel} />} /> 
        <Route path="/aboutTo" element={<AboutTo />} />
        <Route path="/home" element={<Home />} /> 
      </Routes>
    </div>
  );
};

export default App;
