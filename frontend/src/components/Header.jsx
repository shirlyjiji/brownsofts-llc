import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaChevronDown, FaVideo, FaPalette, FaCode, FaBullhorn, FaHardHat, FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import TopBar from './TopBar';
import logo from '../assets/images/logo.png';

const Header = () => {
    const [keyword, setKeyword] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const searchHandler = (e) => {
        if (e.key === 'Enter') {
            navigate(keyword.trim() ? `/services?search=${keyword}` : '/services');
        }
    };

    const services = [
        { title: 'Video Editing', category: 'Video & Animation', icon: <FaVideo />, sub: '120 Projects Done' },
        { title: 'Graphic Design', category: 'Graphics & Design', icon: <FaPalette />, sub: '85 Projects Done' },
        { title: 'Web Design & Development', category: 'Web Design', icon: <FaCode />, sub: '45 Projects Done' },
        { title: 'Digital Marketing', category: 'SEO & Marketing', icon: <FaBullhorn />, sub: '90 Projects Done' },
        { title: 'Civil & Architectural', category: 'Civil & Architectural', icon: <FaHardHat />, sub: '30 Projects Done' },
    ];

    return (
        <>
            <style>
                {`
                    .mega-menu-container {
                        position: relative;
                        padding: 28px 0;
                    }
                    .mega-menu-dropdown {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        opacity: 0;
                        visibility: hidden;
                        transform: translateY(10px);
                        transition: all 0.3s ease;
                        background: white;
                        z-index: 1000;
                    }
                    .mega-menu-container:hover .mega-menu-dropdown {
                        opacity: 1;
                        visibility: visible;
                        transform: translateY(0);
                    }
                    .mobile-menu {
                        display: none;
                    }
                    @media (max-width: 991px) {
                        .hide-tablet { display: none !important; }
                    }
                    @media (max-width: 767px) {
                        .mobile-menu {
                            display: flex;
                            position: fixed;
                            top: 80px;
                            left: 0;
                            width: 100%;
                            height: calc(100vh - 80px);
                            background: white;
                            z-index: 999;
                            padding: 20px;
                            display: flex;
                            flex-direction: column;
                            gap: 20px;
                            transform: translateX(-100%);
                            transition: transform 0.3s ease;
                            overflow-y: auto;
                        }
                        .mobile-menu.open {
                            transform: translateX(0);
                        }
                    }
                `}
            </style>
            <TopBar />
            <header
                style={{
                    minHeight: 'var(--header-height)',
                    borderBottom: '1px solid var(--border-color)',
                    backgroundColor: 'var(--white)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    color: 'var(--text-dark)'
                }}
            >
                <div className="container" style={{ display: 'flex', alignItems: 'center', width: '100%', gap: 'clamp(1rem, 3vw, 2.5rem)', paddingBlock: '0.5rem' }}>

                    {/* Logo */}
                    <div style={{ flexShrink: 0 }}>
                        <Link to="/" style={{ display: 'block' }}>
                            <img
                                src={logo}
                                alt="Brownsofts Logo"
                                style={{ height: 'clamp(35px, 5vw, 50px)', width: 'auto' }}
                            />
                        </Link>
                    </div>

                    {/* Services Dropdown - Hidden on Tablet/Mobile */}
                    <div className="mega-menu-container hide-tablet">
                        <div
                            style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', fontWeight: '700', fontSize: '15px', color: '#231F1E' }}
                        >
                            <span>Services</span>
                            <FaChevronDown size={10} />
                        </div>

                        <div
                            className="mega-menu-dropdown"
                            style={{
                                borderRadius: '15px',
                                padding: '24px',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                minWidth: '550px',
                                border: '1px solid #eee',
                                background: 'white'
                            }}
                        >
                            <h4 style={{ marginBottom: '20px', fontSize: '18px', fontWeight: '700', color: '#231F1E' }}>
                                Popular Services
                            </h4>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                {services.map(service => (
                                    <Link
                                        key={service.title}
                                        to={`/services/${service.category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                                        style={{
                                            textDecoration: 'none',
                                            color: '#231F1E',
                                            padding: '12px',
                                            borderRadius: '10px',
                                            background: '#f9f9f9',
                                            transition: 'all 0.2s',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            border: '1px solid #eee'
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.background = '#f0f0f0';
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.background = '#f9f9f9';
                                        }}
                                    >
                                        <div style={{
                                            width: '48px',
                                            height: '48px',
                                            background: '#fff',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '20px',
                                            color: 'var(--primary-color)'
                                        }}>
                                            {service.icon}
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                            <span style={{ fontWeight: '700', fontSize: '15px' }}>{service.title}</span>
                                            <span style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{service.sub}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Search Bar - Hidden on Mobile */}
                    <div className="hide-mobile" style={{ flex: 1, maxWidth: '350px', position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="Search Services"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            onKeyDown={searchHandler}
                            style={{
                                width: '100%',
                                height: '44px',
                                borderRadius: '999px',
                                background: '#f5f8fa',
                                padding: '0 20px 0 45px',
                                border: '2px solid rgba(11, 42, 74, 0.1)',
                                outline: 'none',
                                fontSize: '14px',
                                color: '#231F1E',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => {
                                e.currentTarget.style.borderColor = 'var(--primary-color)';
                                e.currentTarget.style.background = '#FFFFFF';
                                e.currentTarget.style.boxShadow = '0 0 0 3px rgba(255, 106, 0, 0.1)';
                            }}
                            onBlur={(e) => {
                                e.currentTarget.style.borderColor = 'rgba(11, 42, 74, 0.1)';
                                e.currentTarget.style.background = '#f5f8fa';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        />
                        <FaSearch style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', opacity: 0.7, color: 'var(--primary-color)', transition: 'opacity 0.3s ease' }} />
                    </div>

                    {/* Navigation Links - Hidden on Mobile */}
                    <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '30px', fontWeight: '700', fontSize: '15px', marginLeft: 'auto' }}>
                        {['About Us', 'Blog', 'Contact Us'].map(item => (
                            <Link
                                key={item}
                                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                style={{
                                    textDecoration: 'none',
                                    color: '#231F1E',
                                    transition: 'color 0.2s',
                                }}
                                onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary-color)'}
                                onMouseOut={(e) => e.currentTarget.style.color = '#231F1E'}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    {/* Hamburger Menu - Show on Mobile */}
                    <div className="show-mobile" style={{ marginLeft: 'auto', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'var(--button-height)', minWidth: 'var(--button-height)' }} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                        <div style={{ position: 'relative', marginBottom: 'var(--space-md)' }}>
                            <input
                                type="text"
                                placeholder="Search Services"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                                onKeyDown={searchHandler}
                                style={{
                                    width: '100%',
                                    height: 'var(--button-height)',
                                    borderRadius: '999px',
                                    background: '#f5f8fa',
                                    padding: '0 1.25rem 0 2.8rem',
                                    border: '2px solid rgba(11, 42, 74, 0.1)',
                                    outline: 'none',
                                    fontSize: 'var(--font-sm)',
                                    color: 'var(--text-dark)'
                                }}
                            />
                            <FaSearch style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary-color)' }} />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                            <h4 style={{ fontSize: 'var(--font-base)', fontWeight: '800', marginBottom: 'var(--space-xs)' }}>Top Services</h4>
                            {services.map(service => (
                                <Link
                                    key={service.title}
                                    to={`/services/${service.category.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{ textDecoration: 'none', color: 'var(--text-dark)', fontSize: 'var(--font-sm)', fontWeight: '600' }}
                                >
                                    {service.title}
                                </Link>
                            ))}
                        </div>

                        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 'var(--space-md)', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginTop: 'var(--space-sm)' }}>
                            {['About Us', 'Blog', 'Contact Us'].map(item => (
                                <Link
                                    key={item}
                                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{ textDecoration: 'none', color: 'var(--text-dark)', fontSize: 'var(--font-sm)', fontWeight: '700' }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Contact & Socials */}
                        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: 'var(--space-md)', marginTop: 'var(--space-sm)' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--font-xs)', color: 'var(--text-light)' }}>
                                    <FaPhoneAlt size={12} color="var(--primary-color)" />
                                    <span>+1 (234) 567-890</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: 'var(--font-xs)', color: 'var(--text-light)' }}>
                                    <FaEnvelope size={12} color="var(--primary-color)" />
                                    <span>info@brownsofts.com</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                <a href="#" style={{ color: 'var(--text-dark)' }}><FaFacebookF size={16} /></a>
                                <a href="#" style={{ color: 'var(--text-dark)' }}><FaTwitter size={16} /></a>
                                <a href="#" style={{ color: 'var(--text-dark)' }}><FaLinkedinIn size={16} /></a>
                                <a href="#" style={{ color: 'var(--text-dark)' }}><FaInstagram size={16} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
