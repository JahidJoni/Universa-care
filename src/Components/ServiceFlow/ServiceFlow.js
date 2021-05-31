import React from 'react';
import './ServiceFlow.css'
import careviger1 from '../../images/Careviger1.svg'
import careviger2 from '../../images/Careviger2.svg'
import careviger3 from '../../images/Careviger3.svg'
import careviger4 from '../../images/Careviger4.svg'
import vector4 from '../../images/Vector 4.png'
import vector5 from '../../images/Vector 5.png'

const ServiceFlow = () => {

    const flowData = [
        {
            id: 1,
            image: careviger1,
            title: " 1. Initial Consultation ",
            vector: vector4,
            style: "vector4",
        },
        {
            id: 2,
            image: careviger2,
            title: " 2. Customize Care Plan",
            vector: vector5,
            style: "vector5",
        },
        {
            id: 3,
            image: careviger3,
            title: "3. Caregiver Matching",
            vector: vector4,
            style: "vector4",
        },
        {
            id: 4,
            image: careviger4,
            title: "4. Ongoing Support & Supervision",
            style: "",
        },
    ];

    return (
        <div className="careviger py-4 mt-5">
          <div className="container">
          <h1 className="careviger-head text-center py-5">
                How We Find <span className="highlight">Best Careviger</span> For You
             </h1>
            <div className="row g-3">
                {
                    flowData.map((flow) => (
                        <div className="col-md-3 col-sm-11 text-center flow" key={flow.id}>
                            <div className="container">
                                <img className="img-fluid" src={flow.image} alt="" />
                                <div className="vector">
                                    {flow.id !== 4 && (
                                        <img
                                            className={flow.style}
                                            src={flow.vector}
                                            alt=""
                                        />
                                    )}
                                </div>
                                <div className="container pt-5 mx-2">
                                    <h3 className="flow-name">{flow.title}</h3>
                                    <p className="careviger-details">
                                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                        eget augue nec massa volutpat aliquam fringilla non.
                                </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
          </div>
        </div>

    );
};

export default ServiceFlow;