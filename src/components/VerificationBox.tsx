import { useTheme } from '@emotion/react';
import { ChevronRight } from '@mui/icons-material';
import {
  Box,
  Avatar,
  Typography,
  Stack,
  Modal,
  IconButton,
  Button,
  FormControl,
  CircularProgress,
} from '@mui/material';
import { format } from 'date-fns';
import React, { useState } from 'react';
import {
  AcceptOrReject,
  SchoolVerificationRequest,
  useAcceptRejectSchoolVerificationRequestMutation,
} from '../graphql/graphql';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';

const VerificationBox: React.FC<{
  verificationRequest: SchoolVerificationRequest;
}> = ({ verificationRequest }) => {
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [acceptOrReject, { data, loading }] =
    useAcceptRejectSchoolVerificationRequestMutation();

  const [isAccepting, setIsAccepting] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '.5rem',
          borderRadius: '14px',
          marginBottom: '1rem',
          cursor: 'pointer',
          borderWidth: '1px',
          background: (t) =>
            //@ts-ignore
            theme.palette?.mode === 'dark' ? t.palette.common.black : '#F0F7FF',
        }}
      >
        <Stack direction="row" alignItems="center">
          <Avatar
            sx={{
              bgcolor: (t) => t.palette.primary.main,
              width: 42,
              height: 42,
              marginRight: '1rem',
            }}
            sizes="lg"
            variant="circular"
            // src={verificationRequest.user.profileImage}
          >
            {' '}
            {verificationRequest.user?.username
              ? verificationRequest.user?.username[0].toUpperCase()
              : ''}{' '}
          </Avatar>
          <Box>
            <Typography
              sx={{
                color: (t) => t.palette.text.secondary,
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '20px',
              }}
            >
              {verificationRequest.school?.name}
            </Typography>
            <Typography
              sx={{
                color: (t) => t.palette.text.primary,
                fontSize: '13px',
                fontWeight: 700,
                lineHeight: '14px',
              }}
            >
              {verificationRequest.user?.username}
            </Typography>
            <Typography
              sx={{
                color: (t) => t.palette.text.primary,
                fontSize: '10px',
                fontWeight: 700,
                lineHeight: '14px',
              }}
            >
              {format(
                new Date(verificationRequest.createdAt),
                'dd MM. yy - HH:mm a'
              )}
            </Typography>
          </Box>
        </Stack>
        <IconButton onClick={handleOpen}>
          <ChevronRight color="primary" />
        </IconButton>
      </Box>
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

              bgcolor: (t) => {
                //@ts-ignore
                return theme.palette.mode === '#fff' ||
                  //@ts-ignore
                  theme.palette.mode === 'light'
                  ? t.palette.common.white
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
              Verify School
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
              Please verify that user is a student of{' '}
              <span style={{ fontWeight: 'bold' }}>
                {' '}
                {verificationRequest.school?.name}{' '}
              </span>
            </Typography>

            <Stack>
              <img
                loading="lazy"
                // srcSet={`${verificationRequest.proofImage}?w=240&fit=crop&auto=format&dpr=2 2x`}
                src={verificationRequest.proofImage as string}
                alt="proof document"
              />
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  color: (t) => t.palette.text.primary,
                  paddingTop: '1rem',
                }}
              >
                {verificationRequest.proofType}
              </Typography>
              <Typography
                sx={{
                  fontSize: '13px',
                  fontWeight: '400',
                  color: (t) => t.palette.text.disabled,
                }}
              >
                {verificationRequest.user?.username}
              </Typography>
            </Stack>

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
                onClick={async () => {
                  setIsAccepting(false);
                  await acceptOrReject({
                    variables: {
                      data: {
                        id: verificationRequest.id as string,
                        acceptOrReject: AcceptOrReject.Reject,
                      },
                    },
                  });

                  handleClose();
                }}
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
                {loading && !isAccepting ? (
                  <CircularProgress color="inherit" />
                ) : (
                  'Reject'
                )}
              </Button>
              <Button
                type="submit"
                disableElevation
                variant="contained"
                color="primary"
                size="large"
                onClick={async () => {
                  setIsAccepting(true);
                  await acceptOrReject({
                    variables: {
                      data: {
                        id: verificationRequest.id as string,
                        acceptOrReject: AcceptOrReject.Accept,
                      },
                    },
                  });
                  handleClose();
                }}
                sx={{
                  borderRadius: '.5rem',
                  textTransform: 'none',
                  marginLeft: '1rem',
                }}
              >
                {loading && isAccepting ? (
                  <CircularProgress color="inherit" />
                ) : (
                  'Accept'
                )}
              </Button>
            </FormControl>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default VerificationBox;
