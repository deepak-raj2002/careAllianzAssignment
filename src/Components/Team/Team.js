import React from "react";
import './Team.scss';
import adclipse from '../../Assets/Adclipse.png';
import pjc from '../../Assets/PJC.png';
import click from '../../Assets/clickorder.png';
import tech from '../../Assets/Techmate.png';
import left from '../../Assets/btn-left.svg';
import right from '../../Assets/btn-right.svg';
const Team = () => {
    return (
        <div className="overlap-3">
         <div className="frame-6">
                <div className="deco-line" />
                <p className="meet-the-people-we">
                    <span className="span">
                        Meet the People <br />
                    </span>
                    <span className="text-wrapper-3">We are Working With</span>
                </p>
            </div>
            <div className="overlap-4">
                <div className="overlap-5">
                    <div className="ellipse-7" />
                    <div className="logo-list">
                    </div>
                    <img className="logo-2" alt="Logo" src={adclipse}/>
                    <img className="logo-3" alt="Logo" src={pjc}/>
                    <img className="logo-4" alt="Logo" src={click}/>
                    <img className="logo-5" alt="Logo" src={tech}/>
                </div>
                <div className="frame-5">
                    <img  className="btn-left" alt="Btn left" src={left}/>
                    <img  className="btn-right" alt="Btn right" src={right}/>
                </div>
            </div>
        </div>
    )
};
export default Team;