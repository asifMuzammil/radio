import React, { useState, useEffect } from 'react';
import { Modal } from '@mui/material';
import Header from './Header';
import Mics from './Mics';
import ReactAplayer from 'react-aplayer';
import { Box, styled, Container } from '@mui/material';
import axios from 'axios';
import pqpl from '../media/pqp_l.webp'
import aliens from '../media/aliens.webp'
const Img = styled('img')(({ theme }) => ({
   maxWidth: '100%',
   margin: 'auto auto',
   display: 'block',
}));

const mdlStyle = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 500,
   bgcolor: 'background.paper',
   color: '#000',
 };
const Layout = ({ children }) => {
   
   const [mainTrackList,setMainTrackList] =useState(null);   
   const [open, setOpen] = useState(false);
   const handleOpen = () => {
     setOpen(true);
   };
   const handleClose = () => {
     setOpen(false);
   };
   /// Fetch Playlist from API
   const getAudioList = () => {
      axios.get("https://api.planetqproductions.com/api/audio/")
          .then(
              (response) => {                 
                  setOpen(true);
                    let trackList = [];
                    
                    response.data.data.forEach((item)=>{
                     trackList.push({
                        name: item.title,
                        artist : item.artistName,
                        url: item.audioFile,
                        cover: item.thumnail,
                     });                                               
                    });
                    //console.log(trackList); 
                    setMainTrackList({
                        autoplay: true,
                        theme: '#FFF',
                        loop: 'all',
                        order: 'random',
                        preload: 'auto',
                        volume: 1,
                        mutex: true,
                        listFolded: true,
                        audio: trackList
                        });                 
                  
                  
              }).catch(function (error) {
                console.log(error);
      });
  }
// To Fetch and Start the Playlist 
useEffect(()=>{
   getAudioList();
   
},[]);


   /// Player Functions
   const onPlay = () => {
      console.log('on play');
   };
   const onPause = () => {
      console.log('on pause');
   };
   const onInit = (ap) => {
     
   };

   return (
      <>
         <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
         >
            <Box sx={mdlStyle}>
               <Mics noRainBox={true} />
               <Box sx={{  }}>
                  <Img
                     src={pqpl}
                     alt=''
                  />
               </Box>
               {mainTrackList &&( <ReactAplayer
               {...mainTrackList}
               onInit={onInit}
               onPlay={onPlay}
               onPause={onPause}
               />)}
            </Box>
         </Modal>
         <Header />
         <Container maxWidth='md'>
            <Mics />
            <Box sx={{ width: '100%' }}>
            {mainTrackList &&( <ReactAplayer
               {...mainTrackList}
               onInit={onInit}
               onPlay={onPlay}
               onPause={onPause}
               />)}              
            </Box>
            {children}
         </Container>
      </>
   );
};

export default Layout;
