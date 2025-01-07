import React, { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';

const MyContext = createContext();


const Authcontext = ({children}) => {
 
    const [isauth, setAuth] = useState(true);
    // const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();
    const login = (token)=>{
        setAuth(token);
        navigate('/')
    }
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