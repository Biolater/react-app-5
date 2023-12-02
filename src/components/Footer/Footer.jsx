import "./Footer.css";
import React from "react";
import { footerFacebook, footerInstagram } from "../../assets/data";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div clas sName="footer-item ss">
                    <p className="footer-title">Quick Links</p>
                    <ul className="footer-links">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <p className="footer-title">Course</p>
                    <ul className="footer-links">
                        <li>Log In</li>
                        <li>Download</li>
                        <li>All Courses</li>
                    </ul>
                </div>
                <div className="footer-item">
                    <p className="footer-title">Contact Us</p>
                    <ul className="footer-links">
                        <li>contact@email.com</li>
                        <li className="footer-icons">
                            <img src={footerFacebook} alt="facebook icon" />
                            <img src={footerInstagram} alt="instagram icon" />
                        </li>
                        <form>
                            <input
                                type="email"
                                placeholder="Email Adress"
                                className="email-adress"
                            />
                            <button className="subscribe">Subscribe</button>
                        </form>
                    </ul>
                </div>
                <div className="copyright">
                    <p>This website is developed by GTCoding © 2021</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
