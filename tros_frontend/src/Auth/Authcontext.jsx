import React, { useState, createContext, useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//  import { jwtDecode } from 'jwt-decode';
import {jwtDecode} from 'jwt-decode';

const MyContext = createContext();

const Authcontext = ({children}) => {
 
  const [isauth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  const [role ,setRole] = useState();

// Function to handle login
  // const login = ( token) => {
    

  //   const  roletoken =   jwtDecode(token)
  //   console.log("Login function is running" ,roletoken);
  //   if(token){
  //   localStorage.setItem("token", token);
  //   setAuth(true);
  //   setRole(roletoken.role)
  
  // if(roletoken.role ==="client"){
  //   console.log("code is runing in client role")
  //   navigate('/layout/client');
  // } ;

  // else if(roletoken.role === "professional" ){
  //   console.log("the codde is runing on a professinal ")
  //   navigate('/layout/professional');}
  // } ;
  // }


  // Function to handle logout
 
  const login = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      localStorage.setItem("token", token);
      setAuth(true);
      setRole(decodedToken.role);

      // Navigate based on role
      if (decodedToken.role === "client") {
        navigate('/layout/client');
      } else if (decodedToken.role === "professional") {
        navigate('/layout/professional');
      }
    } catch (error) {
      console.error("Invalid token", error);
    }
  };



  const logout = () => {
    setAuth(false);
    setRole(null); // Reset role on logout
    localStorage.removeItem("token");
    navigate('/login');
  };

  
  

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
            setAuth(true);
            setRole(decodedToken.role);
              // console.log("the value of role in else" , role) // Set auth to true if the token is valid
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
      <MyContext.Provider value={{isauth , login , role ,loading }}>
         {children}
      </MyContext.Provider>
    </>
  )
}

export const useAuth = () => useContext(MyContext);


export default Authcontext