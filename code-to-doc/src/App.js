import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Console from './pages/Console/Console';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/console" element={<Console />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
