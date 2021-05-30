import React from 'react';
import feature1 from '../../images/feature1.svg'
import feature2 from '../../images/feature2.svg'
import feature3 from '../../images/feature3.svg'
import feature4 from '../../images/feature4.svg'
import feature5 from '../../images/feature5.svg'
import rightArrow from '../../images/chevron-right.svg'
import phone from '../../images/feature-phone.svg'
import './Cares.css'

const ColoredLine = () => (
    <hr
        style={{
            width: 161,
            marginTop: 40,
            marginBottom: 40,
            backgroundColor: '#FFA623',
            height: 3
        }}
    />
);

const Cares = () => {
    return (
        <section className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-4 mx-3">
                    <div>
                        <h3 className="cares-h3">Your peace of mind is <br />
                           <b> our number one priority</b> </h3>
                            <ColoredLine/>
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
                <div className="col-md-2 mx-3">
                    <div>
                        <img src={feature2} alt="" />
                        <h4 className="cares-h4 my-4">Hourly Home care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 mx-3">
                    <div>
                        <img src={feature3} alt="" />
                        <h4 className="cares-h4 my-4">Hourly Home care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
            <div className="col-md-2 mx-3">
                    <div>
                        <img src={feature4} alt="" />
                        <h4 className="cares-h4 my-4">Hourly Home care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 mx-3">
                    <div>
                        <img src={feature5} alt="" />
                        <h4 className="cares-h4 my-4">Hourly Home care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 mx-3">
                    <div>
                        <img src={feature4} alt="" />
                        <h4 className="cares-h4 my-4">Hourly Home care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 mx-3">
                    <div>
                        <img src={feature1} alt="" />
                        <h4 className="cares-h4 my-4">Hourly Home care</h4>
                        <p className="cares-p">4x higher coverage limit than traditional policies for computers and home office equipment.</p>
                        <button className="arrow-btn"><img src={rightArrow} alt="" /></button>
                    </div>
                </div>
                <div className="col-md-2 mx-5">
                    <div>
                        <img src={phone} alt="" />
                        <h4 className="cares-h4 my-4">Do you need support?</h4>
                        <p className="cares-p">We glad to help!</p>
                        <button className="contact-btn">CONTACT US</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cares;