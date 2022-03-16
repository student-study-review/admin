import {
  Container,
  FormControl,
  OutlinedInput,
  FormLabel,
  Button,
  Snackbar,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  CreateCourseInput,
  useCreateCourseMutation,
  useGetSchoolFacultiesLazyQuery,
  useGetSchoolsQuery,
} from '../graphql/graphql';
import MuiAlert from '@mui/material/Alert';
import SelectInput, { StyledOption } from './SelectInput';

const AddCourse = () => {
  const [createCourse, { loading }] = useCreateCourseMutation();
  const { data: schoolsData } = useGetSchoolsQuery();
  const [getSchoolFaculties, { data: facultiesData }] =
    useGetSchoolFacultiesLazyQuery();

  const [alert, setAlert] = useState<{
    message: string;
    status: boolean;
    type: 'error' | 'success' | 'info' | 'warning';
  }>({
    message: '',
    status: false,
    type: 'success',
  });

  const {
    register,
    handleSubmit,
    resetField,
    watch,
    control,
    formState: {},
  } = useForm<{
    code: string;
    departmentId: string;
    schoolId: string;
    title: string;
    facultyId?: string;
  }>();

  useEffect(() => {
    getSchoolFaculties({
      variables: {
        schoolId: watch('schoolId'),
      },
    });
  }, [watch('schoolId')]);

  return (
    <Container maxWidth="md">
      <form
        onSubmit={handleSubmit(async (data) => {
          console.log(data, '..data..');
          delete data.facultyId
          try {
            const createSchoolResponse = await createCourse({
              variables: {
                data,
              },
            });

            console.log(createSchoolResponse)
            setAlert({
              message: "Course created..",
              status: true,
              type: 'success',
            });
            resetField('code');
            resetField("title");
          } catch (err: any) {
            setAlert({ message: err.message, status: true, type: 'error' });
          }
        })}
      >
        <FormControl
          sx={{ my: 1, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <FormLabel> Course Code </FormLabel>
          <OutlinedInput
            fullWidth
            id="code"
            type="text"
            placeholder="Course Code"
            {...register('code')}
            required
          />
        </FormControl>

        <FormControl
          sx={{ my: 1, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <FormLabel> Course Title </FormLabel>
          <OutlinedInput
            fullWidth
            id="title"
            type="text"
            placeholder="Course Title"
            {...register('title')}
            required
          />
        </FormControl>

        <FormControl
          sx={{ my: 1, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <FormLabel> School Name </FormLabel>
          <SelectInput name="schoolId" control={control}>
            {schoolsData?.getSchools.map((school) => (
              <StyledOption value={school.id} key={school.id}>
                {' '}
                {school.name}{' '}
              </StyledOption>
            ))}
          </SelectInput>
        </FormControl>

        <FormControl
          sx={{ my: 1, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <FormLabel> Faculty Name </FormLabel>
          <SelectInput name="facultyId" control={control}>
            {facultiesData?.getSchoolFaculties.faculties?.map((faculty) => (
              <StyledOption value={faculty!.id} key={faculty!.id}>
                {' '}
                {faculty!.name}{' '}
              </StyledOption>
            ))}
          </SelectInput>
        </FormControl>

        <FormControl
          sx={{ my: 1, mb: 3, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <FormLabel> Department Name </FormLabel>
          <SelectInput name="departmentId" control={control}>
            {facultiesData?.getSchoolFaculties.faculties
              ?.find(
                (faculty) => (faculty!.id as string) === watch('facultyId')
              )
              ?.departments?.map((department) => (
                <StyledOption value={department!.id} key={department!.id}>
                  {department!.name}
                </StyledOption>
              ))}
          </SelectInput>
        </FormControl>

        <FormControl
          sx={{ mb: 3, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <Button
            type="submit"
            disableElevation
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: '.5rem', textTransform: 'none' }}
            // disabled={}
          >
            {loading ? 'Adding...' : 'Add Course'}
          </Button>
        </FormControl>
      </form>
      <Snackbar
        open={alert.status}
        autoHideDuration={6000}
        onClose={() =>
          setAlert({ status: false, message: '', type: alert.type })
        }
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={() =>
            setAlert({ status: false, message: '', type: alert.type })
          }
          severity={alert.type}
          sx={{ width: '100%' }}
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </Container>
  );
};

export default AddCourse;
