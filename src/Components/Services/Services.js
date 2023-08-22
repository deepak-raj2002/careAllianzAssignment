import React from "react";
import './Services.scss';
import perspective1 from '../../Assets/code-perspective-matte-1.png';
import mobile from '../../Assets/mobile-app.png';
import dashboard from '../../Assets/Dashboard.png';
const Services = () => {
    return (
        <div className="feedback-section">
            <div className="ellipse-3" />
            {/* <div className="ellipse-4" /> */}
            <div className="div-wrapper">
                <div className="our-service-wrapper">
                    <div className="overlap-group-3">
                        <div className="rectangle" />
                        <div className="group-2">
                            <div className="text-wrapper-5">Services we offer</div>
                        </div>
                        <div className="carousel-nodes">
                            <div className="ellipse-5" />
                            <div className="ellipse-5" />
                            <div className="ellipse-6" />
                            <div className="ellipse-5" />
                            <div className="ellipse-5" />
                        </div>
                        <div className="card-carousel">
                            <div className="service-card">
                                <div className="frame-2">
                                    <div className="div-3">
                                        <div className="group-3" />
                                        <div className="web-design">Mobile App Development</div>
                                    </div>
                                    <p className="p">
                                        A Website is an extension of yourself and we can help you to express it properly. Your website
                                        is your number one marketing asset because we live in a digital age.
                                    </p>
                                </div>
                            </div>
                            <div className="frame-wrapper">
                                <div className="frame-2">
                                    <div className="div-3">
                                        <div className="group-4" />
                                        <div className="web-design">Software Testing Service</div>
                                    </div>
                                    <p className="p">
                                        A Website is an extension of yourself and we can help you to express it properly. Your website
                                        is your number one marketing asset because we live in a digital age.
                                    </p>
                                </div>
                            </div>
                            <div className="service-card-2">
                                <div className="frame-3">
                                    <div className="frame-4">
                                        <div className="code-perspective-wrapper">
                                        <img src={perspective1} className="code-perspective" alt="Code perspective"/>
                                        </div>
                                        <div className="web-design-2">Web Design &amp; Development</div>
                                    </div>
                                    <p className="text-wrapper-6">
                                        A Website is an extension of yourself and we can help you to express it properly. Your website
                                        is your number one marketing asset because we live in a digital age.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="service-card-3">
                            <div className="frame-2">
                                <div className="div-3">
                                    <div className="img-wrapper">
                                    <img src={perspective1} className="code-perspective" alt="Code perspective"/>
                                    </div>
                                    <div className="web-design">Software Testing Service</div>
                                </div>
                                <p className="p">
                                    A Website is an extension of yourself and we can help you to express it properly. Your website is
                                    your number one marketing asset because we live in a digital age.
                                </p>
                            </div>
                        </div>
                        <div className="service-card-4">
                            <div className="frame-2">
                                <div className="div-3">
                                    <div className="group-5">
                                    <img src={mobile} className="img" alt="Ellipse"/>
                                    </div>
                                    <div className="web-design">Mobile App Development</div>
                                </div>
                                <p className="p">
                                    A Website is an extension of yourself and we can help you to express it properly. Your website is
                                    your number one marketing asset because we live in a digital age.
                                </p>
                            </div>
                        </div>
                        <img src={mobile} className="mobile-app" alt="mobile app"/>
                        <img src={dashboard} className="dashboard"   alt="Dashboard" />
                    </div>
                </div>
            </div>
            <div className="carousel-slider-numb">
                <div className="text-wrapper-7">01</div>
                <div className="text-wrapper-8">05</div>
                <div className="rectangle-wrapper">
                    <div className="rectangle-2" />
                </div>
            </div>
        </div>
    )
};

export default Services;