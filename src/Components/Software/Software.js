import React from "react";
import './Software.scss';
import development from '../../Assets/add-devlopment.svg';
import arrowright from '../../Assets/right.svg';
import fill from '../../Assets/videoicon.svg';
const Software = () => {
    return (
        <>
            <div className="about-us-details">
                <div className="div-3">
                    <div className="deco-line" />
                    <div className="div-4">
                        <p className="leading-companies">
                            <span className="span">Leading companies trust us</span>
                            <span className="text-wrapper-3"> to develop software</span>
                        </p>
                        <img src={development} className="we-add-development"  alt="We add development" />
                    </div>
                </div>
                <div className="link-click">
                    <div className="text-wrapper-4">See more Informations</div>
                    <img className="arrow-right-line" alt="Arrow right line" src={arrowright} />
                </div>
            </div>
            <div className="abou-us-video">
                <div className="overlap-group">
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group-2">
                            <div className="ellipse" />
                            <div className="ellipse-2" />
                            <img className="play-circle-fill"  alt="Play circle fill" src={fill}/>               
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Software;