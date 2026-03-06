import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import './Blog.css';
import gridBg from "../assets/grid-bg.png";

const Blog = () => {
    const posts = [
        {
            title: 'Top 10 Video Editing Trends in 2026',
            excerpt: 'Discover the latest techniques and styles that are dominating the video production industry this year.',
            date: 'May 15, 2026',
            author: 'John Doe',
            image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'How to Build a High-Converting Landing Page',
            excerpt: 'Learn the essential elements of web design that turn visitors into loyal customers.',
            date: 'May 10, 2026',
            author: 'Jane Smith',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
        },
        {
            title: 'The Future of SEO: Beyond Keywords',
            excerpt: 'Explore how AI and user intent are changing the landscape of search engine optimization.',
            date: 'May 05, 2026',
            author: 'Mike Ross',
            image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80'
        }
    ];

    return (
        <div>
            {/* Hero Section */}
            <section className="blog-hero" style={{ backgroundImage: `url(${gridBg})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="blog-title"
                    >
                        Our <span>Blog</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="blog-subtitle"
                    >
                        Insights, tips, and trends from our expert team to help your business grow.
                    </motion.p>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="blog-section" style={{ backgroundImage: `url(${gridBg})` , backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container">
                    <div className="blog-grid">
                        {posts.map((post, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="blog-card"
                            >
                                <div className="blog-image">
                                    <img src={post.image} alt={post.title} />
                                </div>

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <div>
                                            <Calendar size={14} /> {post.date}
                                        </div>
                                        <div>
                                            <User size={14} /> {post.author}
                                        </div>
                                    </div>

                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>

                                    <button className="read-more">
                                        Read More <ArrowRight size={16} />
                                    </button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Blog;