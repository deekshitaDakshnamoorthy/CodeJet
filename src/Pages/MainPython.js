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
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

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
      <MenuItem onClick={handleMenuClose}>
  <button onClick={() => { window.location.href = '/home'; }} style={{ border: 'none', background: 'none', font: 'inherit', cursor: 'pointer', outline: 'inherit' }}>
    Logout
    <LogoutSharpIcon />
  </button>
</MenuItem>

    </Menu>
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
    <div style={{backgroundColor:'#FFF8DC'}}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#8B4513'}}>
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Code Jet
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
        <h1 style={{textAlign:'left',fontFamily:'serif',fontSize:'50px',marginLeft:'70px'}}> PYTHON Tutorial:</h1>
        <div>
<p style={{marginLeft:'70px',textAlign:'left'}}>
<h2
style={{textAlign:'left',fontFamily:'monospace'}}>Get Started With PYTHON</h2>
<ul>
<li style={{textAlign:'left',marginLeft:'250px'}}>Python is a popular programming language.

</li>
<li style={{textAlign:'left',marginLeft:'250px'}}>Python can be used on a server to create web applications.

</li></ul>
<h2 style={{textAlign:'left',fontFamily:'monospace'}}>What is Python?
</h2>

<ul>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.

</ul>

<ul>It is used for:
  <li>
  Mobile applications (specially Android apps)  </li>

 <li>web development (server-side),
  </li>

   <li>software development,
  </li>

 <li>  mathematics, </li>

<li> system scripting.  </li>

</ul>
<h2 style={{textAlign:'left',fontFamily:'monospace'}}>What can Python do?</h2>
<li>Python can be used on a server to create web applications.
</li>
<li> Python can be used alongside software to create workflows.</li>
<li>It has a large demand in the current job market</li>
<li>It is easy to learn and simple to use</li>
<li>Python can connect to database systems. It can also read and modify files.
</li>
<li>Python can be used to handle big data and perform complex mathematics.</li>
<li>Python can be used for rapid prototyping, or for production-ready software development.
</li>
<h2 style={{textAlign:'left',fontFamily:'monospace'}}>Why Python?
</h2>
<li>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).</li>
<li>Python has a simple syntax similar to the English language.
</li>
<li>Python has syntax that allows developers to write programs with fewer lines than some other programming languages.
</li>
<li>Python runs on an interpreter system, meaning that code can be executed as soon as it is written. This means that prototyping can be very quick.</li>
<li>Python can be treated in a procedural way, an object-oriented way or a functional way.
</li>
<h2 style={{textAlign:'left',fontFamily:'monospace'}}>Good to know
</h2>
<li>The most recent major version of Python is Python 3, which we shall be using in this tutorial. However, Python 2, although not being updated with anything other than security updates, is still quite popular.</li>
<li>In this tutorial Python will be written in a text editor. It is possible to write Python in an Integrated Development Environment, such as Thonny, Pycharm, Netbeans or Eclipse which are particularly useful when managing larger collections of Python files.</li>

<h2 style={{textAlign:'left',fontFamily:'monospace'}}>Python Syntax compared to other programming languages

</h2>
<li>Python was designed for readability, and has some similarities to the English language with influence from mathematics.
</li>
<li>Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.
</li>
<li>Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions and classes. Other programming languages often use curly-brackets for this purpose.</li>

</p>
<p style={{marginLeft:'70px',textAlign:'left'}}>

<h2 style={{textAlign:'left',fontFamily:'monospace'}}>Click here to Download Eclipse</h2>
</p>
<a href="https://www.python.org/downloads/"><Button style={{backgroundColor:'	#844b11',fontSize:'30px',fontFamily:'cursive'}} variant="contained" disableElevation>
  Download now <DownloadIcon sx={{fontSize:'40px'}}/>
</Button></a>

<p style={{marginLeft:'70px',textAlign:'left'}}>

<h2 style={{fontFamily:'monospace'}}>Preview video
</h2>
<YoutubeEmbed embedId="hEgO047GxaQ?si=tyo9dPVbNUl8H9jt" />
</p>


        </div>
    </Typography>

   
    <StickyFooter/>
    </div>
  );
}