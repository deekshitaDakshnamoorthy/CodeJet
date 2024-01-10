
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
       Code Jet
     </Typography>
     <a href="/home" style={{color:"white"}}> <Button variant="contained">Home</Button></a> 

     <a href="/aboutus" style={{color:"white"}}> <Button variant="contained">About Us</Button></a> 
     <a href="/signup" style={{color:"white"}}> <Button variant="contained">Sign Up</Button></a> 

     <a href="/signin" style={{color:"white"}}> <Button variant="contained">Login</Button></a>


     
   </Toolbar>
 </AppBar>
</Box>



    <div style={{backgroundColor:'skyblue', padding:'10px'}}>
      <h1 style={{color:'darkblue',fontSize:'50px'}}>About Us</h1>
      <h2>Welcome to our Code Jet!</h2>
      <p style={{fontSize:'20px',fontFamily:'cursive'}}>
        We are passionate about education and
        committed to providing high-quality learning resources to help you
        succeed in your learning journey.
      </p>
    
      <p style={{fontSize:'20px',fontFamily:"cursive"}}>
        Our team of experienced educators and developers work together to
        create engaging content and a user-friendly platform for learners of
        all levels.
      </p>
      <p style={{fontSize:'20px',fontFamily:'cursive'}}>
        Whether you're a beginner or an advanced learner, we have a variety of
        courses and materials tailored to meet your needs. Join us on this
        educational adventure!
      </p>
      <div
          style={{paddingTop:'20px',display:"flex",alignItems:"center",justifyContent:"center",padding:'50px'}}>          

      <Card sx={{  display:'flex', maxWidth: 390,marginBottom:'40px', marginLeft:'50px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSW4BbQdxuXCOzXFjBDHPj1VrjJ6BovwFhpw&usqp=CAU'
          alt="green iguana"
        />
        <CardContent style={{color:'#3457D5'}}>
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'fantasy'}}>
          Providing YouTube Links
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Curate and organize YouTube tutorial playlists based on different programming languages, frameworks, and topics. For example, have playlists for Python basics, web development with JavaScript, or machine learning with Python.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ display:'flex', maxWidth: 390,marginBottom:'40px', marginLeft:'50px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kpgG3wWWn9jvysUWKLVMjU_CnAGRuC4bjg&usqp=CAU'
          alt="green iguana"
        />
        <CardContent style={{color:'#3457D5'}}>
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'fantasy'}}>
          Material for Learning Code
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Create a centralized hub for coding documentation, including language references, API documentation, and framework guides. Organize the material in a user-friendly manner for easy navigation.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{display:'flex',  maxWidth: 390,marginBottom:'40px', marginLeft:'50px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGYlM4LJxyYdOj9-BG3B5av-totzPyp8l9w&usqp=CAU"
          alt="green iguana"
        />
        <CardContent style={{color:'#3457D5'}}>
          <Typography gutterBottom variant="h5" component="div" style={{fontFamily:'fantasy'}}>
          Personalized Learning Paths
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Create personalized learning paths for users based on their skill level, interests, and career goals. Include a mix of YouTube tutorials, written materials, and interactive exercises.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>

      <StickyFooter/>
      </div>
</div>
  );
};


export default AboutUs;
