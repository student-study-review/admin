import * as React from 'react';
import "./app.css"
import { Routes, Route, Navigate, useLocation, Router } from 'react-router-dom';
import Login from './pages/Login';
import AcceptInvite from './pages/AcceptInvite';
import useToken from './hooks/useToken';
import Overview from './pages/Overview';
import Layout from './components/Layout';


function RequireAuth({ children }: { children: any }) {
  let { token } = useToken();
  let location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/accept-invite" element={<AcceptInvite />} />
      <Route path="dashboard" element={<Layout /> } >
        <Route
          index
          element={
            <RequireAuth>
              <Overview />
            </RequireAuth>
          }
        />
        <Route
          path="requests"
          element={
            <RequireAuth>
              <p>Requests</p>
            </RequireAuth>
          }
        />
        <Route
          path="add"
          element={
            <RequireAuth>
              <p>Add</p>
            </RequireAuth>
          }
        />
        <Route
          path="resources"
          element={
            <RequireAuth>
              <p>Resources</p>
            </RequireAuth>
          }
        />
        <Route
          path="admins"
          element={
            <RequireAuth>
              <p>Admin</p>
            </RequireAuth>
          }
        />
        <Route
          path="settings"
          element={
            <RequireAuth>
              <p>Settins</p>
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}
