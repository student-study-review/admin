import {
  Box,
  Grid,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import {
  Add,
  DensitySmall,
  FormatListBulleted,
  People,
  Settings,
  Summarize,
} from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import {
  Link,
  LinkProps,
  Outlet,
  useMatch,
  useNavigate,
  useResolvedPath,
} from 'react-router-dom';

function CustomLink({ children, to }: LinkProps) {
  let resolved = useResolvedPath(to);
  const navigate = useNavigate();
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <MenuItem selected={!!match} onClick={() => navigate(to)} className="MenuItem">
      {children}
    </MenuItem>
  );
}

function Layout() {
  return (
    <Grid container spacing={2} sx={{ marginTop: 0 }}>
      <Grid
        item
        md={3}
        sx={{
          height: '100vh',
          background: (theme) => theme.palette.secondary.main,
        }}
      >
        <Grid
          container
          direction="column"
          sx={{ color: (theme) => theme.palette.grey[100] }}
        >
          <Box sx={{ marginBottom: '2rem' }}>
            <Typography>
              {' '}
              <span>LOGO!!!</span> Universitesi
            </Typography>
          </Box>
          <MenuList>
            <CustomLink to="/dashboard">
              <ListItemIcon>
                <Summarize color="info" fontSize="small" />
              </ListItemIcon>
              <ListItemText> Overview </ListItemText>
            </CustomLink>
            <CustomLink to="/dashboard/requests">
              <ListItemIcon>
                <FormatListBulleted color="info" fontSize="small" />
              </ListItemIcon>
              <ListItemText> Requests </ListItemText>
            </CustomLink>

            <CustomLink to="/dashboard/add">
              <ListItemIcon>
                <Add color="info" fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add Resource</ListItemText>
            </CustomLink>
            <CustomLink to="/dashboard/resources">
              <ListItemIcon>
                <DensitySmall color="info" fontSize="small" />
              </ListItemIcon>
              <ListItemText>Resources</ListItemText>
            </CustomLink>
            <CustomLink to="/dashboard/admins">
              <ListItemIcon>
                <People color="info" fontSize="small" />
              </ListItemIcon>
              <ListItemText>Admins</ListItemText>
            </CustomLink>
          </MenuList>
          <Divider sx={{ background: '#727070' }} />

          <MenuList>
            <CustomLink to="/dashboard/settings">
              <ListItemIcon>
                <Settings color="info" fontSize="small" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </CustomLink>
          </MenuList>
        </Grid>
      </Grid>
      <Grid
        item
        md={9}
        sx={{
          minHeight: '100vh',
          background: (theme) => theme.palette.grey[200],
        }}
      >
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default Layout;
