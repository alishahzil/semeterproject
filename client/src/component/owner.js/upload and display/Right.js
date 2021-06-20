import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Spinner';



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '80.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
 
}));



export default function Album() {
  const classes = useStyles();
  let [users, setUsers] = useState([]);
  const deleteproduct = async (e)=>{
    console.log(e.currentTarget.id);
   await axios.delete(`http://localhost:5000/api/product/deleteproductby/${e.currentTarget.id}`).then((res)=>console.log(res.data));
}

  useEffect(async () => {
  await  axios
      .get("http://localhost:5000/api/product/ownergetproduct")
      .then(response => setUsers(response.data));
  }, [deleteproduct]);
  


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
       
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          {users.length == 0 ? <Spinner /> :
          <Grid container spacing={7}>
          {users.map((card) => (
            
              <Grid id={card._id} key={card._id} item  xs={12} sm={6} md={4}>
                <Card id={card._id} className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.pic}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  <Link   style={{color:'black', textDecoration: 'none' }}  to={'/product/'+ card._id }> <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography></Link>
                    <Typography>
                     {card.catagorie}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      {card.price} ₨
                    </Button>
                    <Button id={card._id} onClick={deleteproduct} size="small" color="primary">
                    delete Product
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              
                ))}
        
          </Grid>
}
        </Container>
      </main>
      
    </React.Fragment>
  );
}


