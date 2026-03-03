import React from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: 'Top 10 Video Editing Trends in 2026',
            excerpt: 'Discover the latest techniques and styles that are dominating the video production industry this year.',
            date: 'May 15, 2026',
            author: 'John Doe',
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=500&q=80'
        },
        {
            title: 'How to Build a High-Converting Landing Page',
            excerpt: 'Learn the essential elements of web design that turn visitors into loyal customers.',
            date: 'May 10, 2026',
            author: 'Jane Smith',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80'
        },
        {
            title: 'The Future of SEO: Beyond Keywords',
            excerpt: 'Explore how AI and user intent are changing the landscape of search engine optimization.',
            date: 'May 05, 2026',
            author: 'Mike Ross',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=500&q=80'
        }
    ];

    return (
        <PageWrapper>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #0D0D0D 0%, #1A1510 100%)',
                padding: '120px 0 80px',
                textAlign: 'center',
                color: 'white'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: 'var(--font-hero)', fontWeight: '900', marginBottom: 'var(--space-sm)' }}
                    >
                        Our <span style={{ color: 'var(--primary-color)' }}>Blog</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ fontSize: 'var(--font-lg)', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}
                    >
                        Insights, tips, and trends from our expert team to help your business grow.
                    </motion.p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section style={{ padding: 'var(--space-lg) 0', background: 'var(--white)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        {posts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    background: 'var(--white)',
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
                                    border: '1px solid var(--border-color)',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ height: '220px', overflow: 'hidden' }}>
                                    <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.8125rem', color: 'var(--text-light)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <Calendar size={14} /> {post.date}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                            <User size={14} /> {post.author}
                                        </div>
                                    </div>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-dark)', lineHeight: '1.4' }}>
                                        {post.title}
                                    </h3>
                                    <p style={{ color: 'var(--text-light)', fontSize: '0.9375rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                        {post.excerpt}
                                    </p>
                                    <button style={{
                                        marginTop: 'auto',
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--primary-color)',
                                        fontWeight: '800',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        cursor: 'pointer',
                                        padding: 0,
                                        fontSize: '0.875rem'
                                    }}>
                                        Read More <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </PageWrapper>
    );
};

export default Blog;
