import React from 'react';
import './Hero.css';
import {
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobeaftereffects,
    SiFigma,
    SiHtml5
} from 'react-icons/si';
import { BsBarChartFill } from 'react-icons/bs';

const Hero = () => {
    return (
        <section className="hero-section">
            {/* Background Shapes */}
            <div className="bg-shape-1"></div>
            <div className="bg-shape-2"></div>
            <div className="bg-shape-3"></div>

            <div className="container position-relative h-100 p-0">
                <div className="row align-items-center h-100 m-0">

                    {/* Left Text Column */}
                    <div className="col-lg-6 hero-text-col pt-5 pt-lg-0">
                        <h1 className="hero-heading">Brownsofts LLC</h1>
                        <p className="hero-subheading text-muted">Sparking Global Success in the Digital World</p>

                        <div className="search-box mt-4">
                            <input
                                type="text"
                                className="form-control px-4"
                                placeholder="e. g. Mobile application"
                            />
                            <button className="btn btn-search">Search Now</button>
                        </div>

                        <div className="popular-tags mt-4">
                            <strong>Popular Tags :</strong>
                            <span className="text-muted"> Graphics & Design , Video & Animation , Digital Marketing , Web Design & Development , Admin Support</span>
                        </div>
                    </div>

                    {/* Right Image Column */}
                    <div className="col-lg-6 position-relative hero-image-col mt-5 mt-lg-0">
                        <div className="image-wrapper">
                            {/* Central colored circle */}
                            <div className="peach-circle"></div>

                            {/* Replace src with actual person image when available */}
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                                alt="Professional woman with laptop"
                                className="hero-person-img"
                            />

                            {/* Floating Icons */}
                            <div className="floating-icon icon-ai">
                                <SiAdobeillustrator />
                            </div>
                            <div className="floating-icon icon-figma">
                                <SiFigma />
                            </div>
                            <div className="floating-icon icon-ps">
                                <SiAdobephotoshop />
                            </div>
                            <div className="floating-icon icon-pr">
                                <SiAdobepremierepro />
                            </div>
                            <div className="floating-icon icon-seo">
                                <BsBarChartFill color="#fff" /><span>SEO</span>
                            </div>
                            <div className="floating-icon icon-ae">
                                <SiAdobeaftereffects />
                            </div>
                            <div className="floating-icon icon-html5">
                                <SiHtml5 />
                            </div>

                            {/* Stats Card */}
                            <div className="stats-card">
                                <p className="stats-title mb-3">BrownSofts Have</p>

                                <div className="stat-item">
                                    <div className="stat-icon-wrapper bg-blue-light">
                                        <span>🌟</span>
                                    </div>
                                    <div className="stat-text">
                                        <h4>2876+</h4>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>

                                <div className="stat-item">
                                    <div className="stat-icon-wrapper bg-red-light">
                                        <span>🎯</span>
                                    </div>
                                    <div className="stat-text">
                                        <h4>4245+</h4>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>

                                <div className="stat-item">
                                    <div className="stat-icon-wrapper bg-yellow-light">
                                        <span>🏆</span>
                                    </div>
                                    <div className="stat-text">
                                        <h4>15+</h4>
                                        <p>Years of Service</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
