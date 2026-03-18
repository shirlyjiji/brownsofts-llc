import React from 'react';
import './AboutUs.css';
import { BsArrowRight, BsCheckCircleFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
    const { t } = useTranslation();
    const mainImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80";
    const secondaryImg = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80";
    
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image-content">
                            <img src={mainImg} alt="About Us" className="about-main-img" />
                            <div className="about-secondary-img-wrapper">
                                <img src={secondaryImg} alt="Team Collaboration" className="about-secondary-img" />
                            </div>
                            <div className="experience-badge">
                                <span className="exp-num">{t('about.years')}</span>
                                <span className="exp-text" dangerouslySetInnerHTML={{ __html: t('about.exp_text') }}></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text-content">
                            <span className="sub-title">{t('about.sub_title')}</span>
                            <h2 className="main-title">{t('about.main_title')}</h2>
                            <p className="description">
                                {t('about.description')}
                            </p>
                            
                            <ul className="about-features">
                                <li><BsCheckCircleFill className="check-icon" /> {t('about.feature1')}</li>
                                <li><BsCheckCircleFill className="check-icon" /> {t('about.feature2')}</li>
                                <li><BsCheckCircleFill className="check-icon" /> {t('about.feature3')}</li>
                                <li><BsCheckCircleFill className="check-icon" /> {t('about.feature4')}</li>
                            </ul>

                            <button className="btn-solid">{t('about.learn_more')} <BsArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;