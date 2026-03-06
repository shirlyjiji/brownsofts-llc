import React from 'react';
import './BrandCollaboration.css';
import B1 from '../assets/Brands/B1.png';
import B2 from '../assets/Brands/B2.png';
import B3 from '../assets/Brands/B3.png';
import B4 from '../assets/Brands/B4.png';
import B5 from '../assets/Brands/B5.png';
import B6 from '../assets/Brands/B6.png';

const BrandCollaboration = () => {
    const brands = [
        { id: 1, name: "BIGCATFIRSTTODOIT", logo: B1 },
        { id: 2, name: "XPERT DEVELOPMENT", logo: B2 },
        { id: 3, name: "DIAMOND PRO RODEO", logo: B3 },
        { id: 4, name: "Dewson Builders", logo: B4 },
        { id: 5, name: "D.M.V. CLEANING PROS", logo: B5 },
        { id: 6, name: "Brand 6", logo: B6 },
        { id: 7, name: "Brand 7", logo: B1 },
        { id: 8, name: "Brand 8", logo: B2 },
        { id: 9, name: "Brand 9", logo: B3 },
        { id: 10, name: "Brand 10", logo: B4 },
        { id: 11, name: "Brand 11", logo: B5 },
        { id: 12, name: "Brand 12", logo: B6 },
        { id: 13, name: "Brand 13", logo: B1 },
        { id: 14, name: "Brand 14", logo: B2 },
        { id: 15, name: "Brand 15", logo: B3 },
        { id: 16, name: "Brand 16", logo: B4 },
        { id: 17, name: "Brand 17", logo: B5 },
        { id: 18, name: "Brand 18", logo: B6 },
        { id: 19, name: "Brand 19", logo: B1 },
        { id: 20, name: "Brand 20", logo: B2 },
    ];

    return (
        <section className="brand-section">
            <div className="container">
                <div className="collaboration-header text-center">
                    <span className="sub-title">COLLABORATIONS</span>
                    <h2 className="main-title">Choose by Brand</h2>
                </div>
            </div>

            <div className="brand-slider">
                <div className="brand-track">
                    {/* First set of logos */}
                    {brands.map((brand) => (
                        <div className="brand-logo-item" key={`orig-${brand.id}`}>
                            <div className="logo-inner">
                                <img src={brand.logo} alt={brand.name} className="brand-img" />
                            </div>
                        </div>
                    ))}
                    {/* Duplicate set for seamless infinite loop */}
                    {brands.map((brand) => (
                        <div className="brand-logo-item" key={`dup-${brand.id}`}>
                            <div className="logo-inner">
                                <img src={brand.logo} alt={brand.name} className="brand-img" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandCollaboration;