import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Newsletter = () => {
    return (
        <section style={{
            padding: 'var(--space-lg) 0',
            background: 'linear-gradient(135deg, #0B2A4A 0%, #07192D 100%)',
            color: 'white',
            overflow: 'hidden',
            position: 'relative'
        }}>
            {/* Background Texture/Accent */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255, 106, 0, 0.05) 0%, transparent 70%)',
                zIndex: 0
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span style={{
                            color: 'var(--primary-color)',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            fontWeight: '700',
                            fontSize: '0.875rem',
                            display: 'block',
                            marginBottom: 'var(--space-xs)'
                        }}>
                            Stay Updated
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                            fontWeight: '900',
                            marginBottom: '20px',
                            lineHeight: '1.2'
                        }}>
                            Subscribe to Our <span style={{ color: 'var(--primary-color)' }}>Newsletter</span>
                        </h2>
                        <p style={{
                            fontSize: '1.1rem',
                            color: 'rgba(255,255,255,0.7)',
                            marginBottom: '40px',
                            lineHeight: '1.6'
                        }}>
                            Get the latest insights on digital trends and exclusive offers
                            delivered straight to your inbox.
                        </p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={(e) => e.preventDefault()}
                        style={{
                            display: 'flex',
                            gap: '15px',
                            background: 'rgba(255,255,255,0.05)',
                            padding: '8px',
                            borderRadius: '100px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            maxWidth: '600px',
                            margin: '0 auto',
                            flexWrap: 'wrap'
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            required
                            style={{
                                flex: 1,
                                background: 'transparent',
                                border: 'none',
                                padding: '15px 30px',
                                color: 'white',
                                fontSize: '1rem',
                                outline: 'none',
                                minWidth: '250px'
                            }}
                        />
                        <button
                            className="btn-touch"
                            style={{
                                background: 'var(--primary-color)',
                                color: 'white',
                                borderRadius: '100px',
                                padding: '15px 40px',
                                border: 'none',
                                fontSize: '1rem',
                                fontWeight: '800',
                                gap: '10px',
                                minHeight: 'auto'
                            }}
                        >
                            Subscribe <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
