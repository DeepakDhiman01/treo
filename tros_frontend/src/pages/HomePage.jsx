import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


// image
import heroImageOne from '../assets/images/young-caregiver-helping-senior-woman.png'
import heroImageTwo from '../assets/images/medium-shot-doctor-helping-woman.png'
import thumb from '../assets/images/shapes/thumb.png'

// svg
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlinePersonalInjury } from "react-icons/md";


function homepage() {

  const textMove = useRef();

  useGSAP(()=>{
    gsap.from('.textAnim',{
      y:200,
      opacity:0,
      duration:1,
      stagger:0.2
    })
  },{scope:'.hero-section'})

  return (
    <>
      <section>
        <div className='hero-section h-[800px] content-center bg-main-image bg-cover bg-center'>
            <div className='container'>
              <div className='hero-main grid grid-cols-2'>
                <div className='hero-left content-center px-24'>
                  <h1 ref={textMove} className='textAnim font-bold text-[60px]'>Take Care of <span className='hero-p bg-clip-text bg-gradient-to-r from-[#75C4E7] to-[#087ec3]'>your health </span>in time</h1>
                  <p className='pt-5 textAnim'>Lorem ipsum dolor sit amet consectetur adipiscing elit et, 
                  venenatis platea lacus cubilia suscipit sodales sollicitudin, egetLorem ipsum dolor sit amet consectetur adipiscing elit et, venenatis platea lacus cubilia suscipit sodales sollicitudin, eget</p>
                  <div className='hero-btn'>
                    <div className='btn flex p-0 mt-5'>
                      <span className='px-10 py-3 bg-primary-color rounded-full text-white'>Post Jobs</span>
                      <span className='px-10 py-3 ml-4 border-solid border-2 border-primary-color rounded-full'>Find Jobs</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='image-container relative'>
                    <img src={heroImageOne} className=''/>
                    <img src={heroImageTwo} className='absolute bottom-0 right-16 mb-[-50px] w-[350px] '/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
      <section>
        <div className="about-sec py-20">
          <div className='container mx-auto px-31'>
            <div className='about-inner grid grid-cols-10'>
              <div className='about-info col-span-3'>
                <div className='about-info-inner'>
                  <div><img src={thumb}/></div>
                  <div className='about-info-text'>
                    <span className='font-extrabold text-7xl text-stroke-sm text-white'>250+</span>
                  </div>
                  <p className='font-medium'>Happy <br/>Clients of<br/> our Services</p>
                </div>
              </div>
              <div className='main-content col-span-7'>
                <div className='text-right'>
                  <span className='font-bold'>About Us</span>
                  <h2 className='text-6xl font-semibold'>Who <span className='hero-p bg-clip-text bg-gradient-to-r from-[#75C4E7] to-[#74A4ED]'>We Are</span></h2>
                  <p className='mt-4'>“ It’s not hard to find someone to help you with tasks. It’s finding someone who you can trust and depend on that gets tricky. That’s why, at Tranquility Outreach Support Services recruiting the right people is at the heart of our business. “</p>
                  <span className='bg-primary-color text-white py-3 mt-4 px-10 rounded-full inline-block'>Let's Talk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='service-section bg-[#E1F4FC]'>
          <div className='container'>
            <div className='service-main py-14'>
              <div className='service-top grid grid-cols-6'>
                <div className='col-span-2'>
                  <span className='font-bold text-black'>Lourim Ipsum</span>
                  <h3 className='text-6xl font-semibold'>Our <span className='hero-p bg-clip-text bg-gradient-to-r from-[#75C4E7] to-[#74A4ED]'>Service</span></h3>
                </div>
                <div className='col-span-4 text-right content-end'>
                  <p className='text-xl'>At Tranquility Outreach Support Services we've got all your NDIS covered! Whether you need help with;</p>
                </div>
              </div>
              <div className='my-12'>
                <div className='grid grid-cols-4'>
                  <div className='col-span-1'>
                    <div className='bg-[#fff] m-3 p-9 rounded-2xl border-[#E5E5E5] border-1'>
                      <HiOutlineUserGroup className='text-[50px] text-[#75C4E7]'/>
                      <h4 className='my-3 font-bold text-xl'>Community Access</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo natoque, habitant dictum cras mattis et lobortis</p>
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <div className='bg-[#fff] m-3 p-9 rounded-2xl border-[#E5E5E5] border-1'>
                      <MdOutlinePersonalInjury className='text-[50px] text-[#75C4E7]'/>
                      <h4 className='my-3 font-bold text-xl'>Personal Care</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo natoque, habitant dictum cras mattis et lobortis</p>
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <div className='bg-[#fff] m-3 p-9 rounded-2xl border-[#E5E5E5] border-1'>
                      <HiOutlineUserGroup className='text-[50px] text-[#75C4E7]'/>
                      <h4 className='my-3 font-bold text-xl'>In-Home Supports</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo natoque, habitant dictum cras mattis et lobortis</p>
                    </div>
                  </div>
                  <div className='col-span-1'>
                    <div className='bg-[#fff] m-3 p-9 rounded-2xl border-[#E5E5E5] border-1'>
                      <HiOutlineUserGroup className='text-[50px] text-[#75C4E7]'/>
                      <h4 className='my-3 font-bold text-xl'>Transportation</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit leo natoque, habitant dictum cras mattis et lobortis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='team-section py-20'>
          <div className='container'>
            <div className='team-heading'>
              <h3 className='text-6xl font-semibold'>Meet Our <span className='hero-p bg-clip-text bg-gradient-to-r from-[#75C4E7] to-[#74A4ED]'>Team</span></h3>
            </div>
            <div className='team-section-inner grid grid-cols-3'>
              <div className='team-card col-span-1'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default homepage