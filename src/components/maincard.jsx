import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export const Maincard = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url(https://media.istockphoto.com/id/2194015314/photo/young-woman-enjoying-coconut-drink-on-the-beach-with-palm-tree-and-ocean-view.jpg?s=612x612&w=0&k=20&c=igQUY2rE6B7vuiIZeM3QOzytVDopcNG6hQME8bDYU1s=)',
        width: '100%',
        height: '70vh', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity:50,
        position: 'relative',
      }}
    >
       <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      {/* Overlay Content */}
      <Box
        sx={{
          position: 'absolute',
          top: 120,
          left: 40,
          width: '100%',
          height: '100%',
          color:"white",
          display: 'flex',
          flexDirection: 'column',
          width:"29vw",
          px: 3,
        }}
      >
        <Typography sx={{ fontSize: '46px', fontWeight: 'bold', color: 'white' }}>
        Discover Your Next
Adventure
        </Typography>
        <Typography sx={{ fontSize: '16px', color: '#d6d6d6' }}>
          Choose from our curated experiences, customized for every
kind of traveler.
        </Typography>
        <Button variant="contained" color="info" sx={{width:"10vw" ,borderRadius:"20px", backgroundColor:"#fcc445", color:"black",fontWeight:"bold",marginTop:"30px"}}>
          BOOK NOW
        </Button>
      </Box>
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        display: 'flex',
        gap: 2,
        alignItems:"center",
         backgroundColor: 'hsla(0, 0.00%, 0.00%, 0.3)',
         py:2
      }}>
      <Typography sx={{ borderRight: '1px solid #d6d6d6',color:"#d6d6d6",px:2,cursor:"pointer"}}> Easy Booking</Typography>
      <Typography sx={{ borderRight: '1px solid #d6d6d6',color:"#d6d6d6",px:2,cursor:"pointer"}}>Curated Destinations</Typography>
      <Typography sx={{color:"#d6d6d6",px:2, cursor:"pointer"}}>Trusted Support</Typography>
      </Box>
    </Box>
  );
};
