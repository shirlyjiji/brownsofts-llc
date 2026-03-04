import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRight } from 'lucide-react';
import './FAQContactSection.css';

const FAQContactSection = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const faqData = [
        {
            question: "Do I need coding knowledge to manage my website?",
            answer: "No! Our CMS platforms are designed for ease of use. With intuitive drag-and-drop interfaces, you can manage your content without any tech background."
        },
        {
            question: "What is included in your web design packages?",
            answer: "Our packages include a free domain, secure SSL certificate, free hosting, and 30 days of free updates to ensure your site stays current."
        },
        {
            question: "How does your digital marketing drive results?",
            answer: "We use a results-driven approach combining data-driven campaigns, SEO optimization, and social media strategies to increase brand awareness."
        },
        {
            question: "Do you provide ongoing technical support?",
            answer: "Yes, we offer 24/7 email and chat support. Our team is committed to unmatched client satisfaction and long-term partnerships."
        },
        {
            question: "Can you help with e-commerce maintenance?",
            answer: "Absolutely. We handle software updates, security monitoring, plugin installations, and performance optimization for flawlessly functioning online stores."
        }
    ];

    return (
        <section className="br-faq-contact-section">
            <Container>
                <Row className="g-5">
                    <Col lg={6}>
                        <span className="br-section-tag">FAQs</span>
                        <h2 className="display-6 fw-bold mb-5">Frequently Asked Question</h2>

                        <div className="br-faq-list">
                            {faqData.map((faq, i) => (
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
                        <span className="br-section-tag">Get In Touch</span>
                        <h2 className="display-6 fw-bold mb-5">Make An Free IT Consultant</h2>
                        <form className="br-contact-form" onSubmit={(e) => e.preventDefault()}>
                            <Row className="g-3">
                                <Col md={6}><input type="text" placeholder="Your Name*" required className="br-input" /></Col>
                                <Col md={6}><input type="email" placeholder="Mail*" required className="br-input" /></Col>
                                <Col md={6}><input type="text" placeholder="Your Phone" className="br-input" /></Col>
                                <Col md={6}>
                                    <select className="br-select">
                                        <option>Select Service</option>
                                        <option>Web Design</option>
                                        <option>IT Consulting</option>
                                        <option>Digital Marketing</option>
                                    </select>
                                </Col>
                                <Col xs={12}><textarea rows="4" placeholder="Your Message*" className="br-textarea"></textarea></Col>
                            </Row>
                            <button type="submit" className="br-submit-btn">
                                Submit Now <ArrowRight size={18} />
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FAQContactSection;
