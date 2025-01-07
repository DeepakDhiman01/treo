import React from 'react'

// logo
import footerLogo from '../assets/images/logo/Tranquility-Outreach-Support-Services-Logo.png'

const Footer = () => {
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
                                                    <input className='w-[80%] px-3 focus:red' type="text" value="Enter Your Emails"/>
                                                    <button className='w-[20%] bg-primary-color py-2 px-5 rounded-full text-white'>Send</button>
                                                </div>
                                            </div>
                                                
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='footer-middle bg-[#fff] py-[60px] container'>
                            <div className='footer-middle-inner grid grid-cols-4'>
                                <div className='footer-block-one'>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit laoreet purus, mollis interdum pulvinar accumsan senectus curabitur mus potenti, tellus netus duis</p>
                                </div>
                                <div className='footer-block-one'>
                                    <span>Quick Links</span>
                                    <ul>
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Our Service</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                                <div className='footer-block-one'>
                                <span>Useful Links</span>
                                    <ul>
                                        <li>Term & Conditions</li>
                                        <li>Privacy policy</li>
                                    </ul>
                                </div>
                                <div className='footer-block-one'>
                                    <div>
                                        <span>Contact Us</span>
                                        <ul>
                                            <li></li>
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