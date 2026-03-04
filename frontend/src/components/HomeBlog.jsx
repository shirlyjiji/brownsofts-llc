import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import gridBg from '../assets/images/grid-bg.png';

const HomeBlog = () => {
    const posts = [
        {
            title: 'Top 10 Video Editing Trends in 2026',
            excerpt: 'Discover the latest techniques and styles that are dominating the video production industry this year.',
            category: 'Video Editing',
            date: 'May 15, 2026',
            author: 'John Doe',
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'How to Build a High-Converting Landing Page',
            excerpt: 'Learn the essential elements of web design that turn visitors into loyal customers.',
            category: 'Web Design',
            date: 'May 10, 2026',
            author: 'Jane Smith',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80'
        },
        {
            title: 'The Future of SEO: Beyond Keywords',
            category: 'SEO',
            excerpt: 'Explore how AI and user intent are changing the landscape of search engine optimization.',
            date: 'May 05, 2026',
            author: 'Mike Ross',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80'
        }
    ];

    return (
        <section style={{
            padding: '100px 0',
            backgroundImage: `url(${gridBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span style={{
                        display: 'inline-block',
                        fontSize: '14px',
                        fontWeight: '700',
                        letterSpacing: '3px',
                        color: 'var(--primary-color)',
                        textTransform: 'uppercase',
                        marginBottom: '16px'
                    }}>
                        Insights & Updates
                    </span>
                    <h2 style={{
                        fontSize: 'clamp(36px, 4vw, 48px)',
                        fontWeight: '800',
                        color: 'var(--secondary-color)',
                        margin: 0,
                        lineHeight: '1.2'
                    }}>
                        Latest <span style={{ color: 'var(--primary-color)' }}>Blog</span>
                    </h2>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                    gap: '32px'
                }}>
                    {posts.map((post, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -8 }}
                            style={{
                                background: 'white',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                                border: '1px solid rgba(0,0,0,0.06)',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease'
                            }}
                        >
                            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '16px',
                                    left: '16px',
                                    background: 'var(--primary-color)',
                                    color: '#fff',
                                    padding: '6px 14px',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    letterSpacing: '0.5px'
                                }}>
                                    {post.category}
                                </div>
                            </div>
                            <div style={{ padding: '28px 26px' }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '13px',
                                    color: '#888',
                                    marginBottom: '14px'
                                }}>
                                    <Calendar size={14} />
                                    {post.date}
                                </div>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '800',
                                    color: 'var(--secondary-color)',
                                    marginBottom: '12px',
                                    lineHeight: '1.4'
                                }}>
                                    {post.title}
                                </h3>
                                <p style={{
                                    fontSize: '15px',
                                    color: 'var(--text-dark)',
                                    lineHeight: '1.7',
                                    marginBottom: '20px'
                                }}>
                                    {post.excerpt}
                                </p>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontWeight: '700',
                                    fontSize: '14px',
                                    color: 'var(--primary-color)'
                                }}>
                                    Read More
                                    <ArrowRight size={18} />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBlog;
