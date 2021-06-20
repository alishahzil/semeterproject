import React ,{useEffect,useState,Fragment}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Spinner from '../../component/Spinner';    
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';

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
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
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
  pagination: {
    marginTop:'20px',
    marginBottom:'20px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

    
  },
 
}));

  

const MediaControlCard =({search,items})=> {
  const classes = useStyles();
  const searchdata =search;
  console.log(searchdata);
  const [page, setPage] = useState(1);
  const [limit, setlimit] = useState(10);
 const [countpage,setcountpage] =useState(0); 
 const handleChange = (event, value) => {
  setPage(value);
};
  let [users, setUsers] = useState([]);
  useEffect(()=>{
    if(items.payload !=null){
           
        axios.get(`http://localhost:5000/api/product/search?page=${page}&limit=${limit}&id=${searchdata}).then(response => setUsers(response.data)`).then((response) => {
          setUsers(response.data.results);
          if(response.data.next){
        
          setcountpage(response.data.next.page);
          }
          if(response.data.previous){
            setcountpage(1+response.data.previous.page);
          }
        });;
    }
  },[items,search,page]);
  console.log(users);

  
 

  return (
    <Fragment>
    <Container className={classes.cardGrid} maxWidth="lg">
    {/* End hero unit */}
    {users.length == 0 ? <Spinner /> :
    <Grid container spacing={4}>
    {users.map((card) => (
      
        <Grid id={card._id} key={card._id} item  xs={12} sm={6} md={4}>
          <Card className={classes.card}>
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
              <Button size="small" color="primary">
               For Age: {card.age}
              </Button>
            </CardActions>
          </Card>
        </Grid>

        
          ))}
  
    </Grid>
}
  </Container>
  <div className={classes.pagination}>
     
      <Pagination count={countpage} page={page} onChange={handleChange} />
    </div>
      
  </Fragment>
  );
}

const mapStateToProps = state=>({
  items:state.Check
});

export default connect(mapStateToProps)(MediaControlCard);