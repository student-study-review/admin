import React from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { useGetAdminQuery } from '../graphql/graphql';
import { Settings } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import useToken from '../hooks/useToken';
import { useNavigate } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#D50000',
    color: '#D50000',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const UserDropDown = () => {
  const { data: adminData, loading: adminDataLoading } = useGetAdminQuery();
  const { deleteToken } = useToken();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // width: '25%',
      }}
    >
      <IconButton>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          variant="dot"
        >
          <NotificationsNoneOutlinedIcon color="primary" />
        </StyledBadge>
      </IconButton>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: '#F0F7FF',
          padding: '4px',
          borderRadius: '4px',
        }}
      >
        <Avatar
          sx={{
            bgcolor: (t) => t.palette.primary.main,
            width: 36,
            height: 36,
          }}
          sizes="lg"
          variant="rounded"
          src={!adminData ? '' : adminData.getAdmin.profileImage as string }
        >
          {!adminData ? '' : adminData.getAdmin.fullName![0]}
        </Avatar>
        <Typography
          sx={{
            color: (t) => t.palette.text.secondary,
            fontWeight: '600',
            fontSize: '15px',
            marginLeft: '.5rem',
          }}
        >
          {adminData?.getAdmin.fullName}
        </Typography>
        <Box>
          <IconButton onClick={handleClick}>
            <ArrowDropDownOutlinedIcon color="primary" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem sx={{ width: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      color: (t) => t.palette.primary.main,
                      fontSize: '14px',
                      fontWeight: 600,
                    }}
                  >
                    {!adminData ? '' : adminData.getAdmin.fullName}
                  </Typography>
                  <Typography
                    sx={{
                      color: (t) => t.palette.text.primary,
                      fontSize: '12px',
                      fontWeight: 500,
                      textTransform: 'lowercase',
                      lineHeight: '16px',
                    }}
                  >
                    {' '}
                    {adminData?.getAdmin.role}{' '}
                  </Typography>
                </Box>
              </Box>
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => {
              navigate("/dashboard/settings")
              handleClose()
            }} >
              <ListItemIcon>
                <Settings fontSize="medium" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem
              onClick={() => {
                deleteToken();
                window.location.reload();
              }}
            >
              <ListItemIcon>
                <LogoutIcon fontSize="medium" />
              </ListItemIcon>
              Sign Out
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDropDown;
