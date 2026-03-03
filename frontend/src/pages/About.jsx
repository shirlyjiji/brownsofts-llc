import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Target } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Happy Clients', value: '500+', icon: <Users size={24} /> },
        { label: 'Projects Completed', value: '1200+', icon: <CheckCircle size={24} /> },
        { label: 'Years Experience', value: '10+', icon: <Award size={24} /> },
        { label: 'Awards Won', value: '25+', icon: <Target size={24} /> }
    ];

    return (
        <PageWrapper>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0D0D0D 0%, #1A1510 100%)',
                padding: '120px 0 80px',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: 'var(--font-hero)', fontWeight: '900', marginBottom: 'var(--space-sm)' }}
                    >
                        About <span style={{ color: 'var(--primary-color)' }}>Brownsofts</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'var(--font-lg)', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}
                    >
                        We are a leading digital agency dedicated to transforming businesses through
                        innovative design, technology, and strategic marketing.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: 'var(--space-lg) 0', background: 'var(--white)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'var(--font-2xl)', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                            Our <span style={{ color: 'var(--primary-color)' }}>Mission</span>
                        </h2>
                        <p style={{ fontSize: 'var(--font-base)', color: 'var(--text-light)', lineHeight: '1.8', marginBottom: '2rem' }}>
                            At Brownsofts, our mission is to empower businesses with cutting-edge digital solutions
                            that drive growth and success. We believe in the power of creativity and technology
                            to build a better future for our clients and the communities they serve.
                        </p>
                        <p style={{ fontSize: 'var(--font-base)', color: 'var(--text-light)', lineHeight: '1.8' }}>
                            Founded on the principles of excellence and integrity, we have grown into a
                            full-service agency that handles everything from video production and graphic design
                            to complex web development and global SEO strategies.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{
                            background: '#FDF8F0',
                            padding: '3rem',
                            borderRadius: '30px',
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '2rem'
                        }}
                    >
                        {stats.map((stat, index) => (
                            <div key={index} style={{ textAlign: 'center' }}>
                                <div style={{ color: 'var(--primary-color)', marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                                    {stat.icon}
                                </div>
                                <h3 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text-dark)', marginBottom: '5px' }}>{stat.value}</h3>
                                <p style={{ fontSize: '0.875rem', color: 'var(--text-light)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </PageWrapper>
    );
};

export default About;
