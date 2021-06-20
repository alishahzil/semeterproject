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
import Spinner from './Spinner';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 8),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',

   
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
   paddingTop:0,
   paddingBottom:0,
  },
  line:{
    borderBottomStyle:'solid',
    borderBottomWidth:'thin',
    marginTop:'10px',
  },
  pagination: {
    marginTop:'20px',
    marginBottom:'20px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

    
  },
 
}));



export default function Album() {
  const classes = useStyles();
  let [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(10);
  const [countpage,setcountpage] =useState(0); 
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/product/getproduct?page=${page}&limit=${limit}`)
      .then((response) => {
        setUsers(response.data.results);
        if(response.data.next){
      
        setcountpage(response.data.next.page);
        }
        if(response.data.previous){
          setcountpage(1+response.data.previous.page);
        }
      });
  }, [page]);
  



  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} style={{
             backgroundSize: 'cover',
             overflow: 'hidden',
             backgroundImage: `url(https://images.pexels.com/photos/994517/pexels-photo-994517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" style={{color: 'white'}}  gutterBottom>
              Welcome To TheWayShop
            </Typography>
            <Typography variant="h5" align="center" style={{color: 'white'}} paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" style={{backgroundColor:'#FF8c00'}}>
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" style={{color:'#FF8c00',borderColor:'#FF8c00'}}>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          {users.length == 0 ? <Spinner /> :
          <Grid container spacing={4}>
          {users.map((card) => (
            
              <Grid id={card._id} key={card._id} item  xs={12} sm={5} md={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.pic}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                  <Link   style={{color:'black', textDecoration: 'none' }}  to={'/product/'+ card._id }> <Typography gutterBottom variant="h6" component="h2">
                      {card.name}
                    </Typography></Link>
                  </CardContent>
                  <div className={classes.line}></div>
                  <CardActions style={{backgroundColor:'black'}}>
                    <Button variant="outlined" style={{color:'#FF8c00',borderColor:'#FF8c00'}} size="small" color="primary">
                     <h2>{card.price}</h2>  ₨
                    </Button>
                    <Grid container spacing={2} justify="center">
                <Grid item>
                <Link   style={{color:'black', textDecoration: 'none' }}  to={'/product/'+ card._id }>   <Button variant="contained" style={{backgroundColor:'#FF8c00'}}>
                   More detail
                  </Button>
                  </Link>
                  </Grid>
                  </Grid>
                  </CardActions>
                </Card>
              </Grid>

              
                ))}
        
          </Grid>
  
}

        </Container>
      </main>
      <div className={classes.pagination}>
     
      <Pagination count={countpage} page={page} onChange={handleChange} />
    </div>
    
      
    </React.Fragment>
  );
}


