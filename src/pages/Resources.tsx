//@ts-nocheck

import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Nav from '../components/Nav';
import { Box, Tabs, Tab } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { School, useGetSchoolsQuery } from '../graphql/graphql';
import Schools from '../components/Schools';
import Faculties from '../components/Faculties';
import Departments from '../components/Departments';
import Courses from '../components/Courses';

function Row(props: { school: School }) {
  const { school } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell component="th" scope="row">
        {school.name}
      </TableCell>
      <TableCell>{school.websiteURL}</TableCell>
      <TableCell>{school.fullAddress}</TableCell>
      <TableCell align="center">{school.emailSuffix || '-'}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClose}>Faculties</MenuItem>
          <MenuItem onClick={handleClose}>Departments</MenuItem>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
        </Menu>
      </TableCell>
    </TableRow>
  );
}

export default function CollapsibleTable() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Nav title="Resources" />

      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        sx={{ marginBottom: '1rem' }}
      >
        <Tab
          label="Schools"
          sx={{
            textTransform: 'none',
            fontSize: value === 0 ? '20px' : '16px',
            fontWeight: value === 0 ? 700 : 400,
            paddingBottom: '0px',
            color: (t) => (value !== 0 ? t.palette.text.primary : undefined),
            opacity: value !== 0 ? '0.7' : '1',
          }}
        />
        <Tab
          label="Faculties"
          sx={{
            textTransform: 'none',
            fontSize: value === 1 ? '20px' : '16px',
            fontWeight: value === 1 ? 700 : 400,
            paddingBottom: '0px',
            color: (t) => (value !== 1 ? t.palette.text.primary : undefined),
            opacity: value !== 1 ? '0.7' : '1',
          }}
        />
        <Tab
          label="Departments"
          sx={{
            textTransform: 'none',
            fontSize: value === 2 ? '20px' : '16px',
            fontWeight: value === 2 ? 700 : 400,
            paddingBottom: '0px',
            color: (t) => (value !== 2 ? t.palette.text.primary : undefined),
            opacity: value !== 2 ? '0.7' : '1',
          }}
        />
        <Tab
          label="Courses"
          sx={{
            textTransform: 'none',
            fontSize: value === 3 ? '20px' : '16px',
            fontWeight: value === 3 ? 700 : 400,
            paddingBottom: '0px',
            color: (t) => (value !== 3 ? t.palette.text.primary : undefined),
            opacity: value !== 3 ? '0.7' : '1',
          }}
        />
      </Tabs>

      {value === 0 ? (
        <Schools />
      ) : value === 1 ? (
        <Faculties />
      ) : value === 2 ? (
        <Departments />
      ) : (
        <Courses />
      )}
    </>
  );
}
