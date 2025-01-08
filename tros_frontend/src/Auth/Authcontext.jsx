import React, { useState, createContext, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import { jwtDecode } from 'jwt-decode';

const MyContext = createContext();


const Authcontext = ({children}) => {
 
    const [isauth, setAuth] = useState(false);
     const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();

// Function to handle login
  const login = (token) => {
    console.log("Login function is running" ,token);
    if(token){
    localStorage.setItem("token", token);
    setAuth(true);}
  if(token)
    navigate('/');
  };

  // Function to handle logout
  const logout = () => {
    setAuth(false);
    localStorage.removeItem("token");
    navigate('/login');
  };

  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from localStorage
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        // Here you could check the token expiration if needed
        const expirationTime = decodedToken.exp * 1000; // JWT token expiration time
        if (expirationTime < Date.now()) {
          logout(); // Log out if the token is expired
        } else {
          setAuth(true); // Set isauth to true if the token is valid
        }
      } catch (error) {
        console.error("Invalid token", error);
        logout(); // Log out if the token is invalid
      }
    }
    setLoading(false); // Set loading to false after the check
  }, []);

  return (
    <>
      <MyContext.Provider value={{isauth , login }}>
         {children}
      </MyContext.Provider>
    </>
  )
}

export const useAuth = () => useContext(MyContext);


export default Authcontext





