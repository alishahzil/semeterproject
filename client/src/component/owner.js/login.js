import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import {Ownerlogin} from '../actions/auth';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
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
    },
  }));
  
const Login = ({auth,Ownerlogin}) => {
    const classes = useStyles();
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const [result,setresult]= useState();
    let history = useHistory(); 
    const login=async()=>{
      console.log(email);
      console.log(password);
     
   
   await axios.post(
      "http://localhost:5000/api/owner/login",
      {
         email:email,
         password:password,
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      }
    ).then((res)=>{
     if(res.data){
       console.log(res.data);
      Ownerlogin();
      history.push("/owner/dashboard");
     }
    });
 
    }
    if(auth.isAuthenticated){
        return <Redirect to="/owner/dashboard" />;
    }
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e)=>setemail(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
               
                fullWidth
                variant="contained"
                color="primary"
                onClick={login}
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                 
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
           
          </Box>
        </Container>
      );
}

Login.propTypes = {
  addcheck:PropTypes.func.isRequired
}

const mapStateTopProps = state=>({
    auth: state.Auth
})

export default connect(mapStateTopProps,{Ownerlogin})(Login);