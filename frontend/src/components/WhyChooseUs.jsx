import React from 'react';
import { Cpu, Globe, Users, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const leftFeatures = [
        {
            title: 'Expert Technology',
            description: 'Your dedicated technology partner for modern digital solutions.',
            icon: <Cpu size={32} />
        },
        {
            title: 'Global Reach',
            description: 'Sparking success through digital innovation on a global scale.',
            icon: <Globe size={32} />
        },
        {
            title: 'Client Centric',
            description: 'We prioritize your business needs with tailored strategies.',
            icon: <Users size={32} />
        }
    ];

    const rightFeatures = [
        {
            title: 'Secured Services',
            description: 'Reliable and safe administrative and technical management.',
            icon: <ShieldCheck size={32} />
        },
        {
            title: 'Quick Solutions',
            description: 'Fast and efficient delivery of high-quality digital assets.',
            icon: <Zap size={32} />
        },
        {
            title: '24/7 Support',
            description: 'Dedicated assistance to keep your operations running smoothly.',
            icon: <HeartHandshake size={32} />
        }
    ];

    return (
        <section className="why-choose-us">
            <div className="container">
                <div className="section-header">
                    <div className="subtitle-wrapper">
                        <span className="subtitle">Why Choose Brownsofts</span>
                    </div>
                    <h2 className="main-title">Powering Businesses with Scalable, <br /><span className="text-orange">Secure, and Smart Digital Solutions</span></h2>
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
