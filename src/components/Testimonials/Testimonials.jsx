import "./Testimonials.css";
import React from 'react';
import testimonialImg1 from "../../assets/testimonial-1.svg";
import testimonialImg2 from "../../assets/testimonial-2.svg";

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="left">
                    <div className="line"></div>
                    <div className="testimonial testimonial-1">
                        <div className="testimonial-header">
                            <h4>This is a great course. It helped me a lot. Thank you :)</h4>
                        </div>
                        <div className="testimonial-body">
                            <div className="testimonial-detail">
                                <p className="name">
                                    Jane Cooper
                                </p>
                                <p className="job">
                                    Developer, Sony
                                </p>
                            </div>
                            <div className="testimonial-image">
                                <img src={testimonialImg1} alt="user" />
                            </div>
                        </div>
                    </div>
                    <div className="testimonial testimonial-2">
                        <div className="testimonial-header">
                            <h4>Amazing Work! Well done!</h4>
                        </div>
                        <div className="testimonial-body">
                            <div className="testimonial-detail">
                                <p className="name">
                                    Jacob Jones
                                </p>
                                <p className="job">
                                    Designer, Facebook
                                </p>
                            </div>
                            <div className="testimonial-image">
                                <img src={testimonialImg2} alt="user" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1>
                        What our students say
                    </h1>
                    <p>
                        <span className="first">
                            All students get access to all the videos and also the source code of the projects.<br />
                            You will also have access to a private Discord channel where you can discuss your doubts.
                        </span>
                        <span className="second">
                            All students get access to all the videos and also the source code of the projects. You will also have access to a private Discord channel where you can discuss your doubts.
                        </span>
                    </p>
                    <button className="learn-more button-2">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials