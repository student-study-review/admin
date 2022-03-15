import {
  Container,
  FormControl,
  OutlinedInput,
  FormLabel,
  Button,
  Snackbar,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  CreateFacultyInput,
  useCreateFacultyMutation,
  useGetSchoolsQuery,
} from '../graphql/graphql';
import MuiAlert from '@mui/material/Alert';
import SelectInput, { StyledOption } from './SelectInput';
import { Watch } from '@mui/icons-material';

const AddFaculty = () => {
  const [createFaculty, { loading }] = useCreateFacultyMutation();
  const { data, loading: schoolLoading } = useGetSchoolsQuery();

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
    reset,
    watch,
    formState: {},
  } = useForm<CreateFacultyInput>();

  const test = {name: "schoolId"}

  return (
    <Container maxWidth="md">
      <form
        onSubmit={handleSubmit(async (data) => {
            console.log(data, "..data...")
          // try {
          //   const createSchoolResponse = await createSchool({
          //     variables: {
          //       data,
          //     },
          //   });
          //   console.log(
          //     createSchoolResponse.data?.createFaculty,
          //     'createSchoolResponse.data?.createSchool'
          //   );
          //   setAlert({
          //     message: createSchoolResponse.data?.createFaculty
          //       .message as string,
          //     status: true,
          //     type: 'success',
          //   });
          //   reset();
          // } catch (err: any) {
          //   setAlert({ message: err.message, status: true, type: 'error' });
          // }
        })}
      >
        <FormControl
          sx={{ my: 1, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <FormLabel> Faculty Name </FormLabel>
          <OutlinedInput
            fullWidth
            id="name"
            type="text"
            placeholder="Faculty Name"
            {...register('name')}
            required
          />
        </FormControl>
        <FormControl
          sx={{ my: 1, mb: 3, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <FormLabel> School Name </FormLabel>
          
          <SelectInput {...register("schoolId")}  >
            {data?.getSchools.map((school) => (
              <StyledOption value={school.id} key={school.id} > {school.name} </StyledOption>
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
            {loading ? 'Adding...' : 'Add School'}
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

export default AddFaculty;
