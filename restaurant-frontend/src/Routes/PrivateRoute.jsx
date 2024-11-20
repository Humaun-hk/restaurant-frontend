import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from 'prop-types'
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  
  const { users, isloading } = useContext(AuthContext);
  const location = useLocation()
  if(isloading){
    return <span className="loading loading-bars loading-lg"></span>
  }
  if (users) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}
