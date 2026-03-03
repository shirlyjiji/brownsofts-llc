import React, { useEffect, useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Contact = () => {
    const location = useLocation();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const service = params.get('service');
        if (service) {
            setMessage(`I am interested in the ${service} service. Please provide more details.`);
        }
    }, [location.search]);

    return (
        <PageWrapper>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0B2A4A 0%, #07192D 100%)',
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
                        Get In <span style={{ color: 'var(--primary-color)' }}>Touch</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'var(--font-lg)', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}
                    >
                        Have a question or want to start a project? We'd love to hear from you.
                        Send us a message and our team will get back to you shortly.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section style={{ padding: 'var(--space-lg) 0', background: 'var(--white)' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'var(--font-2xl)', fontWeight: '900', marginBottom: '2rem', color: 'var(--text-dark)' }}>
                            Contact <span style={{ color: 'var(--primary-color)' }}>Details</span>
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '50px', height: '50px', background: '#f5f8fa', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '5px' }}>Phone</h4>
                                    <p style={{ color: 'var(--text-light)' }}>+1 (234) 567-890</p>
                                    <p style={{ color: 'var(--text-light)' }}>+1 (987) 654-321</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '50px', height: '50px', background: '#f5f8fa', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '5px' }}>Email</h4>
                                    <p style={{ color: 'var(--text-light)' }}>info@brownsofts.com</p>
                                    <p style={{ color: 'var(--text-light)' }}>support@brownsofts.com</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                <div style={{ width: '50px', height: '50px', background: '#FDF8F0', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-color)', flexShrink: 0 }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '5px' }}>Office</h4>
                                    <p style={{ color: 'var(--text-light)' }}>123 Design Street, Creative Block</p>
                                    <p style={{ color: 'var(--text-light)' }}>Silicon Valley, CA 94025</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ background: 'var(--white)', padding: '3rem', borderRadius: '30px', boxShadow: '0 20px 60px rgba(11, 42, 74, 0.08)', border: '1px solid var(--border-color)' }}
                    >
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-dark)' }}>First Name</label>
                                    <input type="text" placeholder="John" style={{ width: '100%', padding: '12px 20px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', background: '#F9F9F9' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-dark)' }}>Last Name</label>
                                    <input type="text" placeholder="Doe" style={{ width: '100%', padding: '12px 20px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', background: '#F9F9F9' }} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-dark)' }}>Email Address</label>
                                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '12px 20px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', background: '#F9F9F9' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: '700', marginBottom: '8px', color: 'var(--text-dark)' }}>Message</label>
                                <textarea placeholder="How can we help you?" rows="4" style={{ width: '100%', padding: '12px 20px', borderRadius: '10px', border: '1px solid var(--border-color)', outline: 'none', background: '#F9F9F9', resize: 'none' }}></textarea>
                            </div>
                            <button className="btn-touch" style={{ background: 'var(--primary-color)', color: 'white', width: '100%', gap: '10px' }}>
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </PageWrapper>
    );
};

export default Contact;
