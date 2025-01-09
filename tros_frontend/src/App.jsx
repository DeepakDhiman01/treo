import { useState } from 'react'

// Components
import Header from './components/Header'

// pages
import HomePage from './pages/HomePage'
// routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'
import Layout from   './pages/Layout'
import Private from './Auth/Private';
import Authcontext from './Auth/Authcontext';
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login';


function App() {

 console.log(" code run in app.js")
  return (
    <>
      <div>
        <div className='main-container'>
          <Router>
            {/* <Header/> */}
              <Authcontext>
                <Routes>
                  {/* public Router */}
                  <Route path='/' element={ <HomePage/>} />
                  <Route path='/touch' element={ <GetInTouch/>}/>
                  <Route path='/signup' element={<Signup/>} />
                  <Route path='/login'  element={<Login/>} />
                  {/* private routes */}
                  <Route path='/layout/*'  element={<Layout/>}  />
                </Routes>
              </Authcontext>
              <Footer/>
          </Router> 
        </div>
      </div>
    </>
  )
}

export default App
