import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import BasicCard from './BasicCard';
import StickyFooter from './StickyFooter';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function MainC() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile <AccountCircle/></MenuItem>
      <button onClick={() => { window.location.href = '/home'; }} style={{ border: 'none', background: 'none', font: 'inherit', cursor: 'pointer', outline: 'inherit' }}>
    Logout
    <LogoutSharpIcon />
  </button>    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
     
     
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <LogoutSharpIcon/>
          
        </IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div style={{backgroundColor:'#D0F0C0'}}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#40a829'}}>
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            DeepLearn
          </Typography>
       
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
          <a href="/home">
          <IconButton
          sx={{color:"white"}}
              size="large"
              edge="end"
              aria-label="account of current user"
              
              aria-haspopup="true"
              
              color="white"
            >  
              <HomeRoundedIcon/>
            </IconButton>
          </a>
         
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    <Typography sx={{paddingBottom:'50px'}}>
        <h1 style={{textAlign:'left',fontFamily:'serif',fontSize:'50px',marginLeft:'70px'}}> JAVA Tutorial:</h1>
        <div>
<p style={{marginLeft:'70px',textAlign:'left'}}>
<h2 style={{textAlign:'left',fontFamily:'monospace'}}>Get Started With JAVA</h2>
<ul>
<li style={{textAlign:'left',marginLeft:'250px'}}>Java is a popular programming language.</li>
<li style={{textAlign:'left',marginLeft:'250px'}}>Java is used to develop mobile apps, web apps, desktop apps, games and much more.</li></ul>
There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).

<h2 style={{textAlign:'left',fontFamily:'monospace'}}>What is Java?
</h2>
<ul>Java is a popular programming language, created in 1995.

It is owned by Oracle, and more than 3 billion devices run Java. </ul>

<ul>It is used for:
  <li>
  Mobile applications (specially Android apps)  </li>

 <li>  Desktop applications  </li>

   <li>Web applications  </li>

 <li>  Web servers and application servers  </li>

<li>   Games  </li>

   <li> Database connection  </li>

  <li>  And much, much more!  </li>

</ul>
<h2 style={{textAlign:'left',fontFamily:'monospace'}}>Why Use Java?</h2>
<li>Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)</li>
<li>It is one of the most popular programming language in the world</li>
<li>It has a large demand in the current job market</li>
<li>It is easy to learn and simple to use</li>
<li>It is open-source and free</li>
<li>It is secure, fast and powerful</li>
<li>It has a huge community support (tens of millions of developers)</li>
<li>Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs</li>
<li>As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa</li>
</p>
<p style={{marginLeft:'70px',textAlign:'left'}}>

<h2 style={{textAlign:'left',fontFamily:'monospace'}}>Click here to Download Eclipse</h2>
</p>
<a href="https://www.eclipse.org/downloads/"><Button style={{backgroundColor:'#03C03C',fontSize:'30px',fontFamily:'cursive'}} variant="contained" disableElevation>
  Download now <DownloadIcon sx={{fontSize:'40px'}}/>
</Button></a>

<p style={{marginLeft:'70px',textAlign:'left'}}>

<h2 style={{textAlign:'left',fontFamily:'monospace'}}> Available YouTube video to Learn JAVA </h2>
Have a Glance at this youTube Channel. Click YouTube button to watch the video and learn .
</p>
<a href="https://www.youtube.com/watch?v=hBh_CC5y8-s"><Button style={{backgroundColor:' #CD201F',fontSize:'30px',fontFamily:'cursive'}} variant="contained" disableElevation>
  Youtube link <YouTubeIcon sx={{fontSize:'50px'}}/>
</Button></a>
<p style={{marginLeft:'70px',textAlign:'left'}}>

<h2 style={{textAlign:'left',fontFamily:'monospace'}}> Click here to Download Material </h2>
You can have full C programming Notes here. Click Download Notes button to get the notes and learn C.
</p>
<a href=""><Button style={{backgroundColor:'#9ACD32',fontSize:'30px',fontFamily:'cursive'}} variant="contained" disableElevation>
  Download Notes <CloudDownloadIcon sx={{fontSize:'50px'}}/>
</Button></a>
        </div>
    </Typography>

   
    <StickyFooter/>
    </div>
  );
}