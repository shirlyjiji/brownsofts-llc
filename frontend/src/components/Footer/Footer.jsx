import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import logo from '../../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-column brand-col">
                        <div className="footer-logo">
                            <img src={logo} alt="Brownsofts Logo" />
                        </div>
                        <p className="footer-desc">
                            Empowering businesses with expert web design, data-driven marketing, and innovative IT solutions since 2022.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-icon"><FiFacebook /></a>
                            <a href="#" className="social-icon"><FiTwitter /></a>
                            <a href="#" className="social-icon"><FiLinkedin /></a>
                            <a href="#" className="social-icon"><FiInstagram /></a>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="footer-column">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Latest News</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* IT Services Section */}
                    <div className="footer-column">
                        <h3 className="footer-title">IT Services</h3>
                        <ul className="footer-links">
                            <li><a href="#">Web Design & Dev</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">Video Animation</a></li>
                            <li><a href="#">SEO Optimization</a></li>
                            <li><a href="#">Admin Support</a></li>
                        </ul>
                    </div>

                    {/* Get In Touch Section */}
                    <div className="footer-column contact-col">
                        <h3 className="footer-title">Get In Touch</h3>
                        <ul className="footer-contact">
                            <li>
                                <FiMapPin className="contact-icon" />
                                <span>515 Carriage Court, CA, 92236 USA</span>
                            </li>
                            <li>
                                <FiPhone className="contact-icon" />
                                <span>+01 458 4568</span>
                            </li>
                            <li>
                                <FiMail className="contact-icon" />
                                <span>support@itfirm.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p className="copyright">© 2026 Brownsofts. All Rights Reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
