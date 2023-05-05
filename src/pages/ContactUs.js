import { Typography } from "@mui/material";
import { Box, styled } from '@mui/system';
import React from 'react';
import contact from '../media/contact.webp'
import insta from '../media/insta.png'

const Img = styled('img')(({ theme }) => ({
   maxWidth: '100%',
   margin: 'auto auto',
   marginBottom: '1.5rem',
   display: 'block',

}));

const ContactUs = () => {
   return (
<>
      <Box sx={{ marginTop: "1.4rem" }}>
         <Img
            src={contact}
            alt=''
         />

        </Box>

       <Box sx={{ marginBottom: "1.4rem" }}>
        <Typography
          sx={{
            color: "rgb(255,255,255)",
            textAlign: "center",
            fontSize: "40px",
            fontWeight: 600,
            mb: 2,
          }}
        >
          Send us a message
        </Typography>
<a href="https://www.instagram.com/planet_q_productions/" target="_blank" rel="noreferrer">
         <Img
            className="instac" 
            src={insta}
            alt=''
	    width={250}
	    height={250}
         />
</a>
      </Box>
</>

   );
};

export default ContactUs;
