import React, { useState, useEffect } from 'react';
import './Hero.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaUser, FaCheck, FaCalendarAlt } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { Container, Row, Col } from 'react-bootstrap';
// 2. Add Lucide icon imports for the categories section
import { Globe, PlayCircle, Palette, Zap, Layers } from 'lucide-react';
import './KineticSection.css';
import BrandCollaboration from './BrandCollaboration';
import AboutUs from './AboutUs';
import HomeServices from './Homeservices';
import Process from './Process';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import OurTeam from './OurTeam';
import Blog from './Blog';
import FAQContactSection from './FAQContactSection';
import CTA from './cta';
import { useTranslation } from 'react-i18next';


// Assets
import teamImage from '../assets/team-precision.png';
import aeLogo from '../assets/hero-brand/ae.webp';
import aiLogo from '../assets/hero-brand/ai.webp';
import drLogo from '../assets/hero-brand/dr.webp';
import fiLogo from '../assets/hero-brand/fi.webp';
import htmlLogo from '../assets/hero-brand/html.webp';
import prLogo from '../assets/hero-brand/pr.jpg';
import psLogo from '../assets/hero-brand/ps.png';
import seoLogo from '../assets/hero-brand/seo.jpg';



const Hero = () => {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            meta: t('hero.slides.0.meta'),
            title: t('hero.slides.0.title'),
            desc: t('hero.slides.0.desc'),
            focusLogo: psLogo,
        },
        {
            meta: t('hero.slides.1.meta'),
            title: t('hero.slides.1.title'),
            desc: t('hero.slides.1.desc'),
            focusLogo: htmlLogo,
        },
        {
            meta: t('hero.slides.2.meta'),
            title: t('hero.slides.2.title'),
            desc: t('hero.slides.2.desc'),
            focusLogo: seoLogo,
        }
    ];

    // Auto-advance slides every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === (slides.length - 1) ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const brandLogos = [
        { img: aiLogo, cls: "icon-1", alt: "Illustrator" },
        { img: aeLogo, cls: "icon-2", alt: "After Effects" },
        { img: psLogo, cls: "icon-3", alt: "Photoshop" },
        { img: fiLogo, cls: "icon-4", alt: "Figma" },
        { img: prLogo, cls: "icon-5", alt: "Premiere Pro" },
        { img: htmlLogo, cls: "icon-6", alt: "HTML5" },
        { img: drLogo, cls: "icon-7", alt: "DaVinci Resolve" },
        { img: seoLogo, cls: "icon-8", alt: "SEO" }
    ];

    return (
        <div>
            <section className="exact-hero">
                <div className="side-socials">
                    <a href="https://www.facebook.com/brownsofts"><FaFacebookF /></a>
                    <a href="https://x.com/brownsofts"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/company/brownsoftsllc/?viewAsMember=true"><FaLinkedinIn /></a>
                    <a href="https://www.instagram.com/brownsoftsllc/"><FaInstagram /></a>
                </div>

                <div className="container-fluid ">
                    <div className="row align-items-center">

                        {/* Left Content Column */}
                        <div className="col-lg-6 content-block" key={currentSlide}>
                            <div className="header-meta slide-up">
                                <span className="orange-line"></span>
                                <span className="meta-text">{slides[currentSlide].meta}</span>
                            </div>
                            <h1 className="main-title slide-up-delay-1">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="main-desc slide-up-delay-2">
                                {slides[currentSlide].desc}
                            </p>

                            <div className="dual-actions slide-up-delay-3">
                                <button className="btn-solid">{t('hero.get_started')} <BsArrowRight /></button>
                                <button className="btn-outline">{t('hero.contact_us')} <BsArrowRight /></button>
                            </div>

                            {/* Slide Indicators */}
                            <div className="slider-nav">
                                {slides.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(index)}
                                    ></span>
                                ))}
                            </div>
                        </div>

                        {/* Right Visual Column */}
                        <div className="col-lg-6 visual-block">
                            <div className="portal-container">
                                <div className="rotating-dashed"></div>
                                <div className="orange-portal-bg"></div>

                                <div className="main-image-circle">
                                    <img
                                        src={teamImage}
                                        alt="Team Collaboration"
                                        className={currentSlide % 2 === 0 ? "fade-zoom-1" : "fade-zoom-2"}
                                    />
                                </div>

                                {/* Orbiting Logos */}
                                {brandLogos.map((logo, index) => (
                                    <div key={index} className={`floating-logo-wrapper ${logo.cls} ${slides[currentSlide].focusLogo === logo.img ? 'highlight-logo' : ''}`}>
                                        <img src={logo.img} alt={logo.alt} className="brand-logo-img" />
                                    </div>
                                ))}


                            </div>

                        </div>

                    </div>
                    {/* Glassmorphism Stats Card */}
                    <div className="stats-card slide-up-delay-3">
                        <div className="stat-item">
                            <div className="stat-icon-circle icon-user-bg"><FaUser /></div>
                            <div className="stat-texts">
                                <span className="s-val">2876+</span>
                                <span className="s-lab">{t('hero.happy_clients')}</span>
                            </div>
                        </div>

                        <div className="stat-divider"></div>

                        <div className="stat-item">
                            <div className="stat-icon-circle icon-check-bg"><FaCheck /></div>
                            <div className="stat-texts">
                                <span className="s-val">4245+</span>
                                <span className="s-lab">{t('hero.completed_projects')}</span>
                            </div>
                        </div>

                        <div className="stat-divider"></div>

                        <div className="stat-item">
                            <div className="stat-icon-circle icon-cal-bg"><FaCalendarAlt /></div>
                            <div className="stat-texts">
                                <span className="s-val">15+</span>
                                <span className="s-lab">{t('hero.years_of_service')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <AboutUs />
            <HomeServices />
            <Process />
            <WhyChooseUs />
            <BrandCollaboration />
            <Testimonials />
            <OurTeam />
            <Blog />
            <FAQContactSection/>
            <CTA/>

        </div>
    );
};

export default Hero;