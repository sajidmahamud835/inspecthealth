import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div className="spinner">
      spin spin spin
    </div>;
  }

  if (user.email || user.displayName) {
    return children;
  }

  return <Navigate to="/post" state={{ from: location }} replace />;
};

export default PrivateRoute;
