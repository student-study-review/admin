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
      <Box sx={{ width: '100%', marginTop: '2rem', padding: '1rem' }}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          sx={{ marginBottom: '1rem' }}
        >
          <Tab
            label="School"
            sx={{
              textTransform: 'none',
              fontSize: value === 0 ? '20px' : '16px',
              fontWeight: value === 0 ? 700 : 400,
              paddingBottom: '0px',
              color: t => value !== 0 ? t.palette.text.primary : undefined,
              opacity: value !== 0 ? '0.7' : '1',
            }}
          />
          <Tab
            label="Faculty"
            sx={{
              textTransform: 'none',
              fontSize: value === 1 ? '20px' : '16px',
              fontWeight: value === 1 ? 700 : 400,
              paddingBottom: '0px',
              color: t => value !== 1 ? t.palette.text.primary : undefined,
              opacity: value !== 1 ? '0.7' : '1',
            }}
          />
          <Tab
            label="Department"
            sx={{
              textTransform: 'none',
              fontSize: value === 2 ? '20px' : '16px',
              fontWeight: value === 2 ? 700 : 400,
              paddingBottom: '0px',
              color: t => value !== 2 ? t.palette.text.primary : undefined,
              opacity: value !== 2 ? '0.7' : '1',
            }}
          />
          <Tab
            label="Course"
            sx={{
              textTransform: 'none',
              fontSize: value === 3 ? '20px' : '16px',
              fontWeight: value === 3 ? 700 : 400,
              paddingBottom: '0px',
              color: t => value !== 3 ? t.palette.text.primary : undefined,
              opacity: value !== 3 ? '0.7' : '1',
            }}
          />
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
