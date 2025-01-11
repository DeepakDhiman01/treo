import { useState } from 'react'

// Components
// import Header from './components/Header'

// pages
// import HomePage from './pages/HomePage'
// routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

// import Footer from './components/Footer'
// import GetInTouch from './components/GetInTouch'
// import Layout from   './pages/Layout'
// import Private from './Auth/Private';
import Authcontext from './Auth/Authcontext';
import Routespage from './Routespage/Routespage';
// import Signup from './pages/Signup/Signup'
// import Login from './pages/Login/Login';
// import Private from './Auth/Private';
// import Prodashboard from './pages/Prodash/Prodashboard';


function App() {

 console.log(" code run in app.js")
  return (
    <>
      <Router>
        {/* <Header/> */}
          <Authcontext>
            <Routes>
              {/* public Router */} 
            {/* <Route path='/' element={ <HomePage/>} />
              <Route path='/touch' element={ <GetInTouch/>}/>
              <Route path='/signup' element={<Signup/>} />
              <Route path='/login'  element={<Login/>} />
              <Route path='/professional'  element={<Prodashboard/>} /> */}

              {/* private routes */}
              {/* <Route path='/layout/*'  element={ <Private> <Layout/> </Private>}  /> */}

              <Route path='/routes/*' element={<Routespage/> } />
            </Routes>
          </Authcontext>
        {/* <Footer/> */}
      </Router> 
    </>
  )
}

export default App
