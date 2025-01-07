import React from 'react'

// image
import heroImageOne from '../assets/images/young-caregiver-helping-senior-woman.png'
import heroImageTwo from '../assets/images/medium-shot-doctor-helping-woman.png'
import thumb from '../assets/images/shapes/thumb.png'

function homepage() {
  return (
    <>
      <section>
        <div className='hero-section h-[800px] content-center bg-main-image bg-cover bg-center	pt-[70px]'>
            <div className='container'>
              <div className='hero-main grid grid-cols-2'>
                <div className='hero-left content-center px-24'>
                  <h1 className='font-bold text-[60px]'>Take Care of <span className='hero-p bg-clip-text bg-gradient-to-r from-[#75C4E7] to-[#0410EF]'>your health </span>in time</h1>
                  <p className='pt-5'>Lorem ipsum dolor sit amet consectetur adipiscing elit et, 
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
                  <h2 className='text-6xl font-semibold'>Who <span className='hero-p bg-clip-text bg-gradient-to-r from-[#75C4E7] to-[#0410EF]'>We Are</span></h2>
                  <p className='mt-4'>“ It’s not hard to find someone to help you with tasks. It’s finding someone who you can trust and depend on that gets tricky. That’s why, at Tranquility Outreach Support Services recruiting the right people is at the heart of our business. “</p>
                  <span className='bg-primary-color text-white py-3 mt-4 px-10 rounded-full inline-block'>Let's Talk</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default homepage