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
  Department,
  Faculty,
  School,
  useGetFacultyDepartmentsLazyQuery,
  useGetSchoolFacultiesLazyQuery,
} from '../graphql/graphql';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import SelectInput, { StyledOption } from '../components/SelectInput';

import { useGetSchoolsQuery } from '../graphql/graphql';
import { useForm } from 'react-hook-form';

function Row(props: { department: Department }) {
  const { department } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit, control, reset, watch } = useForm({
    defaultValues: {
      name: department.name,
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
            {department.name}
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
              bgcolor: (t) => t.palette.background.paper,
              border: '2px solid #fff',
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
              }}
            >
              Edit Faculty
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
              Kindly edit this faculty information
            </Typography>
            <form
              onSubmit={handleSubmit(async (data) => {
                // TODO: send to the server!!!
                console.log(data);
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
                  {...register('name')}
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
                  Save
                </Button>
              </FormControl>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

const Departments = () => {
  const [
    getSchoolFaculties,
    { loading: schoolFacultiesLoading, data: facultiesData },
  ] = useGetSchoolFacultiesLazyQuery();

  const { data: schoolsData, loading: schoolsLoading } = useGetSchoolsQuery();
  const [
    getDepartments,
    { loading: departmentsLoading, data: departmentsData },
  ] = useGetFacultyDepartmentsLazyQuery();

  console.log(departmentsData, 'DEPARTMENT__DATA!!!');

  const {
    watch,
    control,
    reset,
    formState: {},
  } = useForm();

  const schoolId = watch('schoolId');
  const facultyId = watch('facultyId');

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

  //   useEffect(() => {
  //     if (!schoolsLoading) {
  //       reset({
  //         schoolId: schoolsData?.getSchools[0].id,
  //       });
  //     }
  //   }, [schoolsLoading]);

  return (
    <Box sx={{ padding: '1rem' }}>
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{ width: '75%', gap: '20px' }}
      >
        <SelectInput name="schoolId" control={control}>
          {schoolsData?.getSchools.map((school) => (
            <StyledOption value={school.id} key={school.id}>
              {school.name}
            </StyledOption>
          ))}
        </SelectInput>
        <SelectInput name="facultyId" control={control}>
          {facultiesData?.getSchoolFaculties.faculties?.map((faculty) => (
            <StyledOption value={faculty!.id} key={faculty!.id}>
              {faculty!.name}
            </StyledOption>
          ))}
        </SelectInput>
      </Stack>

      {departmentsLoading ? (
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
                  Name
                </TableCell>

                <TableCell align="right">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            {departmentsData && (
              <TableBody>
                {departmentsData?.getFacultyDepartments?.map((department) => {
                  return <Row key={department.id} department={department} />;
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Departments;
