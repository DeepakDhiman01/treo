import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Auth/Authcontext'
import Client from './clientdashboard/Client'
import Prodashboard from './Prodash/Prodashboard'


const Layout = () => {

   const { isauth } = useAuth()
   console.log("the value of isauth in Layout", isauth)

   const navigate = useNavigate()
   return (
      <>
         {isauth ? (
            <Routes>
               <Route path='/about' element={<About />} />

               <Route path='/client' element={<Client/>} />

               <Route path='/professional' element={<Prodashboard/>}/>
            </Routes>
            
         
         ) : (
            navigate('/')
         )}
      </>
   )
}

export default Layout