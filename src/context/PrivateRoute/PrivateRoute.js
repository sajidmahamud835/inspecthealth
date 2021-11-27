import React from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";


const PrivateRoute = ({ children, ...rest }) => {
  const { user , isLoading} = useAuth();
  if (isLoading) {
    return <div className="spinner">
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="primary" />
        </div>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
      (user.email || user.displayName) ? (
        
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
