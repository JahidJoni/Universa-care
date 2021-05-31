import React from 'react';
import './Alert.css'
import info from '../../images/circle-infor.svg'


const Alert = () => {
    return (
        <div className="info">
            <img src={info} alt="" />
            <h3 className="alert">READ ABOUT OUR COVID-19 PRECAUTIONS </h3>
        </div>
    );
};

export default Alert;