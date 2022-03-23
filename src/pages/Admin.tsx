import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Nav from '../components/Nav';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Paper from '@mui/material/Paper';
import PersonRemoveAlt1OutlinedIcon from '@mui/icons-material/PersonRemoveAlt1Outlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { CheckBox } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

type Admin = {
  name: string;
  status: string;
  position: string;
  activity: string;
};

function Row(props: {
  admin: Admin;
  onClick: () => void;
  selectedName: string;
}) {
  const { admin, onClick, selectedName } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableRow
      sx={{ '& > *': { borderBottom: 'unset' }, cursor: 'pointer' }}
      onClick={onClick}
    >
      <TableCell
        component="th"
        scope="row"
        sx={{ display: 'flex', alignItems: 'center', borderBottom: '0px' }}
      >
        <CheckBox
          color="primary"
          sx={{
            visibility: selectedName === admin.name ? 'visible' : 'hidden',
            marginRight: '.5rem',
          }}
        />{' '}
        <Avatar
          sx={{
            marginRight: '.5rem',
            background: (t) => t.palette.primary.main,
          }}
        >
          {' '}
          {admin.name[0]}{' '}
        </Avatar>
        <Typography
          sx={{ color: t => t.palette.text.primary  , fontWeight: 500, fontSize: '15px' }}
        >
          {admin.name}
        </Typography>
      </TableCell>
      <TableCell sx={{ borderBottom: '0px' }}>
        <Typography
          sx={{
            color: (t) => t.palette.success.main,
            fontWeight: 600,
            fontSize: '13px',
          }}
        >
          {admin.status}
        </Typography>
      </TableCell>
      <TableCell sx={{ borderBottom: '0px' }}>
        <Typography
          sx={{ color: t => t.palette.text.disabled, fontSize: '13px', fontWeight: '400' }}
        >
          {admin.position}
        </Typography>
      </TableCell>
      <TableCell sx={{ borderBottom: '0px' }}>
        <Typography
          sx={{ color: t => t.palette.text.disabled, fontSize: '13px', fontWeight: '400' }}
        >
          {admin.activity}
        </Typography>
      </TableCell>
      <TableCell align="right" sx={{ borderBottom: '0px' }}>
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
          {/* <MenuItem onClick={handleClose}>Not yet</MenuItem> */}
          {/* <MenuItem onClick={handleClose}>Departments</MenuItem>
          <MenuItem onClick={handleClose}>Edit</MenuItem> */}
        </Menu>
      </TableCell>
    </TableRow>
  );
}

const admins = [
  {
    name: 'Babatunde Ololade',
    status: 'Active',
    position: 'super admin',
    activity: '12 mins ago',
  },
  {
    name: 'Owolabi Ola',
    status: 'Active',
    position: 'Admin',
    activity: '78 mins ago',
  },
  {
    name: 'Tunde JS',
    status: 'Active',
    position: 'Admin',
    activity: '12 mins ago',
  },
];

function Admins() {
  const [selectedAdmin, setSelectedAdmin] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <Nav title="Admins" />
      <Box sx={{ padding: '2rem' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '2.3rem',
              lineHeight: '39px',
              color: t => t.palette.text.secondary
            }}
          >
            Admins
          </Typography>

          {selectedAdmin && (
            <span>
              <Button
                sx={{
                  background: t => t.palette.background.paper,
                  color: t => t.palette.text.primary,
                  boxShadow: '-1px -1px 15.9113px rgb(39 43 45 / 45%)',
                  borderRadius: '5.30375px',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '21px',
                  textTransform: 'none',
                  marginRight: '1rem',
                }}
              >
                <AdminPanelSettingsOutlinedIcon
                  sx={{ paddingRight: '5px' }}
                  color="primary"
                />{' '}
                Make super admin
              </Button>

              <Button
                sx={{
                  background: t => t.palette.background.paper,
                  color: t => t.palette.text.primary,
                  boxShadow:
                    '-1px -1px 15.9113px rgb(39 43 45 / 45%)',
                  borderRadius: '5.30375px',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '21px',
                  textTransform: 'none',
                }}
              >
                <PersonRemoveAlt1OutlinedIcon
                  sx={{ paddingRight: '5px' }}
                  color="error"
                />{' '}
                Remove Admin
              </Button>
            </span>
          )}

          {!selectedAdmin && (
            <Button
              sx={{
                boxShadow: '-1px -1px 15.9113px rgb(39 43 45 / 45%)',
                borderRadius: '5.30375px',
                background: t => t.palette.background.paper,
                color: t => t.palette.text.primary,
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '21px',
                textTransform: 'none',
              }}
              onClick={() => {
                navigate("new")
              }}
            >
              <AddCircleOutlineOutlinedIcon
                sx={{ paddingRight: '5px' }}
                color="primary"
              />{' '}
              Add new admin
            </Button>
          )}
        </Box>
        <TableContainer component={Paper} sx={{ marginTop: '1.5rem' }}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: t => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                    paddingLeft: "3rem"
                  }}
                >
                  Admins
                </TableCell>
                <TableCell
                  sx={{ color: t => t.palette.text.disabled, fontWeight: '500', fontSize: '14px' }}
                >
                  {' '}
                  Status{' '}
                </TableCell>
                <TableCell
                  sx={{ color: t => t.palette.text.disabled, fontWeight: '500', fontSize: '14px' }}
                >
                  {' '}
                  Position{' '}
                </TableCell>
                <TableCell
                  sx={{ color: t => t.palette.text.disabled, fontWeight: '500', fontSize: '14px' }}
                >
                  {' '}
                  Activity{' '}
                </TableCell>
                <TableCell align="right">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {admins.map((admin) => (
                <Row
                  key={admin.name}
                  admin={admin}
                  selectedName={selectedAdmin}
                  onClick={() => {
                    setSelectedAdmin((prev) => {
                      if (prev === admin.name) return '';
                      return admin.name;
                    });
                  }}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Admins;
