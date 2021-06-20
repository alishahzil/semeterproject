import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Appbar from './appbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Uploadcard from './uploadCard';
import Ordercompleted from './Ordercompleted';
import PendingOrder from './PendingOrder';

const CompletedOrder = ({auth}) => {
    
    if(!auth.isAuthenticated){
        return <Redirect to="/owner/login" />;
    }else{
    return ( 
        <div>
            <Appbar />
            <Route path="/owner/dashboard/pendingorder" component={PendingOrder}></Route>
            <Route path="/owner/dashboard/cards" component={Uploadcard}></Route>
            <Route path="/owner/dashboard/ordercompleted" component={Ordercompleted}></Route>
        </div>
     );
    }
}

const mapStateTopProps = state=>({
    auth: state.Auth
})

export default connect(mapStateTopProps)(CompletedOrder);