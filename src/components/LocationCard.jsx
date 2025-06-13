import React from 'react'
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
export const LocationCard = ({ image, location, price }) => {
  return (
    <Card sx={{ width:300, borderRadius: 2, boxShadow: 4 }}>
      <CardMedia
        component="img"
        height="160"
      
        image={image}
        alt={location}
        sx={{ borderRadius: 2,}}
      />
      <CardContent sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:"space-between"}}>
        <Typography  fontWeight="bold"  sx={{color:"#0D8DB5",fontSize:"14px",flexWrap: 'wrap',width:"50%"}}>
          {location}
        </Typography>
        <Typography   sx={{ display: 'flex', alignItems: 'center', fontSize:"10px"}}>
          Starting from ₹<Typography sx={{color:"#0D8DB5" ,fontSize:"10px"}}>{price}/-</Typography>
        </Typography>
      </CardContent>
    </Card>
  )
}
