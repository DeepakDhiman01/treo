import { useState } from 'react'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'


import Authcontext from './Auth/Authcontext';
import Routespage from './Routespage/Routespage';



function App() {

 console.log(" code run in app.js")
  return (
    <>
      <Router>
        {/* <Header/> */}
          <Authcontext>
            <Routes>
              
              <Route path='/*' element={<Routespage/> } />
            </Routes>
          </Authcontext>
        {/* <Footer/> */}
      </Router> 
    </>
  )
}

export default App
