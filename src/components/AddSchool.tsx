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
  CreateSchoolInput,
  useCreateSchoolMutation,
  useGetSchoolsQuery,
} from '../graphql/graphql';
import MuiAlert from '@mui/material/Alert';
const AddSchool = () => {
  const [createSchool, { loading }] = useCreateSchoolMutation();

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
    // watch,
    formState: {},
  } = useForm<CreateSchoolInput>();

  return (
    <Container maxWidth="md">
      <form
        onSubmit={handleSubmit(async (data) => {
          try {
            const createSchoolResponse = await createSchool({
              variables: {
                data,
              },
            });

            console.log(
              createSchoolResponse.data?.createSchool,
              'createSchoolResponse.data?.createSchool'
            );

            setAlert({
              message: createSchoolResponse.data?.createSchool
                .message as string,
              status: true,
              type: 'success',
            });

            reset();
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
          <FormLabel> School Name </FormLabel>
          <OutlinedInput
            fullWidth
            id="name"
            type="text"
            placeholder="School Name"
            {...register('name')}
            required
          />
        </FormControl>
        <FormControl
          sx={{ my: 1, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <FormLabel> Full Address </FormLabel>
          <OutlinedInput
            fullWidth
            id="fullAddress"
            type="text"
            placeholder="Full Address"
            {...register('fullAddress')}
            required
          />
        </FormControl>
        <FormControl
          sx={{ my: 1, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <FormLabel> Website URL </FormLabel>
          <OutlinedInput
            fullWidth
            id="websiteURL"
            type="text"
            placeholder="Website URL"
            {...register('websiteURL')}
            required
          />
        </FormControl>
        <FormControl
          sx={{ my: 1, mb: 3, width: '100%' }}
          variant="outlined"
          size="small"
        >
          <FormLabel> Email Suffix </FormLabel>
          <OutlinedInput
            fullWidth
            id="emailSuffix"
            type="text"
            placeholder="Email Suffix"
            {...register('emailSuffix')}
            required
          />
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

export default AddSchool;
