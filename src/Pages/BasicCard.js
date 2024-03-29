import * as React from 'react'; 
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import CardMedia from '@mui/material/CardMedia'; 
import Typography from '@mui/material/Typography'; 
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
 import './BasicCard.css'; 
export default function BasicCard() { 
return ( 
<div 
className="Card" 
style={{ 
paddingTop: '300px', 
display: 'flex', 
alignItems: 'center', 
justifyContent: 'center', 
padding: '50px', 
}} 
> 
<Grid container spacing={3}> 
{/* First Row */} 
<Grid item xs={6} sm={3}> 
<Card sx={{ maxWidth: 345,borderRadius:'30px',marginBottom:'80px' ,marginRight:'30px'}}> 
<CardActionArea> 
<CardMedia 
component="img" 
height="200" 
image='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png' 
alt="C " 
/> 
<CardContent> 
<Typography gutterBottom variant="h5" component="div"> 
Learn C 
</Typography> 
</CardContent> 
</CardActionArea> 
<CardActions>
<a href="/c"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
Get Start 
</Button></a> 
</CardActions> 
</Card> 
</Grid> 
<Grid item xs={6} sm={3}> 
<Card sx={{ maxWidth: 345,borderRadius:'30px',marginRight:'30px'  }}> 
<CardActionArea> 
<CardMedia 
component="img" 
height="200" 
image='data:image/png;base64,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' 
alt="C " 
/> 
<CardContent> 
<Typography gutterBottom variant="h5" component="div"> 
Learn JAVA 
</Typography> 
</CardContent> 
</CardActionArea> 
<CardActions> 
<a href="/java"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
Get Start 
</Button></a> 
</CardActions>
</Card> 
</Grid> 

{/* Second Row */} 

<Grid item xs={6} sm={3}> 
<Card sx={{ maxWidth: 345 ,borderRadius:'30px' ,marginRight:'30px'}}> 
<CardActionArea> 
<CardMedia 
component="img" 
height="200" 
image='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9A AAA+VBMVEX/////1lH/zD42dao2a5g2b5//0ko2cKE2dalFaIb/yjr/1E3/0Uj/zkJAZYQ2c6V wh57R2N4yaJX//vv/67H89ulxjaNSe5/r7/P2+Puxx9orV3k7YYG4wsxhfpeNn7D/4YytuMOPq scXZZ//24XvzWD336L80Fr/zk65yNZUdI/zxDWfssIpbKH+78XAzNXW4OnzwCqBlqr/9+Imcav /4pf/9txQcIzJ1eJ6nsBPgq09dKBYh66rvM+ds8lqkLQUWo28z96Hqcb+1nfR4e324a/2vQtWi bfxwkaUtNFwm8H568r82IT/23vxxiikwdkAWpb7113+3XJz//J9AAAKYElEQVR4nO2dC1fiuha AKz4gOASKyKQ0pdYXiq2tZRQYR533Oer1zh3//4+5SR/QN0WEAs231jmLllKa7+xk76TFw3EMB iMAMggDG/oSZX1BK4Nxfnd3N/xM2N7e1ura7efb2y/Du7vzc+ZwEsb94YNG2faxVSd8HR6eC1l f4DLzc/hQ1IoOPn0W9frtcJD1NS4v97eaVnXlFbfD/qjA86yvclm516qUYkT4bbn+iMC7rK9zO WlptjwtIfooX5m/CNAXy171y/Dpczj6vHxl41+YwZFl794QhJ+HWmTqcPvvl6yvdQn5Q/uudm+ 9Fp60BH1bdSPja11CLH1Vp64ztITOu1UfZnupS4g19GkP7ma1GJs6iL6PWV7pUoKqJaLvyd2sJ kYf0xcEFa2iz9kSjlj0TQWyhj7tm731PTj2bTN9idj6ircDRF63AomXRd8kkDNjq36/ux8ml81
MXxhHX7VIV6tiVlyYvlhcfdWIBQOmbyIhfazzTgPSSoHlqoRJL9MXBFVH3HpghUs6hFYk9xqLv hlAX9nYNwMG0xcLat0fTmAYl3n3Lk9H9PaybkkGDB4eSiVt00KrakGKWlzitfUdlwsO5c6Py6w bs2h+fi4RbeSfks0o747qlvjCb6Sv7HLxK+v2LJbWJyvqxvpK1cRZR6hwcaLP9fc7V/4ebXuzR p8n/n7nqP+2SptBfROib6K+8lkv61YtCuOfzZC+YPRNWnEJ6Su/ZN2sBYGGn+ah73dOwm+wuRn WF+68ySsuYX1Xp1k3bCEIj58i9M2aOgj/Zt2yhWCU0kXfVIWLRS4mH4NPUfreIfrK11k3bQF4+ +4MhUvvNazvJOu2LQDhaTNN9CVm3geOa9hTXp++Tg56L/o0u74Wx51G6MtD5Wyk1Rc/9NUFbv8 4Ql+hkXXj5s83r77NlPr8ifee457PCmF95RxUfq1ofekLl/otCb6XcpS+/2TduPnztJkq+mILl 3odkeC7KkTpO866cfOnFK0vZeFS3/pocNx+pxCp70fWjZs/Wrroiwq+er3+8RBRe+VofWfrv+g 3QZ91m2N7OxB7dapu62Go0ofCRwMf0xfQpxUf71qt8xjsn6U+vxQqTF+EPk37Y0z6yeR+46xQY frCqaN01EKT5PWOOzvEHtMXjj7t0ZLXu7w+iePf3YoN0xfSR39putf4b+XDzq7NDuGDS8UH0xf UR3+OtX/yYYOwu+sRGKkwv/q+RE7aqkPSc5//7m4wfcn8idRXJDXJzatt7+36fuxn3bq5E7lko B3Satix93Z9OZjzGlH6jkjXbWxszKovBzc70FFY3+ZnEnwHuzPry8F6n/AQ1qc9kpHvw8zRd3a TdePmj+9Om6PvCJGKb3dmfXm4VRTMHe+oLwdDn/8pg/fVt/5lC+d7wOp99V1l3bLF0JqPvpw8Y eV7yOUd9f3OQ+Lggrn33fQdZN2uRTH4Zw76rnKROCz+vL++q+uc9F2Odt/31neVg8WWMcKj9q7 6rjo5eLjKg9B6OkqrL3LF3ifw4jhf9gjo2/fqkfPzv//F6qtcRHDl56Jxk6ee6yKgEVyMvo1f+ ynIT9KIJUZfDpag3oUYfZd7kWR9tUtHzNjXuT6IIBcrU1MRoy8q2ZbLnayvdumYpu4rMH1BmL6 ZYPpmYqK+Cp1fFJi+aCbpq3Qae1zvhemLZoK+SscuoE8LTF8UE/TtOL+36nUKTF8EE/T9dR492 ztl+qJI1ld5dSe/DaYvkufEZ1zc6Nu/pvpy8Ouhaen9TUwdzk3cHv1ZQnn9HyKdmr3GTlLhsmE p23+hwXeR9bUuIzeviXVf5eC598v6UUeFBV8UI3/Rk7YKmXVQeazrxvD8OvnJ+kLnOo83NlJxc 1DZTdZXPrlkS82x7F++EoGx+spnp7m7IzkdvcuXiw+R+gpXF41c/pHX6djrXf69qFR2fHm3XL4 47bE7kinZv2mcnIyir/N63GP5gsFg5AakSFlfwgqjNnEt62tYYWqY6ZuBGoRM39uh+ib9aRJGL EzftAiGPv5/FzN906K2RWW0wfRNiwgx0/d2RBDQl+G1rCBM30wwfTPB9AURkMHrOu//w4bI8B0 hWG8KgmDpQ87f8RvpEyiB01pn1XkU/XXB71tVkK7WIMZYBDLvNkjglVrbc4zUVlX6nqSqGMCma jbtCLT1kaNViuQ1hSQTiOS0uKnwvq/jFRlDEYsQqvpcG7YIBMm0GolFDHFfcfwZbYy9+mRyAHE jkGMBAFQ2tvYTfU2OV/uiSE8iNscRa5iQnJCclfy7OxjtRpJMDqa7MQQYKisegEgGGANV53leb 2Po+kNNCD36BJlYo6GlmDUIQNs0Tdl6g2x15a4omrJqAuKj7fpDNQxwk5xWNzGEXXe0RE1AJEv k24hzSD6x2quFyCRtlpyBDJFYArq7P1KfICARQNMQRmMfID5MngyNAt8m5zKdT3QxEGWrLwtSG 8K+3X8F8l+opttdXBhQf2ZoZFwleEB7nwvqk0CxvIT0QVsfZ2VeedTliD4yhDmbPPVkv7zDnqO Ie2hrpXlnHG8S+XDbNy6uGjwZyMb6OAk7zYuLPi5cuLTH8UOPsu0QMV3ecxToW/v9+jiwZvqML gQifaF3U+vz1H0qdPQZpEvL4/06cGIxoI/KXyd9JGMAkbZT74KEzhunj0i39ZluuDmn7QNYo0k 
loE/F66WPU7Cjrw/eEH0jfTSsvFU32d+nOWnd9ZGi2JIjgbfoG3j0Nb0VHQlq60Prro9En5U8r aQ43p1SHy1dXH0m54GWRyqXC33A1efZP6U+koH8+lSnjsmBvlH0eVJnytQRG31Un5oDfaon+jx e3pA6QvpyMPYJdD2F+nhb6vDqq3lnY2Tsg/SNNddHZr0A04qDFi6+6Juu7msGChd3O6DPXDN9P LFk1X0G8dId7582+lTgK5s5mkoiZh1rOOe1J210JaY/3j+tPgR9kzbUh8D6zHrrs/ourc84geg D6vi4KfWRwQ72x0vJpns3eA2XDDxRRqs+0bZEF5nGaynUq3fBavRGnD7kXdbiSd+1Y3Ed9UHsL DHrIgD43H7DoGufTVsTaorEnquviUF/1Ga/vvGCFX3p+tPb0H0IcB31AYxxTUJSW6Rrp25gURU Q1HQkt0UMPfqMPumYErK3/Pqk/nj1XYZEmoEQ36Q3O5yd66iva3btO0UQ92XP2ickeyAWRQxqZ nusjxt06V05uyr0P12q9zF07QgyPcy6hdQfHSKIWPToI1/bXXV9JHXoitwlfkxF8iyTCIra7AP QVlXJsBZCR2Z5RW4DO6Ak8u74I4aiquNyT1dqJLBhVx6fVVBV1eOLbCkrfq/DzrwCvW8dagmiN 7OtV1Sf9w1eTxM1hq4oEr/i9yKTCM5546Aj4dwvZvVg+mYitT72KFAUKfXxpHQzJh+WO1LqU6A
7G2F4SaePzBu86y8Ml1T6JDqBW+nydl5M1CcMFJnM0qCSdFBu4WGSPqQ2m12Aodhe/ecY5wIyR ZygrynSeWtXX+OJw4wgOaHz6u2aYrCUy2AwGAwGg7EI/g9ZQ8oOSk2kjgAAAABJRU5ErkJggg= =' 
alt="C " 
/> 
<CardContent> 
<Typography gutterBottom variant="h5" component="div"> 
Learn PYTHON 
</Typography> 
</CardContent> 
</CardActionArea> 
<CardActions> 
<a href="/python"><Button sx={{fontSize:'20px',fontFamily:'revert-layer',color:"#012169"}} size="small" color="primary"> 
Get Start 
</Button></a> 
</CardActions> 
</Card> 
</Grid> 

</Grid>
</div> 
); 
}