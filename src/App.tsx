import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AcceptInvite from './pages/AcceptInvite';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/accept-invite" element={<AcceptInvite />} />
      <Route path="/overview" element={<p>Overview..</p>} />
    </Routes>
  ); 
}
