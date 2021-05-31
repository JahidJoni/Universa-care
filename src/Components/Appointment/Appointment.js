import React from "react";
import "./Appointment.css";
import arrow from "../../images/chevron-up.svg";
import care from "../../images/healthcare.svg";
import frame from '../../images/Frame 539.png'
import services from '../../images/Screenshot 2020-09-19 at 7.45 2.png'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";


const Appointment = () => {

    return (
        <section>
            <div className="responsive-appointment">
                <Splide
                    options={{
                        type: "slide",
                        perPage: 3,
                        breakpoints: {
                            640: {
                                perPage: 1,
                                gap: "2rem",
                            },
                        },
                        pagination: false,
                        gap: "1rem",
                        autoplay: true,
                        pauseOnHover: false,
                        resetProgress: false,
                        arrows: false,
                    }}
                    hasSliderWrapper
                >
                     <SplideSlide>
                         <img src={frame} alt="" />
                     </SplideSlide>
                </Splide>
            </div>
            <div className="appointment">
                <div className="row">
                    <img className="large-img" src={services} alt="" />
                </div>
                <div className="row g-0">
                    <div className="col-md-6 col-sm-12">
                        <div className="p-5 appointment-details">
                            <h1 className="text-white appointment-header my-4">
                                WE DO WHATEVER IT MAKES TO BRING YOU PEACE OF MIND
                        </h1>
                            <button className="px-4 py-3 mt-4 appointment-button bold">
                                REQUEST AN APPOINTMENT
                         </button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-2 ms-5">
                        <img className="mt-5 pt-2" src={care} alt="" srcSet="" />
                    </div>
                    <div className="up-arrow">
                        <button className="arrow-img"><img src={arrow} alt="" /></button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;