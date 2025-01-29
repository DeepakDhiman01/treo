import React from 'react'
import {  Outlet } from 'react-router-dom';

// icon


// image
import Sidebar from '../../components/prodashboard/Sidebar';



const Prodashboard = () => {
  return (
    <>
      <div className='bg-[#fcfbfc]'>
        <div className='container'>
          <div>
            <div></div>
            <div className='grid grid-cols-6'>
              <Sidebar/>
              <div className='sideBar col-span-4'>
                <div className='pro-main'>
                  <div className='proma-inner'>
                    <div className='top-bar'></div>
                    <div className='middle-container py-5 px-5'>
                      <Outlet/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prodashboard