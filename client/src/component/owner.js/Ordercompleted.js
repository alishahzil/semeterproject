import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';




const Ordercompleted = ({auth}) => {
      
    if(!auth.isAuthenticated){
        return <Redirect to="/owner/login" />;
    }else{
    return ( 
        <div>
            <h1>Order Completed</h1>
        </div>
     );
    }
}
const mapStateTopProps = state=>({
    auth: state.Auth
})

export default connect(mapStateTopProps)(Ordercompleted);
 
