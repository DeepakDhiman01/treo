import { useState } from 'react'

// Components
import Header from './components/Header'

// pages
import HomePage from './pages/HomePage'

import './App.css'

function App() {


  return (
    <>
      <div>
        <div className='main-container'>
          <Header/>
          <HomePage/>
        </div>
      </div>
    </>
  )
}

export default App
