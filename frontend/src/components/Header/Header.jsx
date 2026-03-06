import React, { useState } from 'react';
import './Header.css';
import { FaChevronDown, FaPaperPlane, FaGlobeAmericas } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { HiOutlineUserCircle, HiMenu, HiX } from 'react-icons/hi';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleServices = (e) => {
        e.preventDefault();
        setIsServicesOpen(!isServicesOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Service Data Array
    const services = [
        { title: "Video & Animation", img: "https://picsum.photos/id/119/100/100" },
        { title: "Web Design", img: "https://picsum.photos/id/180/100/100" },
        { title: "Graphic Design", img: "https://picsum.photos/id/2/100/100" },
        { title: "Digital Marketing", img: "https://picsum.photos/id/20/100/100" },
        { title: "Admin Support", img: "https://picsum.photos/id/48/100/100" },
        { title: "Civil Architectural", img: "https://picsum.photos/id/351/100/100" } // Added Civil Link
    ];

    return (
        <div className="header-wrapper">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-bar-container">
                    <div className="top-bar-left">
                        <span className="follow-us">Follow Us:</span>
                        <div className="social-links">
                            <a href="https://www.facebook.com/brownsofts"><FiFacebook /></a>
                            <a href="https://x.com/brownsofts"><FiTwitter /></a>
                            <a href="https://www.instagram.com/brownsoftsllc/"><FiInstagram /></a>
                            <a href="https://www.linkedin.com/company/brownsoftsllc"><FiLinkedin /></a>
                        </div>
                    </div>
                    <div className="top-bar-center">
                        Modern Design Solutions for Growth <span className="divider">|</span> <a href="#" className="contact-link">Contact us</a>
                    </div>
                    <div className="top-bar-right">
                        <div className="lang-dropdown">
                            <FaGlobeAmericas className="icon world-icon" /> EN <FaChevronDown className="arrow" />
                        </div>
                        <div className="global-dropdown">
                            Global <FaChevronDown className="arrow" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="main-header">
                <div className="main-header-container">
                    <div className="logo-container">
                        <Link to="/">
                            <img src={logo} alt="Brownsofts Logo" />
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
                        
                        {isMobileMenuOpen && (
                            <div className="mobile-menu-header">
                                <img src={logo} alt="Logo" className="logo-img" />
                                <button className="close-menu" onClick={toggleMobileMenu}><HiX /></button>
                            </div>
                        )}
                        <a href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                        <a href="#" onClick={() => setIsMobileMenuOpen(false)}>About</a>

                        <div className={`nav-item-dropdown ${isServicesOpen ? 'active' : ''}`}>
                            <a href="/services" className="has-dropdown" onClick={toggleServices}>
                                Services <FaChevronDown className={`nav-arrow ${isServicesOpen ? 'rotated' : ''}`} />
                            </a>

                            {isServicesOpen && (
                                <div className="services-dropdown">
                                    <h3 className="dropdown-title">POPULAR CATEGORIES</h3>
                                    <div className="dropdown-grid">
                                        {services.map((service) => {
                                            const slug = service.title
                                                .toLowerCase()
                                                .replace(/ & /g, '-')
                                                .replace(/\s+/g, '-');

                                            return (
                                                <Link
                                                    key={service.title}
                                                    to={`/services/${slug}`}
                                                    className="dropdown-item"
                                                    onClick={() => {
                                                        setIsServicesOpen(false);
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    <div className="item-img-container">
                                                        <img src={service.img} alt={service.title} />
                                                    </div>
                                                    <div className="item-content">
                                                        <h4>{service.title}</h4>
                                                        <p>240 Items Available</p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>


                        {isMobileMenuOpen && (
                            <div className="mobile-menu-footer">
                                <button className="cta-button w-full">LET'S TALK</button>
                            </div>
                        )}
                    </nav>

                    <div className="header-actions">
                        <div className="login-btn">
                            <HiOutlineUserCircle className="user-icon" />
                            <span className="hide-mobile">Login</span>
                        </div>
                        <button className="cta-button hide-mobile">
                            <FaPaperPlane className="plane-icon" /> LET'S TALK
                        </button>
                        <button className="mobile-toggle" onClick={toggleMobileMenu}>
                            <HiMenu />
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;