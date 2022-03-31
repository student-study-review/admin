import {
  TableRow,
  TableCell,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  Box,
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import React from 'react';
import {
  School,
  SchoolRequest,
  useGetAdminSchoolRequestsQuery,
} from '../graphql/graphql';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useForm } from 'react-hook-form';

function Row(props: { schoolRequest: SchoolRequest }) {
  const { schoolRequest } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset' },
        }}
      >
        <TableCell component="th" scope="row" sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              color: (t) => t.palette.text.primary,
              fontWeight: 500,
              fontSize: '15px',
            }}
          >
            {schoolRequest.name}
          </Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              // color: (t) => t.palette.success.main,
              color: (t) => t.palette.text.primary,
              fontWeight: 400,
              fontSize: '13px',
            }}
          >
            {schoolRequest.fullAddress}
          </Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              color: (t) => t.palette.text.disabled,
              fontSize: '13px',
              fontWeight: '400',
            }}
          >
            {schoolRequest.websiteURL}
          </Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              color: (t) => t.palette.text.disabled,
              fontSize: '13px',
              fontWeight: '400',
            }}
          >
            {schoolRequest.emailSuffix}
          </Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              color: (t) => t.palette.text.disabled,
              fontSize: '13px',
              fontWeight: '400',
            }}
          >
            {schoolRequest.user?.username}
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
            <MenuItem onClick={handleClose}>Accept</MenuItem>
            <MenuItem onClick={handleClose}>Reject</MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
    </>
  );
}

const SchoolRequests = () => {
  const { data, loading } = useGetAdminSchoolRequestsQuery();

  console.log(data, loading, 'data and loading...');

  return (
    <Box sx={{ padding: '1rem' }}>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: '1.5rem' }}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                    paddingLeft: '3rem',
                  }}
                >
                  School Name
                </TableCell>
                <TableCell
                  sx={{
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                  }}
                >
                  Address
                </TableCell>
                <TableCell
                  sx={{
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                  }}
                >
                  Website URL
                </TableCell>
                <TableCell
                  sx={{
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                  }}
                >
                  Email Suffix
                </TableCell>
                <TableCell
                  sx={{
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                  }}
                >
                  Requested By
                </TableCell>
                <TableCell align="right">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.getAdminSchoolRequests?.map((schoolRequest) => {
                return (
                  <Row key={schoolRequest.id} schoolRequest={schoolRequest} />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default SchoolRequests;
