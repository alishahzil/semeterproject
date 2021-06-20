import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import Merge from './upload and display/Mergeall';

const Uploadcard = ({auth}) => {
      
    if(!auth.isAuthenticated){
        return <Redirect to="/owner/login" />;
    }else{
    return ( 
        <div>
           
            <Merge />

        </div>
     );
    }
}
const mapStateTopProps = state=>({
    auth: state.Auth
})

export default connect(mapStateTopProps)(Uploadcard);
 
