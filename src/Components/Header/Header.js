import React from "react";
import './Header.scss';
import logo from '../../Assets/logo.svg'
const Header = () => {
    return(
    <div className="header-section">
        <div className="nav-bar">
            <div className="brand-logo">
                <img className="logo"  alt="Logo" src={logo}/>
            </div>
            <div className="frame">
                <div className="nav-item">
                    <div className="home">About us</div>
                </div>
                <div className="nav-item">
                    <div className="home">Services</div>
                </div>
                <div className="nav-item">
                    <div className="home">Case Studies</div>
                </div>
                <div className="nav-item">
                    <div className="home">Blog</div>
                </div>
                <div className="nav-item">
                    <div className="home">How it Works</div>
                </div>
                <div className="nav-item">
                    <div className="home">Hire</div>
                </div>
            </div>
            <div className="nav-button">
                <div className="text-wrapper">Contact us</div>
            </div>
        </div>
        <div className="text-wrapper-2">Ik developers</div>
    </div>
    )
};

export default Header;