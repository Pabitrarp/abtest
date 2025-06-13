import { Button, Typography, Container, Card, Box,Skeleton  } from '@mui/material';

import { Maincard} from './components/maincard';

import { LocationCard } from './components/LocationCard';
import { Advantegessection } from './components/Advantegessection';
import { Topsellingcard } from './components/Topsellingcard';
import { Testimonials } from './components/Testimonials';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
   const [cardData, setCardData] = useState([]);
   const [mostsellingcardData, setmostsellingCardData] = useState([]);
 const [skip, setSkip] = useState(0);
const limit = 8;
  const [loading, setLoading] = useState(true);
   const [testimonials, setTestimonials] = useState([]);
   const [testimonialsskip, setTestimonialsSkip] = useState(0);
  const testimonialsLimit = 3;
   

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response =  await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
        setCardData(response.data.products); // Make sure to use `.products`
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [skip]);
 useEffect(() => {
    const Data = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://dummyjson.com/products?limit=8');
        setmostsellingCardData(response.data.products); // Make sure to use `.products`
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    Data();
  },[]);

useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://dummyjson.com/users?limit=${testimonialsLimit}&skip=${testimonialsskip}`);
        setTestimonials(res.data.users);
      } catch (error) {
        console.error('Failed to fetch testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, [testimonialsskip]);

  return (
    <>
    <Maincard></Maincard>
    <Box sx={{py:6,px:10}}>
      <Box sx={{display:"flex",flexDirection:"column",gap:1,mb:8,justifyContent:"center"}}>
        <Typography sx={{textAlign:"center",color:"#0B8DB4",fontSize:"5vh",fontWeight:"bold"}}>Explore the most popular travel destinations
        </Typography>
        <Typography sx={{textAlign:"center",color:"#657991",fontSize:"2vh",textAlignLast:"center"}}>Plan your perfect trip with our most loved and best-selling <br></br>tour packages.</Typography>
      </Box>
      
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center' }}>
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <Box key={index} sx={{ width: 300 }}>
                <Skeleton variant="rectangular" height={200} />
                <Skeleton variant="text" sx={{ mt: 1 }} />
                <Skeleton variant="text" width="60%" />
              </Box>
            ))
          ) : (
            cardData.map((item) => (
              <LocationCard
                key={item.id}
                image={item.thumbnail}
                location={item.title}
                price={`₹${item.price}`}
              />
            ))
          )}
        </Box>


    <Box sx={{display:"flex",justifyContent:"flex-end",gap:2,mt:4}}>
       {skip !== 0 && (
    <Button
      sx={{ backgroundColor: "#FDC114", color: 'white', p: 1 }}
      onClick={() => setSkip(Math.max(skip - limit, 0))}
    >
      PREVIOUS
    </Button>
  )}
  <Button
    sx={{ backgroundColor: "#FDC114", color: 'white', p: 1 }}
    onClick={() => setSkip(skip + limit)}
  >
    NEXT
  </Button>
    </Box>
    </Box>

    <Advantegessection></Advantegessection>

  <Box sx={{ py: 6, px: 10 ,mb:2}}>
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 8, justifyContent: "center" }}>
    <Typography sx={{ textAlign: "center", color: "#0B8DB4", fontSize: "5vh", fontWeight: "bold" }}>
      Top Selling Tour Packages of India
    </Typography>
    <Typography sx={{ textAlign: "center", color: "#657991", fontSize: "2vh", textAlignLast: "center" }}>
      Stay updated with our latest news and happenings through <br /> Informe.
    </Typography>
  </Box>

  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center" }}>
    {loading ? (
      Array.from({ length: 4 }).map((_, index) => (
        <Box key={index} sx={{ width: 300 }}>
          <Skeleton variant="rectangular" width={300} height={200} />
          <Skeleton variant="text" sx={{ mt: 1 }} />
          <Skeleton variant="text" width="60%" />
        </Box>
      ))
    ) : (
      mostsellingcardData.map((item) => (
        <Topsellingcard
          key={item.id}
          image={item.thumbnail}
          title={item.title}
          price={`₹${item.price}`}
        />
      ))
    )}
  </Box>
</Box>

<Box sx={{ py: 6, px: 10 }}>
  <Typography sx={{ mb: 10}} variant="h4" fontWeight={500} >
    Testimonials
  </Typography>

  <Testimonials testimonials={testimonials} loading={loading} />

  <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 4 }}>
    {testimonialsskip !== 0 && (
      <Button
        sx={{ backgroundColor: "#FDC114", color: 'white', p: 1 }}
        onClick={() => setTestimonialsSkip(Math.max(testimonialsskip - testimonialsLimit, 0))}
      >
        PREVIOUS
      </Button>
    )}
    <Button
      sx={{ backgroundColor: "#FDC114", color: 'white', p: 1 }}
      onClick={() => setTestimonialsSkip(testimonialsskip + testimonialsLimit)}
    >
      NEXT
    </Button>
  </Box>
</Box>


   
  </>
  )
}

export default App
