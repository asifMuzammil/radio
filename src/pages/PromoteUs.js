import { Box, styled } from '@mui/system';
import YouTube from 'react-youtube-embed'
import soundcloud from '../media/soundcloud.png'
import spotify from '../media/spotify.png'
import youtube from '../media/youtube.png'
import { useNavigate,useLocation} from "react-router-dom";
import { React, useEffect, useState } from 'react';

const Img = styled('img')(({ theme }) => ({
   maxWidth: '30%',
   margin: 'auto auto',
marginTop: '2rem',
marginBottom: '3rem',
   display: 'block',

}));

const Album = styled(Box)(({ theme }) => ({
   width: '70%',
   margin: '0 auto',
   marginTop: '1rem',
   '& img': {
      width: '100%',
   },
}));

const Div = styled('div')(({ theme }) => ({
    maxWidth: '70%',
    margin: '0 auto',
    marginTop: '1rem',
}));


const PromoteUs = () => {
return (

      <Box>

         <Album>
            <Img
               src={soundcloud}
               alt=''
            />
            <Box sx={{ width: '100%' }}>
            <iframe
            title='radio'
            style={{ borderRadius: '0px' }}
            src='https://w.soundcloud.com/player/?visual=false&url=https%3A%2F%2Fapi.soundcloud.com%2Fplaylists%2F1407316666&show_artwork=true&color=%23ff5500&show_comments=true&show_playcount=true'
            width='100%'
            height='447'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
         ></iframe>
            </Box>
         </Album>

         <Album>
            <Img
               src={spotify}
               alt=''
            />
            <Box sx={{ width: '100%' }}>
            <iframe
            title='radio'
            style={{ borderRadius: '0px' }}
            src='https://open.spotify.com/embed/album/2CNZVpgDeaK8k8HgeWq3Xu?utm_source=generator'
            width='100%'
            height='380'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
         ></iframe>
            </Box>
         </Album>
         <Album>
            <Box sx={{ width: '100%' }}>
            <iframe
            title='radio'
            style={{ borderRadius: '0px' }}
            src='https://open.spotify.com/embed/playlist/6SKYiURx9PupRYKjudx87T?utm_source=generator'
            width='100%'
            height='380'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
         ></iframe>
            </Box>
         </Album>
         <Album>
            <Box sx={{ width: '100%' }}>
            <iframe
            title='radio'
            style={{ borderRadius: '0px' }}
            src='https://open.spotify.com/embed/playlist/5gcaiS7WXSKo3U3GsawG5q?utm_source=generator'
            width='100%'
            height='380'
            frameBorder='0'
            allowfullscreen=''
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
         ></iframe>
            </Box>
         </Album>
            <Img
               src={youtube}
               alt=''
            />

       <div>
           <Div> <YouTube id='oSAHKQiR3Fc' /> </Div>
           <Div> <YouTube id='Yp3HZOYAVOw' /> </Div>
           <Div> <YouTube id='IrSLGdTN2yI' /> </Div>
           <Div> <YouTube id='QeuwuMUB0TA' /> </Div>
           <Div> <YouTube id='zPqFiiZEDUg' /> </Div>
           <Div> <YouTube id='_ZespSMUC-A' /> </Div>
           <Div> <YouTube id='d6HENn5TU74' /> </Div>
	   <Div> <YouTube id='g6-VlFq5kzo' /> </Div>
        </div>
</Box>
   );

};


export default PromoteUs;
