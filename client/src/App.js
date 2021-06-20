
import './App.css';
import Appbar from './component/Appbar';
import React,{Fragment} from 'react';
import Main from './component/main';
import Footer from './component/footer';
import Product from './component/product';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Checkout from './component/checkout/Checkout';
import BottomContent from './component/searchresult/mergall';
import Contactus from './component/Contactus';
import Dashboard from './component/owner.js/completeorder';
import Ownerlogin from './component/owner.js/login';
import YourProducts from './component/yourproducts/yourproduct';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
      <Fragment>
      <Appbar />
      <Switch>
        <Route exact path ="/" component={Main} />
        <Route exact path = '/product/:id' component={Product}  />
        <Route exact path = '/checkout' component={Checkout}  />
        <Route exact path = '/search/:id' component={BottomContent}  />
        <Route exact path = '/contactus' component={Contactus}  />
        <Route  path = "/owner/dashboard" component={Dashboard}  />
        <Route exact path = "/owner/login" component={Ownerlogin}  />
        <Route exact path = "/yourproducts" component={YourProducts}  />
      </Switch>
      <Footer/>
      </Fragment>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
// <Route exact path = '/search/:id' component={BottomContent}  />