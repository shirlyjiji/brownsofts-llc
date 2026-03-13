import React from 'react';
import './Process.css';
import { FaSearch, FaPalette, FaCode, FaRocket } from 'react-icons/fa';

const Process = () => {
    const steps = [
        {
            id: 1,
            title: "Discovery",
            desc: "We research and analyze your business goals and target audience.",
            icon: <FaSearch />,
            color: "#001d3d"
        },
        {
            id: 2,
            title: "Strategy & Design",
            desc: "Crafting a strategic plan and creating visual concepts that align with your brand.",
            icon: <FaPalette />,
            color: "#ff5e14"
        },
        {
            id: 3,
            title: "Development",
            desc: "Our experts build your solution using modern technologies and clean code.",
            icon: <FaCode />,
            color: "#001d3d"
        },
        {
            id: 4,
            title: "Launch & Support",
            desc: "Final testing, deployment, and ongoing maintenance for sustained success.",
            icon: <FaRocket />,
            color: "#ff5e14"
        }
    ];

    return (
        <section className="process-section">
            <div className="container">
                <div className="process-header text-center">
                    <span className="sub-title">WORKING PROCESS</span>
                    <h2 className="main-title">How We Deliver Results</h2>
                </div>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <div className="process-step" key={step.id}>
                            <div className="step-icon-wrapper" style={{ '--step-color': step.color }}>
                                <span className="step-number">{`0${index + 1}`}</span>
                                <div className="step-icon">{step.icon}</div>
                            </div>
                            <div className="step-info">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;