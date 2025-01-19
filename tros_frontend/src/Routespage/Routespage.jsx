import { useState } from 'react'

// Components
import Header from '../components/Header'

// pages
import HomePage from '../pages/HomePage'
// routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Footer from '../components/Footer'
import GetInTouch from '../components/GetInTouch'
// import Layout from   '../pages/Layout'
// import Private from './Auth/Private';
import Authcontext from '../Auth/Authcontext';
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login';
import Private from '../Auth/Private';
import Prodashboard from '../pages/Prodash/Prodashboard';
import About from '../pages/About'
import Jobpost from '../pages/Jobpost/Jobpost'
import Client from '../pages/clientdashboard/Client'
import Overview from '../pages/Prodash/proMainPages/Overview'
import Clander from '../pages/Prodash/proMainPages/Calendar'
import Jobs from '../pages/Prodash/proMainPages/Jobs'




const Routespage = () => {

  return (
   <>
        {/* <Header/> */}
          <Authcontext>
            <Routes>
              {/* public Router */}
              <Route index element={ <HomePage/>} />
            
              <Route path='/touch' element={ <GetInTouch/>}/>
              <Route path='/signup' element={<Signup/>} />
              <Route path='/login'  element={<Login/>} />
              <Route path='/professional'  element={<Prodashboard/>} >
                <Route index element={<Overview/>} />
                <Route path='clander' element={<Clander/>} />
                <Route path='jobs' element={<Jobs/>} />
                
              </Route>
              {/* private routes */}
              {/* <Route path='/layout/*'  element={ <Private> <Layout/> </Private>}  /> */}
              <Route path='/about' element={<About />} />
               <Route path='/client' element={ <Private requiredRole="client" > <Client/> </Private>} />
               {/* <Route path='/professional' element={ <Private  requiredRole="professional" > <Prodashboard/></Private>  }/> */}
               <Route path='/jobpost'  element={ <Private requiredRole="client"><Jobpost/></Private>}/>
       

            </Routes>
          </Authcontext>
        {/* <Footer/> */}
       


   </>
  )
}

export default Routespage