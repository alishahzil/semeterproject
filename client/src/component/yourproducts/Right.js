import React,{Fragment} from 'react';
import Typography from '@material-ui/core/Typography';

const Right = () => {
    return ( 
        <Fragment >
        <div class="summary-total-items"><span class="total-items"></span> <Typography variant="h5" gutterBottom>
        Items in your Bag
      </Typography></div>
        <div className="summary-delivery">
          <select name="delivery-collection" className="summary-delivery-selection">
              <option value="0"  selected="selected">
                  Select Collection or Delivery</option>
          </select>
        </div>
        <div className="summary-total">
          <div className="total-title"><Typography variant="h6" gutterBottom>
       Total
      </Typography></div>
          <div className="total-value final-value" id="basket-total"> <Typography variant="h4" gutterBottom>
       1500
      </Typography></div>
        </div>
        <div className="summary-checkout">
          <button className="checkout-cta"> <Typography variant="h6" gutterBottom>
          Go to Secure Checkout
      </Typography></button>
        </div>
      
        </Fragment>
      
     );
}
 
export default Right;