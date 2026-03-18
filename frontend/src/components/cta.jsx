import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import "./cta.css";
import { useTranslation } from "react-i18next";

const CTA = () => {
    const { t } = useTranslation();

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
                        <span className="cta-label">{t('cta.label')}</span>
                        <h2 className="cta-title-new">
                            {t('cta.title_part1')} <br />
                            <span>{t('cta.title_part2')}</span>
                        </h2>
                        <p className="cta-text-new">
                            {t('cta.text')}
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
                            <h3>{t('cta.ready_to_grow')}</h3>
                            <p>{t('cta.get_free_consultation')}</p>
                            <button className="cta-btn-primary">
                                {t('cta.get_started_now')} <ArrowRight size={20} />
                            </button>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;