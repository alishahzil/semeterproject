import React,{useEffect,useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import axios from 'axios';
import {addcart} from '../component/actions/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from './Spinner';    
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
  root: {
   marginTop:'100px',
   padding:'50px',
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
   flexWrap:'wrap',
   [theme.breakpoints.down('md')]:{
     justifyContent:'center',
     marginTop:'40px',
     padding:'30px',
     
   },
  },
  width:{
    maxWidth:700,
  },
  box:{
   maxWidth:700,
   padding:'30px',
   backgroundColor:'white',
   marginTop:'100px',
   maxHeight:700,
   display:'flex',
   flexDirection:'column',
   [theme.breakpoints.down('sm')]:{
     padding:'15px',
     marginTop:'40px',
     maxHeight:450,
     
   },
  },
  line:{
    borderBottomStyle:'solid',
    borderBottomWidth:'thin',
    marginTop:'5px',
  },
  buttonstyle:{
    marginLeft:'5px',

    marginTop:'50px',
    padding:'15px',
    fontWeight:'bold',
    paddingLeft:'60px',
    paddingRight:'60px',
    [theme.breakpoints.down('sm')]: {
      
        marginTop:'20px',
        padding:'10px',
        paddingLeft:'20px',
        paddingRight:'20px',
    },
    
  },
}));


const Product = ({addcart,match,items}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    var url = match.params.id;
    const id = items.filter((item)=> item == url);
    let [users, setUsers] = useState([]);
    let [bt1, setbt1] = useState(false);
    let [bt2, setbt2] = useState(false);
 
    useEffect(()=>{
        if(id == url){
            setbt2(true);
        }
        axios
      .get(`http://localhost:5000/api/product/getproductby/${match.params.id}`)
      .then(response => setUsers(response.data));
    },[])
    const buynow=()=>{
        if(id == url){
           
        }
    
    }
    const addtocart=()=>{
        var id= match.params.id;
        const quantity = 1;
        users.map((item)=>{
          addcart(id,item.name,item.discription,item.price,quantity)});
        setbt2(true);
        console.log(items);
    }


    return ( 
        <div className={classes.root}>
              {users.length == 0 ? <Spinner /> :
            <Fragment>
            {users.map((card)=>(
            <Fragment>
            <img style={{height:'450px'}} src={card.pic} />
            <div className={classes.width}>
            <Typography style={{fontWeight:'bold'}} variant="h4" >{card.name} TURN STORIES INTO BOOKS WITH SWEEK PUBLISHING</Typography>
            <Typography style={{marginTop:'20px', color:'#798185',}} variant="subtitle1">{card.discription} Have you always wondered how to publish a book? Sweek has the solution for you. We will guide you from manuscript to cover design with Sweek Publishing. At no cost!</Typography>
            <div style={{display:'flex',alignItems:'center', color:'#798185',}}>
            <FiberManualRecordIcon  fontSize="small"  />
            <Typography  style={{marginTop:'20px',marginLeft:'5px'}} variant="subtitle1">{card.catagorie}</Typography>
            </div>
            <div style={{display:'flex',alignItems:'center', color:'#798185',}}>
            <FiberManualRecordIcon  fontSize="small"  />
            <Typography  style={{marginTop:'20px',marginLeft:'5px'}} variant="subtitle1">{card.gender}</Typography>
            </div>
            <div style={{display:'flex',alignItems:'center', color:'#798185',}}>
            <FiberManualRecordIcon  fontSize="small"  />
            <Typography  style={{marginTop:'20px',marginLeft:'5px'}} variant="subtitle1">Avaliable {card.age}</Typography>
            </div>
            <Box className={classes.box}> 
                <Typography variant="subtitle1" style={{fontWeight:'bold'}} >Example paperback pocket book - 150 pages - paper cream</Typography>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'20px',marginRight:'20px'}}>
                    <Typography variant="subtitle1" style={{fontWeight:'bold'}}>Sales price</Typography>
                    <Typography variant="subtitle1" style={{fontWeight:'bold'}}>${card.price}</Typography>
                </div>
                <div className={classes.line}></div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'20px',marginRight:'20px'}}>
                    <Typography variant="subtitle1" style={{color:'#949f99'}}>Net sales price (excl. tax)</Typography>
                    <Typography variant="subtitle1" style={{color:'#949f99'}}>$0.0</Typography>
                </div>
                <div className={classes.line}></div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'20px',marginRight:'20px'}}>
                    <Typography variant="subtitle1" style={{fontWeight:'bold'}} >Shipping Tax</Typography>
                    <Typography variant="subtitle1" style={{fontWeight:'bold'}}>Free</Typography>
                </div>
                <div className={classes.line}></div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginLeft:'20px',marginTop:'2px',marginRight:'20px',marginBottom:'5px'}}>
                <Typography variant="caption" style={{color:'#949f99'}}>That's 38% of the net sales price</Typography>
                </div>
               
            </Box>
            <Button disabled={bt2} onClick={ addtocart} variant="text" style={{backgroundColor:'#FF8c00'}} className={classes.buttonstyle}>
                 <Typography variant={matches ? 'h5' : "subtitle1"} color="initial">Add To Cart</Typography>
                </Button>
                <Button onClick={buynow}  disabled ={bt1}variant="text" style={{color:'#FF8c00',borderColor:'#FF8c00',border:'1px solid'}} className={classes.buttonstyle}>
                 <Typography variant={matches ? 'h5' : "subtitle1"} color="initial">Buy Now</Typography>
                </Button>
            </div>
            </Fragment>
                ))}
               </Fragment>
}
        </div>
     );
}
Product.propTypes = {
    addcart:PropTypes.func.isRequired
}
const mapStateToProps = state =>({
    items:state.Cart
})
 
export default connect(mapStateToProps,{addcart})(Product);

  
