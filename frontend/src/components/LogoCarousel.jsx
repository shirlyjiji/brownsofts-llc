import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    "TechCore", "InfiniDigital", "NexusSoft", "CloudScale",
    "Visionary", "DataPulse", "Vertex", "Quantum", "ApexSolutions"
];

// Double the array for seamless infinite loop
const doubleBrands = [...brands, ...brands];

const LogoCarousel = () => {
    return (
        <section style={{
            padding: '40px 0',
            background: '#fff',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            overflow: 'hidden'
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <span style={{
                        fontSize: '12px',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        color: '#999',
                        textTransform: 'uppercase'
                    }}>
                        Trusted by Global Leaders
                    </span>
                </div>

                <div style={{ position: 'relative', width: '100%' }}>
                    {/* Gradient Overlays for smooth entry/exit */}
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: '100px',
                        background: 'linear-gradient(to right, #fff, transparent)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: '100px',
                        background: 'linear-gradient(to left, #fff, transparent)',
                        zIndex: 2,
                        pointerEvents: 'none'
                    }}></div>

                    {/* Scrolling Content */}
                    <motion.div
                        style={{
                            display: 'flex',
                            gap: '80px',
                            width: 'max-content'
                        }}
                        animate={{ x: [0, -1000] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {doubleBrands.map((brand, index) => (
                            <div
                                key={index}
                                style={{
                                    fontSize: '24px',
                                    fontWeight: '900',
                                    color: '#E0E0E0',
                                    whiteSpace: 'nowrap',
                                    WebkitTextStroke: '1px #DDD',
                                    userSelect: 'none',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = '#FF6A00';
                                    e.currentTarget.style.WebkitTextStroke = '1px #FF6A00';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#E0E0E0';
                                    e.currentTarget.style.WebkitTextStroke = '1px #DDD';
                                }}
                            >
                                {brand.toUpperCase()}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
