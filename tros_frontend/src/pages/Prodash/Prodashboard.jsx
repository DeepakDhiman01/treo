import React from 'react'
import {  Outlet, NavLink } from 'react-router-dom';

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
                    <div className='middle-container'>
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