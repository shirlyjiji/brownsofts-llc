import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section style={{ padding: '100px 0', background: '#F8F9FA', overflow: 'hidden' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span style={{
                        display: 'inline-block',
                        fontSize: '14px',
                        fontWeight: '700',
                        letterSpacing: '3px',
                        color: 'var(--primary-color)',
                        textTransform: 'uppercase',
                        marginBottom: '16px'
                    }}>
                        Testimonials
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(36px, 4vw, 52px)',
                        fontWeight: '800',
                        color: '#000',
                        margin: 0,
                        lineHeight: '1.2'
                    }}>
                        What Our Clients Say About <span style={{ color: 'var(--primary-color)' }}>Brownsofts</span> Services
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '32px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {[
                        { quote: "Brownsofts transformed our brand's digital presence. Their video editing and web design team delivered beyond our expectations. Professional, creative, and always on time.", name: 'Sarah Mitchell', role: 'Marketing Director', company: 'Luxury Brands Inc.', rating: 5 },
                        { quote: "Outstanding service from start to finish. The 3D architectural renderings they produced for our project helped us secure major investors. Truly world-class talent.", name: 'James Chen', role: 'CEO', company: 'Urban Development Co.', rating: 5 },
                        { quote: "We've partnered with Brownsofts for over two years. Their consistency, creativity, and commitment to excellence make them our go-to for all digital solutions.", name: 'Emily Rodriguez', role: 'Creative Lead', company: 'Studio Nova', rating: 5 }
                    ].map((testimonial, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            style={{
                                background: '#FFF',
                                border: '1px solid rgba(255, 106, 0, 0.2)',
                                borderRadius: '20px',
                                padding: '40px 36px',
                                position: 'relative',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '24px',
                                left: '36px',
                                opacity: 0.15
                            }}>
                                <Quote size={48} color="var(--primary-color)" />
                            </div>
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} size={18} fill="var(--primary-color)" color="var(--primary-color)" />
                                ))}
                            </div>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: '1.8',
                                color: '#333',
                                marginBottom: '28px',
                                fontStyle: 'italic',
                                position: 'relative',
                                zIndex: 1
                            }}>
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                paddingTop: '20px',
                                borderTop: '1px solid rgba(0,0,0,0.08)'
                            }}>
                                <div style={{
                                    width: '52px',
                                    height: '52px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--primary-color) 0%, #C35200 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    fontWeight: '800',
                                    fontSize: '18px'
                                }}>
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <div style={{ fontWeight: '700', fontSize: '16px', color: '#000' }}>{testimonial.name}</div>
                                    <div style={{ fontSize: '13px', color: 'var(--primary-color)' }}>{testimonial.role} • {testimonial.company}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
