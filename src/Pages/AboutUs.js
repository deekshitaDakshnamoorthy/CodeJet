
// AboutUs.js
import StickyFooter from './StickyFooter';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const AboutUs = () => {
  return (
    <div style={{backgroundColor:'skyblue', padding:'10px'}}>
      <h1>About Us</h1>
      <p>
        <h2>Welcome to our learning portal!</h2> We are passionate about education and
        committed to providing high-quality learning resources to help you
        succeed in your learning journey.
      </p>
      <Card sx={{ maxWidth: 500, 
    flex:'1'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image=""
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
    <Card sx={{ maxWidth: 500 ,
     
        display: 'flex',
        justifyContent: 'space-between',
        gap: '50px', 
      
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
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
  );
};

export default AboutUs;
