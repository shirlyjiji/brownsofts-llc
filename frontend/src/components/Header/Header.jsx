import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaChevronDown, FaPaperPlane, FaGlobeAmericas } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { 
    HiOutlineUserCircle, HiMenu, HiX, 
    HiOutlineHome, HiOutlineInformationCircle, 
    HiOutlineBriefcase, HiOutlineBookOpen 
} from 'react-icons/hi';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { serviceGigs } from '../data/ServicesData';

const Header = () => {
    const { t, i18n } = useTranslation();
    
    // Define categories for the dropdown as per the requested design
    const categories = [
        { title: 'Video & Animation', slug: 'video-animation', img: serviceGigs.find(s => s.category === 'Video & Animation')?.image },
        { title: 'Web Design', slug: 'web-design', img: serviceGigs.find(s => s.category === 'Web Design')?.image },
        { title: 'Graphic Design', slug: 'graphic-design', img: serviceGigs.find(s => s.category === 'Graphics & Design')?.image },
        { title: 'Digital Marketing', slug: 'digital-marketing', img: serviceGigs.find(s => s.category === 'SEO & Marketing')?.image },
        { title: 'Admin Support', slug: 'admin-support', img: serviceGigs.find(s => s.category === 'Admin Support')?.image },
    ];

    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [isGlobalOpen, setIsGlobalOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState(i18n.language.toUpperCase().split('-')[0]);
    const [currentRegion, setCurrentRegion] = useState('Global');

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1023) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                        
                        <div className="mobile-menu-header">
                            <img src={logo} alt="Logo" className="logo-img" />
                            <button className="close-menu" onClick={toggleMobileMenu}><HiX /></button>
                        </div>
                        
                        <div className="mobile-nav-links">
                            <Link to="/" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="item-content">
                                    <HiOutlineHome className="mobile-icon" /> {t('header.home')}
                                </span>
                            </Link>
                            
                            <Link to="/about" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="item-content">
                                    <HiOutlineInformationCircle className="mobile-icon" /> {t('header.about')}
                                </span>
                            </Link>

                            <div className={`megamenu-trigger ${isServicesOpen ? 'active' : ''}`}>
                                <Link to="/services" className="has-dropdown nav-item" onClick={(e) => {
                                    if (window.innerWidth <= 1023) {
                                        e.preventDefault();
                                        toggleServices(e);
                                    } else {
                                        setIsMobileMenuOpen(false);
                                    }
                                }}>
                                    <span className="item-content">
                                        <HiOutlineBriefcase className="mobile-icon" /> {t('header.services')}
                                    </span>
                                    <FaChevronDown className={`nav-arrow ${isServicesOpen ? 'rotated' : ''}`} />
                                </Link>

                                <div className="megamenu-dropdown">
                                    <div className="megamenu-header">
                                        <h3 className="megamenu-title">{t('header.popular_categories')}</h3>
                                    </div>
                                    <div className="dropdown-grid">
                                        {categories.map((cat) => (
                                            <div key={cat.title} className="megamenu-card">
                                                <Link
                                                    to={`/services/${cat.slug}`}
                                                    className="megamenu-card-link"
                                                    onClick={() => {
                                                        setIsServicesOpen(false);
                                                        setIsMobileMenuOpen(false);
                                                    }}
                                                >
                                                    <div className="megamenu-card-img-wrapper">
                                                        <img src={cat.img} alt={cat.title} />
                                                    </div>
                                                    <div>
                                                        <div className="category-name">{cat.title}</div>
                                                        <div className="item-count">240 {t('header.items_available')}</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link to="/blog" className="nav-item" onClick={() => setIsMobileMenuOpen(false)}>
                                <span className="item-content">
                                    <HiOutlineBookOpen className="mobile-icon" /> {t('header.blog')}
                                </span>
                            </Link>
                        </div>


                        <div className="mobile-menu-footer">
                            <Link to="/contact" className="cta-button w-full" onClick={() => setIsMobileMenuOpen(false)}>
                                {t('header.lets_talk')}
                            </Link>
                            <div className="mobile-socials">
                                <a href="https://www.facebook.com/brownsofts"><FiFacebook /></a>
                                <a href="https://x.com/brownsofts"><FiTwitter /></a>
                                <a href="https://www.instagram.com/brownsoftsllc/"><FiInstagram /></a>
                                <a href="https://www.linkedin.com/company/brownsoftsllc"><FiLinkedin /></a>
                            </div>
                        </div>
                    </nav>

                    <div className="header-actions">
                        <div className="login-btn">
                            <HiOutlineUserCircle className="user-icon" />
                            <span className="hide-mobile">{t('header.login')}</span>
                        </div>
                        <Link to="/contact" className="cta-button hide-mobile" style={{ textDecoration: 'none' }}>
                            <FaPaperPlane className="plane-icon" /> {t('header.lets_talk')}
                        </Link>
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