import React, { useState, createContext, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 import { jwtDecode } from 'jwt-decode';

const MyContext = createContext();


const Authcontext = ({children}) => {
 
    const [isauth, setAuth] = useState(false);
     const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();
    const [role ,setRole] = useState();

// Function to handle login
  const login = ( token) => {
    console.log("Login function is running" ,token);

    const  roletoken =  jwtDecode(token)
    if(token){
    localStorage.setItem("token", token);
    setAuth(true);
    setRole(roletoken.role)
  console.log("this is a realtoken" ,roletoken)
  if(roletoken.role ==="client"){
    navigate('/layout/client');
  } ;

  if(roletoken.role === "professional" ){
    navigate('/layout/professional');}
  } ;
  }


  // Function to handle logout
  const logout = () => {
    setAuth(false);
    setRole(null); // Reset role on logout
    localStorage.removeItem("token");
    navigate('/login');
  };

  // useEffect(() => {
  //   const token = localStorage.getItem("token"); // Get the token from localStorage
  //   if (token) {
  //     try {
  //       const decodedToken = jwtDecode(token);
  //       // Here you could check the token expiration if needed
  //       const expirationTime = decodedToken.exp * 1000; 
  //       if (expirationTime < Date.now()) {
  //         logout(); 
  //       } else {
  //         setAuth(true); 
  //       }
  //     } catch (error) {
  //       console.error("Invalid token", error);
  //       logout(); 
  //     }
  //   }
  //   setLoading(false); 
  // }, []);

  useEffect(() => {
    const checkToken = () => {
      console.log("check funcation is running ")
      const token = localStorage.getItem("token"); // Get the token from localStorage
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const expirationTime = decodedToken.exp * 1000; // Convert exp to milliseconds
          if (expirationTime < Date.now()) {
            logout(); // Log out if the token is expired
          } else {
            setAuth(true); // Set auth to true if the token is valid
          }
        } catch (error) {
          console.error("Invalid token", error);
          logout(); // Log out on error
        }
      } else {
        setAuth(false); // No token found
      }
      setLoading(false); // Set loading to false
    };

    checkToken(); // Run once on mount

    const intervalId = setInterval(() => {
      checkToken(); // Run every 30 seconds
    }, 30000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);



  return (
    <>
      <MyContext.Provider value={{isauth , login , role }}>
         {children}
      </MyContext.Provider>
    </>
  )
}

export const useAuth = () => useContext(MyContext);


export default Authcontext





