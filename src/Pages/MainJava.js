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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
 <a href='/home'>   <MenuItem onClick={handleMenuClose}>Logout <LogoutSharpIcon/> </MenuItem></a>
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
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
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
    </Menu>
  );

  return (
    <div style={{backgroundColor:'#E6E6FA'}}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:'green'}}>
        <Toolbar>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            DeepLearn
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
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