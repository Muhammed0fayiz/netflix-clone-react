














import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase'; // Make sure to import your Firebase auth configuration
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Logged in');
        navigate('/');
      } else {
        console.log('Logged out');
        navigate('/login');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
       <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;

