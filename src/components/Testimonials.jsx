import React from 'react';
import { Box, Avatar, Typography, Skeleton } from '@mui/material';

export const Testimonials = ({ testimonials, loading }) => {
  return (
    <Box
      sx={{
        display: 'flex',
      //   flexWrap: 'wrap',
      //   justifyContent: 'center',
        gap: 2,
      }}
    >
      {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                minWidth: 350,
                minHeight:200,                backgroundColor: '#F7F7F7',
                position: 'relative',
                borderRadius: 3,
                paddingTop: 6,
                px: 3,
                pb: 2,
              }}
            >
              <Skeleton
                variant="circular"
                width={80}
                height={80}
                sx={{ position: 'absolute', top: -40, left: '15%' }}
              />
              <Skeleton variant="text" width="100%" height={60} />
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="40%" />
            </Box>
          ))
        : testimonials.map((user) => (
            <Box
              key={user.id}
              sx={{
                Width:200,
                backgroundColor: '#F7F7F7',
                position: 'relative',
                borderRadius: 3,
              }}
            >
              <Avatar
                src={user.image}
                alt={user.firstName}
                sx={{
                  width: 80,
                  height: 80,
                  mb: 2,
                  position: 'absolute',
                  top: -40,
                  left: '15%',
                  transform: 'translateX(-50%)',
                  border: '2px solid #4DB8B6',
                }}
              />
              <Box
                sx={{
                  paddingTop: 6,
                  px: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  paddingBottom: 2,
                }}
              >
                <Typography sx={{ fontSize: '1rem' }}>
                  Text commonly used to demonstrate the visual
form of a document or a typeface without
relying on meaningful content placeholder text
commonly used to demonstrate the visual form
of a document or a typeface without relying on
meaningful content..
                </Typography>

                <Typography variant="subtitle1" fontWeight="bold">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.company?.name || 'Company'} / {user.company?.department || 'Designation'}
                </Typography>
              </Box>
            </Box>
          ))}
    </Box>
  );
};
