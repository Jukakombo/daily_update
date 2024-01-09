// PrivateRoute.jsx
import React from "react";
import PropTypes from "prop-types";
import { Route, Navigate } from "react-router-dom";
import { getCurrentUser } from "../auth";

const PrivateRoute = ({ element, allowedRole, ...rest }) => {
  const isAuthenticated = !!getCurrentUser();
  const userRole = getCurrentUser()?.role;

  if (isAuthenticated) {
    if (!allowedRole || userRole === allowedRole) {
      return <Route {...rest} element={element} />;
    } else {
      return <Navigate to="/" />;
    }
  }

  return <Navigate to="/" replace />;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
  allowedRole: PropTypes.string,
};

export default PrivateRoute;
