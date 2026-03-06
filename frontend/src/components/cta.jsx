import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ctaBg from "../assets/bg.jpg";
import "./cta.css";

const CTA = () => {
    return (
        <section className="cta-section" style={{ backgroundImage: `url(${ctaBg})` }}>
            <div className="cta-container">

                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>
                        Ready to Grow Your <span>Business?</span>
                    </h2>

                    <p>
                        Let our expert team help you build powerful digital solutions that
                        attract customers, increase conversions, and scale your business.
                    </p>

                    <div className="cta-buttons">
                        <button className="cta-primary">
                            Get Started <ArrowRight size={18} />
                        </button>

                        <button className="cta-secondary">
                            Contact Us
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default CTA;