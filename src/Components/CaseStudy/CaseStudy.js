import React from "react";
import './CaseStudy.scss';
import rightcurve from '../../Assets/rightcurve.svg';
import leftcurve from '../../Assets/leftcurve.svg';
import rightarrow from '../../Assets/right-line.svg';
import rightsidearrow from '../../Assets/right-s-line.svg';
import upperarrow from '../../Assets/upArrow.svg';
import firefit from '../../Assets/Firefit.png';
import yoga from '../../Assets/yoga.png';
import mygoals from '../../Assets/mygoals.png';
const CaseStudy = () => {
    return (
        <div className="overlap-7">
            <div className="group-12">
            </div>
            <div className="deco-img-arrow">
                <div className="overlap-8">
                    <img className="vector" alt="Vector" src={rightcurve} />
                    <img className="arrow-right-s-line" alt="Arrow right s line" src={rightarrow}/>
                </div>
            </div>
            <div className="overlap-wrapper">
                <div className="overlap-9">
                    <img className="vector-2" alt="Vector" src={leftcurve}/>
                    <img className="arrow-right-s-line-2" alt="Arrow right s line" src={upperarrow}/>
                </div>
            </div>
            <div className="ellipse-11" />
            <div className="group-13">
                <div className="overlap-10">
                    <div className="card-wrapper" />
                    <div className="frame-12">
                        <div className="div-4">
                            <p className="text-wrapper-14">Website Design for SCFC Canada</p>
                            <p className="text-wrapper-15">
                                Born out of a vision, a single-minded objective that puts service before anything else, Swift
                                Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and
                                logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over
                                20 years of rich and varied experience in the shipping and freight forwarding industry.
                            </p>
                        </div>
                        <div className="frame-13">
                            <div className="frame-14">
                                <div className="text-wrapper-16">Read more</div>
                                <img className="arrow-right-s-line-3" alt="Arrow right s line" src={rightsidearrow} />
                            </div>
                        </div>
                    </div>
                    <img className="case-study-image" alt="Case study image" src={firefit} />
                </div>
            </div>
            <div className="group-14">
                <div className="overlap-10">
                    <div className="card-wrapper-2" />
                    <div className="frame-15">
                        <div className="div-4">
                            <p className="text-wrapper-14">Website Design for SCFC Canada</p>
                            <p className="text-wrapper-15">
                                Born out of a vision, a single-minded objective that puts service before anything else, Swift
                                Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and
                                logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over
                                20 years of rich and varied experience in the shipping and freight forwarding industry.
                            </p>
                        </div>
                        <div className="frame-13">
                            <div className="frame-14">
                                <div className="text-wrapper-16">Read more</div>
                                <img className="arrow-right-s-line-3" alt="Arrow right s line" src={rightsidearrow}
                                />
                            </div>
                        </div>
                    </div>
                    <img className="case-study-image" alt="Case study image" src={mygoals} />
                </div>
            </div>
            <div className="group-15">
                <div className="overlap-10">
                    <div className="card-wrapper-3" />
                    <div className="frame-16">
                        <div className="div-4">
                            <p className="text-wrapper-14">Website Design for SCFC Canada</p>
                            <p className="text-wrapper-15">
                                Born out of a vision, a single-minded objective that puts service before anything else, Swift
                                Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and
                                logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over
                                20 years of rich and varied experience in the shipping and freight forwarding industry.
                            </p>
                        </div>
                        <div className="frame-13">
                            <div className="frame-14">
                                <div className="text-wrapper-16">Read more</div>
                                <img className="arrow-right-s-line-3" alt="Arrow right s line" src={rightsidearrow}/>
                            </div>
                        </div>
                    </div>
                    <img className="case-study-image" alt="Case study image" src={yoga} />
                </div>
            </div>
            <div className="heading-h-left">
                <div className="deco-line" />
                <p className="leading-company-2">
                    <span className="span">
                        Our recent <br />
                    </span>
                    <span className="text-wrapper-3"> Case studies </span>
                </p>
            </div>
            <div className="frame-17">
                <div className="text-wrapper-17">Read more case studies</div>
                <img className="arrow-right-s-line-4" alt="Arrow right s line" src={rightsidearrow} />
            </div>
        </div>
    )
};

export default CaseStudy