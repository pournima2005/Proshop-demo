import {Outlet,Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';


const AdminRoute = () => {
    
    const {userInfo}=useSelector(/** @param {any} state */  (state)=>state.auth);


  return userInfo && userInfo.isAdmin ? <Outlet/>:<Navigate to='/login' />

}

export default AdminRoute;