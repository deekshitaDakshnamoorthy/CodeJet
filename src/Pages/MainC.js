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
    <div style={{backgroundColor:'#E6E6FA'}}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'#452c63'}}>
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
        <h1 style={{textAlign:'left',fontFamily:'serif',fontSize:'50px',marginLeft:'70px'}}> C Tutorial:</h1>
        <div>
<p style={{marginLeft:'70px',textAlign:'left'}}>
<h2 style={{textAlign:'left',fontFamily:'monospace'}}>Get Started With C</h2>
<h4 style={{textAlign:'left'}}>To start using C, you need two things:</h4>
<ul>
<li style={{textAlign:'left',marginLeft:'250px'}}>A text editor, like Notepad, to write C code</li>
<li style={{textAlign:'left',marginLeft:'250px'}}>A compiler, like GCC, to translate the C code into a
language that the computer will understand</li></ul>
There are many text editors and compilers to choose from. In this tutorial, we will use an IDE (see below).

<h2 style={{textAlign:'left',fontFamily:'monospace'}}>C Install IDE</h2>
<ul>An IDE (Integrated Development Environment) is used to edit AND compile the code.

Popular IDE's include Code::Blocks, Eclipse, and Visual Studio. These are all free, and they can be used to both edit and debug C code.</ul>

<ul>Note: Web-based IDE's can work as well, but functionality is limited.</ul>

<h2 style={{textAlign:'left',fontFamily:'monospace'}}>Click here to Download Dev C++</h2>
You can find the latest version  of Dev C++. Click Download button  which will install the text editor with a compiler.


</p>

<a href="https://sourceforge.net/projects/dev-cpp/files/Binaries/Dev-C%2B%2B%204.9.9.2/devcpp-4.9.9.2_setup.exe/download"><Button style={{backgroundColor:'#662d91',fontSize:'30px',fontFamily:'cursive'}} variant="contained" disableElevation>
  Download now <DownloadIcon sx={{fontSize:'40px'}}/>
</Button></a>

<p style={{marginLeft:'70px',textAlign:'left'}}>

<h2 style={{fontFamily:'monospace'}}> Statements</h2>
A computer program is a list of "instructions" to be "executed" by a computer.

In a programming language, these programming instructions are called statements.

It is important that you end the statement with a semicolon ;

If you forget the semicolon (;), an error will occur and the program will not run
<h2 style={{fontFamily:'monospace'}}> Many Statements</h2>
Most C programs contain many statements.
<h3>Example explained</h3>
From the example above, we have three statements:
<ol>
<li>printf("Hello World!");
</li>
<li>printf("Have a good day!");

</li>
<li>return 0;
</li>
</ol>
The first statement is executed first (print "Hello World!" to the screen).
Then the second statement is executed (print "Have a good day!" to the screen).
And at last, the third statement is executed (end the C program successfully).

<h2 style={{fontFamily:'monospace'}}>New Lines
</h2>
To insert a new line, you can use the \n character:
You can also output multiple lines with a single printf() function. However, this could make the code harder to read:
<h3>What is \n exactly?
</h3>
The newline character (\n) is called an escape sequence, and it forces the cursor to change its position to the beginning of the next line on the screen. This results in a new line.
<h2 style={{fontFamily:'monospace'}}>Comments in C
</h2>

<ul>Comments can be used to explain code, and to make it more readable. It can also be used to prevent execution when testing alternative code.
</ul>
<ul>Comments can be singled-lined or multi-lined.</ul>
<h2 style={{fontFamily:'monospace'}}>  Single-line Comments
</h2>
Single-line comments start with two forward slashes (//).

Any text between // and the end of the line is ignored by the compiler (will not be executed).
<h2 style={{fontFamily:'monospace'}}>
C Multi-line Comments
</h2>
Multi-line comments start with /* and ends with */.

Any text between /* and */ will be ignored by the compiler:









</p>

<p style={{marginLeft:'70px',textAlign:'left'}}>

<h2 style={{textAlign:'left',fontFamily:'monospace'}}> Available YouTube video to Learn C </h2>
Have a Glance at this youTube Channel. Click YouTube button to watch the video and learn C.
</p>
<a href="https://www.youtube.com/watch?v=i0ovgS-jCQ8"><Button style={{backgroundColor:' #CD201F',fontSize:'30px',fontFamily:'cursive'}} variant="contained" disableElevation>
  Youtube link <YouTubeIcon sx={{fontSize:'50px'}}/>
</Button></a>
<p style={{marginLeft:'70px',textAlign:'left'}}>

<h2 style={{textAlign:'left',fontFamily:'monospace'}}> Click here to Download Material </h2>
You can have full C programming Notes here. Click Download Notes button to get the notes and learn C.
</p>
<a href="https://drive.google.com/file/d/1UJUtN06VBfSe62Alk69CfTnrXenAPG1o/view?usp=drive_link"><Button style={{backgroundColor:'#800080',fontSize:'30px',fontFamily:'cursive'}} variant="contained" disableElevation>
  Download Notes <CloudDownloadIcon sx={{fontSize:'50px'}}/>
</Button></a>
        </div>
    </Typography>

   
    <StickyFooter/>
    </div>
  );
}