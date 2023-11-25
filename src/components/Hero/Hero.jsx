import "./Hero.css";
import React from 'react'
import { pencil, heroImg, starIcon } from "../../assets/data"
const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Learn the art of Game Dev
                    </h1>
                    <p className="hero-explanation">
                        This is a comprehensive course on Game Development. You will learn everything from generating an idea to publishing your games to different platforms.
                    </p>
                    <button className="enroll">
                        <span>
                            <img src={pencil} alt="pencil icon" />
                        </span>
                        Enroll Now
                    </button>
                </div>
                <div className="hero-content-2">
                    <div className="details">
                        <div className="detail">
                            <div className="content">
                                <p>32K</p>
                                <p>Students Enrolled</p>
                            </div>
                            <div className="bg"></div>
                        </div>
                        <div className="detail">
                            <div className="content">
                                <p>4.7 <span>
                                    <img src={starIcon} alt="star icon" /></span></p>
                                <p>Overall Rating</p>
                            </div>
                            <div className="bg"></div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={heroImg} alt="hero image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero