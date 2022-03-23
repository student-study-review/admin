import {
  Box,
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
  Typography,
} from '@mui/material';
import React from 'react';
import Nav from '../components/Nav';
import { useForm } from 'react-hook-form';
import SelectInput, { StyledOption } from '../components/SelectInput';
// import isEmail from 'validator/lib/isEmail';

function NewAdmin() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: {},
  } = useForm<{ email: string; role: string }>();

  return (
    <>
      <Nav title="Admins" />
      <Box sx={{ padding: '2rem' }}>
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '2.3rem',
            color: '#333333',
            lineHeight: '39px',
          }}
        >
          Admins
        </Typography>
        <form style={{ width: '75%', marginTop: '3rem' }}>
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
                color: '#52575C',
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
              sx={{ background: 'white' }}
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
                color: '#52575C',
                fontSize: '1rem',
                fontWeight: '600',
              }}
            >
              {' '}
              Role{' '}
            </FormLabel>
            <SelectInput name="facultyId" control={control}>
              {[
                { id: '1', name: 'ADMIN' },
                { id: '2', name: 'SUPER_ADMIN' },
              ].map((admin) => (
                <StyledOption value={admin.name} key={admin.id}>
                  {admin.name}
                </StyledOption>
              ))}
            </SelectInput>
          </FormControl>
          <FormControl
            sx={{ mb: 3, width: '100%', display: "flex", justifyContent: 'flex-end', flexDirection: "row" }}
            variant="outlined"
            size="small"
          >
            <Button
              type="submit"
              disableElevation
              variant="contained"
              color="primary"
              size="large"
              sx={{ borderRadius: '.5rem', textTransform: 'none', padding: "1rem" }}
            //   disabled={!isEmail(watch('email') || '') || !watch('role')}
            >
                Send Invite
            </Button>
          </FormControl>
        </form>
      </Box>
    </>
  );
}

export default NewAdmin;
