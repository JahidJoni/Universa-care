import React from "react";
import "./Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";


const Reviews = () => {

    const reviews = [
        {
            Name: "Alvin Stanley",
            Review: "Great company to work for! This organization cares for its team of caregivers, office employees, and clients. There is always someone available to pick up the phone when you need help.",
        },
        {
            Name: "Alvin Stanley",
            Review: "Great company to work for! This organization cares for its team of caregivers, office employees, and clients.",
        },
        {
            Name: "Alvin Stanley",
            Review: "Awesome!",
        },
    ];

    return (
        <section className="review py-5">
            <div className="row g-0">
                <div className="col-md-3 col-sm-12 d-flex flex-column justify-content-center">
                    <div className="ms-5 py-5">
                        <h1> <b>5.0</b> </h1>
                        <div>
                            <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
                            <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
                            <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
                            <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
                            <FontAwesomeIcon className="me-2 text-warning" icon={faStar} />
                        </div>
                        <p className='review-p my-5'>
                            2,054 verified customers reviews by{" "}
                            <span className="bold">Google</span>.
                        </p>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row g-0">
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
                            {
                            reviews.map((review) => (
                                <SplideSlide
                                    className="col-md-4 col-sm-8 shadow-sm bg-white px-2"
                                    key={review.Review}
                                >
                                    <div className="m-3">
                                        <h3 className="review-p my-3 bold">{review.Name}</h3>
                                        <div>
                                            <FontAwesomeIcon
                                                className="me-2 text-warning"
                                                icon={faStar}
                                            />
                                            <FontAwesomeIcon
                                                className="me-2 text-warning"
                                                icon={faStar}
                                            />
                                            <FontAwesomeIcon
                                                className="me-2 text-warning"
                                                icon={faStar}
                                            />
                                            <FontAwesomeIcon
                                                className="me-2 text-warning"
                                                icon={faStar}
                                            />
                                            <FontAwesomeIcon
                                                className="me-2 text-warning"
                                                icon={faStar}
                                            />
                                        </div>
                                        <p className="p-2 review-text">{review.Review}</p>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                    <div className="col-md-3 ms-5">
                        <button className="btn review-btn">
                             SEE ALL REVIEWS
                            <FontAwesomeIcon className="ms-1" icon={faArrowRight} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;