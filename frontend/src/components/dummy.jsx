import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ArrowLeft, Search as SearchIcon, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Footer from '../components/Footer';
import logo from '../assets/images/logo.png';
import { serviceGigs, allCategories } from '../data/servicesData';

const Services = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // Get search query from URL
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('search') || '';

    // Get the mapped category name from URL slug
    const getCategoryFromSlug = (slug) => {
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

    const mappedCategory = category ? getCategoryFromSlug(category) : null;
    const [selectedCategory, setSelectedCategory] = useState(mappedCategory || 'all');
    const [selectedSkill, setSelectedSkill] = useState('');
    const [selectedDeliveryTime, setSelectedDeliveryTime] = useState('Anytime');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2000);
    const [selectedPricingType, setSelectedPricingType] = useState('all');
    const [selectedRating, setSelectedRating] = useState('all');
    const [activeSearch, setActiveSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('Sort By');
    const servicesPerPage = 6;

    useEffect(() => {
        if (category) {
            const mapped = getCategoryFromSlug(category);
            setSelectedCategory(mapped || 'all');
        } else {
            setSelectedCategory('all');
        }
    }, [category]);

    // Use centralized categories
    const categoriesList = ['All', ...allCategories];

    // Filter services
    const filteredServices = serviceGigs.filter(gig => {
        const matchesCategory = selectedCategory === 'all' || gig.category === selectedCategory;
        const searchToUse = searchTerm || activeSearch;
        const matchesSearch = !searchToUse ||
            gig.title.toLowerCase().includes(searchToUse.toLowerCase()) ||
            gig.category.toLowerCase().includes(searchToUse.toLowerCase());
        const matchesPrice = gig.price >= minPrice && gig.price <= maxPrice;
        const matchesRating = selectedRating === 'all' || gig.rating >= parseFloat(selectedRating);

        return matchesCategory && matchesSearch && matchesPrice && matchesRating;
    });

    // Apply Sorting
    const sortedServices = [...filteredServices].sort((a, b) => {
        if (sortBy === 'Price: Low to High') return a.price - b.price;
        if (sortBy === 'Price: High to Low') return b.price - a.price;
        if (sortBy === 'Rating: High to Low') return b.rating - a.rating;
        return 0;
    });

    // Pagination Logic
    const indexOfLastService = currentPage * servicesPerPage;
    const indexOfFirstService = indexOfLastService - servicesPerPage;
    const currentServices = sortedServices.slice(indexOfFirstService, indexOfLastService);
    const totalPages = Math.ceil(sortedServices.length / servicesPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, searchTerm, activeSearch, minPrice, maxPrice, selectedRating]);

    const handleReset = () => {
        setSelectedCategory('all');
        setSelectedSkill('');
        setSelectedDeliveryTime('Anytime');
        setMinPrice(0);
        setMaxPrice(2000);
        setSelectedPricingType('all');
        setSelectedRating('all');
        setActiveSearch('');
        if (searchTerm) {
            navigate('/services');
        }
    };


    const SidebarSection = ({ title, children }) => (
        <div >
            <h4>
                {title}
                <div></div>
            </h4>
            {children}
        </div>
    );

    return (

        <div>

            {/* Services Grid */}
            <section >


                <div className="container">
                    <div className="services-layout">
                        {/* LEFT SIDEBAR */}
                        <aside className="sidebar-filter">
                            <SidebarSection title="Categories">
                                <ul >
                                    {categoriesList.map(cat => (
                                        <li key={cat} >
                                            <button
                                                onClick={() => {
                                                    const slug = cat === 'All' ? '' : cat.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
                                                    navigate(`/services/${slug}`);
                                                }}

                                            >
                                                <ArrowRight size={10} />
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </SidebarSection>

                            <SidebarSection title="Skills">
                                <select
                                    className="form-select"
                                    value={selectedSkill}
                                    onChange={(e) => setSelectedSkill(e.target.value)}
                                >
                                    <option value="">All Skills</option>
                                    <optgroup label="Video & Animation">
                                        <option value="Video Editing">Video Editing</option>
                                        <option value="Motion Graphics">Motion Graphics</option>
                                        <option value="2D Animation">2D Animation</option>
                                        <option value="3D Animation">3D Animation</option>
                                        <option value="Color Grading">Color Grading</option>
                                        <option value="Visual Effects (VFX)">Visual Effects (VFX)</option>
                                        <option value="Whiteboard Animation">Whiteboard Animation</option>
                                        <option value="Intro & Outro Videos">Intro & Outro Videos</option>
                                    </optgroup>
                                    <optgroup label="Graphics & Design">
                                        <option value="Logo Design">Logo Design</option>
                                        <option value="Brand Identity">Brand Identity</option>
                                        <option value="Social Media Design">Social Media Design</option>
                                        <option value="Illustration">Illustration</option>
                                        <option value="Infographic Design">Infographic Design</option>
                                        <option value="Packaging Design">Packaging Design</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Print Design">Print Design</option>
                                    </optgroup>
                                    <optgroup label="Web Design">
                                        <option value="HTML & CSS">HTML & CSS</option>
                                        <option value="React Development">React Development</option>
                                        <option value="WordPress">WordPress</option>
                                        <option value="Shopify">Shopify</option>
                                        <option value="Landing Page Design">Landing Page Design</option>
                                        <option value="Web App Development">Web App Development</option>
                                        <option value="E-commerce Development">E-commerce Development</option>
                                    </optgroup>
                                    <optgroup label="SEO & Marketing">
                                        <option value="SEO Optimization">SEO Optimization</option>
                                        <option value="Google Ads">Google Ads</option>
                                        <option value="Social Media Marketing">Social Media Marketing</option>
                                        <option value="Content Writing">Content Writing</option>
                                        <option value="Email Marketing">Email Marketing</option>
                                        <option value="Copywriting">Copywriting</option>
                                        <option value="Keyword Research">Keyword Research</option>
                                    </optgroup>
                                    <optgroup label="Admin Support">
                                        <option value="Virtual Assistance">Virtual Assistance</option>
                                        <option value="Data Entry">Data Entry</option>
                                        <option value="Customer Support">Customer Support</option>
                                        <option value="Transcription">Transcription</option>
                                        <option value="Project Management">Project Management</option>
                                        <option value="Research">Research</option>
                                    </optgroup>
                                    <optgroup label="Civil & Architectural">
                                        <option value="3D Rendering">3D Rendering</option>
                                        <option value="Floor Plan Design">Floor Plan Design</option>
                                        <option value="Interior Design">Interior Design</option>
                                        <option value="Architectural Visualization">Architectural Visualization</option>
                                        <option value="AutoCAD">AutoCAD</option>
                                        <option value="SketchUp">SketchUp</option>
                                    </optgroup>
                                </select>
                            </SidebarSection>


                            <SidebarSection title="Delivery Time">
                                <select
                                    className="form-select"

                                    value={selectedDeliveryTime}
                                    onChange={(e) => setSelectedDeliveryTime(e.target.value)}
                                >
                                    <option>Anytime</option>
                                    <option>Up to 24 hours</option>
                                    <option>Up to 3 days</option>
                                    <option>Up to 7 days</option>
                                </select>
                            </SidebarSection>

                            <SidebarSection title="Filter By Price">
                                <div >
                                    <div >
                                        <span>Price</span>
                                        <span >${minPrice} - ${maxPrice}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="2000"
                                        step="50"
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}

                                    />
                                    <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                        <input type="number" value={minPrice} onChange={(e) => setMinPrice(parseInt(e.target.value))} />
                                        <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
                                    </div>
                                </div>
                            </SidebarSection>

                            <SidebarSection title="Filter By Rating">
                                {['all', '5', '4', '3', '2', '1'].map(rating => (
                                    <div key={rating}>
                                        <input
                                            type="radio"
                                            name="rating"
                                            id={`rating-${rating}`}
                                            checked={selectedRating === rating}
                                            onChange={() => setSelectedRating(rating)}

                                        />
                                        <label htmlFor={`rating-${rating}`}>
                                            {rating === 'all' ? 'Show All' : `${rating} Star ${rating !== '5' ? '& Above' : ''}`}
                                            {rating !== 'all' && <Star />}
                                        </label>
                                    </div>
                                ))}
                            </SidebarSection>

                            <button
                                onClick={handleReset}
                                className="btn-touch"

                            >
                                Reset Filters
                            </button>
                        </aside>

                        {/* RIGHT MAIN CONTENT (SERVICES GRID) */}
                        <main>
                            {/* Optional: Search and Sort Bar above the grid */}
                            <div className="search-sort-bar">
                                <div className="search-input-group">
                                    <SearchIcon />
                                    <input
                                        type="text"
                                        placeholder="Search by keyword..."
                                        value={activeSearch}
                                        onChange={(e) => setActiveSearch(e.target.value)}

                                    />
                                </div>
                                <div className="sort-select-group">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}

                                    >
                                        <option>Sort By</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Rating: High to Low</option>
                                    </select>
                                </div>
                            </div>

                            {currentServices.length > 0 ? (
                                <>
                                    <div className="services-grid">
                                        {currentServices.map((gig) => (
                                            <motion.article
                                                key={gig.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                whileHover={{ y: -8 }}

                                            >
                                                {/* Service Image */}
                                                <div>
                                                    <img
                                                        src={gig.image}
                                                        alt={gig.title}

                                                    />
                                                </div>

                                                <div>
                                                    <div>
                                                        <img src={logo} alt="Brownsofts" style={{ height: '22px', opacity: 0.9 }} />
                                                        <div>
                                                            <Star />
                                                            <span >{gig.rating}</span>
                                                        </div>
                                                    </div>

                                                    <h3

                                                    >
                                                        {gig.title}
                                                    </h3>

                                                    <div>
                                                        <div>
                                                            <span>From </span>
                                                            <span>${gig.price}</span>
                                                        </div>
                                                        <button
                                                            className="btn-touch"

                                                        >
                                                            <ShoppingCart />
                                                            Available Soon
                                                        </button>
                                                    </div>
                                                </div>
                                            </motion.article>
                                        ))}
                                    </div>

                                    {/* Pagination UI */}
                                    {totalPages > 1 && (
                                        <div>
                                            <button
                                                onClick={() => paginate(currentPage - 1)}
                                                disabled={currentPage === 1}
                                                className="btn-touch"

                                            >
                                                <ArrowLeft /> Prev
                                            </button>

                                            {[...Array(totalPages)].map((_, i) => (
                                                <button
                                                    key={i + 1}
                                                    onClick={() => paginate(i + 1)}
                                                    className="btn-touch"

                                                >
                                                    {i + 1}
                                                </button>
                                            ))}

                                            <button
                                                onClick={() => paginate(currentPage + 1)}
                                                disabled={currentPage === totalPages}
                                                className="btn-touch"

                                            >
                                                Next <ArrowRight />
                                            </button>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <div>
                                    <div>🔍</div>
                                    <h3>
                                        No services found matching filters
                                    </h3>
                                    <p >
                                        Try adjusting your filters or clearing them to see all services.
                                    </p>
                                    <button
                                        onClick={handleReset}

                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </section>

        </div>

    );
};

export default Services;