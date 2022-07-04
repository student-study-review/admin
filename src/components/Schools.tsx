import {
  TableRow,
  TableCell,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  Box,
  Button,
  FormControl,
  FormLabel,
  OutlinedInput,
} from '@mui/material';
import React from 'react';
import { School, useEditSchoolMutation } from '../graphql/graphql';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { useTheme } from '@emotion/react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useGetSchoolsQuery } from '../graphql/graphql';
import { useForm } from 'react-hook-form';
import SelectInput, { StyledOption } from '../components/SelectInput';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

function Row(props: { school: School }) {
  const [editSchool, { loading }] = useEditSchoolMutation();
  const theme = useTheme();

  const { school } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { register, handleSubmit, control, reset, watch } = useForm({
    defaultValues: {
      websiteURL: school.websiteURL,
      name: school.name,
      fullAddress: school.fullAddress,
      emailSuffix: school.emailSuffix,
      published: school.published ? 'Yes' : 'No',
    },
  });

  return (
    <>
      <TableRow
        sx={{
          '& > *': { borderBottom: 'unset' },
        }}
      >
        <TableCell component="th" scope="row" sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              color: (t) => t.palette.text.primary,
              fontWeight: 500,
              fontSize: '15px',
            }}
          >
            {school.name}
          </Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              // color: (t) => t.palette.success.main,
              color: (t) => t.palette.text.primary,
              fontWeight: 400,
              fontSize: '13px',
            }}
          >
            {school.fullAddress}
          </Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              color: (t) => t.palette.text.disabled,
              fontSize: '13px',
              fontWeight: '400',
            }}
          >
            {school.websiteURL}
          </Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              color: (t) => t.palette.text.disabled,
              fontSize: '13px',
              fontWeight: '400',
            }}
          >
            {school.emailSuffix}
          </Typography>
        </TableCell>
        <TableCell sx={{ borderBottom: '0px' }}>
          <Typography
            sx={{
              color: (t) => t.palette.text.disabled,
              fontSize: '13px',
              fontWeight: '400',
              textAlign: 'center',
            }}
          >
            {school.published ? (
              <CheckCircleIcon color="success" />
            ) : (
              <HighlightOffIcon color="error" />
            )}
          </Typography>
        </TableCell>

        <TableCell align="right" sx={{ borderBottom: '0px' }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: '.8rem',
              color: (t) => t.palette.text.disabled,
              textTransform: 'none',
            }}
            onClick={handleOpen}
          >
            {' '}
            Edit{' '}
          </Button>
        </TableCell>
      </TableRow>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              // bgcolor: (t) => t.palette.background.paper,
              bgcolor: (t) => {
                //@ts-ignore
                return theme.palette.mode === 'light'
                  ? '#F0F7FF'
                  : t.palette.common.black;
              },
              borderRadius: '17.0956px',
              boxShadow: '0px 34.1912px 119.669px rgba(86, 89, 146, 0.1)',
              p: 4,
            }}
          >
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontWeight: 500,
                fontSize: '20.5147px',
                lineHeight: '31px',
                color: (t) => t.palette.text.primary,
              }}
            >
              Edit School
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{
                mb: 2,
                fontWeight: 400,
                fontSize: '14px',
                color: (t) => t.palette.text.primary,
              }}
            >
              Kindly edit this school information
            </Typography>
            <form
              onSubmit={handleSubmit(async (data) => {
                await editSchool({
                  variables: {
                    data: {
                      ...data,
                      published: data.published.includes('Yes') ? true : false,
                      id: school.id as string,
                    },
                  },
                });

                handleClose();
              })}
            >
              <FormControl
                sx={{
                  my: 1,
                  mb: 3,
                  width: '100%',
                }}
                variant="outlined"
                size="small"
              >
                <FormLabel
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: (t) => t.palette.text.secondary,
                  }}
                >
                  School Name
                </FormLabel>
                <OutlinedInput
                  fullWidth
                  id="name"
                  type="text"
                  placeholder="School Name"
                  sx={{
                    background: (t) => t.palette.background.paper,
                    borderRadius: '7.15938px',
                  }}
                  {...register('name')}
                  required
                />
              </FormControl>
              <FormControl
                sx={{
                  my: 1,
                  mb: 3,
                  width: '100%',
                }}
                variant="outlined"
                size="small"
              >
                <FormLabel
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: (t) => t.palette.text.secondary,
                  }}
                >
                  {' '}
                  Full Address{' '}
                </FormLabel>
                <OutlinedInput
                  fullWidth
                  id="fullAddress"
                  type="text"
                  sx={{
                    background: (t) => t.palette.background.paper,
                    borderRadius: '7.15938px',
                  }}
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
                }}
                variant="outlined"
                size="small"
              >
                <FormLabel
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: (t) => t.palette.text.secondary,
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
                  sx={{
                    background: (t) => t.palette.background.paper,
                    borderRadius: '7.15938px',
                  }}
                  {...register('websiteURL')}
                  required
                />
              </FormControl>
              <FormControl
                sx={{
                  my: 1,
                  mb: 3,
                  width: '100%',
                }}
                variant="outlined"
                size="small"
              >
                <FormLabel
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: (t) => t.palette.text.secondary,
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
                  sx={{
                    background: (t) => t.palette.background.paper,
                    borderRadius: '7.15938px',
                  }}
                  required
                />
              </FormControl>
              <FormControl
                sx={{
                  my: 1,
                  mb: 3,
                  width: '100%',
                }}
                variant="outlined"
                size="small"
              >
                <FormLabel
                  sx={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: (t) => t.palette.text.secondary,
                  }}
                >
                  Published
                </FormLabel>
                <SelectInput name="published" control={control}>
                  {[
                    { id: '1', name: 'Yes' },
                    { id: '2', name: 'No' },
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
                  type="button"
                  onClick={handleClose}
                  disableElevation
                  variant="outlined"
                  color="error"
                  size="large"
                  sx={{
                    borderRadius: '.5rem',
                    textTransform: 'none',
                    // padding: '.5rem 1rem',
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disableElevation
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    borderRadius: '.5rem',
                    textTransform: 'none',
                    marginLeft: '1rem',
                  }}
                >
                  {loading ? <CircularProgress color="inherit" /> : 'Save'}
                </Button>
              </FormControl>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

const Schools = () => {
  const { data, loading } = useGetSchoolsQuery();

  return (
    <Box sx={{ paddingRight: '1rem' }}>
      {loading ? (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ marginTop: '1.5rem' }}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                    paddingLeft: '3rem',
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                  }}
                >
                  Address
                </TableCell>
                <TableCell
                  sx={{
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                  }}
                >
                  Website URL
                </TableCell>
                <TableCell
                  sx={{
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                  }}
                >
                  Email Suffix
                </TableCell>
                <TableCell
                  sx={{
                    color: (t) => t.palette.text.disabled,
                    fontWeight: '500',
                    fontSize: '14px',
                  }}
                >
                  Published
                </TableCell>

                <TableCell align="right">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.getSchools.map((school) => {
                return <Row key={school.id} school={school} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default Schools;
