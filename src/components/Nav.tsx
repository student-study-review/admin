import { Box, Typography, Avatar } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const Nav: React.FC<{title: string}> = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography sx={{fontSize: "1.25rem", fontWeight: "bold"}}> { title } </Typography>
      <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between" }} >
        <Box sx={{display: "flex", paddingRight: "1rem", borderRight: "1px solid #333333", alignItems: "center", justifyContent: "space-between" }}>
          <NotificationsIcon color="secondary" />
          <SearchIcon color="secondary" />
        </Box>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "1rem" }}>
          <Typography sx={{fontSize: ".85rem", fontWeight: 400, paddingRight: ".5rem"}} > Babatunde Ololade </Typography>
          <Avatar > B</Avatar>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
