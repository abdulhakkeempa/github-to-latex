import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './pages/Login';
import Dashboard from './pages/Dashboard';
import Console from './pages/Console';

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
