

import React, { useState } from 'react';
import './Login.css';
import { useDispatch ,useSelector } from 'react-redux';
import { login  } from '../features/userSlice';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const user= useSelector((state) => state.user.user)
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({
      name: name,
      email: email,
      password: password,
      loggedIn: true,
    }));
  };

  return (
    <div className='login'>
      <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here</h1>
        <input
          type="text"
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='submit__btn'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
