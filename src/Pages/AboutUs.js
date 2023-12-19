
// AboutUs.js
import StickyFooter from './StickyFooter';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import App from '../App';
import { styled } from '@mui/material/styles';


 
const AboutUs = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
 <AppBar position="static">
   <Toolbar>
 
     <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:'left' }}>
       News
     </Typography>
     <a href="/home" style={{color:"white"}}> <Button variant="contained">Home</Button></a> 

     <a href="/aboutus" style={{color:"white"}}> <Button variant="contained">About Us</Button></a> 

     <a href="/signin" style={{color:"white"}}> <Button variant="contained">Login</Button></a>
     <a href="/signup" style={{color:"white"}}> <Button variant="contained">Sign Up</Button></a> 


     
   </Toolbar>
 </AppBar>
</Box>



    <div style={{backgroundColor:'skyblue', padding:'10px'}}>
      <h1>About Us</h1>
      <p>
        <h2>Welcome to our learning portal!</h2> We are passionate about education and
        committed to providing high-quality learning resources to help you
        succeed in your learning journey.
      </p>
    
      <p>
        Our team of experienced educators and developers work together to
        create engaging content and a user-friendly platform for learners of
        all levels.
      </p>
      <p>
        Whether you're a beginner or an advanced learner, we have a variety of
        courses and materials tailored to meet your needs. Join us on this
        educational adventure!
      </p>
      <StickyFooter/>
      </div>
</div>
  );
};


export default AboutUs;
