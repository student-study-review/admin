import {
  Box,
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  Snackbar,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import Nav from '../components/Nav';
import { useForm } from 'react-hook-form';
import SelectInput, { StyledOption } from '../components/SelectInput';
import { AdminRole, useSendInviteMutation } from '../graphql/graphql';
import MuiAlert from '@mui/material/Alert';

function NewAdmin() {
  const [sendInvite, { loading }] = useSendInviteMutation();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: {},
  } = useForm<{ email: string; role: AdminRole }>();

  const [alert, setAlert] = useState<{
    message: string;
    status: boolean;
    type: 'error' | 'success' | 'info' | 'warning';
  }>({
    message: '',
    status: false,
    type: 'success',
  });

  return (
    <>
      <Nav title="Admins" />
      <Box sx={{ padding: '2rem' }}>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '2.3rem',
            color: (t) => t.palette.text.secondary,
            lineHeight: '39px',
          }}
        >
          Admins
        </Typography>
        <form
          style={{ width: '75%', marginTop: '3rem' }}
          onSubmit={handleSubmit(async (data) => {
            try {
              const sendInviteResponse = await sendInvite({
                variables: {
                  data,
                },
              });

              reset()

              setAlert({
                message: sendInviteResponse.data?.sendInvite.message || "invitation sent",
                status: true,
                type: 'success',
              });
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
                fontWeight: '600',
              }}
            >
              {' '}
              Email{' '}
            </FormLabel>
            <OutlinedInput
              fullWidth
              id="email"
              type="email"
              sx={{ background: (t) => t.palette.background.paper }}
              {...register('email')}
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
                fontWeight: '600',
              }}
            >
              {' '}
              Role{' '}
            </FormLabel>
            <SelectInput name="role" control={control}>
              {[
                { id: '1', name: AdminRole.Admin },
                { id: '2', name: AdminRole.SuperAdmin },
              ].map((admin) => (
                <StyledOption value={admin.name} key={admin.id}>
                  {admin.name}
                </StyledOption>
              ))}
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
              }}
              //   disabled={!isEmail(watch('email') || '') || !watch('role')}
            >
              {loading ? 'Sending Invite...' : 'Send Invite'}
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
      </Box>
    </>
  );
}

export default NewAdmin;
