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
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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
    <Container sx={{padding: 0}} >
      <form
        style={{ width: '75%', marginTop: '3rem' }}
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
          sx={{
            my: 1,
            mb: 3,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          variant="outlined"
          size="small"
        >
          <FormLabel
            sx={{
              flexBasis: '35%',
              color: (t) => t.palette.text.secondary,
              fontSize: '1rem',
              fontWeight: '500',
            }}
          >
            {' '}
            School Name{' '}
          </FormLabel>
          <OutlinedInput
            fullWidth
            id="name"
            type="text"
            placeholder="School Name"
            sx={{ background: (t) => t.palette.background.paper }}
            {...register('name')}
            required
          />
        </FormControl>
        <FormControl
          sx={{
            my: 1,
            mb: 3,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          variant="outlined"
          size="small"
        >
          <FormLabel
            sx={{
              flexBasis: '35%',
              color: (t) => t.palette.text.secondary,
              fontSize: '1rem',
              fontWeight: '500',
            }}
          >
            {' '}
            Full Address{' '}
          </FormLabel>
          <OutlinedInput
            fullWidth
            id="fullAddress"
            type="text"
            sx={{ background: (t) => t.palette.background.paper }}
            placeholder="Full Address"
            {...register('fullAddress')}
            required
          />
        </FormControl>
        <FormControl
          sx={{
            my: 1,
            mb: 3,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          variant="outlined"
          size="small"
        >
          <FormLabel
            sx={{
              flexBasis: '35%',
              color: (t) => t.palette.text.secondary,
              fontSize: '1rem',
              fontWeight: '500',
            }}
          >
            {' '}
            Website URL{' '}
          </FormLabel>
          <OutlinedInput
            fullWidth
            id="websiteURL"
            type="text"
            placeholder="Website URL"
            sx={{ background: (t) => t.palette.background.paper }}
            {...register('websiteURL')}
            required
          />
        </FormControl>
        <FormControl
          sx={{
            my: 1,
            mb: 3,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          variant="outlined"
          size="small"
        >
          <FormLabel
            sx={{
              flexBasis: '35%',
              color: (t) => t.palette.text.secondary,
              fontSize: '1rem',
              fontWeight: '500',
            }}
          >
            {' '}
            Email Suffix{' '}
          </FormLabel>
          <OutlinedInput
            fullWidth
            id="emailSuffix"
            type="text"
            placeholder="Email Suffix"
            {...register('emailSuffix')}
            sx={{ background: (t) => t.palette.background.paper }}
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
            type="submit"
            disableElevation
            variant="contained"
            color="primary"
            size="large"
            sx={{
              borderRadius: '.5rem',
              textTransform: 'none',
              padding: '1rem',
            }}
          >
            <AddCircleOutlineIcon sx={{paddingLeft: ".25rem"}} /> {loading ? ' Adding...' : ' Add School'}
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
