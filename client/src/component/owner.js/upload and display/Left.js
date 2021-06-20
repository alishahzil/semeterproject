import React,{useState,Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import BackupIcon from '@material-ui/icons/Backup';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link,Redirect  } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Spinner';



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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const [catagorie,setcatagorie] = useState();
  const [gender,setgender] = useState();
  const [name,setname] = useState();
  const [price,setprice] = useState();
  const [discription,setdiscription]= useState();
  const [loading,setloading] = useState(false);
  const [url,seturl] =useState();
  const submit = async ()=>{
    setloading(true);
   await axios.post('http://localhost:5000/api/product/createproduct', {
      catagorie:catagorie,
      name: name,
      discription: discription,
      gender:gender,
      price:price,
      age:'4',
      pic:url
    })
    .then(function (response) {
      setloading(false);
      console.log(response);
      setcatagorie('');
      setgender('');
      setname('');
      setprice('');
      setdiscription('');
      setloading('');
      seturl('');
    })
    .catch(function (error) {
      setloading(false);
     window.alert(error);
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {loading == true ? <Spinner /> :
      <Fragment>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <BackupIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
         Upload New Product
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="Catagorie"
                variant="outlined"
                required
                fullWidth
                label="Catagorie"
                value={catagorie}
                onChange={(e)=>setcatagorie(e.target.value)}
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Gender"
                value={gender}
                onChange={(e)=>setgender(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Name"
                value={name}
                onChange={(e)=>setname(e.target.value)}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="price"
                value={price}
                onChange={(e)=>setprice(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
            <TextField 
               id="outlined-multiline-static"
               label="Discription"
               margin="normal"
               multiline
               required
               rows={4}
               fullWidth    
               variant="outlined"
               value={discription}
                onChange={(e)=>setdiscription(e.target.value)}
            />
            </Grid>
          </Grid>
          <Grid item xs={12}>
          <TextField
           variant="outlined"
           required
           fullWidth
           label="url"
           value={url}
           onChange={(e)=>seturl(e.target.value)}
           />
            </Grid>
              <a style={{color:'white',textDecoration:'none'}} target="_blank" href="https://imgbb.com/"><Button  fullWidth
            variant="contained"
            className={classes.submit}
            color="primary">Upload image and then past Link</Button></a>

          <Button
             onClick={submit}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Upload
          </Button>
          <Grid container justify="flex-end">
            
          </Grid>
        </form>
      </div>
      <Box mt={5}>
       
      </Box>
      </Fragment>
      }
    </Container>
  );
}