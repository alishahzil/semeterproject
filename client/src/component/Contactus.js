import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#fff'
      }
    }
  });
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    '& .MuiInputBase-root': {
        color: 'white',
      },
  },
 
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
   
    backgroundColor:'#FF8C00',
    color:'white'
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
    <Grid style={{color:'white'}} container component="main" className={classes.root}>
      <CssBaseline  />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid style={{backgroundColor:'#424242' ,color:'white'}}  item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <form  className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
            
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              color="secondary"
            />
            <TextField 
              variant="outlined"
              margin="normal"
              fullWidth
              name="Name"
              label="Name"
              id="Name"
              color="secondary"
            
            />
             <TextField 
               id="outlined-multiline-static"
               label="Message"
               margin="normal"
               multiline
               rows={4}
               fullWidth    
               variant="outlined"
               color="secondary"
             
            />
            
            
            <Button
              type="submit"
              fullWidth
              variant="contained"

              className={classes.submit}
            >
              Submit
            </Button>
            <Grid container>
              
              
            </Grid>
            <Box mt={5}>
             
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
    </MuiThemeProvider>
  );
}