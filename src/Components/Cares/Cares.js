import React from 'react';
import feature1 from '../../images/feature1.svg'
import feature2 from '../../images/feature2.svg'
import feature3 from '../../images/feature3.svg'
import feature4 from '../../images/feature4.svg'
import feature5 from '../../images/feature5.svg'
import rightArrow from '../../images/chevron-right.svg'
import phone from '../../images/feature-phone.svg'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
import './Cares.css'


const Cares = () => {

    const cares = [
        {
            Title: "Hourly Home Care",
            image: feature1,
            details: "4x higher coverage limit than traditional policies for computers and home office equipment."
        },
        {
            Title: "Personal Care",
            image: feature2,
            details: "4x higher coverage limit than traditional policies for computers and home office equipment."
        },
        {
            Title: "Private Nursing",
            image: feature3,
            details: "4x higher coverage limit than traditional policies for computers and home office equipment."
        },
        {
            Title: "Respite Care",
            image: feature4,
            details: "4x higher coverage limit than traditional policies for computers and home office equipment."
        },
        {
            Title: "Life-in Aid",
            image: feature5,
            details: "4x higher coverage limit than traditional policies for computers and home office equipment."
        },
        {
            Title: "Memory Care",
            image: feature4,
            details: "4x higher coverage limit than traditional policies for computers and home office equipment."
        },
        {
            Title: "Memory Care",
            image: feature1,
            details: "4x higher coverage limit than traditional policies for computers and home office equipment."
        },
    ];

    return (
        <section className="mt-2">
            <div className="responsive-cares row g-0">
                <div className="col-md-4 text-color mt-5 col-sm-12 ">
                    <div className="ps-5">
                        <h2>
                            Your peace of mind is <br />
                            <b> our number one priority.</b>
                        </h2>
                        <hr className="line"/>
                        <p className="h5">
                            UniversaCare offers a range of services for in-home care. We are
                            your partners in care, and work with you to come up with a plan of action.{" "}
                        </p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <Splide
                        options={{
                            type: "slide",
                            perPage: 1,
                            pagination: false,
                            gap: "1rem",
                            autoplay: true,
                            pauseOnHover: false,
                            resetProgress: false,
                            arrows: false,
                        }}
                        hasSliderWrapper
                    >
                        {
                        cares.map((item) => (
                            <SplideSlide key={item.Title} className="px-2">
                                <div className="border-end border-start p-5">
                                    <div className="text-center">
                                        <img src={item.image} alt="img1" />
                                    

                                    <p className="h3 py-3 bold">{item.Title}</p>
                                    <p className="px-1">{item.details}</p>
                                    <button className="arrow-btn2"><img src={rightArrow} alt="" /></button>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))
                        }
                    </Splide>
                </div>
                <div className="col-md-3 col-sm-12 py-3 text-center">
                    <img className="img-fluid " src={phone} alt=""/>
                    <h2>Do you need support?</h2>
                    <h5 className="py-2">We glad to help!</h5>
                    <button className="contact-btn py-2 px-4">CONTACT US</button>
                </div>
            </div>

            <div className="cares container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div>
                        <h3 className="cares-h3 mb-5">Your peace of mind is <br />
                           <b> our number one priority</b> </h3>
                           <hr className="line mb-5"/>
                            <p className="intro">UniversaCare offers a range of services for in-home care.  We are your partners in care, and work with you to come up with a plan of action. </p>
                    </div>
                </div>
                <div className="col-md-2 mx-5">
                    <div>
                        <img src={feature1} alt="" />
                        <h4 className="cares-h4 my-4">Hourly Home care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 left-shadow ms-1">
                    <div className="ms-2">
                        <img src={feature2} alt="" />
                        <h4 className="cares-h4 my-4">Personal <br /> Care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 left-shadow ms-5">
                    <div className="ms-2">
                        <img src={feature3} alt="" />
                        <h4 className="cares-h4 my-4">Private <br /> Nursing</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
            <div className="col-md-2 ms-3">
                    <div> 
                        <img src={feature4} alt="" />
                        <h4 className="cares-h4 my-4">Respite Care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 left-shadow ms-3">
                    <div className="ms-2">
                        <img src={feature5} alt="" />
                        <h4 className="cares-h4 my-4">Life-in Aid</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 left-shadow ms-4">
                    <div className="ms-2">
                        <img src={feature4} alt="" />
                        <h4 className="cares-h4 my-4">Memory Care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 ms-5 left-shadow">
                    <div className="ms-2">
                        <img src={feature1} alt="" />
                        <h4 className="cares-h4 my-4">Memory Care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 ms-5 left-shadow">
                    <div className="ms-4">
                        <img src={phone} alt="" />
                        <h4 className="cares-h4 my-4">Do you need support?</h4>
                        <p className="cares-p">We glad to help!</p>
                        <button className="contact-btn">CONTACT US</button>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Cares;