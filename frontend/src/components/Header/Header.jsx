import React, { useState } from 'react';
import './Header.css';
import { FaChevronDown, FaPaperPlane, FaGlobeAmericas } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { HiOutlineUserCircle, HiMenu, HiX } from 'react-icons/hi';

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

  return (
    <div className="header-wrapper">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <span className="follow-us">Follow Us:</span>
            <div className="social-links">
              <a href="#"><FiFacebook /></a>
              <a href="#"><FiTwitter /></a>
              <a href="#"><FiInstagram /></a>
              <a href="#"><FiLinkedin /></a>
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
          {/* Logo */}
          <div className="logo-container">
            <span className="logo-text">Brownsofts</span>
          </div>

          {/* Navigation */}
          <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
            {isMobileMenuOpen && (
              <div className="mobile-menu-header">
                <span className="logo-text">Brownsofts</span>
                <button className="close-menu" onClick={toggleMobileMenu}><HiX /></button>
              </div>
            )}
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <div className={`nav-item-dropdown ${isServicesOpen ? 'active' : ''}`}>
              <a href="#" className="has-dropdown" onClick={toggleServices}>
                Services <FaChevronDown className={`nav-arrow ${isServicesOpen ? 'rotated' : ''}`} />
              </a>
              {isServicesOpen && (
                <div className="services-dropdown">
                  <h3 className="dropdown-title">POPULAR CATEGORIES</h3>
                  <div className="dropdown-grid">
                    <a href="#" className="dropdown-item">
                      <div className="item-img-container">
                        <img src="https://picsum.photos/id/119/100/100" alt="Video & Animation" />
                      </div>
                      <div className="item-content">
                        <h4>Video & Animation</h4>
                        <p>240 Items Available</p>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="item-img-container">
                        <img src="https://picsum.photos/id/180/100/100" alt="Web Design" />
                      </div>
                      <div className="item-content">
                        <h4>Web Design</h4>
                        <p>240 Items Available</p>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="item-img-container">
                        <img src="https://picsum.photos/id/2/100/100" alt="Graphic Design" />
                      </div>
                      <div className="item-content">
                        <h4>Graphic Design</h4>
                        <p>240 Items Available</p>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="item-img-container">
                        <img src="https://picsum.photos/id/20/100/100" alt="Digital Marketing" />
                      </div>
                      <div className="item-content">
                        <h4>Digital Marketing</h4>
                        <p>240 Items Available</p>
                      </div>
                    </a>
                    <a href="#" className="dropdown-item">
                      <div className="item-img-container">
                        <img src="https://picsum.photos/id/48/100/100" alt="Admin Support" />
                      </div>
                      <div className="item-content">
                        <h4>Admin Support</h4>
                        <p>240 Items Available</p>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
            
            {isMobileMenuOpen && (
              <div className="mobile-menu-footer">
                <button className="cta-button w-full">LET'S TALK</button>
              </div>
            )}
          </nav>

          {/* Actions */}
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
