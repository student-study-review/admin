import {
  Button,
  Typography,
  Avatar,
  Stack,
  FormControl,
  FormLabel,
  OutlinedInput,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useAlert } from 'react-alert';
import { useForm } from 'react-hook-form';
import Nav from '../components/Nav';
import SelectInput, { StyledOption } from '../components/SelectInput';
import CircularProgress from '@mui/material/CircularProgress';
import {
  AdminStatus,
  useGetAdminQuery,
  useUpdateAdminProfileMutation,
} from '../graphql/graphql';

function Settings() {
  const { data: adminData, loading: adminDataLoading } = useGetAdminQuery();
  const [updateAdminProfile, { loading: updateAdminProfileLoading }] =
    useUpdateAdminProfileMutation();
  const inputFileRef = useRef(null);
  const alert = useAlert();

  const { register, handleSubmit, control, reset, watch } = useForm({
    defaultValues: {
      fullName: adminData?.getAdmin.fullName || '',
      status: adminData?.getAdmin.status || '',
      profileImage: adminData?.getAdmin.profileImage || '',
    },
  });

  console.log(updateAdminProfileLoading, 'updateAdminProfileLoading...');

  const [imageToUpload, setImageToUpload] = useState();

  useEffect(() => {
    if (!adminDataLoading) {
      reset({
        fullName: adminData?.getAdmin.fullName || '',
        status: adminData?.getAdmin.status || '',
        profileImage: adminData?.getAdmin.profileImage || '',
      });
    }
  }, [adminDataLoading]);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      reset({
        profileImage: URL.createObjectURL(img),
        fullName: watch('fullName'),
        status: watch('status'),
      });
      setImageToUpload(img);
    }
  };

  return (
    <>
      <Nav title="Settings" />
      <Stack direction="column" spacing={2} sx={{ padding: '2rem' }}>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '2.3rem',
            lineHeight: '39px',
            color: (t) => t.palette.text.secondary,
          }}
        >
          Settings
        </Typography>
        <Stack direction="row" alignItems="flex-end" spacing="4">
          <Avatar
            alt="your profile image"
            src={watch('profileImage')}
            sx={{ width: 120, height: 120 }}
          />
          <Stack direction="row" spacing="2">
            <input
              ref={inputFileRef}
              type="file"
              onChange={onImageChange}
              style={{ display: 'none' }}
            />
            <Button
              variant="outlined"
              color="primary"
              sx={{ textTransform: 'none' }}
              style={{ marginRight: '1rem' }}
              onClick={() => {
                (inputFileRef.current! as HTMLInputElement).click();
              }}
            >
              Change
            </Button>
            {/* <Button
              variant="outlined"
              color="error"
              onClick={() => {
                reset({
                  profileImage: "",
                  fullName: watch('fullName'),
                  status: watch('status'),
                });
                setImageToUpload(undefined)
              }}
            >
              {' '}
              Delete{' '}
            </Button> */}
          </Stack>
        </Stack>
        <form
          style={{ width: '50%' }}
          onSubmit={handleSubmit(async (data) => {
            try {
              await updateAdminProfile({
                variables: {
                  data: {
                    [imageToUpload ? 'profileImage' : '']: imageToUpload,
                    fullName: data.fullName,
                    status: data.status as AdminStatus,
                  },
                },
              });

              alert.success('Profile Updated');
            } catch (err: any) {
              alert.error(err.message);
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
                flexBasis: '25%',
                color: (t) => t.palette.text.secondary,
                fontSize: '1rem',
                fontWeight: '600',
              }}
            >
              Full Name
            </FormLabel>
            <OutlinedInput
              fullWidth
              id="email"
              type="text"
              sx={{ background: (t) => t.palette.background.paper }}
              {...register('fullName')}
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
                flexBasis: '25%',
                color: (t) => t.palette.text.secondary,
                fontSize: '1rem',
                fontWeight: '500',
              }}
            >
              Status
            </FormLabel>

            <SelectInput name="status" control={control}>
              {[AdminStatus.Available, AdminStatus.NotAvailable].map(
                (status) => (
                  <StyledOption value={status} key={status}>
                    {status}
                  </StyledOption>
                )
              )}
            </SelectInput>
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
                minWidth: "59px"
              }}
            >
              {updateAdminProfileLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                'Update Profile'
              )}
            </Button>
          </FormControl>
        </form>
      </Stack>
    </>
  );
}

export default Settings;
