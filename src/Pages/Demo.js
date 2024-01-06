import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StickyFooter from './StickyFooter';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

const ButtonAppBar = () => {
  const backgroundImage = 'https://images.unsplash.com/photo-1510070112810-d4e9a46d9e91?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Replace with your image URL

  const exploreButtonStyle = {
    margin: '100px', // Adjust the margin as needed
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              Deep Learn
            </Typography>
            <Link to="/home" style={{ color: 'white' }}>
              <Button variant="contained">Home</Button>
            </Link>

            <Link to="/aboutus" style={{ color: 'white' }}>
              <Button variant="contained">About Us</Button>
            </Link>

  <Button variant="contained">
    <LoginButton />
  </Button>
            
        
          </Toolbar>
        </AppBar>
      </Box>

      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '800px', // Adjust the height as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
        <h1 style={{color:'white',fontSize:'90px'}}> Learn to Code from Deep Learn!!</h1>

          <Typography variant="h3" component="div" style={{ color: 'Darkblue',fontFamily:'serif',padding:'20px' }}>
            Explore Now
          </Typography>
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Button variant="contained" style={{exploreButtonStyle, fontSize:'40px',fontFamily:'cursive'}}>
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <StickyFooter />
    </div>
  );
};

export default ButtonAppBar;
