import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const Footer = () => {
    const slugify = (text) => text.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');

    return (
        <footer style={{ background: '#0B2A4A', color: '#B5B5B5', padding: 'clamp(3rem, 10vw, 5rem) 0 2.5rem', borderTop: '1px solid rgba(255, 106, 0, 0.1)' }}>
            <style>
                {`
                    .footer-grid {
                        display: grid;
                        grid-template-columns: 1.5fr 1fr 1fr 1fr;
                        gap: clamp(1.5rem, 5vw, 4rem);
                        margin-bottom: 3.75rem;
                    }
                    @media (max-width: 1023px) {
                        .footer-grid {
                            grid-template-columns: 1fr 1fr;
                            gap: 2.5rem;
                        }
                    }
                    @media (max-width: 480px) {
                        .footer-grid {
                            grid-template-columns: 1fr;
                            gap: 2.5rem;
                            text-align: center;
                        }
                        .footer-socials {
                            justify-content: center !important;
                        }
                    }
                    .footer-link {
                        color: inherit;
                        text-decoration: none;
                        font-size: var(--font-sm);
                        transition: color 0.2s;
                    }
                    .footer-link:hover {
                        color: var(--primary-color);
                    }
                    .social-icon {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        background: rgba(255, 106, 0, 0.05);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid rgba(255, 106, 0, 0.15);
                        color: #B5B5B5;
                        transition: all 0.3s ease;
                        text-decoration: none;
                    }
                    .social-icon:hover {
                        background: var(--primary-color);
                        color: var(--white);
                        transform: translateY(-3px);
                        box-shadow: 0 5px 15px rgba(255, 106, 0, 0.3);
                    }
                `}
            </style>
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="Brownsofts Logo" style={{ height: '35px', marginBottom: '1.5rem' }} />
                        </Link>
                        <p style={{ lineHeight: '1.7', fontSize: 'var(--font-sm)' }}>
                            Sparking Global Success in the Digital World. We provide premium services tailored to your business needs, delivering excellence with luxury.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontWeight: '700', fontSize: 'var(--font-base)' }}>Categories</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {['Graphics & Design', 'Video & Animation', 'Web Design', 'SEO & Marketing'].map(cat => (
                                <li key={cat} style={{ marginBottom: '12px' }}>
                                    <Link to={`/services/${slugify(cat)}`} className="footer-link">{cat}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontWeight: '700', fontSize: 'var(--font-base)' }}>Support</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {[
                                { name: 'Help Center', path: '#' },
                                { name: 'Terms of Service', path: '#' },
                                { name: 'Privacy Policy', path: '#' },
                                { name: 'Contact Us', path: '/contact-us' }
                            ].map(item => (
                                <li key={item.name} style={{ marginBottom: '12px' }}>
                                    <Link to={item.path} className="footer-link">{item.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontWeight: '700', fontSize: 'var(--font-base)' }}>Connect</h4>
                        <div className="footer-socials" style={{ display: 'flex', gap: '0.75rem' }}>
                            <a href="#" className="social-icon"><FaFacebookF size={16} /></a>
                            <a href="#" className="social-icon"><FaTwitter size={16} /></a>
                            <a href="#" className="social-icon"><FaLinkedinIn size={16} /></a>
                            <a href="#" className="social-icon"><FaInstagram size={16} /></a>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '2.5rem 0 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: 'var(--font-xs)' }}>
                    <p>© {new Date().getFullYear()} Brownsofts LLC. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
