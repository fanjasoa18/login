import React from 'react';
import { Routes, Route } from 'react-router';
import './App.css';
import Body from './Components/Body';
import LogOut from './Components/LogOut';


function App() {

  return (
    <Routes>
      <Route index element={<Body/>} />
      <Route path="/home" element={<LogOut/>} />
    </Routes>
  );
}

export default App;
