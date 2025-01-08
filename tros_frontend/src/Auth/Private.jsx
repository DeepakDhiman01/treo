import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Authcontext";
const Private = ({ children, requiredRole }) => {
  const { isauth, role } = useAuth();
  if (!isauth) {
    return <Navigate to="/login" replace />;
  }
  // Check if the user's role matches the required role for the route
  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Private;
