import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Auth/Authcontext'
import Client from './clientdashboard/Client'
import Prodashboard from './Prodash/Prodashboard'
import Private from '../Auth/Private'
import Jobpost from './Jobpost/Jobpost'


const Layout = () => {

   const { isauth } = useAuth()
   console.log("the value of isauth in Layout", isauth)

   const navigate = useNavigate()
   return (
      <>
         {isauth ? (
            <Routes>
               <Route path='/about' element={<About />} />
               <Route path='/client' element={ <Private requiredRole="client" > <Client/> </Private>} />
               <Route path='/professional' element={ <Private  requiredRole="professional" > <Prodashboard/></Private>  }/>
               <Route path='/jobpost'  element={ <Private requiredRole="client"> <Jobpost/>  </Private> } />
            </Routes>
         ) : (
            navigate('/')
         )}
      </>
   )
}

export default Layout