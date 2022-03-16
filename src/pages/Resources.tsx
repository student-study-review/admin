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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { School, useGetSchoolsQuery } from '../graphql/graphql';

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
  const { data, loading } = useGetSchoolsQuery();

  console.log(data?.getSchools);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Nav title="Resources" />
      <TableContainer component={Paper} sx={{ marginTop: '1.5rem' }}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell> School Name </TableCell>
              <TableCell>Website URL</TableCell>
              <TableCell> Full Address </TableCell>
              <TableCell> Email Suffix </TableCell>
              <TableCell align="right">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.getSchools.map((school) => (
              <Row key={school.id} school={school} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
