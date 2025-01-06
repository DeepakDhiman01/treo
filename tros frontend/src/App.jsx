import { useState } from 'react'

// Components
import Header from './components/Header'

// pages
import HomePage from './pages/HomePage'

import './App.css'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div>
        <div className='main-container'>
          <Header/>
          <HomePage/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
