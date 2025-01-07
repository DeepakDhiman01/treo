import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Auth/Authcontext'


const Layout = () => {

   const { isauth } = useAuth()
   console.log("the value of isauth in Layout", isauth)

   const navigate = useNavigate()
   return (
      <>
         {isauth ? (
            <Routes>
               <Route path='/about' element={<About />} />
            </Routes>) : (
            navigate('/')
         )}
      </>
   )
}

export default Layout