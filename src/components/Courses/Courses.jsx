import "./Courses.css";
import React from "react";
import { courseImage1, courseImage2, clockIcon } from "../../assets/data"

const Courses = () => {
    return (
        <section id="courses">
            <div className="container">
                <div className="courses-header">
                    <h1 className="courses-header__title">Our Courses</h1>
                </div>
                <div className="courses-wrapper">
                    <div className="course">
                        <div className="course-image">
                            <img src={courseImage1} alt="mario" />
                        </div>
                        <div className="course-detail">
                            <h4 className="course-title">
                                Game Design Essentials
                            </h4>
                            <div className="course-duration">
                                <img src={clockIcon} alt="clock icon" />
                                <span>8 HRS</span>
                            </div>
                        </div>
                        <div className="course-line"></div>
                    </div>
                    <div className="course">
                        <div className="course-image">
                            <img src={courseImage2} alt="mario" />
                        </div>
                        <div className="course-detail">
                            <h4 className="course-title">
                                Unity Game Engine Fundamentals
                            </h4>
                            <div className="course-duration">
                                <img src={clockIcon} alt="clock icon" />
                                <span>8 HRS</span>
                            </div>
                        </div>
                        <div className="course-line"></div>
                    </div>
                </div>
                <div className="all-courses">
                    <button className="button-2">All Courses</button>
                </div>
            </div>
        </section>
    );
};

export default Courses;
