import React from 'react';
import Right from './right';
import Left from './Left';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  root: { 
      display:'flex',
      flexDirection:'row',
      [theme.breakpoints.down('md')]: {
       flexWrap:'wrap'
      },

  },
  first :{
      width:'70%',
      margin:50,
      [theme.breakpoints.down('md')]: {
        margin:20,
        width:'100%',
      }
  },
  second:{
   width:'30%',
   margin:30,
   marginRight:50,
   [theme.breakpoints.down('md')]: {
    margin:15,
    marginRight:25,
    width:'100%',
    }
  },
}));


const BottomContent = ({match}) => {
    const classes = useStyles();
    const search = match.params.id;
    return ( 
        <div className={classes.root}>
            <div className={classes.second}>
            <Left />
            </div>
            <div className={classes.first}>
           <Right search={search} />
            </div>

        </div>
     );
}
 
export default BottomContent;