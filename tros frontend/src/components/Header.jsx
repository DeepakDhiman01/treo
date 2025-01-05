import React from 'react'

// image
import logo from '../assets/images/logo/Tranquility-Outreach-Support-Services-Logo.png'

const Header = () => {
  return (
    <>
        <div className='header-main relative z-10 top-0'>
          <div className='fixed bg-[#0000000a] py-4 w-full backdrop-blur-[3px]'>
            <div className='container'>
              <div className='header-inner grid grid-cols-12'>
                <div className='logo col-span-3'>
                  <img src={logo} className='w-72'/>
                </div>
                <div className='menu col-span-6 content-center'>
                  <div className='menu-list'>
                    <ul className='flex justify-center space-x-20  text-base'>
                      <li>Home</li>
                      <li>About Us</li>
                      <li>Our Service</li>
                      <li>Contact Us</li>
                    </ul>
                  </div>
                </div>
                <div className='header-btn col-span-3 content-center'>
                  <div className='btn flex p-0'>
                      <span className='px-10 py-3 bg-primary-color rounded-full text-white'>Post Jobs</span>
                      <span className='px-10 py-3 ml-4 border-solid border-2 border-primary-color rounded-full'>Find Jobs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header
