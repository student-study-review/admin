import { Box, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';
import AddCourse from '../components/AddCourse';
import AddDepartment from '../components/AddDepartment';
import AddFaculty from '../components/AddFaculty';
import AddSchool from '../components/AddSchool';
import Nav from '../components/Nav';

function AddResource() {
  const [value, setValue] = useState(0);

  return (
    <>
      <Nav title="AddResource" />
      <Box
        sx={{ width: '100%', marginTop: '1rem' }}
      >
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          centered
          sx={{marginBottom: "1rem"}}
          
        >
          <Tab label="School" />
          <Tab label="Faculty" />
          <Tab label="Department" />
          <Tab label="Course" />
        </Tabs>

        {value === 0 ? (
          <AddSchool />
        ) : value === 1 ? (
          <AddFaculty />
        ) : value === 2 ? (
          <AddDepartment />
        ) : (
          <AddCourse />
        )}
      </Box>
    </>
  );
}

export default AddResource;
