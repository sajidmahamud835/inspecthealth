import React from "react";
import {
  Route,
  Redirect,
} from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div className="spinner">
      spin spin spin
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
              pathname: "/post",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
