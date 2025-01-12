import React from 'react'
import { NavLink } from 'react-router-dom';

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

// image
import logo from "../../assets/images/logo/Tranquility-Outreach-Support-Services-Logo.png"

const Sidebar = () => {
    return(
        <>
            <div className='col-span-1'>
                <div>
                  <div className='Logo'>
                    <img src={logo} className='w-5/6 my-4'/>
                  </div>
                  <div className='side-bar-links py-3'>
                    <ul>
                      <span className='text-sm font-bold'>Main Menu</span>
                      <li>
                        <div className=''>
                        <NavLink to="/professional"
                          style={({ isActive }) => ({
                            backgroundColor: isActive ? "#E1F4FC" : "transparent",
                            padding: "8px 12px",
                            border:  isActive ? "1px solid #E5E5E5" : "1px solid transparent",
                            textDecoration: "none"
                          })}
                        className="flex items-center py-2 px-3 space-x-2 rounded-md" > 
                        <LuLayoutDashboard />Dashboard
                        </NavLink>
                        </div>
                      </li>
                      <li className='my-1'>
                        <div className=''>
                        <NavLink to="clander"
                          style={({ isActive }) => ({
                            backgroundColor: isActive ? "#E1F4FC" : "transparent",
                            padding: "8px 12px",
                            border:  isActive ? "1px solid #E5E5E5" : "1px solid transparent",
                            textDecoration: "none"
                          })}
                        className="flex items-center py-2 px-3 space-x-2 rounded-md" > <HiOutlineCalendarDateRange />Calendar
                        </NavLink>
                          </div>
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
        </>
    )
}

export default Sidebar