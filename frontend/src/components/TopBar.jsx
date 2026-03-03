import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
    return (
        <div className="hide-mobile" style={{
            backgroundColor: '#0B2A4A',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 'var(--font-xs)',
            padding: 'var(--space-xs) 0',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 15px'
            }}>
                {/* Contact info */}
                <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
                        <FaPhoneAlt size={11} color="#FF6A00" />
                        <span>+1 (234) 567-890</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <FaEnvelope size={11} color="#FF6A00" />
                        <span>info@brownsofts.com</span>
                    </div>
                </div>

                {/* Social Links */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <span style={{ marginRight: '8px' }}>Follow Us:</span>
                    <a href="#" style={{ color: 'inherit', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FF6A00'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}><FaFacebookF size={12} /></a>
                    <a href="#" style={{ color: 'inherit', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FF6A00'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}><FaTwitter size={12} /></a>
                    <a href="#" style={{ color: 'inherit', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FF6A00'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}><FaLinkedinIn size={12} /></a>
                    <a href="#" style={{ color: 'inherit', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#FF6A00'} onMouseOut={(e) => e.currentTarget.style.color = 'inherit'}><FaInstagram size={12} /></a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
