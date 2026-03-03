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
    <div style={{ marginBottom: '32px', borderBottom: '1px solid #f0f0f0', paddingBottom: '24px' }}>
      <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#111', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {title}
        <div style={{ height: '2px', width: '30px', background: 'var(--primary-color)' }}></div>
      </h4>
      {children}
    </div>
  );

  return (
    <PageWrapper>
      {/* Hero Section */}

      {/* Services Grid */}
      <section
        style={{
          background: 'var(--white)',
          padding: 'clamp(3rem, 8vw, 6rem) 0',
          minHeight: 'auto'
        }}
      >
        <style>
          {`
                  .services-layout {
                      display: grid;
                      grid-template-columns: 300px 1fr;
                      gap: 2.5rem;
                  }
                  @media (max-width: 1023px) {
                      .services-layout {
                          grid-template-columns: 1fr;
                      }
                  }
                  .services-grid {
                      display: grid;
                      grid-template-columns: repeat(auto-fill, minmax(clamp(280px, 100%, 340px), 1fr));
                      gap: 1.875rem;
                      margin-bottom: 3.125rem;
                  }
                  .sidebar-filter {
                      background: var(--white);
                      padding: 2rem;
                      border-radius: var(--border-radius);
                      box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                      height: fit-content;
                      border: 1px solid var(--border-color);
                  }
                  .search-sort-bar {
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-bottom: 2rem;
                      gap: 1.25rem;
                      flex-wrap: wrap;
                  }
                  .search-input-group {
                      position: relative;
                      flex: 1;
                      min-width: 250px;
                  }
                  .sort-select-group {
                      position: relative;
                      width: 100%;
                      max-width: 200px;
                  }
                  @media (max-width: 575px) {
                      .sort-select-group {
                          max-width: 100%;
                      }
                      .services-grid {
                          grid-template-columns: 1fr;
                      }
                  }
              `}
        </style>
        <div className="container">
          <div className="services-layout">
            {/* LEFT SIDEBAR */}
            <aside className="sidebar-filter">
              <SidebarSection title="Categories">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {categoriesList.map(cat => (
                    <li key={cat} style={{ marginBottom: '12px' }}>
                      <button
                        onClick={() => {
                          const slug = cat === 'All' ? '' : cat.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-');
                          navigate(`/services/${slug}`);
                        }}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: (selectedCategory === cat || (selectedCategory === 'all' && cat === 'All')) ? 'var(--primary-color)' : '#666',
                          fontSize: '14px',
                          fontWeight: (selectedCategory === cat || (selectedCategory === 'all' && cat === 'All')) ? '700' : '500',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: 0,
                          transition: 'all 0.2s'
                        }}
                      >
                        <ArrowRight size={10} color="var(--primary-color)" strokeWidth={4} />
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </SidebarSection>

              <SidebarSection title="Skills">
                <select
                  className="form-select"
                  style={{ width: '100%', borderRadius: '8px', fontSize: '14px', borderColor: '#e5e5e5', padding: '10px', outline: 'none' }}
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
                  style={{ width: '100%', borderRadius: '8px', fontSize: '14px', borderColor: '#e5e5e5', padding: '10px', outline: 'none' }}
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
                <div style={{ padding: '0 5px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <span style={{ fontSize: '12px', color: '#888' }}>Price</span>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--primary-color)' }}>${minPrice} - ${maxPrice}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--primary-color)', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <input type="number" value={minPrice} onChange={(e) => setMinPrice(parseInt(e.target.value))} style={{ width: '50%', padding: '8px', borderRadius: '8px', border: '1px solid #eee', fontSize: '13px', outline: 'none' }} />
                    <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(parseInt(e.target.value))} style={{ width: '50%', padding: '8px', borderRadius: '8px', border: '1px solid #eee', fontSize: '13px', outline: 'none' }} />
                  </div>
                </div>
              </SidebarSection>

              <SidebarSection title="Filter By Rating">
                {['all', '5', '4', '3', '2', '1'].map(rating => (
                  <div key={rating} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <input
                      type="radio"
                      name="rating"
                      id={`rating-${rating}`}
                      checked={selectedRating === rating}
                      onChange={() => setSelectedRating(rating)}
                      style={{ cursor: 'pointer', accentColor: 'var(--primary-color)' }}
                    />
                    <label htmlFor={`rating-${rating}`} style={{ fontSize: '14px', color: '#555', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {rating === 'all' ? 'Show All' : `${rating} Star ${rating !== '5' ? '& Above' : ''}`}
                      {rating !== 'all' && <Star size={12} fill="var(--primary-color)" color="var(--primary-color)" />}
                    </label>
                  </div>
                ))}
              </SidebarSection>

              <button
                onClick={handleReset}
                className="btn-touch"
                style={{
                  width: '100%',
                  background: 'var(--primary-color)',
                  color: 'var(--white)',
                  border: 'none',
                  fontSize: 'var(--font-sm)',
                  boxShadow: '0 4px 15px rgba(255, 106, 0, 0.2)'
                }}
              >
                Reset Filters
              </button>
            </aside>

            {/* RIGHT MAIN CONTENT (SERVICES GRID) */}
            <main>
              {/* Optional: Search and Sort Bar above the grid */}
              <div className="search-sort-bar">
                <div className="search-input-group">
                  <SearchIcon size={18} color="#999" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="Search by keyword..."
                    value={activeSearch}
                    onChange={(e) => setActiveSearch(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1rem 0.875rem 2.8rem',
                      borderRadius: 'var(--border-radius)',
                      border: '1px solid var(--border-color)',
                      fontSize: 'var(--font-sm)',
                      outline: 'none',
                      transition: 'border-color 0.3s',
                      background: 'var(--white)',
                      minHeight: 'var(--button-height)'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary-color)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                  />
                </div>
                <div className="sort-select-group">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.875rem 2.5rem 0.875rem 1rem',
                      borderRadius: 'var(--border-radius)',
                      border: '1px solid var(--border-color)',
                      fontSize: 'var(--font-sm)',
                      color: 'var(--text-light)',
                      appearance: 'none',
                      backgroundColor: 'var(--white)',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23555'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1.2em',
                      outline: 'none',
                      cursor: 'pointer',
                      minHeight: 'var(--button-height)'
                    }}
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
                        style={{
                          background: 'var(--white)',
                          borderRadius: 'var(--border-radius)',
                          overflow: 'hidden',
                          boxShadow: '0 10px 40px rgba(11, 42, 74, 0.06)',
                          border: '1px solid rgba(11, 42, 74, 0.12)',
                          transition: 'box-shadow 0.3s ease',
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                      >
                        {/* Service Image */}
                        <div style={{
                          height: '220px',
                          overflow: 'hidden',
                          position: 'relative',
                          background: 'linear-gradient(135deg, #f5f8fa 0%, #0B2A4A 100%)'
                        }}>
                          <img
                            src={gig.image}
                            alt={gig.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.5s ease',
                              display: 'block'
                            }}
                          />
                        </div>

                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <img src={logo} alt="Brownsofts" style={{ height: '22px', opacity: 0.9 }} />
                            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px', background: '#f5f8fa', padding: '4px 8px', borderRadius: '6px' }}>
                              <Star size={12} fill="var(--primary-color)" color="var(--primary-color)" />
                              <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--text-dark)' }}>{gig.rating}</span>
                            </div>
                          </div>

                          <h3
                            style={{
                              fontSize: 'var(--font-lg)',
                              fontWeight: '800',
                              marginBottom: '1rem',
                              color: 'var(--text-dark)',
                              lineHeight: '1.4',
                              minHeight: '3rem',
                              transition: 'color 0.2s'
                            }}
                          >
                            {gig.title}
                          </h3>

                          <div style={{
                            paddingTop: '1.25rem',
                            borderTop: '1px solid var(--border-color)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '1rem',
                            marginTop: 'auto',
                            flexWrap: 'wrap'
                          }}>
                            <div>
                              <span style={{ fontSize: 'var(--font-xs)', color: 'var(--text-light)' }}>From </span>
                              <span style={{ fontWeight: '800', fontSize: 'var(--font-xl)', color: 'var(--primary-color)' }}>${gig.price}</span>
                            </div>
                            <button
                              className="btn-touch"
                              style={{
                                background: 'var(--secondary-color)',
                                color: 'var(--white)',
                                border: 'none',
                                fontSize: 'var(--font-sm)',
                                whiteSpace: 'nowrap',
                                display: 'flex',
                                gap: '0.5rem',
                                boxShadow: '0 4px 12px rgba(11, 42, 74, 0.3)',
                                flex: '1',
                                cursor: 'default'
                              }}
                            >
                              <ShoppingCart size={16} />
                              Available Soon
                            </button>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>

                  {/* Pagination UI */}
                  {totalPages > 1 && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="btn-touch"
                        style={{
                          borderRadius: 'var(--border-radius)',
                          border: '1px solid var(--border-color)',
                          background: 'var(--white)',
                          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                          opacity: currentPage === 1 ? 0.5 : 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          color: 'var(--text-dark)',
                          padding: '0 1rem'
                        }}
                      >
                        <ArrowLeft size={16} /> Prev
                      </button>

                      {[...Array(totalPages)].map((_, i) => (
                        <button
                          key={i + 1}
                          onClick={() => paginate(i + 1)}
                          className="btn-touch"
                          style={{
                            width: 'var(--button-height)',
                            borderRadius: 'var(--border-radius)',
                            border: 'none',
                            background: currentPage === i + 1 ? 'var(--primary-color)' : '#F9F9F9',
                            color: currentPage === i + 1 ? 'var(--white)' : 'var(--text-dark)',
                            fontWeight: '700',
                            padding: 0
                          }}
                        >
                          {i + 1}
                        </button>
                      ))}

                      <button
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="btn-touch"
                        style={{
                          borderRadius: 'var(--border-radius)',
                          border: '1px solid var(--border-color)',
                          background: 'var(--white)',
                          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                          opacity: currentPage === totalPages ? 0.5 : 1,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                          color: 'var(--text-dark)',
                          padding: '0 1rem'
                        }}
                      >
                        Next <ArrowRight size={16} />
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '100px 40px',
                  background: '#f5f8fa',
                  borderRadius: '20px',
                  color: '#888'
                }}>
                  <div style={{ fontSize: '50px', marginBottom: '20px' }}>🔍</div>
                  <h3 style={{ fontSize: '24px', marginBottom: '12px', color: '#555', fontWeight: '800' }}>
                    No services found matching filters
                  </h3>
                  <p style={{ fontSize: '16px', marginBottom: '30px' }}>
                    Try adjusting your filters or clearing them to see all services.
                  </p>
                  <button
                    onClick={handleReset}
                    style={{
                      padding: '14px 28px',
                      borderRadius: '10px',
                      background: 'var(--secondary-color)',
                      color: '#FFFFFF',
                      border: 'none',
                      fontWeight: '700',
                      fontSize: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = '#D4AF37';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'var(--secondary-color)';
                    }}
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </PageWrapper>
  );
};

export default Services;

