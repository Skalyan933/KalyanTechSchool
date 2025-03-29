import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../UserAuthentication/AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
