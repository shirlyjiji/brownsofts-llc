import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="testimonials-header"
                >
                    <span className="testimonials-subtitle">
                        Testimonials
                    </span>
                    <h2 className="testimonials-title">
                        What Our Clients Say About <span style={{ color: 'var(--primary-color)' }}>Brownsofts</span> Services
                    </h2>
                </motion.div>

                <div className="testimonials-grid">
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
                            className="testimonial-card"
                        >
                            <div className="testimonial-quote-icon">
                                <Quote size={48} color="var(--primary-color)" />
                            </div>
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} size={18} fill="var(--primary-color)" color="var(--primary-color)" />
                                ))}
                            </div>
                            <p className="testimonial-text">
                                &ldquo;{testimonial.quote}&rdquo;
                            </p>
                            <div className="testimonial-footer">
                                <div className="testimonial-avatar">
                                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div className="testimonial-info">
                                    <h4>{testimonial.name}</h4>
                                    <p>{testimonial.role} • {testimonial.company}</p>
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
