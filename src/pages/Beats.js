import { Box, styled } from '@mui/system';
import React from 'react';
import future from '../media/FuturisticProducer.webp';
import pqp from '../media/pqp.webp';


const Img = styled('img')(({ theme }) => ({
    maxWidth: '100%',
    margin: '0 auto',
}));


const Album = styled(Box)(({ theme }) => ({
   width: '70%',
   margin: '0 auto',
   marginTop: '1rem',
   '& img': {
      width: '100%',
   },
}));

const Beats = () => {
   return (
      <Box>
     
         <Album>
            <Img
               src={future}
               alt=''
            />
            <Box sx={{ width: '100%' }}>
            <iframe
            title='radio'
            style={{ borderRadius: '0px' }}
            src='https://open.spotify.com/embed/album/42SrWEuN82TBLdxdwLvkuO?utm_source=generator'
            width='100%'
            height='80'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
         ></iframe>
            </Box>
         </Album>

         <Album>
            <Img
               src={pqp}
               alt=''
            />
         </Album>
      </Box>
   );
};

export default Beats;
