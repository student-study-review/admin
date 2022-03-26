import { ChevronRight } from '@mui/icons-material';
import { Box, Avatar, Typography } from '@mui/material';
import React from 'react';

const VerificationBox = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.5rem',
        background: '#F0F7FF',
        borderRadius: '14px',
        marginBottom: "1rem"
      }}
    >
      <Avatar
        sx={{
          bgcolor: (t) => t.palette.primary.main,
          width: 42,
          height: 42,
        }}
        sizes="lg"
        variant="circular"
      ></Avatar>
      <Box>
        <Typography
          sx={{
            color: (t) => t.palette.text.secondary,
            fontWeight: 700,
            fontSize: '15px',
            lineHeight: '20px',
          }}
        >
          {' '}
          Halic Universitesi{' '}
        </Typography>
        <Typography
          sx={{
            color: (t) => t.palette.text.primary,
            fontSize: '10px',
            fontWeight: 700,
            lineHeight: '14px',
          }}
        >
          {' '}
          Babatunde Ololade{' '}
        </Typography>
        <Typography
          sx={{
            color: (t) => t.palette.text.primary,
            fontSize: '10px',
            fontWeight: 700,
            lineHeight: '14px',
          }}
        >
          8th Oct. 2020 - 09:00AM
        </Typography>
      </Box>
      <ChevronRight />
    </Box>
  );
};

export default VerificationBox;
