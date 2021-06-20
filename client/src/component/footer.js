import React,{useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {  useTheme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme)=>({
  root: {
     color:'white',
     backgroundColor: '#666666',
     padding:'100px',
     display:'flex',
     flexWrap:'wrap',
     flexDirection:'row',
     justifyContent:'space-between',
     [theme.breakpoints.down('sm')]:{
         padding:'30px'
     },
  },
  mainbox:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      maxWidth:500,
  },
  buttonstyle:{
    color:'white',
    maxWidth:300,
    background:'#666666',
    border:'1px solid',
    marginTop:'50px',
    padding:'5px',
    fontWeight:'bold',
    paddingLeft:'40px',
    paddingRight:'40px',
    [theme.breakpoints.down('sm')]: {
        marginTop:'20px',
        padding:'10px',
        paddingLeft:'20px',
        paddingRight:'20px',
    },
  },
}));



const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    return (
    <div className={classes.root}>
        <Box>
         <Box className={classes.mainbox}>
        <Box style={{margin:'15px'}}>
        <Typography variant="h6" color="initial">ABOUT</Typography>
        <Typography  style={{marginTop:'10px'}} variant="body1" color="initial">About Sweek Read stories Write stories Writing contests Self-publishing Blog</Typography>
        </Box>
        <Box  style={{margin:'15px'}}>
        <Typography variant="h6" color="initial">SUPPORT</Typography>
        <Typography style={{marginTop:'10px'}} variant="body1" color="initial">Contact FAQ Community guidelines Privacy Terms of use WORK WITH US</Typography>
        </Box>
        <Box  style={{margin:'15px'}}>
        <Typography variant="h6" color="initial"> WORK WITH US</Typography>
        <Typography  style={{marginTop:'10px'}} variant="body1" color="initial">Partnerships Media Sweek vacancies SIGN UP FOR OUR NEWSLETTER </Typography>
        </Box>
        </Box>
        <Box style={{marginTop:'30px',diplay:'flex'}} >
        <img style={{height:'30px'}} src="https://sweek.com/assets/img/sweek_logo.03c9b125b51aa2355137055205f41b56.svg"/>
        <Typography variant="body2">© Sweek. All Rights Reserved</Typography>
        </Box>
        </Box>
        <Box style={{maxWidth:550,margin:'15px'}}>
            <Typography variant="h6" color="initial">SIGN UP FOR OUR NEWSLETTER</Typography>
            <Typography style={{marginTop:'10px'}}  variant="body1" color="initial"> You will receive updates with the latest information about our writing competitions, new functionalities and much more.</Typography>
            <Button variant="text" className={classes.buttonstyle}>
                 <Typography variant={matches ? 'h6' : "subtitle1"} color="initial">SIGN UP FOR OUR NEWSLATTER</Typography>
                </Button>
                <Box style={{display:'flex',flexDirection:'row',marginTop:'30px'}}>
         <FacebookIcon style={{fontSize:50,}} />
         <TwitterIcon  style={{fontSize:50,marginLeft:'25px',}}/>
         <LinkedInIcon  style={{fontSize:50,marginLeft:'25px',}}/>
         <InstagramIcon  style={{fontSize:50,marginLeft:'25px',}} />
         <YouTubeIcon   style={{fontSize:50,marginLeft:'25px',}}/>
     </Box>
        </Box>
    </div>);
}
 
export default Footer;