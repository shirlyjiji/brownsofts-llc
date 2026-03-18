import React from 'react';
import './Process.css';
import { FaSearch, FaPalette, FaCode, FaRocket } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Process = () => {
    const { t } = useTranslation();
    
    const steps = [
        {
            id: 1,
            title: t('process.step1_title'),
            desc: t('process.step1_desc'),
            icon: <FaSearch />,
            color: "#001d3d"
        },
        {
            id: 2,
            title: t('process.step2_title'),
            desc: t('process.step2_desc'),
            icon: <FaPalette />,
            color: "#ff5e14"
        },
        {
            id: 3,
            title: t('process.step3_title'),
            desc: t('process.step3_desc'),
            icon: <FaCode />,
            color: "#001d3d"
        },
        {
            id: 4,
            title: t('process.step4_title'),
            desc: t('process.step4_desc'),
            icon: <FaRocket />,
            color: "#ff5e14"
        }
    ];

    return (
        <section className="process-section">
            <div className="container">
                <div className="process-header text-center">
                    <span className="sub-title">{t('process.sub_title')}</span>
                    <h2 className="main-title">{t('process.main_title')}</h2>
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