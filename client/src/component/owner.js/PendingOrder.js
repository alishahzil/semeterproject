import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';




const Pendingorder = ({auth}) => {
      
    if(!auth.isAuthenticated){
        return <Redirect to="/owner/login" />;
    }else{
    return ( 
        <div>
            <h1>Pending Order</h1>
        </div>
     );
    }
}
const mapStateTopProps = state=>({
    auth: state.Auth
})

export default connect(mapStateTopProps)(Pendingorder);
 