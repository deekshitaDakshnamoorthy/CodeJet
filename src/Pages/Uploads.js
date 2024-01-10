import * as React from 'react'; 
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography'; 
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

export default function Uploads() { 
return ( 
<div 
className="Card" 
style={{ 
paddingTop: '300px', 
display: 'flex', 
alignItems: 'center', 
justifyContent: 'center', 
padding: '80px', 
paddingBottom:"50px",
paddingTop:"180px"

}} 
> 
<Grid container spacing={3}> 
{/* First Row */} 
<Grid item xs={6} sm={3}> 
<Card sx={{ maxWidth: 345,marginBottom:'80px' ,marginRight:'30px'}}> 
<CardActionArea> 
<CardMedia 
component="img" 
height="100%" 
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQM4SmeYaqjFa1HLmiKxITReBol-mt6KX1Q&usqp=CAU' 
alt="C " 
/> 
<CardContent> 
<Typography gutterBottom variant="h5" component="div"> 
 C 
</Typography> 
</CardContent> 
</CardActionArea> 
<CardActions>
<a href="/c"><Button sx={{fontSize:'20px',fontFamily:'cursive',color:"#012169",marginLeft:"100%"}} size="small" color="primary"> 
<b>UPLOAD</b>
</Button></a> 
</CardActions> 
</Card> 
</Grid> 
<Grid item xs={6} sm={3}> 
<Card sx={{ maxWidth: 345,marginRight:'30px'  }}> 
<CardActionArea> 
<CardMedia 
component="img" 
height="100%"
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQM4SmeYaqjFa1HLmiKxITReBol-mt6KX1Q&usqp=CAU'
alt="C " 
/> 
<CardContent> 
<Typography gutterBottom variant="h5" component="div"> 
 JAVA 
</Typography> 
</CardContent> 
</CardActionArea> 
<CardActions> 
<a href="/java"><Button sx={{fontSize:'20px',fontFamily:'cursive',color:"#012169",marginLeft:"100%"}} size="small" color="primary"> 
<b>UPLOAD</b>
</Button></a> 
</CardActions>
</Card> 
</Grid> 
<Grid item xs={6} sm={3}> 
<Card sx={{ maxWidth: 345,marginRight:'30px'  }}> 
<CardActionArea> 
<CardMedia 
component="img" 
height="100%" 
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQM4SmeYaqjFa1HLmiKxITReBol-mt6KX1Q&usqp=CAU' 
alt="C " 
/> 
<CardContent> 
<Typography gutterBottom variant="h5" component="div"> 
JAVASCRIPT 
</Typography> 
</CardContent> 
</CardActionArea> 
<CardActions> 
<a href="/js"><Button sx={{fontSize:'20px',fontFamily:'cursive',color:"#012169",marginLeft:"100%"}} size="small" color="primary"> 
<b>UPLOAD</b>
</Button></a> 
</CardActions> 
</Card> 
</Grid> 
<Grid item xs={6} sm={3}> 
<Card sx={{ maxWidth: 345 ,marginRight:'30px'}}> 
<CardActionArea> 
<CardMedia 
component="img" 
height="100%" 
image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQM4SmeYaqjFa1HLmiKxITReBol-mt6KX1Q&usqp=CAU'
alt="C " 
/> 
<CardContent> 
<Typography gutterBottom variant="h5" component="div"> 
 HTML 
</Typography>
</CardContent> 
</CardActionArea> 
<CardActions> 
<a href="/html"><Button sx={{fontSize:'20px',fontFamily:'cursive',color:"#012169",marginLeft:"100%"}} size="small" color="primary"> 
<b>UPLOAD </b>
</Button></a> 
</CardActions> 
</Card> 
</Grid> 



</Grid> 
</div> 
); 
}