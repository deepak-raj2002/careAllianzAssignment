import React from "react";
import './Feedback.scss';
import btnleft from '../../Assets/btn-left.svg';
import btnright from '../../Assets/btnright.svg';
import rightcomma from '../../Assets/rightcomma.svg';
import leftcomma from '../../Assets/leftcomma.svg';
import star from '../../Assets/star.png';
import Imran from '../../Assets/Imran.png'
const Feedback = () => {
    return (
        <div className="feedback">
            <div className="overlap-6">
                <div className="group-6">
                    <img className="btn-right-2" alt="Btn right" src={btnright} />
                    <img className="btn-left-2" alt="Btn left" src={btnleft} />
                </div>
                <div className="frame-7">
                    <div className="frame-8">
                        <div className="heading-left">
                            <div className="deco-line" />
                            <p className="leading-companies-2">
                                <span className="span">
                                    Why cutomers love
                                    <br />
                                </span>
                                <span className="text-wrapper-3">working with us</span>
                            </p>
                        </div>
                        <div className="group-7">
                            <p className="text-wrapper-9">
                                Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing
                                agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their
                                work to someone else.
                            </p>
                            <img className="fluent-comma" alt="Fluent comma" src={rightcomma} />
                            <img className="fluent-comma-2" alt="Fluent comma" src={leftcomma} />
                        </div>
                    </div>
                    <div className="frame-9">
                        <div className="rated-person">
                            <div className="group-8">
                                <div className="ellipse-wrapper">
                                    <div className="ellipse-8" />
                                </div>
                            </div>
                            <div className="group-9">
                                <img className="star-perspective" alt="Star perspective" src={star} />
                                <img className="star-perspective-2" alt="Star perspective" src={star} />
                                <img className="star-perspective-3" alt="Star perspective" src={star} />
                                <img className="star-perspective-4" alt="Star perspective" src={star} />
                                <img className="star-perspective-5" alt="Star perspective" src={star} />
                            </div>
                            <div className="frame-10">
                                <div className="text-wrapper-10">Romeena De Silva</div>
                                <div className="text-wrapper-11">Janet Cosmetics</div>
                            </div>
                        </div>
                        <div className="rated-person">
                            <div className="group-10">
                                <div className="overlap-group-4">
                                    <div className="ellipse-9" />
                                </div>
                            </div>
                            <div className="group-9">
                                <img className="star-perspective" alt="Star perspective" src={star} />
                                <img className="star-perspective-2" alt="Star perspective" src={star} />
                                <img className="star-perspective-3" alt="Star perspective" src={star} />
                                <img className="star-perspective-4" alt="Star perspective" src={star} />
                                <img className="star-perspective-5" alt="Star perspective" src={star} />
                            </div>
                            <div className="frame-11">
                                <div className="text-wrapper-12">Romeena De Silva</div>
                                <div className="text-wrapper-13">Janet Cosmetics</div>
                            </div>
                        </div>
                        <div className="rated-person-2">
                            <div className="group-11">
                                <img className="ellipse-10" alt="Ellipse" src={Imran}/>
                            </div>
                            <div className="group-9">
                                <img className="star-perspective" alt="Star perspective" src={star} />
                                <img className="star-perspective-2" alt="Star perspective" src={star} />
                                <img className="star-perspective-3" alt="Star perspective" src={star} />
                                <img className="star-perspective-4" alt="Star perspective" src={star} />
                                <img className="star-perspective-5" alt="Star perspective" src={star} />
                            </div>
                            <div className="frame-11">
                                <div className="romeena-de-silva">Imran Khan</div>
                                <div className="janet-cosmetics">Software Engineer</div>
                            </div>
                        </div>
                        <div className="rated-person">
                            <div className="group-10">
                                <div className="overlap-group-5">
                                    <div className="ellipse-9" />
                                </div>
                            </div>
                            <div className="group-9">
                                <img className="star-perspective" alt="Star perspective" src={star} />
                                <img className="star-perspective-2" alt="Star perspective" src={star} />
                                <img className="star-perspective-3" alt="Star perspective" src={star} />
                                <img className="star-perspective-4" alt="Star perspective" src={star} />
                                <img className="star-perspective-5" alt="Star perspective" src={star} />
                            </div>
                            <div className="frame-11">
                                <div className="text-wrapper-12">Romeena De Silva</div>
                                <div className="text-wrapper-13">Janet Cosmetics</div>
                            </div>
                        </div>
                        <div className="rated-person">
                            <div className="group-8">
                                <div className="overlap-group-6">
                                    <div className="ellipse-8" />
                                </div>
                            </div>
                            <div className="group-9">
                                <img className="star-perspective" alt="Star perspective" src={star} />
                                <img className="star-perspective-2" alt="Star perspective" src={star} />
                                <img className="star-perspective-3" alt="Star perspective" src={star} />
                                <img className="star-perspective-4" alt="Star perspective" src={star} />
                                <img className="star-perspective-5" alt="Star perspective" src={star} />
                            </div>
                            <div className="frame-10">
                                <div className="text-wrapper-10">Romeena De Silva</div>
                                <div className="text-wrapper-11">Janet Cosmetics</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Feedback;