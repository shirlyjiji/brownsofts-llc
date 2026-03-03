import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div style={{
            marginBottom: '15px',
            border: '1px solid #f0f0f0',
            borderRadius: '16px',
            overflow: 'hidden',
            background: isOpen ? '#FDF8F0' : '#fff',
            transition: 'all 0.3s ease'
        }}>
            <button
                onClick={onClick}
                style={{
                    width: '100%',
                    padding: '24px 30px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer'
                }}
            >
                <span style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: isOpen ? 'var(--primary-color)' : '#000',
                    transition: 'color 0.3s'
                }}>
                    {question}
                </span>
                <div style={{
                    color: isOpen ? 'var(--primary-color)' : '#999',
                    transition: 'color 0.3s'
                }}>
                    {isOpen ? <Minus size={20} strokeWidth={3} /> : <Plus size={20} strokeWidth={3} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div style={{
                            padding: '0 30px 24px',
                            color: '#666',
                            fontSize: '16px',
                            lineHeight: '1.7'
                        }}>
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer a wide range of premium digital services including professional Video Editing, Web Design & Development, Graphics & Brand Identity, SEO & Digital Marketing, and Administrative Support."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity. Simple video edits or graphic tasks can take 24-72 hours, while full website developments typically range from 2-4 weeks. We always provide a clear timeline before starting."
        },
        {
            question: "Do you offer custom pricing for larger projects?",
            answer: "Absolutely. While we have starting prices for standard services, we specialize in custom enterprise solutions. Contact us for a tailored quote based on your specific requirements."
        },
        {
            question: "How do I get started with a project?",
            answer: "Simply click any 'Get Started' button or visit our 'Services' page to select a category. You can also use the contact form to reach out directly with your project details."
        },
        {
            question: "What is your revision policy?",
            answer: "Client satisfaction is our priority. Most of our service tiers include 2-3 rounds of revisions to ensure the final product aligns perfectly with your vision."
        }
    ];

    return (
        <section style={{ padding: 'var(--space-lg) 0', background: '#fff' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-md)' }}>
                    <span style={{
                        color: 'var(--primary-color)',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        fontWeight: '700',
                        fontSize: '0.875rem',
                        display: 'block',
                        marginBottom: 'var(--space-xs)'
                    }}>
                        Got Questions?
                    </span>
                    <h2 style={{
                        fontSize: 'var(--font-2xl)',
                        fontWeight: '900',
                        color: '#000',
                        margin: 0
                    }}>
                        Frequently Asked <span style={{ color: 'var(--primary-color)' }}>Questions</span>
                    </h2>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
