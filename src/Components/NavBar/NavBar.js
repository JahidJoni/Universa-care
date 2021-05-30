import React from 'react';
import logo from '../../images/UCLogo.svg'
import './NavBar.css'

const NavBar = () => {
    return (
        <section className="my-navbar">
            <nav className="navbar navbar-expand-lg navbar-light">
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
                                <a className="mx-2 nav-item" href="#">ABOUT <span className="divider">|</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="mx-2 nav-item" href="#">SERVICES <span className="divider">|</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="mx-2 nav-item" href="#" style={{color: '#0047AB'}}>CAREERS <span className="divider">|</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="mx-2 nav-item" href="#">HOME CARE HEROES <span className="divider">|</span></a>
                            </li>
                            <li className="nav-item">
                            <a className="mx-2 nav-item" href="#">CONTACT</a>
                            </li>
                            <li>
                            <a className="nav-item ms-5" href="#" style={{color: '#0047AB'}}>866-986-3356</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    );
};

export default NavBar;