import { useState } from 'react'

// Components
import Header from './components/Header'

// pages
import HomePage from './pages/HomePage'

import './App.css'
import Footer from './components/Footer'
import GetInTouch from './components/GetInTouch'

function App() {


  return (
    <>
      <div>
        <div className='main-container'>
          <Header/>
          <HomePage/>
          <GetInTouch/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
