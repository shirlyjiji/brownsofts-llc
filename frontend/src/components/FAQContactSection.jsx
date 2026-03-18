import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import './FAQContactSection.css';
import { useTranslation } from 'react-i18next';

const FAQContactSection = () => {
    const { t } = useTranslation();
    const [activeFaq, setActiveFaq] = useState(null);

    const faqData = t('faq.questions', { returnObjects: true });

    return (
        <section className="br-faq-contact-section">
            <Container>
                <Row className="g-5">
                    <Col lg={6}>
                        <span className="br-section-tag">{t('faq.sub_title')}</span>
                        <h2 className="display-6 fw-bold mb-5">{t('faq.main_title')}</h2>

                        <div className="br-faq-list">
                            {Array.isArray(faqData) && faqData.map((faq, i) => (
                                <div key={i} className="br-faq-item">
                                    <div
                                        className={`br-faq-header ${activeFaq === i ? 'active' : ''}`}
                                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    >
                                        <span>{faq.question}</span>
                                        <span className="fs-5">{activeFaq === i ? '−' : '+'}</span>
                                    </div>

                                    {/* Animated Content Area */}
                                    <div className={`faq-content ${activeFaq === i ? 'show' : ''}`}>
                                        <div className="p-4 br-faq-answer small text-muted">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Col>

                    {/* Right Column: Contact Form */}
                    <Col lg={6}>
                        <span className="br-section-tag">{t('contact.sub_title')}</span>
                        <h2 className="display-6 fw-bold mb-5">{t('contact.main_title')}</h2>
                        <form className="br-contact-form" onSubmit={(e) => e.preventDefault()}>
                            <Row className="g-3">
                                <Col md={6}>
                                    <input
                                        type="text"
                                        name="user_name"
                                        id="user_name"
                                        placeholder={t('contact.name_placeholder')}
                                        required
                                        className="br-input"
                                    />
                                </Col>
                                <Col md={6}>
                                    <input
                                        type="email"
                                        name="user_email"
                                        id="user_email"
                                        placeholder={t('contact.email_placeholder')}
                                        required
                                        className="br-input"
                                    />
                                </Col>
                                <Col md={6}>
                                    <input
                                        type="text"
                                        name="user_phone"
                                        id="user_phone"
                                        placeholder={t('contact.phone_placeholder')}
                                        className="br-input"
                                    />
                                </Col>
                                <Col md={6}>
                                    <select
                                        name="service_type"
                                        id="service_type"
                                        className="br-select"
                                    >
                                        <option value="">{t('contact.select_service')}</option>
                                        <option value="web-design">{t('categories.web_design')}</option>
                                        <option value="it-consulting">{t('categories.admin_support')}</option>
                                        <option value="digital-marketing">{t('categories.seo_marketing')}</option>
                                    </select>
                                </Col>
                                <Col xs={12}>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="4"
                                        placeholder={t('contact.message_placeholder')}
                                        className="br-textarea"
                                    ></textarea>
                                </Col>
                            </Row>
                            <button type="submit" className="br-submit-btn">
                                {t('contact.submit')} <ArrowRight size={18} />
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQContactSection;