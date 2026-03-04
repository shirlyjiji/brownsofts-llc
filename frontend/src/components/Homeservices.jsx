import React, { useState } from 'react';
import './HomeServices.css';
import { BsArrowRight } from 'react-icons/bs';

const HomeServices = () => {
    const [activeTab, setActiveTab] = useState('Video & Animation');

    const categories = [
        'Video & Animation', 'Web Design', 'Graphics & Design',
        'SEO & Marketing', 'Admin Support', 'Civil & Architectural'
    ];

    const services = [
        // VIDEO & ANIMATION
        {
            id: 1,
            category: 'Video & Animation',
            title: 'Story Infographic Video Editing',
            price: '199',
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 2,
            category: 'Video & Animation',
            title: 'Social Media Video Ads',
            price: '299',
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 3,
            category: 'Video & Animation',
            title: 'Travel & Documentary Editing',
            price: '349',
            image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400',
        },

        // WEB DESIGN
        {
            id: 4,
            category: 'Web Design',
            title: 'Responsive E-commerce UI/UX',
            price: '499',
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 5,
            category: 'Web Design',
            title: 'Corporate Landing Pages',
            price: '250',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 6,
            category: 'Web Design',
            title: 'Custom Portfolio Websites',
            price: '180',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=400',
        },

        // GRAPHICS & DESIGN
        {
            id: 7,
            category: 'Graphics & Design',
            title: 'Minimalist Brand Identity',
            price: '150',
            image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 8,
            category: 'Graphics & Design',
            title: 'Product Packaging Design',
            price: '200',
            image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=400',
        },

        // SEO & MARKETING
        {
            id: 9,
            category: 'SEO & Marketing',
            title: 'Advanced SEO Audit & Strategy',
            price: '300',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 10,
            category: 'SEO & Marketing',
            title: 'Social Media Management',
            price: '450',
            image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400',
        },

        // ADMIN SUPPORT
        {
            id: 11,
            category: 'Admin Support',
            title: 'Virtual Assistant Services',
            price: '120',
            image: 'https://images.unsplash.com/photo-1484981138541-3d074aa97716?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 12,
            category: 'Admin Support',
            title: 'Data Entry & Spreadsheet Management',
            price: '99',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=400',
        },

        // CIVIL & ARCHITECTURAL
        {
            id: 13,
            category: 'Civil & Architectural',
            title: '3D Floor Plan Rendering',
            price: '550',
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400',
        },
        {
            id: 14,
            category: 'Civil & Architectural',
            title: 'Interior Design Modeling',
            price: '400',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400',
        }
    ];

    return (
        <section className="featured-services py-5">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-5">
                    <h2 className="section-title">
                        Top Featured <span className="highlight">Services</span>
                    </h2>
                </div>

                {/* Category Tabs */}
                <div className="services-tabs d-flex flex-wrap justify-content-center gap-2 mb-5">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Service Cards Grid */}
                <div className="row g-4">
                    {services.filter(s => s.category === activeTab).map((service) => (
                        <div key={service.id} className="col-lg-4 col-md-6">
                            <div className="service-card shadow-sm">
                                <div className="card-img-wrapper">
                                    <img src={service.image} alt={service.title} />
                                </div>
                                <div className="card-content p-4">
                                    <div className="brand-tag">
                                        <span className="brand-dot"></span> BROWNSOFTS
                                    </div>
                                    <h4 className="service-title">{service.title}</h4>
                                    <hr />
                                    <div className="card-footer d-flex justify-content-between align-items-center">
                                        <div className="price-tag">
                                            <span className="from-text">From</span>
                                            <span className="price-val">${service.price}</span>
                                        </div>
                                        <button className="get-started-btn">
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;