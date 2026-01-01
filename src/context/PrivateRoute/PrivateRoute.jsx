import React from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const { user , isLoading} = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div className="spinner">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
        </div>;
  }

  if (user.email || user.displayName) {
    return children;
  }

  return <Navigate to="/signin" state={{ from: location }} replace />;
};

export default PrivateRoute;
