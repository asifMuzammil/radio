import { Button, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../media/facebook.webp'
import twitter from '../media/twitter.webp'
import youtube from '../media/youtube.webp'
import instagram from '../media/insta.webp'
import logo from '../media/logo.webp'
import DrawerComponent from '../comps/drawer';
import {
   useTheme,
   useMediaQuery,
 } from "@material-ui/core";
//import useMediaQuery from '@material-ui/core/useMediaQuery'
//import { theme } from '@material-ui/core/styles';//
//import { createTheme } from '@mui/material';



const HeaderWrapper = styled(Box)(({ theme }) => ({
   backgroundColor: '#fff',
   height: '120px'
}));

const Flex = styled(Box)(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}));

const Menus = styled(Box)(({ theme }) => ({
   flex: 3,
}));

const Row = styled(Box)(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '1rem',
}));

const MenuButton = styled(Button)(({ theme }) => ({
   background: 'rgb(57, 114, 155)',
   color: 'white',
   marginRight: '1rem',
   fontSize: '0.7rem',
   padding: '0.4rem .3rem',
   '&:hover': {
      background: 'rgb(57, 114, 155)',
   },
}));

const Social = styled(Box)(({ theme }) => ({
    '& img': {
         marginRight: '1rem',
    } 
}));

const Linkc = styled(Link)(({ theme }) => ({
   textDecoration: 'none',
   padding: '0 10px',
   color: '#000',
   fontWeight: '400'
}));

const Header = () => {
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
   return (
      <HeaderWrapper>
         <Flex>
            <Box sx={{ flex: 1}}>
               <img src={logo} height="120" style={{padding: "0px"}}/>
            </Box>
         {isMobile ? (
          <DrawerComponent />
          ) : (
               <Menus>
                  <Row>
                     <Linkc to='/' >Home</Linkc>
                     <Linkc to='/albums'>Albums</Linkc>
                     <Linkc to='/radio'>Radio</Linkc>
                     <Linkc to='/gallery'>Gallery</Linkc>
                     <Linkc to='/promotion'>Promote Us</Linkc>
                     <Linkc to='/about'>About Us</Linkc>
                     <Linkc to='/videos'>Videos</Linkc>
                     <Linkc to='/beats'>Beats</Linkc>
                     <Linkc to='/contact'>Contact</Linkc>
                  </Row>
               </Menus>
               )}

           </Flex>
      </HeaderWrapper>
   );
};

export default Header;
