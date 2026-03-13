import React from 'react';
import './OurTeam.css';

const OurTeam = () => {
    const teamMembers = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO & Founder",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "Creative Director",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 3,
            name: "Robert Johnson",
            role: "Lead Developer",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
        },
        {
            id: 4,
            name: "Emily Brown",
            role: "Marketing Manager",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
        }
    ];

    return (
        <section className="team-section">
            <div className="bg-elements">
                <div className="dot-grid"></div>
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
            
            <div className="container">
                <div className="team-header text-center">
                    <span className="sub-title">MEET OUR EXPERTS</span>
                    <h2 className="main-title">Professional Creative Team</h2>
                    <p className="team-desc">Our talented team of professionals is dedicated to delivering excellence and innovation in every project we undertake.</p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div className="team-card-wrapper" key={member.id}>
                            <div className="team-card">
                                <div className="member-image-box">
                                    <img src={member.image} alt={member.name} className="member-img" />
                                </div>
                                
                                <div className="member-info-box">
                                    <h3 className="member-name">{member.name}</h3>
                                    <p className="member-role">{member.role}</p>
                                    <div className="info-decor"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurTeam;