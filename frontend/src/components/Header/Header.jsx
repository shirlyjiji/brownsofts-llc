import React, { useState } from 'react';
import './Header.css';
import { FaChevronDown, FaPaperPlane, FaGlobeAmericas } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { HiOutlineUserCircle, HiMenu, HiX } from 'react-icons/hi';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isGlobalOpen, setIsGlobalOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language.toUpperCase().split('-')[0]);
    const [currentRegion, setCurrentRegion] = useState('Global');

    const changeLanguage = (code) => {
        i18n.changeLanguage(code.toLowerCase());
        setCurrentLang(code);
        setIsLangOpen(false);
    };

    const toggleServices = (e) => {
        e.preventDefault();
        setIsServicesOpen(!isServicesOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const languages = [
        { code: 'EN', name: 'English' },
        { code: 'ES', name: 'Español' },
        { code: 'FR', name: 'Français' },
        { code: 'DE', name: 'Deutsch' }
    ];

    const regions = [
        'Global',
        'North America',
        'Europe',
        'Asia Pacific',
        'Middle East'
    ];

    return (
        <div className="header-wrapper">
            {/* Top Bar */}
            <div className="top-bar">
                <div className="top-bar-container">
                    <div className="top-bar-left">
                        <span className="follow-us">{t('header.follow_us')}</span>
                        <div className="social-links">
                            <a href="https://www.facebook.com/brownsofts"><FiFacebook /></a>
                            <a href="https://x.com/brownsofts"><FiTwitter /></a>
                            <a href="https://www.instagram.com/brownsoftsllc/"><FiInstagram /></a>
                            <a href="https://www.linkedin.com/company/brownsoftsllc"><FiLinkedin /></a>
                        </div>
                    </div>
                    <div className="top-bar-center">
                        {t('header.topbar_message')} <span className="divider">|</span> <a href="#" className="contact-link">{t('header.contact_us')}</a>
                    </div>
                    <div className="top-bar-right">
                        <div className="lang-dropdown-container">
                            <div className="lang-dropdown" onClick={() => setIsLangOpen(!isLangOpen)}>
                                <FaGlobeAmericas className="icon world-icon" /> {currentLang} <FaChevronDown className={`arrow ${isLangOpen ? 'rotated' : ''}`} />
                            </div>
                            {isLangOpen && (
                                <div className="top-bar-menu lang-menu">
                                    {languages.map((lang) => (
                                        <div 
                                            key={lang.code} 
                                            className="menu-item"
                                            onClick={() => changeLanguage(lang.code)}
                                        >
                                            {lang.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className="global-dropdown-container">
                            <div className="global-dropdown" onClick={() => setIsGlobalOpen(!isGlobalOpen)}>
                                {currentRegion} <FaChevronDown className={`arrow ${isGlobalOpen ? 'rotated' : ''}`} />
                            </div>
                            {isGlobalOpen && (
                                <div className="top-bar-menu global-menu">
                                    {regions.map((region) => (
                                        <div 
                                            key={region} 
                                            className="menu-item"
                                            onClick={() => {
                                                setCurrentRegion(region);
                                                setIsGlobalOpen(false);
                                            }}
                                        >
                                            {region}
                                        </div>
                                    ))}
                                </div>
                            )}
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
                        <a href="/" onClick={() => setIsMobileMenuOpen(false)}>{t('header.home')}</a>
                        <a href="#" onClick={() => setIsMobileMenuOpen(false)}>{t('header.about')}</a>

                        <div className={`nav-item-dropdown ${isServicesOpen ? 'active' : ''}`}>
                            <a href="/services" className="has-dropdown" onClick={toggleServices}>
                                {t('header.services')} <FaChevronDown className={`nav-arrow ${isServicesOpen ? 'rotated' : ''}`} />
                            </a>

                            {isServicesOpen && (
                                <div className="services-dropdown">
                                    <h3 className="dropdown-title">{t('header.popular_categories')}</h3>
                                    <div className="dropdown-grid">
                                        {(typeof services !== 'undefined' ? services : []).map((service) => {
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
                                                        <p>240 {t('header.items_available')}</p>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        <a href="#" onClick={() => setIsMobileMenuOpen(false)}>{t('header.blog')}</a>


                        {isMobileMenuOpen && (
                            <div className="mobile-menu-footer">
                                <button className="cta-button w-full">{t('header.lets_talk')}</button>
                            </div>
                        )}
                    </nav>

                    <div className="header-actions">
                        <div className="login-btn">
                            <HiOutlineUserCircle className="user-icon" />
                            <span className="hide-mobile">{t('header.login')}</span>
                        </div>
                        <button className="cta-button hide-mobile">
                            <FaPaperPlane className="plane-icon" /> {t('header.lets_talk')}
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