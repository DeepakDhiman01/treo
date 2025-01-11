import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Authcontext";
const Private = ({ children, requiredRole }) => {

  console.log("this is the value of reqired in private ", requiredRole)
  
  const { isauth, role , loading } = useAuth();
  console.log("the value of role ", role)
  if(loading) {
    console.log("please wait data is loading")
    return <div>Loading...</div>;
    }
  if (!isauth) {
    console.log("if isauth ")
    return <Navigate to="/routes/login" replace />;
  }
  // Check if the user's role matches the required role for the route
  if (requiredRole && role !== requiredRole) {
    console.log("if role")
    return <Navigate to="/routes/home" replace />;
  }

  return children;
};

export default Private;
