import React from 'react';
import './Hero.css';
// 1. Add Bootstrap imports
import { Container, Row, Col } from 'react-bootstrap';
// 2. Add Lucide icon imports for the categories section
import { Globe, PlayCircle, Palette, Zap, Layers } from 'lucide-react';
import {
    SiFigma, SiAdobephotoshop, SiAdobeillustrator,
    SiAdobepremierepro, SiAdobeaftereffects
} from 'react-icons/si';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { BsArrowRight, BsSearch } from 'react-icons/bs';

// Note: Replace with your actual image paths
import teamImage from '../assets/team-precision.png';
import HomeServices from './Homeservices';
import BrandCollaboration from './BrandCollaboration';
const Hero = () => {
    return (
        <div>
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

            <section className="br-kinetic-section py-5 bg-white">
                <Container>
                    <div className="br-section-header d-flex align-items-center gap-3 mb-5">
                        <h2 className="fw-bold m-0">Top Categories</h2>
                        <div className="br-header-line"></div>
                        <span className="text-muted small fw-bold text-uppercase">Industry Leaders</span>
                    </div>

                    <Row className="justify-content-center">
                        {[
                            { name: "Web Dev", icon: <Globe size={32} />, count: "120+ Projects", color: "#1A1A1A" },
                            { name: "Animation", icon: <PlayCircle size={32} />, count: "85+ Projects", color: "#eb690c" },
                            { name: "Graphics", icon: <Palette size={32} />, count: "200+ Designs", color: "#1A1A1A" },
                            { name: "Marketing", icon: <Zap size={32} />, count: "50+ Campaigns", color: "#eb690c" },
                            { name: "UI Apps", icon: <Layers size={32} />, count: "40+ Apps", color: "#1A1A1A" }
                        ].map((cat, index) => (
                            <Col key={index} xs={6} md={4} lg={2} className="mb-4">
                                <div className="br-category-card text-center">
                                    <div className="br-orbit-wrapper">
                                        <div className="br-main-circle" style={{ backgroundColor: cat.color }}>
                                            {cat.icon}
                                        </div>
                                        <div className="br-orbit-border"></div>
                                    </div>
                                    <h6 className="fw-bold mt-3 mb-0">{cat.name}</h6>
                                    <small className="text-muted">{cat.count}</small>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            
            <BrandCollaboration/>
        </div>
    );
};

export default Hero;