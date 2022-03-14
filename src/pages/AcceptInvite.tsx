import {
    Container,
    Box,
    Typography,
    TextField,
    FormControl,
    FormHelperText,
    InputAdornment,
    OutlinedInput,
    FormLabel,
    IconButton,
    Button,
  } from '@mui/material';
  import React from 'react';
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';
  
  const AcceptInvite = () => {
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
          <form>
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
                // value={values.weight}
                // onChange={handleChange('weight')}
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
                type="password"
                placeholder="Password"
                // value={values.weight}
                // onChange={handleChange('weight')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <Visibility />
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
              <Button disableElevation variant="contained" color="primary" size='large' sx={{ borderRadius: ".5rem", textTransform: "none"  }}  >
                Accept
              </Button>
            </FormControl>
          </form>
        </Box>
      </Container>
    );
  };
  
  export default AcceptInvite;
  