import React, {
  Fragment
} from 'react';
import {
  makeStyles
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  connect
} from 'react-redux';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));



const Left = ({
  products
}) => {
  const classes = useStyles();

  return (< TableContainer component={
    Paper
  } >
    <Table className={classes.table} aria-label="simple table" >
      <TableHead >
        <TableRow >

          <TableCell > Name </TableCell>
          <TableCell align="left" > Price </TableCell>
          <TableCell align="center"> Quantity </TableCell>
          <TableCell align="center" > Remove </TableCell> </TableRow >
      </TableHead>
      <TableBody > {
        products.map((row) => (
          <TableRow key={
            row.name
          }>
            <TableCell component="th"
              scope="row" > {
                row.name
              } </TableCell>

            <TableCell align="left" > {
              row.price
            } </TableCell>
            <TableCell >
              <Grid container alignContent="center"
                justify="center" >
                <ChevronLeftIcon />
                <Fragment > {
                  row.qunatity
                } </Fragment><ChevronRightIcon /> </Grid>
            </TableCell > <TableCell align="center" > < Grid container alignContent="center"
              justify="center" > < div > < DeleteIcon /> Remove </div> </Grid > </TableCell> </TableRow >
        ))
      } </TableBody> </Table > </TableContainer >
  );
}
const mapStateToProps = state => ({
  products: state.Cart
});
export default connect(mapStateToProps)(Left)