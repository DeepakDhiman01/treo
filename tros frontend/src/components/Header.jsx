import React from 'react'

const Header = () => {
  return (
    <>
        <div className='header-main relative z-10 top-0'>
          <div className='sticky top-0'>
            <div className='container'>
              <div className='header-inner grid grid-cols-12'>
                <div className='logo col-span-2'>Hello</div>
                <div className='menu col-span-8'>Hello</div>
                <div className='header-btn col-span-2'>Hello</div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header
