import { Box, styled } from '@mui/system';
import React from 'react';
import pqpl from '../media/pqp_l.webp'
import aliens from '../media/aliens.webp'

const Img = styled('img')(({ theme }) => ({
   maxWidth: '100%',
   margin: 'auto auto',
   display: 'block',

}));

const Home = () => {
   return (
<>
      <Box sx={{ marginTop: "1.4rem" }}>
         <Img
            src={pqpl}
            alt=''
         />

 	</Box>

        <Box>
	 <Img
            src={aliens}
            alt=''
         />
      </Box>
</>

   );
};

export default Home;
