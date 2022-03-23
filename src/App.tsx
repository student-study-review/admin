import * as React from 'react';
import "./app.css"
import { Routes, Route, Navigate, useLocation, Router } from 'react-router-dom';
import Login from './pages/Login';
import AcceptInvite from './pages/AcceptInvite';
import useToken from './hooks/useToken';
import Overview from './pages/Overview';
import Layout from './components/Layout';
import Requests from "./pages/Requests";
import AddResource from './pages/AddResource';
import Resources from './pages/Resources';
import Admins from './pages/Admin';
import Settings from './pages/Settings';
import NewAdmin from './pages/NewAdmin';

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
              <Requests />
            </RequireAuth>
          }
        />
        <Route
          path="add"
          element={
            <RequireAuth>
              <AddResource />
            </RequireAuth>
          }
        />
        <Route
          path="resources"
          element={
            <RequireAuth>
              <Resources />
            </RequireAuth>
          }
        />
        <Route
          path="admins"
          element={
            <RequireAuth>
              <Admins />
            </RequireAuth>
          }
        />
        <Route
          path="admins/new"
          element={
            <RequireAuth>
              <NewAdmin />
            </RequireAuth>
          }
        />
        <Route
          path="settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}
