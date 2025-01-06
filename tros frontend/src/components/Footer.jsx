import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer-main'>
                    <div className='footer-inner container'>
                        <div className='footer-top'></div>
                        <div className='footer-middle bg-[#fff]'>
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