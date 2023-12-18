



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import StickyFooter from './StickyFooter';

export default function ButtonAppBar() {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <a href="/signin" style={{color:"white"}}><Button color="inherit">Login</Button></a>
          
        </Toolbar>
      </AppBar>
    </Box>


   <div>
   <Box
      
    
      component="img"
      sx={{
        height: "100%",
        width:"100%",
        padding: 0,
    
       
      }}
      alt="The house from the offer."
      src="https://media.istockphoto.com/id/1460535745/photo/e-learning-graduate-certificate-program-concept-lightbulb-on-the-book-with-graduation-hat-and.jpg?s=1024x1024&w=is&k=20&c=D-Pg0qUydCtivVeTploUNt6ytVJ3uTdHwLQmCGzZnxo=" /> 
        
     
   </div>

<StickyFooter/>
    </div>
    
   
  );
}