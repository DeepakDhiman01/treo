import React from 'react'

// icon
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { CgWorkAlt } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { TbMessageCircle, TbFileInvoice } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
import { PiGearSix } from "react-icons/pi";
import { MdOutlineLiveHelp } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";




const Prodashboard = () => {
  return (
    <>
      <div>
        <div className='container'>
          <div>
            <div></div>
            <div className='grid grid-cols-6'>
              <div className='sideBarTop col-span-1'>
                <div>
                  <div className='Logo'>Logo</div>
                  <div className='side-bar-links py-3'>
                    <ul>
                      <span className='text-sm font-bold'>Main Menu</span>
                      <li>
                        <div className='flex items-center py-2 px-3 rounded-md space-x-2 border-[#E5E5E5] border-1'><LuLayoutDashboard /> <a>Dashboard</a></div>
                      </li>
                      <li className='my-1'>
                        <div className='flex items-center py-2 px-3 space-x-2'><HiOutlineCalendarDateRange />
                        <a>Calendar</a></div>
                      </li>
                      <li className='my-1'>
                        <div className='flex items-center py-2 px-3 space-x-2'><CgWorkAlt /><a>Jobs</a></div>
                      </li>
                      <li className='my-1'>
                        <div className='flex items-center py-2 px-3 space-x-2'><FiUsers /> <a>Manage Clients</a></div>
                      </li>
                      <li className='my-1'>
                        <div className='flex items-center py-2 px-3 space-x-2'><TbMessageCircle /> <a>Inbox</a></div>
                      </li>
                      <li className='my-1'>
                        <div className='flex items-center py-2 px-3 space-x-2'><TbFileInvoice /> <a>Invoice</a></div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='sideBarMiddle col-span-1'>
                  <ul>
                    <span className='text-sm font-bold'>Accounts</span>
                      <li className='my-1'>
                          <div className='flex items-center py-2 px-3 space-x-2'><FaRegUser /> <a>Profile</a></div>
                      </li>
                      <li className='my-1'>
                          <div className='flex items-center py-2 px-3 space-x-2'><PiGearSix /> <a>Setting</a></div>
                      </li>
                      <li className='my-1'>
                          <div className='flex items-center py-2 px-3 space-x-2'><MdOutlineLiveHelp /> <a>Help</a></div>
                      </li>
                      <li className='my-1'>
                          <div className='flex items-center py-2 px-3 space-x-2'><VscFeedback /> <a>Feedbacks</a></div>
                      </li>
                  </ul>
                </div>
              </div>
              <div className='sideBar col-span-4'>Hello</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Prodashboard