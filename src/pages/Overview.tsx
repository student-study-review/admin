import {  Typography } from '@mui/material';
import React, { useState } from 'react';
import Nav from '../components/Nav';

function Overview() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Nav title="Overview" />
      <Typography>Hello World...</Typography>
    </>
  );
}

export default Overview;
