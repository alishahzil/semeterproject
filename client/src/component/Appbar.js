import React,{useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Link,Redirect  } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const PrimarySearchAppBar = ({items})=> {
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [search,setsearch] = useState('');
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const history = useHistory();

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
  const searchcall = ()=>{
    history.push(`/search/${search}`);
  }
  const searchboy = ()=>{
    history.push(`/search/boy`);
  }
  const searchgirl = ()=>{
    history.push(`/search/girl`);
  }
  

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      
    >
  
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    
    >
      <MenuItem  style={{color:'#FF8C00'}}>
      
        <IconButton
              edge="end"
              aria-label="account of current user"
         
              aria-haspopup="true"
              onClick={searchboy}
              
              color="inherit"
            >
              <Typography variant="button" display="block" gutterBottom>
       Boys   
      </Typography>
              <ExpandMoreIcon />
      </IconButton>
      </MenuItem>
    
      <MenuItem  style={{color:'#FF8C00'}}>
          <IconButton
              edge="end"  
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={searchgirl}
            >
              <Typography variant="button" display="block" gutterBottom>
      Girls
      </Typography>
              <ExpandMoreIcon />
            
          
      </IconButton>
      </MenuItem>
    
    <MenuItem>
        <Link style={{textDecoration:'none',color:'#FF8C00'}} to="/contactus"> <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
    
              color="inherit"
            >
              <Typography style={{marginRight:'5px'}} variant="button" display="block" gutterBottom>
      Contact Us
      </Typography>
  
            
      </IconButton>
      </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/yourproducts" >  <IconButton style={{color:'#FF8C00'}} aria-label="cart">
  <StyledBadge badgeContent={items.length} >
    <ShoppingCartIcon />
  </StyledBadge>
  </IconButton></Link>
           
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar style={{backgroundColor:'#FF8C00'}} position="static">
        <Toolbar>
        <Link to="/yourproducts"  style={{ textDecoration: 'none',color:'white'}}> <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            < ShoppingBasketIcon />
          </IconButton></Link> 
          <Typography className={classes.title} variant="h6" noWrap>
         <Link to="/"  style={{ textDecoration: 'none',color:'white' }}> TheWayShop </Link>
          </Typography>
          <div className={classes.search}>
          
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e)=>setsearch(e.target.value)}
              value={search}
              
            />
            <IconButton onClick={searchcall} style={{color:'white'}} aria-label="upload picture" component="span">
            <SearchIcon />
        </IconButton>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          
        <IconButton
              edge="end"
              aria-label="account of current user"
         
              aria-haspopup="true"
              onClick={searchboy}
              
              color="inherit"
            >
              <Typography variant="button" display="block" gutterBottom>
       Boys   
      </Typography>
              <ExpandMoreIcon />
      </IconButton>
    
          <IconButton
              edge="end"  
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={searchgirl}
            >
              <Typography variant="button" display="block" gutterBottom>
      Girls
      </Typography>
              <ExpandMoreIcon />
            
          
      </IconButton>
        <Link style={{textDecoration:'none',color:'white'}} to="/contactus"> <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
    
              color="inherit"
            >
              <Typography style={{marginRight:'5px'}} variant="button" display="block" gutterBottom>
      Contact Us
      </Typography>
  
            
      </IconButton>
      </Link> 
        <Link to="/yourproducts" >  <IconButton style={{color:'white'}} aria-label="cart">
  <StyledBadge badgeContent={items.length} >
    <ShoppingCartIcon />
  </StyledBadge>
  </IconButton></Link>
           
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

const mapStateToProps = state =>({
  items:state.Cart
});

export default connect(mapStateToProps)(PrimarySearchAppBar);