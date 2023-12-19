



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
      
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:'left' }}>
            News
          </Typography>
          <a href="/aboutus" style={{color:"white"}}> <Button variant="contained">About Us</Button></a> 

          <a href="/signin" style={{color:"white"}}> <Button variant="contained">Login</Button></a>
          <a href="/signup" style={{color:"white"}}> <Button variant="contained">Sign Up</Button></a> 


          
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
      alt="Learning Portal"
      src="https://e1.pxfuel.com/desktop-wallpaper/130/168/desktop-wallpaper-online-learning-online-education.jpg" /> 
        
     
   </div>

<StickyFooter/>
    </div>
    
   
  );
}