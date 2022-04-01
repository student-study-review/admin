import {
  Box,
  Typography,
  Avatar,
  FormControl,
  FormLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@mui/material';

import Switch from '@mui/material/Switch';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import React from 'react';
import { ColorModeContext } from '../App';
import UserDropDown from './UserDropdown';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Nav: React.FC<{ title: string; showUserDropDown?: boolean }> = ({
  title,
  showUserDropDown = true,
}) => {
  const { toggleColorMode } = React.useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
      }}
    >
      <form style={{ width: '65%' }}>
        <FormControl sx={{ width: '100%' }} variant="outlined" size="small">
          <OutlinedInput
            fullWidth
            id="email"
            type="email"
            placeholder="Search courses, documents activities..."
            sx={{
              borderRadius: '50px',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              background: (t) => t.palette.background.paper,
              border: '0px',
            }}
            startAdornment={
              <InputAdornment position="start">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5342 0C17.894 0 23.0672 5.17315 23.0672 11.533C23.0672 14.5335 21.9157 17.2702 20.0313 19.3241L23.7392 23.0242C24.0862 23.3712 24.0873 23.9326 23.7403 24.2796C23.5674 24.4548 23.3388 24.5413 23.1115 24.5413C22.8853 24.5413 22.6579 24.4548 22.4838 24.2819L18.7312 20.5398C16.7571 22.1207 14.2542 23.0672 11.5342 23.0672C5.17433 23.0672 0 17.8928 0 11.533C0 5.17315 5.17433 0 11.5342 0ZM11.5342 1.77649C6.15377 1.77649 1.77649 6.15259 1.77649 11.533C1.77649 16.9134 6.15377 21.2907 11.5342 21.2907C16.9134 21.2907 21.2907 16.9134 21.2907 11.533C21.2907 6.15259 16.9134 1.77649 11.5342 1.77649Z"
                    fill="#8A8A8A"
                  />
                </svg>
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <DarkModeIcon color="primary" />
        <Switch
          {...label}
          onChange={toggleColorMode}
          defaultChecked
          size="medium"
          color="primary"
        />
        <LightModeIcon color="primary" />
      </Box>
      {showUserDropDown && <UserDropDown />}
    </Box>
  );
};

export default Nav;
