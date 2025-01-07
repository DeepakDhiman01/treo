import React, { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';

const MyContext = createContext();


const Authcontext = ({children}) => {
 
    const [isauth, setAuth] = useState(true);
    // const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();
    const login = (token)=>{

      console.log("login funcation is running")
        setAuth(token);
        navigate('/')
    }
<<<<<<< HEAD

    const logout = ()=>{
       console.log("logout funcation is running")
      setAuth(false);
      navigate('/')
    }




=======
>>>>>>> fd6ef02679615cd0180cbc15050f89ed9ffb4720
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