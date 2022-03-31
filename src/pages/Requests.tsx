import { Tabs, Tab } from '@mui/material';
import React from 'react';
import Nav from '../components/Nav';
import SchoolRequests from '../components/SchoolRequests';
import FacultyRequests from '../components/FacultyRequests';
import DepartmentRequests from '../components/DepartmentRequests';
import CourseRequests from "../components/CourseRequests"

function Requests() {
  const [value, setValue] = React.useState(0);

  return (
    <>
      <Nav title="Requests" />
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
        <SchoolRequests />
      ) : value === 1 ? (
        <FacultyRequests />
      ) : value === 2 ? (
        <DepartmentRequests />
      ) : (
        <CourseRequests />
      )}
    </>
  );
}

export default Requests;
