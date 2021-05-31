import React from 'react';
import logo from '../../images/UCLogo.svg'
import './NavBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <section className="my-navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img className="logo ms-5" src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-5">
                            <li className="nav-item">
                                <link className="mx-2 nav-item" href="#">ABOUT <span className="divider">|</span></link>
                            </li>
                            <li className="nav-item">
                                <link className="mx-2 nav-item" href="#">SERVICES <span className="divider">|</span></link>
                            </li>
                            <li className="nav-item">
                                <link className="mx-2 nav-item" href="#" style={{color: '#0047AB'}}>CAREERS <span className="divider">|</span></link>
                            </li>
                            <li className="nav-item">
                            <link className="mx-2 nav-item" href="#">HOME CARE HEROES <span className="divider">|</span></link>
                            </li>
                            <li className="nav-item">
                            <link className="mx-2 nav-item" href="#">CONTACT</link>
                            </li>
                            <li>
                            <link className="nav-item mx-5" href="#" style={{color: '#0047AB'}}> <FontAwesomeIcon className="pe-1" icon={faPhoneAlt} /> 866-986-3356</link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default NavBar;