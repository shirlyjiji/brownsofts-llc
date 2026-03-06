import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ArrowLeft, Search as SearchIcon, ArrowRight } from 'lucide-react';
import './Services.css';
import logo from '../assets/logo.png';
import { serviceGigs, allCategories } from './data/ServicesData';

const Services = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const searchTermFromUrl = queryParams.get('search') || '';

    const getCategoryFromSlug = (slug) => {
        if (!slug) return 'all';
        const mapping = {
            'video-editing': 'Video & Animation',
            'video-&-animation': 'Video & Animation',
            'video-animation': 'Video & Animation',
            'graphic-design': 'Graphics & Design',
            'graphics-&-design': 'Graphics & Design',
            'graphics-design': 'Graphics & Design',
            'web-design-&-development': 'Web Design',
            'web-design-development': 'Web Design',
            'web-design': 'Web Design',
            'digital-marketing': 'SEO & Marketing',
            'seo-&-marketing': 'SEO & Marketing',
            'seo-marketing': 'SEO & Marketing',
            'civil-&-architectural': 'Civil & Architectural',
            'civil-architectural': 'Civil & Architectural',
            'admin-support': 'Admin Support'
        };
        return mapping[slug] || null;
    };

    const [selectedCategory, setSelectedCategory] = useState(getCategoryFromSlug(category));
    const [selectedSkill, setSelectedSkill] = useState('');
    const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('Anytime');
    const [maxPrice, setMaxPrice] = useState(1500);
    const [selectedRating, setSelectedRating] = useState('all');
    const [activeSearch, setActiveSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('Sort By');

    const servicesPerPage = 6;

    useEffect(() => {
        setSelectedCategory(getCategoryFromSlug(category));
        setCurrentPage(1);
    }, [category]);

    const categoriesList = ['All', ...allCategories];

    const filteredServices = serviceGigs.filter(gig => {
        const matchesCategory = selectedCategory === 'all' || gig.category === selectedCategory;
        const matchesSearch =
            !searchTermFromUrl ||
            gig.title.toLowerCase().includes(searchTermFromUrl.toLowerCase());

        const matchesPrice = gig.price <= maxPrice;
        const matchesRating = selectedRating === 'all' || gig.rating >= parseFloat(selectedRating);
        const matchesSkill = !selectedSkill || gig.skill === selectedSkill;
        const matchesDelivery =
            selectedDeliveryTime === 'Anytime' ||
            gig.deliveryTime === selectedDeliveryTime;

        return matchesCategory && matchesSearch && matchesPrice && matchesRating && matchesSkill && matchesDelivery;
    });

    

    const sortedServices = [...filteredServices].sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        if (sortBy === 'Rating: High to Low') return b.rating - a.rating;
        return 0;
    });

    const currentServices = sortedServices.slice((currentPage - 1) * servicesPerPage, currentPage * servicesPerPage);
    const totalPages = Math.ceil(sortedServices.length / servicesPerPage);

    const handleReset = () => {
        setSelectedSkill('');
        setSelectedDeliveryTime('Anytime');
        setMaxPrice(1500);
        setSelectedRating('all');
        navigate('/services');
    };

    return (
        <div className="services-page">
            

            <div className="services-container mt-5">
                <div className="services-page-layout">

                    {/* Sidebar */}
                    <aside className="services-sidebar">

                        {/* Categories */}
                        <div className="sidebar-section">
                            <h4 className="sidebar-heading">Categories</h4>
                            <ul className="sidebar-category-list">
                                {categoriesList.map(cat => (
                                    <li key={cat}>
                                        <button
                                            className={`sidebar-category-btn ${selectedCategory === (cat === 'All' ? 'all' : cat) ? 'active' : ''}`}
                                            onClick={() => {
                                                const slug = cat === 'All' ? '' : cat.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
                                                navigate(slug ? `/services/${slug}` : '/services');
                                            }}
                                        >
                                            <ArrowRight size={14} /> {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills */}
                        <div className="sidebar-section">
                            <h4 className="sidebar-heading">Skills</h4>
                            <select
                                className="sidebar-dropdown"
                                value={selectedSkill}
                                onChange={(e) => setSelectedSkill(e.target.value)}
                            >
                                <option value="">All Skills</option>
                                <option value="Video Editing">Video Editing</option>
                                <option value="Logo Design">Logo Design</option>
                                <option value="React Development">React Development</option>
                                <option value="SEO Optimization">SEO Optimization</option>
                            </select>
                        </div>

                        {/* Delivery */}
                        <div className="sidebar-section">
                            <h4 className="sidebar-heading">Delivery Time</h4>
                            <select
                                className="sidebar-dropdown"
                                value={selectedDeliveryTime}
                                onChange={(e) => setSelectedDeliveryTime(e.target.value)}
                            >
                                <option>Anytime</option>
                                <option>Up to 24 hours</option>
                                <option>Up to 3 days</option>
                                <option>Up to 7 days</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div className="sidebar-section">
                            <h4 className="sidebar-heading">Max Price: ${maxPrice}</h4>
                            <input
                                type="range"
                                min="0"
                                max="2000"
                                step="50"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                                className="sidebar-slider"
                            />
                        </div>

                        {/* Rating */}
                        <div className="sidebar-section">
                            <h4 className="sidebar-heading">Rating</h4>
                            {['all', '5', '4', '3'].map(rating => (
                                <label key={rating} className="sidebar-radio">
                                    <input
                                        type="radio"
                                        checked={selectedRating === rating}
                                        onChange={() => setSelectedRating(rating)}
                                    />
                                    {rating === 'all' ? 'All Ratings' : `${rating} Stars & Up`}
                                </label>
                            ))}
                        </div>

                        <button className="sidebar-reset-btn" onClick={handleReset}>
                            Reset Filters
                        </button>
                    </aside>

                    {/* Main */}
                    <main className="services-main">
                        <div className="services-grid">
                            {currentServices.map(gig => (
                                <motion.div key={gig.id} className="service-card" whileHover={{ y: -6 }}>
                                    <img src={gig.image} alt={gig.title} className="service-card-img" />
                                    <div className="service-card-body">
                                        <div className="service-card-header">
                                            <img src={logo} alt="brand" className="service-card-logo" />
                                            <span><Star size={14} fill="#ffb400" /> {gig.rating}</span>
                                        </div>
                                        <h3>{gig.title}</h3>
                                        <div className="service-card-footer">
                                            <span className="price">${gig.price}</span>
                                            <button className="buy-btn">
                                                <ShoppingCart size={14} /> Purchase
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="services-pagination">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        className={currentPage === i + 1 ? 'active' : ''}
                                        onClick={() => setCurrentPage(i + 1)}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                        )}
                    </main>

                </div>
            </div>
        </div>
    );
};

export default Services;