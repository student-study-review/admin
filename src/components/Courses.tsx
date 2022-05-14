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
  Stack,
} from '@mui/material';
import React, { useEffect } from 'react';
import {
  Course,
  useEditCourseMutation,
  useGetDepartmentCoursesLazyQuery,
  useGetFacultyDepartmentsLazyQuery,
  useGetSchoolFacultiesLazyQuery,
} from '../graphql/graphql';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import SelectInput, { StyledOption } from '../components/SelectInput';
import { useTheme } from '@emotion/react';

import { useGetSchoolsQuery } from '../graphql/graphql';
import { useForm } from 'react-hook-form';

function Row(props: { course: Course }) {
  const { course } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();

  const [editCourse, { loading }] = useEditCourseMutation();

  const { register, handleSubmit, control, reset, watch } = useForm({
    defaultValues: {
      title: course.title,
      code: course.code,
    },
  });

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
            {course.title}
          </Typography>
        </TableCell>
        <TableCell scope="row" sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              color: (t) => t.palette.text.primary,
              fontWeight: 500,
              fontSize: '15px',
            }}
          >
            {course.code}
          </Typography>
        </TableCell>
        <TableCell align="right" sx={{ borderBottom: '0px' }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '.8rem',
              color: (t) => t.palette.text.disabled,
              textTransform: 'none',
            }}
            onClick={handleOpen}
          >
            {' '}
            Edit{' '}
          </Button>
        </TableCell>
      </TableRow>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: (t) => {
                //@ts-ignore
                return theme.palette.mode === 'light'
                  ? '#F0F7FF'
                  : t.palette.common.black;
              },
              borderRadius: '17.0956px',
              boxShadow: '0px 34.1912px 119.669px rgba(86, 89, 146, 0.1)',
              p: 4,
            }}
          >
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontWeight: 500,
                fontSize: '20.5147px',
                lineHeight: '31px',
                color: (t) => t.palette.text.primary,
              }}
            >
              Edit Course
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                mb: 2,
                fontWeight: 400,
                fontSize: '14px',
                color: (t) => t.palette.text.primary,
              }}
            >
              Kindly edit this course information
            </Typography>
            <form
              onSubmit={handleSubmit(async (data) => {
                // TODO: send to the server!!!
                console.log(data);

                await editCourse({
                  variables: {
                    data: {
                      title: data.title,
                      code: data.code,
                      id: course.id as string,
                    },
                  },
                });

                handleClose();
              })}
            >
              <FormControl
                sx={{
                  my: 1,
                  mb: 3,
                  width: '100%',
                }}
                variant="outlined"
                size="small"
              >
                <FormLabel
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: (t) => t.palette.text.secondary,
                  }}
                >
                  Faculty Name
                </FormLabel>
                <OutlinedInput
                  fullWidth
                  id="name"
                  type="text"
                  placeholder="School Name"
                  sx={{
                    background: (t) => t.palette.background.paper,
                    borderRadius: '7.15938px',
                  }}
                  {...register('title')}
                  required
                />
              </FormControl>
              <FormControl
                sx={{
                  my: 1,
                  mb: 3,
                  width: '100%',
                }}
                variant="outlined"
                size="small"
              >
                <FormLabel
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: (t) => t.palette.text.secondary,
                  }}
                >
                  Faculty Name
                </FormLabel>
                <OutlinedInput
                  fullWidth
                  id="name"
                  type="text"
                  placeholder="School Name"
                  sx={{
                    background: (t) => t.palette.background.paper,
                    borderRadius: '7.15938px',
                  }}
                  {...register('code')}
                  required
                />
              </FormControl>
              <FormControl
                sx={{
                  mb: 3,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  flexDirection: 'row',
                }}
                variant="outlined"
                size="small"
              >
                <Button
                  type="button"
                  onClick={handleClose}
                  disableElevation
                  variant="outlined"
                  color="error"
                  size="large"
                  sx={{
                    borderRadius: '.5rem',
                    textTransform: 'none',
                    // padding: '.5rem 1rem',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disableElevation
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: '.5rem',
                    textTransform: 'none',
                    marginLeft: '1rem',
                  }}
                >
                  {loading ? <CircularProgress color="inherit" /> : 'Save'}
                </Button>
              </FormControl>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

const Courses = () => {
  const [
    getSchoolFaculties,
    { loading: schoolFacultiesLoading, data: facultiesData },
  ] = useGetSchoolFacultiesLazyQuery();

  const { data: schoolsData, loading: schoolsLoading } = useGetSchoolsQuery();
  const [
    getDepartments,
    { loading: departmentsLoading, data: departmentsData },
  ] = useGetFacultyDepartmentsLazyQuery();

  const [getCourses, { loading: coursesLoading, data: coursesData }] =
    useGetDepartmentCoursesLazyQuery();

  const {
    watch,
    control,
    reset,
    formState: {},
  } = useForm();

  const schoolId = watch('schoolId');
  const facultyId = watch('facultyId');
  const departmentId = watch('departmentId');

  useEffect(() => {
    if (schoolId) {
      getSchoolFaculties({
        variables: {
          schoolId,
        },
      });
    }
  }, [schoolId]);

  useEffect(() => {
    if (facultyId) {
      getDepartments({
        variables: {
          facultyId,
        },
      });
    }
  }, [facultyId]);

  useEffect(() => {
    if (departmentId) {
      getCourses({
        variables: {
          departmentId,
        },
      });
    }
  }, [departmentId]);

  return (
    <Box sx={{ padding: '1rem' }}>
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{ width: '100%', gap: '20px' }}
      >
        <SelectInput name="schoolId" control={control}>
          {schoolsData?.getSchools.map((school) => (
            <StyledOption value={school.id} key={school.id}>
              {school.name}
            </StyledOption>
          ))}
        </SelectInput>
        <SelectInput name="facultyId" control={control}>
          {facultiesData?.getSchoolFaculties.map((faculty) => (
            <StyledOption value={faculty!.id} key={faculty!.id}>
              {faculty!.name}
            </StyledOption>
          ))}
        </SelectInput>
        <SelectInput name="departmentId" control={control}>
          {departmentsData?.getFacultyDepartments?.map((department) => (
            <StyledOption value={department.id} key={department.id}>
              {department.name}
            </StyledOption>
          ))}
        </SelectInput>
      </Stack>

      {coursesLoading ? (
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
                  Course Title
                </TableCell>
                <TableCell
                  sx={{
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                  }}
                >
                  Course Code
                </TableCell>

                <TableCell align="right">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            {coursesData && (
              <TableBody>
                {coursesData?.getDepartmentCourses?.map((course) => {
                  return <Row key={course.id} course={course} />;
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Courses;
