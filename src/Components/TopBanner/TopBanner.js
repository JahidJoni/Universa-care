import React from 'react';
import vector from '../../images/Vector 1.png'
import vector2 from '../../images/Vector 2.png'
import './TopBanner.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const TopBanner = () => {
    return (
        <section>
            <div className="row top-banner">
                <div className="col-md-6 d-flex justify-content-center align-items-center text-center">
                           <div>
                           <h1 className="banner-h1 my-1">The Future of Health <br /> Care is Home Care</h1>
                            <p className="banner-p">Over a Decade of Trusted Care.</p>
                            <button className="appointment-btn mt-4 mb-5">REQUEST AN APPOINTMENT</button>
                           </div>
                </div>
                <div className="col-md-6">
                    <img className="top-img img-fluid" src={vector} alt="" />
                    <img className="responsive-img img-fluid" src={vector2} alt="" />
                </div>
            </div>
            <div className="areas">       
               <p className="mt-3"> <FontAwesomeIcon className="me-2" icon={faMapMarkerAlt} /> UNIVERSACARE AREAS OF COVERAGE</p>
            </div>
        </section>
    );
};

export default TopBanner;