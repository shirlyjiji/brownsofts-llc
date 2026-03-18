import React from 'react';
import './Footer.css';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-column brand-col">
                        <div className="footer-logo">
                            <Link to="/">
                                <img src={logo} alt="Brownsofts Logo" />
                            </Link>
                        </div>
                        <p className="footer-desc">
                            {t('footer.desc')}
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.facebook.com/brownsofts" className="social-icon"><FiFacebook /></a>
                            <a href="https://x.com/brownsofts" className="social-icon"><FiTwitter /></a>
                            <a href="https://www.linkedin.com/company/brownsoftsllc/?viewAsMember=true" className="social-icon"><FiLinkedin /></a>
                            <a href="https://www.instagram.com/brownsoftsllc/" className="social-icon"><FiInstagram /></a>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('footer.quick_links')}</h3>
                        <ul className="footer-links">
                            <li><a href="#about">{t('footer.about_us')}</a></li>
                            <li><a href="/services">{t('footer.our_services')}</a></li>
                            <li><a href="#">{t('footer.portfolio')}</a></li>
                            <li><a href="#">{t('footer.latest_news')}</a></li>
                            <li><a href="#">{t('footer.contact')}</a></li>
                        </ul>
                    </div>

                    {/* IT Services Section */}
                    <div className="footer-column">
                        <h3 className="footer-title">{t('footer.it_services')}</h3>
                        <ul className="footer-links">
                            <li><a href="#">{t('footer.web_design_dev')}</a></li>
                            <li><a href="#">{t('footer.digital_marketing')}</a></li>
                            <li><a href="#">{t('footer.video_animation')}</a></li>
                            <li><a href="#">{t('footer.seo_optimization')}</a></li>
                            <li><a href="#">{t('footer.admin_support')}</a></li>
                        </ul>
                    </div>

                    {/* Get In Touch Section */}
                    <div className="footer-column contact-col">
                        <h3 className="footer-title">{t('footer.get_in_touch')}</h3>
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
                                <span>cs@brownsofts.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">
                    <p className="copyright">{t('footer.copyright')}</p>
                    <div className="footer-legal">
                        <a href="#">{t('footer.privacy_policy')}</a>
                        <a href="#">{t('footer.terms_conditions')}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;