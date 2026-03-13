import React from 'react';
import './AboutUs.css';
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs';
const AboutUs = () => {
    const mainImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
    const secondaryImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80";
    
    return (
        <section className="about-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-content">
                            <img src={mainImg} alt="About Us" className="about-main-img" />
                            <div className="about-secondary-img-wrapper">
                                <img src={secondaryImg} alt="Team Collaboration" className="about-secondary-img" />
                            </div>
                            <div className="experience-badge">
                                <span className="exp-num">15+</span>
                                <span className="exp-text">Years of <br/> Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text-content">
                            <span className="sub-title">ABOUT OUR COMPANY</span>
                            <h2 className="main-title">We are more than just a Digital Agency</h2>
                            <p className="description">
                                At Brownsofts LLC, we blend creativity with technical expertise to help businesses navigate the digital landscape. Our mission is to provide innovative solutions that drive growth and deliver exceptional user experiences.
                            </p>
                            
                            <ul className="about-features">
                                <li><BsCheckCircleFill className="check-icon" /> Strategic Planning & Analysis</li>
                                <li><BsCheckCircleFill className="check-icon" /> Creative Design & User Experience</li>
                                <li><BsCheckCircleFill className="check-icon" /> Scalable Web & Mobile Development</li>
                                <li><BsCheckCircleFill className="check-icon" /> Data-Driven Digital Marketing</li>
                            </ul>

                            <button className="btn-solid">Learn More About Us <BsArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;