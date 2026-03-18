import React from 'react';
import { Cpu, Globe, Users, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import './WhyChooseUs.css';
import { useTranslation } from 'react-i18next';

const WhyChooseUs = () => {
    const { t } = useTranslation();

    const leftFeatures = [
        {
            title: t('why_choose.f1_title'),
            description: t('why_choose.f1_desc'),
            icon: <Cpu size={32} />
        },
        {
            title: t('why_choose.f2_title'),
            description: t('why_choose.f2_desc'),
            icon: <Globe size={32} />
        },
        {
            title: t('why_choose.f3_title'),
            description: t('why_choose.f3_desc'),
            icon: <Users size={32} />
        }
    ];

    const rightFeatures = [
        {
            title: t('why_choose.f4_title'),
            description: t('why_choose.f4_desc'),
            icon: <ShieldCheck size={32} />
        },
        {
            title: t('why_choose.f5_title'),
            description: t('why_choose.f5_desc'),
            icon: <Zap size={32} />
        },
        {
            title: t('why_choose.f6_title'),
            description: t('why_choose.f6_desc'),
            icon: <HeartHandshake size={32} />
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle-wrapper">
                        <span className="subtitle">{t('why_choose.sub_title')}</span>
                    </div>
                    <h2 className="main-title" dangerouslySetInnerHTML={{ __html: t('why_choose.main_title') }}></h2>
                </div>

                <div className="content-layout">
                    <div className="features-side left-side">
                        {leftFeatures.map((feature, index) => (
                            <div className="feature-item" key={index}>
                                <div className="feature-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                                <div className="feature-icon">{feature.icon}</div>
                            </div>
                        ))}
                    </div>

                    <div className="center-image-wrapper">
                        <div className="circle-image">
                            <img
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
                                alt="Tech Team"
                            />
                        </div>
                    </div>

                    <div className="features-side right-side">
                        {rightFeatures.map((feature, index) => (
                            <div className="feature-item" key={index}>
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;