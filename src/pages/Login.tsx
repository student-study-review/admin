import {
  Container,
  Box,
  Typography,
  FormControl,
  InputAdornment,
  OutlinedInput,
  FormLabel,
  IconButton,
  Button,
  Snackbar,
} from '@mui/material';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form';
import isEmail from 'validator/lib/isEmail';
import { useAdminLoginMutation } from '../graphql/graphql';
import MuiAlert from '@mui/material/Alert';
import useToken from '../hooks/useToken';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const [adminLogin, { loading }] = useAdminLoginMutation();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  
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
    watch,
    formState: {  },
  } = useForm<{ email: string; password: string }>();

  const { setToken } = useToken();

  let navigate = useNavigate();
  let location = useLocation();

  let from = (location.state as any)?.from?.pathname || "/dashboard";

  return (
    <Container
      maxWidth={false}
      sx={{
        background: '#363740',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          background: 'white',
          maxWidth: '350px',
          minHeight: '400px',
          borderRadius: '8px',
          padding: '2rem',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Pacifico',
            fontSize: '1.4rem',
            textAlign: 'center',
          }}
        >
          Üniversitesi
        </Typography>
        <Box>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: '1.4rem',
              color: '#3a3535',
              textAlign: 'center',
            }}
          >
            Log In as an Admin
          </Typography>
          <Typography
            sx={{
              fontSize: '.85rem',
              fontWeight: 300,
              textAlign: 'center',
            }}
          >
            Enter your email and password below
          </Typography>
        </Box>
        <form
          onSubmit={handleSubmit(async (data) => {
            try {
              const loginResponse = await adminLogin({
                variables: {
                  data,
                },
              });

              const access_token =
                loginResponse.data?.adminLogin.token.access_token;

              if (access_token) {
                setToken(access_token);
                setAlert({
                  message: 'Log in success',
                  status: true,
                  type: 'success',
                });
                navigate(from, { replace: true })
              }
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
            <FormLabel> Email </FormLabel>
            <OutlinedInput
              fullWidth
              id="email"
              type="email"
              placeholder="Email"
              {...register('email')}
              sx={{ background: (t) => t.palette.background.paper }}
              required
            />
          </FormControl>
          <FormControl
            sx={{ my: 1, mb: 3, width: '100%' }}
            variant="outlined"
            size="small"
          >
            <FormLabel> Password </FormLabel>
            <OutlinedInput
              fullWidth
              id="password"
              type={passwordVisibility ? 'text' : 'password'}
              placeholder="Password"
              {...register('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setPasswordVisibility((prev) => !prev)}
                  >
                    {!passwordVisibility ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
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
              disabled={!isEmail(watch('email') || '') || !watch('password')}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </Button>
          </FormControl>
        </form>
      </Box>
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

export default Login;
