import React ,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';    
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import {addcheck} from '../actions/searchbyfield';
import { connect } from 'react-redux';



const useStyles = makeStyles({
  root: {
   marginTop:'30px',
  },
  first:{
   display:'flex',
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between'
  },
  line:{
    borderBottomStyle:'solid',
    borderBottomWidth:'thin',
    marginTop:'10px',
  },
  second:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'25px',
  },
  third:{
      display:'flex',
    
      marginTop:'5px',
  }

});


const Left = ({addcheck}) => {
    const classes = useStyles();
    const [gender,setgender] = useState(0);
    const [age,setage] = useState(0);
    const [check1,setcheck1] = useState(false);
    const [check2,setcheck2] = useState(false);

    const [able1,setable1] = useState(false);
    const [able2,setable2] = useState(false);
 

    const selectgender1 =()=>{
        setcheck1(!check1);
        setable2(!able2);
        if(!check1){
            setgender('Male');
           
        }else{
            setgender(0);
            
        }
    }
    const selectgender2 =()=>{
        setcheck2(!check2);
        setable1(!able1);
        if(!check2){
            setgender('Female');
          
        }else{
            setgender(0);
            
        }
    }

    useEffect(() => {
        addcheck(gender);
      },[gender]);
    return ( 
        <div className={classes.root} style={{borderColor:'#FF8c00'}}>
            <Paper elevation={1}  >
            <Box style={{padding:'15px',color:'#FF8c00',borderColor:'#FF8c00',zIndex:'5px'}}>
            <div className={classes.first}>
                <Typography variant="h6" color="initial">Top Contracts</Typography>
                <Typography variant="subtitle2" color="initial">View All</Typography>
            </div>
            <div className={classes.line}></div>
            
        
            <Typography gutterBottom>Select Gender:</Typography>

            <FormGroup row>
            
            <FormControlLabel
                control={
                <Checkbox
                disabled={able1}
                onChange={selectgender1}
                checked={check1}
                name="checkedB"
                />
            }
            label="Male"
            />
             <FormControlLabel
                control={
                <Checkbox
                disabled={able2}
                onChange={selectgender2}
                checked={check2}
                name="checkedB"
                />
            }
            label="Female"
            />
            </FormGroup>
         
            </Box>
            </Paper>
        </div>
     );
}
Left.propTypes = {
    addcheck:PropTypes.func.isRequired
}
 

export default connect(null,{addcheck})(Left);