import React from "react";

// image
import shape_one from "../assets/images/shapes/Shape_one.png"
import shape_two from "../assets/images/shapes/Shape_two.png"


const GetInTouch = () => {
    return(
        <>
            <section>
                <div className="newslatter-main py-20">
                    <div className="container">
                        <div className="bg-opacity-color py-16 mx-20 rounded-2xl relative">
                            <span className="shape-left"><img src={shape_two} className="absolute bottom-0"/></span>
                            <div className="getintouch-content text-center">
                                <p className="text-center font-bold">Get In Touch</p>
                                <div className="text-center flex justify-center">
                                    <h4 className="text-center text-5xl font-bold w-[40%] leading-tight">Let's Get Started With <span className=" text-primary-color">Our Team</span></h4>
                                </div>
                                <p className="text-center py-6">Use customer data to build great and solid product experiences that convert.</p>
                                <button className="bg-primary-color text-white py-3 px-8 rounded-full">Let’s get in touch</button>
                            </div>
                            <span className="shape-left"><img src={shape_one} className="absolute top-10 right-0"/></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetInTouch