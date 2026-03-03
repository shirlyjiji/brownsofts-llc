import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { serviceGigs, allCategories } from '../data/servicesData';
import gridBg from '../assets/images/grid-bg.png';

const HomeServices = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('Video & Animation');

    const categories = allCategories;

    const filteredServices = serviceGigs.filter(s => s.category === activeCategory).slice(0, 3);

    return (
        <section style={{
            padding: 'var(--space-lg) 0',
            backgroundImage: `url(${gridBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#ffffff'
        }}>
            <div className="container">
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            color: 'var(--primary-color)',
                            fontWeight: '800',
                            letterSpacing: '3px',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '10px'
                        }}
                    >
                        Premium Solutions
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'var(--font-2xl)',
                            fontWeight: '900',
                            color: 'var(--text-dark)',
                            margin: 0
                        }}
                    >
                        Top Featured <span style={{ color: 'var(--primary-color)' }}>Services</span>
                    </motion.h2>
                </div>

                {/* Category Tabs */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '12px',
                    marginBottom: 'var(--space-md)',
                    flexWrap: 'wrap'
                }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="btn-touch"
                            style={{
                                background: activeCategory === cat ? 'var(--primary-color)' : 'transparent',
                                color: activeCategory === cat ? 'var(--white)' : 'var(--text-light)',
                                border: activeCategory === cat ? 'none' : '1px solid var(--border-color)',
                                fontSize: '13px',
                                padding: '10px 20px',
                                boxShadow: activeCategory === cat ? '0 10px 20px rgba(255, 106, 0, 0.3)' : 'none',
                                minHeight: 'auto',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 'var(--space-md)',
                    minHeight: '450px'
                }}>
                    <AnimatePresence mode="wait">
                        {filteredServices.map((service, index) => (
                            <motion.div
                                key={`${service.id}-${activeCategory}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                style={{
                                    background: 'var(--white)',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(11, 42, 74, 0.05)',
                                    border: '1px solid rgba(11, 42, 74, 0.08)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                {/* Image */}
                                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>

                                {/* Content */}
                                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                                        <img src={logo} alt="Brownsofts" style={{ height: '20px' }} />
                                        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', background: '#f5f8fa', padding: '4px 8px', borderRadius: '6px' }}>
                                            <Star size={12} fill="var(--primary-color)" color="var(--primary-color)" />
                                            <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--secondary-color)' }}>{service.rating}</span>
                                        </div>
                                    </div>

                                    <h3 style={{
                                        fontSize: '18px',
                                        fontWeight: '800',
                                        color: 'var(--text-dark)',
                                        marginBottom: '1.5rem',
                                        lineHeight: '1.4',
                                        minHeight: '2.5rem'
                                    }}>
                                        {service.title}
                                    </h3>

                                    <div style={{
                                        marginTop: 'auto',
                                        paddingTop: '1.25rem',
                                        borderTop: '1px solid var(--border-color)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <div>
                                            <span style={{ fontSize: '12px', color: 'var(--text-light)' }}>From </span>
                                            <span style={{ fontSize: '20px', fontWeight: '900', color: 'var(--primary-color)' }}>${service.price}</span>
                                        </div>
                                        <button
                                            className="btn-touch"
                                            onClick={() => navigate(`/contact-us?service=${encodeURIComponent(service.title)}`)}
                                            style={{
                                                background: 'var(--secondary-color)',
                                                color: 'var(--white)',
                                                fontSize: '13px',
                                                padding: '8px 20px',
                                                minHeight: 'auto'
                                            }}
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All Button */}
                <div style={{ textAlign: 'center', marginTop: 'var(--space-md)' }}>
                    <button
                        onClick={() => navigate('/services')}
                        className="btn-touch"
                        style={{
                            background: 'transparent',
                            color: 'var(--secondary-color)',
                            border: '2px solid var(--secondary-color)',
                            gap: '10px',
                            margin: '0 auto'
                        }}
                    >
                        View All Services <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
