import {Outlet,Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';


const PrivateRoute = () => {
    const {userInfo}=useSelector(/** @param {any} state */(state)=>state.auth);


  return userInfo ? <Outlet/>:<Navigate to='/login' />

}

export default PrivateRoute;