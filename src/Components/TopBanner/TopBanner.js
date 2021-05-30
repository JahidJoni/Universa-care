import React from 'react';
import vector from '../../images/Vector 1.png'
import './TopBanner.css'

const TopBanner = () => {
    return (
        <section>
            <div className="row top-banner">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                           <div>
                           <h1 className="banner-h1">The Future of Health <br /> Care is Home Care</h1>
                            <p className="banner-p">Over a Decade of Trusted Care.</p>
                            <button className="appointment-btn">REQUEST AN APPOINTMENT</button>
                           </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={vector} alt="" />
                </div>
            </div>
            <div className="areas">       
               <p className="mt-3">UNIVERSACARE AREAS OF COVERAGE</p>
            </div>
        </section>
    );
};

export default TopBanner;