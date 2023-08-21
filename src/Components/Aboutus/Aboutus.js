import React from "react";
import './Aboutus.scss';
import head from '../../Assets/primary-text.svg'
const Aboutus = () => {
  return (
    <div className="aboutus-box">
      <div className="group">
        <div className="hero-wrapper">
          <div className="hero-wrapper-text">
            <div className="header-text">
             <img src={head}  className="primary-text" alt="Primary text"/>
              <p className="span-decorative-text">
                We help build and manage a team of world-class developers to bring your vision to life
              </p>
            </div>
            <div className="btn-primary">
              <div className="text-wrapper">Let’s get started!</div>
            </div>
          </div>
          <div className="div-2">
            <div className="hero-wrapper-image" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Aboutus;