import * as React from 'react';
import './app.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import AcceptInvite from './pages/AcceptInvite';
import useToken from './hooks/useToken';
import Overview from './pages/Overview';
import Layout from './components/Layout';
import Requests from './pages/Requests';
import AddResource from './pages/AddResource';
import Resources from './pages/Resources';
import Admins from './pages/Admin';
import Settings from './pages/Settings';
import NewAdmin from './pages/NewAdmin';
import { createTheme, PaletteMode } from '@mui/material';
import { getDesignTokens } from './theme';
import { ThemeProvider } from '@emotion/react';

function RequireAuth({ children }: { children: any }) {
  let { token } = useToken();
  let location = useLocation();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function App() {
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light'
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/accept-invite" element={<AcceptInvite />} />
          <Route path="dashboard" element={<Layout />}>
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
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
