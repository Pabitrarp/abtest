import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
export const Topsellingcard = ({image,title,price}) => {
  return (
     <Card sx={{ minWidth: 300, borderRadius: 3, boxShadow: 4 }}>
      <CardMedia
        component="img"
        height="180"
         image={image}
        alt={title}
        sx={{ borderRadius: 3, objectFit: 'cover' }}
      />
      <CardContent sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',gap:3}}>
        <Typography sx={{color:'#4DB8B6'}}>
          {title}
        </Typography>
        <Button sx={{color:'#ffff', backgroundColor:"#4DB8B6", width:"100%",textTransform: 'capitalize',borderRadius: 3}} size="small">
          View Details
        </Button>
      </CardContent>
    </Card>
  )
}
