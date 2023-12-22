import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import './BasicCard.css';


 export default function BasicCard() {
  return (
    
    <div class="Card"
    
    style={{paddingTop:'300px',display:"flex",alignItems:"center",justifyContent:"center",padding:'50px'}}>
      
    <Card  sx={{ maxWidth: 345,width:'300px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="data:image/png;base64,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"
          alt="C "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Learn C 
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href="/c"><Button size="small" color="primary">
          Get Start
        </Button></a>
      </CardActions>
    </Card>
    
    

    <Card id="img" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="data:image/png;base64,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"
          alt="JAVA"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Learn JAVA
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Get Start
        </Button>
      </CardActions>
    </Card>
  

    <Card id="img2" sx={{ maxWidth:345}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image='https://logodix.com/logo/374736.png'
          alt="HTML"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Learn JAVASCRIPT
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Get Start
        </Button>
      </CardActions>
    </Card>


    <Card id="img1" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepgYTHlF--xT9canzTLWuvYh9GQElrZj967utOOLtskbwLFE01sbJVkNnjQZKIMw2u4o&usqp=CAU"
          alt="C++"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Learn C++
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Get Start
        </Button>
      </CardActions>
    </Card>


    
    <Card id="img4" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="data:image/jpeg;base64,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"
          alt="PYTHON"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Learn PYTHON
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Get Start
        </Button>
      </CardActions>
    </Card>
    

    </div>

  );
}