import React from 'react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Box, Typography, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { useGetAdminQuery } from '../graphql/graphql';

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

  // console.log(, "adminData")

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
        >
          { !adminData ? "" :  (adminData.getAdmin.fullName)![0] }
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
        <IconButton>
          <ArrowDropDownOutlinedIcon color="primary" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UserDropDown;
