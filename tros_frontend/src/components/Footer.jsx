import React, { useState } from 'react'

// logo
import footerLogo from '../assets/images/logo/Tranquility-Outreach-Support-Services-Logo.png'

// icon
import { IoLogoInstagram } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaMapMarkerAlt} from "react-icons/fa";
import { MdEmail } from "react-icons/md";





const Footer = () => {

    const [newslatter, setNewslatter] = useState({
        email:""
    })

    return (
        <>
            <footer>
                <div className='footer-main'>
                    <div className='footer-inner'>
                        <div className='footer-top border-y-[1px] border-[#000]'>
                            <div className='footer-inner py-[30px] container'>
                                <div className='grid grid-cols-4'>
                                    <div className='footer-logo col-span-1'>
                                        <img src={footerLogo} className='w-72'/>
                                    </div>
                                    <div className='newsletter col-span-3'>
                                        <div className='newsletter-inner grid grid-cols-4'>
                                            <div className='newsletter-text col-span-1'>
                                                <span className='text-3xl font-bold'>
                                                Subscribe to our newsletter
                                                </span>
                                            </div>
                                            <div className='col-span-3 content-center'>
                                                <div className='inp-sec border-[1px] p-2 rounded-full'>
                                                    <input className='w-[80%] rounded-full border-0 outline-none p-3' type="text" 
                                                    placeholder="Enter Your Email"
                                                    value={newslatter.email}
                                                    onChange={(e) => setNewslatter({...newslatter, email: e.target.value})}/>
                                                    <button className='w-[20%] bg-primary-color py-3 px-5 rounded-full text-white'>Send</button>
                                                </div>
                                            </div>
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer-middle bg-[#fff] py-[80px] container'>
                            <div className='footer-middle-inner grid grid-cols-4 gap-5'>
                                <div className='footer-block-one'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit laoreet purus, mollis interdum pulvinar accumsan senectus curabitur mus potenti, tellus netus duis</p>
                                    <ul className='social-icon flex mt-4 space-x-3'>
                                        <li>
                                            <IoLogoInstagram className='text-[28px]'/>
                                        </li>
                                        <li>
                                            <FiFacebook className='text-2xl content-center'/>
                                        </li>
                                        <li>
                                            <FaXTwitter className='text-2xl content-center'/>
                                        </li>
                                    </ul>
                                </div>
                                <div className='footer-block-one'>
                                    <span className='font-bold text-xl'>Quick Links</span>
                                    <ul className='mt-4 space-y-2'>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Our Service</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <div className='footer-block-one'>
                                <span className='font-bold text-xl'>Useful Links</span>
                                    <ul className='mt-4 space-y-2'>
                                        <li>Term & Conditions</li>
                                        <li>Privacy policy</li>
                                    </ul>
                                </div>
                                <div className='footer-block-one'>
                                    <div>
                                        <span className='font-bold text-xl'>Contact Us</span>
                                        <ul className='mt-4 space-y-4'>
                                            <li className='flex space-x-2 align-center'><MdEmail className='text-xl'/><a herf="#">info@tros.com.au</a></li>
                                            <li className='flex space-x-2 align-center'><FaPhoneAlt className='text-xl'/><a herf="#">0478 107 088</a></li>
                                            <li className='flex space-x-2 align-center'><FaMapMarkerAlt className='text-xl'/><a>Bundoora, Victoria 3083, Australia</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer-bottom-bar bg-[#CBE9F6]'>
                        <p className='text-center py-3 text-[14px]'>Copyright @Treo. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;