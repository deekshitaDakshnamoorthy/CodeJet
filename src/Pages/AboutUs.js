
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
      <h1 style={{color:'darkblue',fontSize:'50px'}}>About Us</h1>
      <p style={{fontSize:'20px'}}>
        <h2>Welcome to our learning portal!</h2> We are passionate about education and
        committed to providing high-quality learning resources to help you
        succeed in your learning journey.
      </p>
    
      <p style={{fontSize:'20px'}}>
        Our team of experienced educators and developers work together to
        create engaging content and a user-friendly platform for learners of
        all levels.
      </p>
      <p style={{fontSize:'20px'}}>
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
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpoSJogle2hr3Lpd1BrtgBn1fJ2UplSC30g&usqp=CAU'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ display:'flex', maxWidth: 390,marginBottom:'40px', marginLeft:'50px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
image='data:image/png;base64,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'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{display:'flex',  maxWidth: 390,marginBottom:'40px', marginLeft:'50px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"

          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
