import React from 'react'
import { Box, Typography, Avatar, Paper } from '@mui/material';

const data = [
  {
    img: 'https://randomuser.me/api/portraits/men/11.jpg',
    title: 'Save Time',
    desc: 'No more switching for packages or plans.',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/22.jpg',
    title: 'Save Money',
    desc: 'Compare, negotiate, and choose the best.',
  },
  {
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    title: 'Trusted Network',
    desc: "A Trusted Network of 7000+ Travel Agents",
  },
  {
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    title: 'Multiple Options',
    desc: `Itineraries & Travel Tips from Trusted Agents`,
  },
];
export const Advantegessection = () => {
  return (
     <Box sx={{ width: '100%', px: 4, py: 6, backgroundColor: '#77C8C8' }}>
      <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#fff', }}>
    Our Advantages
      </Typography>
      <Typography  sx={{ color: '#fff', width:"40%",textAlign: 'center',fontSize:"1rem" }}>
        You can rely on our experience and the quality of services we provide.

Here are other reasons to book tours at Treat Holidays
      </Typography>
      </Box>
      

      {/* Content Row */}
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          mt: 4,
          flexWrap: 'wrap',
        }}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            elevation={3}
            sx={{
                display:"flex",
                flexDirection:"column",
               justifyContent:"center",
              alignItems: 'center',
              padding: 2,
              borderRadius: 2,
              minWidth: 250,
              flex: 1,
            
            }}
          >
           <Box sx={{backgroundColor:"white",borderRadius:"50%",height:"15vh",width:"15vh",display:"flex",justifyContent:"center",alignItems:"center",p:2}}>
                <Avatar
                    alt={item.title}
                    src={item.img}
                    sx={{ width: 60, height: 60, }}
                />
           </Box>
            <Box sx={{ textAlign: 'center', mt: 2 ,color:"white"}}>
              <Typography variant="subtitle1" fontWeight="bold">
                {item.title}
              </Typography>
              <Typography sx={{width:"70%",margin:"auto",mt:1,color:"white", fontSize:"0.8rem",fontWeight:"thinner"}}>
                {item.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
