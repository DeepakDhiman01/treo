import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './Authcontext';
const Private = ({children}) => {
 

const { isauth } = useAuth();
 
//  if (loading) {
//    return <div>Loading...</div>; // Show a loading message or spinner
//  }
    console.log("this is a privatge")
    return isauth ? children : <Navigate to="/login" replace  />;
}

export default Private