import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import "./cta.css";

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="cta-bg-glow"></div>
            <div className="cta-grid-pattern"></div>
            
            <div className="container">
                <div className="cta-wrapper">
                    <motion.div 
                        className="cta-content-new"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <span className="cta-label">LET'S START SOMETHING</span>
                        <h2 className="cta-title-new">
                            Have a Project in Mind? <br />
                            <span>Let’s Build it Together.</span>
                        </h2>
                        <p className="cta-text-new">
                            Transform your ideas into digital reality. Our team of experts is ready 
                            to help you scale your business with cutting-edge technology and 
                            creative solutions.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="cta-actions-new"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="cta-card-new">
                            <h3>Ready to grow?</h3>
                            <p>Get a free consultation and project estimate today.</p>
                            <button className="cta-btn-primary">
                                Get Started Now <ArrowRight size={20} />
                            </button>
                        
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;