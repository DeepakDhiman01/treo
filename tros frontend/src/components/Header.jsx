import React, { useState, useEffect } from 'react';
import { CiMenuFries } from "react-icons/ci";

// Image
import logo from '../assets/images/logo/Tranquility-Outreach-Support-Services-Logo.png';

const Header = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Only toggle visibility after scrolling more than 30px
      if (Math.abs(currentScrollPos - prevScrollPos) > 30) {
        setIsScrollingUp(prevScrollPos > currentScrollPos || currentScrollPos <= 30);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`header-main relative z-10 top-0 header ${isScrollingUp ? 'show' : 'hide'}`}>
      <div className="fixed py-4 w-full backdrop-blur-[3px]">
        <div className="container px-5">
          <div className="header-inner grid grid-cols-12 items-center">
            {/* Logo */}
            <div className="logo col-span-3">
              <img src={logo} alt="Tranquility Outreach Logo" className="w-72" />
            </div>

            {/* Navigation Menu */}
            <div className="menu col-span-6">
              <nav className="menu-list">
                <ul className="flex justify-center space-x-20 text-base">
                  <li><a href="#home" className="hover:text-primary-color">Home</a></li>
                  <li><a href="#about" className="hover:text-primary-color">About Us</a></li>
                  <li><a href="#services" className="hover:text-primary-color">Our Service</a></li>
                  <li><a href="#contact" className="hover:text-primary-color">Contact Us</a></li>
                </ul>
              </nav>
            </div>

            {/* Buttons */}
            <div className="header-btn col-span-3">
              <div className="btn flex justify-end">
                <button className="px-10 py-2 bg-primary-color rounded-full text-white">Login / Sign Up</button>
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
