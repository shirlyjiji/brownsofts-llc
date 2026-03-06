import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { serviceGigs, allCategories } from "./data/ServicesData";
import gridBg from "../assets/grid-bg.png";
import "./HomeServices.css";

const HomeServices = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("Video & Animation");

    const filteredServices = serviceGigs
        .filter((s) => s.category === activeCategory)
        .slice(0, 3);

    return (
        <section
            className="home-services-section"
            style={{ backgroundImage: `url(${gridBg})` }}
        >
            <div className="container">
                {/* Header */}
                <div className="services-header">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="services-subtitle"
                    >
                        Premium Solutions
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="services-title"
                    >
                        Top Featured <span>Services</span>
                    </motion.h2>
                </div>

                {/* Categories */}
                <div className="category-tabs">
                    {allCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`category-btn ${activeCategory === cat ? "active" : ""
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    <AnimatePresence mode="wait">
                        {filteredServices.map((service, index) => (
                            <motion.div
                                key={`${service.id}-${activeCategory}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="service-card"
                            >
                                <div className="service-image">
                                    <img src={service.image} alt={service.title} />
                                </div>

                                <div className="service-content">
                                    <div className="service-top">
                                        <img src={logo} alt="Logo" className="brand-logo" />

                                        <div className="rating">
                                            <Star size={12} fill="#ff5e14" color="#ff5e14" />
                                            <span>{service.rating}</span>
                                        </div>
                                    </div>

                                    <h3 className="service-title">{service.title}</h3>

                                    <div className="service-footer">
                                        <div className="price">
                                            <span className="from">From</span>
                                            <span className="amount">${service.price}</span>
                                        </div>

                                        <button
                                            className="get-started-btn"
                                            onClick={() =>
                                                navigate(
                                                    `/contact-us?service=${encodeURIComponent(
                                                        service.title
                                                    )}`
                                                )
                                            }
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* View All */}
                <div className="view-all-wrapper">
                    <button
                        className="view-all-btn"
                        onClick={() => navigate("/services")}
                    >
                        View All Services <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HomeServices;