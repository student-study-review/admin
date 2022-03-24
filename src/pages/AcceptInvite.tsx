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
import { useAcceptInviteMutation } from '../graphql/graphql';
import { useLocation, useNavigate } from 'react-router-dom';
import MuiAlert from '@mui/material/Alert';
  
  const AcceptInvite = () => {

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [ acceptInvite, { loading } ] = useAcceptInviteMutation()
    const [alert, setAlert] = useState<{
      message: string;
      status: boolean;
      type: 'error' | 'success' | 'info' | 'warning';
    }>({
      message: '',
      status: false,
      type: 'success',
    });

    const location = useLocation()
    let navigate = useNavigate();

    let params = new URLSearchParams(location.search);

    const {
      register,
      handleSubmit,
      watch,
      formState: {  },
    } = useForm<{ fullName: string; password: string }>();

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
              textAlign: "center"
            }}
          >
            Üniversitesi
          </Typography>
          <Box>
            <Typography sx={{
                fontWeight: 500,
                fontSize: "1.4rem",
                color: "#3a3535",
                textAlign: "center"
            }} > Accept Admin Invitation </Typography>
            <Typography
              sx={{
                  fontSize: ".85rem",
                  fontWeight: 300,
                  textAlign: "center"
              }}
            >Enter your details below to become an admin </Typography>
          </Box>
          <form
            onSubmit={handleSubmit(async (data) => {
              console.log(data, "data..")

              try {

                const response = await acceptInvite({variables: {
                  data: {
                    fullName: data.fullName,
                    password: data.password,
                    requestHashId: params.get("invitationId") || ""
                  }
                }})

                setAlert({
                  message: response.data?.acceptInvite.message || 'Invitation Accepted',
                  status: true,
                  type: 'success',
                });
                navigate("/")

              } catch(err: any) {
                setAlert({ message: err.message, status: true, type: 'error' });
              }

            } ) }
          >
            <FormControl
              sx={{ my: 1, width: '100%' }}
              variant="outlined"
              size="small"
            >
              <FormLabel> FullName </FormLabel>
              <OutlinedInput
                fullWidth
                id="fullName"
                type="fullName"
                placeholder="Full Name"
                {...register('fullName')}
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
              <Button type='submit' disableElevation variant="contained" color="primary" size='large' sx={{ borderRadius: ".5rem", textTransform: "none"  }}  >
                Accept
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
  
  export default AcceptInvite;
  