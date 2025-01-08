import React, { useState, useEffect } from 'react';
import { CiMenuFries } from "react-icons/ci";

// Image
import logo from '../assets/images/logo/Tranquility-Outreach-Support-Services-Logo.png';
import { Link  } from 'react-router-dom';

const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isScrolledDown, setIsScrolledDown] = useState(false); // State to track scroll direction

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Only toggle visibility after scrolling more than 30px
      if (Math.abs(currentScrollPos - prevScrollPos) > 30) {
        setIsScrollingUp(prevScrollPos > currentScrollPos || currentScrollPos <= 30);
        setPrevScrollPos(currentScrollPos);
      }

      // Track if the page has been scrolled down more than 30px
      if (currentScrollPos > 30) {
        setIsScrolledDown(true);  // Scrolled down more than 30px
      } else {
        setIsScrolledDown(false); // Back to top
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`header-main fixed w-full z-10 top-0 header ${isScrollingUp ? 'show' : 'hide'} ${isScrolledDown ? 'scrolled-down' : ''}`}>
      <div className="py-4 w-full backdrop-blur-[3px]">
        <div className="container px-5">
          <div className="header-inner grid grid-cols-12 items-center">
            <div className="logo col-span-3">
              <img src={logo} alt="Tranquility Outreach Logo" className="w-72" />
            </div>
            <div className="menu col-span-6">
              <nav className="menu-list">
                <ul className="flex justify-center space-x-20 text-base">
                  <li><Link   to={'/'} className="hover:text-primary-color">Home</Link></li>
                  <li><Link to={'/layout/about'}     className="hover:text-primary-color">About Us</Link></li>
                  <li><Link    className="hover:text-primary-color">Our Service</Link></li>
                  <li><Link    className="hover:text-primary-color">Contact Us</Link></li>
                </ul>
              </nav>
            </div>
            <div className="header-btn col-span-3">
              <div className="btn flex justify-end">
                <button className="px-8 py-2 bg-primary-color rounded-full text-white">Login / Sign Up</button>
                <button className="p-3 ml-4">
                  <CiMenuFries className="text-3xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
