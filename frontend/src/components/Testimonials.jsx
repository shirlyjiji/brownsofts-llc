import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
    const { t } = useTranslation();
    const testimonials = t('testimonials.items', { returnObjects: true });

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
                        {t('testimonials.subtitle')}
                    </span>
                    <h2 className="testimonials-title">
                        {t('testimonials.title_part1')}<span style={{ color: 'var(--primary-color)' }}>{t('testimonials.title_part2')}</span>{t('testimonials.title_part3')}
                    </h2>
                </motion.div>

                <div className="testimonials-grid">
                    {Array.isArray(testimonials) && testimonials.map((testimonial, i) => (
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
                                {[...Array(5)].map((_, j) => (
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