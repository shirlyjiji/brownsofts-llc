import React from 'react';
import './Hero.css';
import {
    SiFigma, SiAdobephotoshop, SiAdobeillustrator,
    SiAdobepremierepro, SiAdobeaftereffects
} from 'react-icons/si';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { BsArrowRight, BsSearch } from 'react-icons/bs';

// Note: Replace with your actual image paths
import teamImage from '../assets/team-precision.png';

const Hero = () => {
    return (
        <section className="exact-hero">
            {/* LEFT SIDEBAR: Socials */}
            <div className="side-socials">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
            </div>

            <div className="container-fluid h-100">
                <div className="row h-100 align-items-center">

                    {/* LEFT CONTENT: Text & Search */}
                    <div className="col-lg-6 content-block">
                        <div className="header-meta">
                            <span className="orange-line"></span>
                            <span className="meta-text">WE PROVIDE OUTSOURCED</span>
                        </div>

                        <h1 className="main-title">
                            Brownsofts LLC
                        </h1>

                        <p className="main-desc">
                            Sparking Global Success in the Digital World.
                        </p>

                        <div className="search-box-container">
                            <div className="exact-search">
                                <input type="text" placeholder="e.g. Mobile application" />
                                <button className="search-btn">Search Now</button>
                            </div>
                            <div className="tags-row">
                                <strong>Popular Tags:</strong>
                                <span>Graphics</span>, <span>Web</span>, <span>Admin</span>
                            </div>
                        </div>

                        <div className="dual-actions">
                            <button className="btn-solid">Get Started <BsArrowRight /></button>
                            <button className="btn-outline">Contact Us <BsArrowRight /></button>
                        </div>
                    </div>

                    {/* RIGHT CONTENT: Animated Portal */}
                    <div className="col-lg-6 visual-block">
                        <div className="portal-container">
                            {/* The Background Rotating Dashed Circle */}
                            <div className="rotating-dashed"></div>

                            {/* The Orange Solid Background Shape */}
                            <div className="orange-portal-bg"></div>

                            {/* The Image Wrapper */}
                            <div className="main-image-circle">
                                <img src={teamImage} alt="Professional Team" />
                            </div>

                            {/* Orbiting Icons */}
                            <div className="floating-icon icon-1"><SiAdobeillustrator /></div>
                            <div className="floating-icon icon-2"><SiAdobeaftereffects /></div>
                            <div className="floating-icon icon-3"><SiAdobephotoshop /></div>
                            <div className="floating-icon icon-4"><SiFigma /></div>

                            {/* Stats Card Overlay */}
                            <div className="stats-card">
                                <div className="stat-item">
                                    <span className="s-val">2876+</span>
                                    <span className="s-lab">Happy Clients</span>
                                </div>
                                <hr />
                                <div className="stat-item">
                                    <span className="s-val">15+</span>
                                    <span className="s-lab">Years Service</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;