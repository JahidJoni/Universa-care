import React from "react";
import chap from '../../images/CHAP.png'
import './Accreditation.css'


const Accreditation = () => {

    return (
        <section className="accreditation my-5 container g-0">
            <div className="row g-0">
                <div className="col-md-4 col-sm-12 text-center">
                    <img className="px-5 img-fluid " src={chap} alt="" />
                </div>
                <div className="col-md-8 col-sm-12 px-3">
                    <h4 className="accreditation-head my-3">
                        CHAP Accreditation and this line can be about this big
                    </h4>
                    <h5 className="accreditation-details my-3">
                        UniversaCare, LLC will provide the following home health care programs at flexible schedules and cost-friendly service rates.
                    </h5>
                </div>
            </div>
        </section>
    );
};

export default Accreditation;