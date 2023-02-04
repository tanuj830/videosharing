import React from "react";
import { Navigate, Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  const isAuthenticated = localStorage.getItem("isLogin");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/signin" />
      }
    />
  );
}

export default ProtectedRoute;